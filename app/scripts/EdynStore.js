(function () {
  'use strict';

  function EdynStore (args) {
    this.request = args.request;
    this.products = null;

    // object with project ids keyed to quantity
    this.cart = {};

    this.buyer = null;
    this.shippingAddress = null;
    this.billingAddress = null;
    this.card = null;
    this.coupon = null;
  }

  EdynStore.prototype.setup = function (inventory) {
    this.celeryUserId = inventory.userId;
    this.products = inventory.products;
    this.celeryApiUrl = inventory.apiUrl;
  };

  EdynStore.prototype.loadInventory = function (callback) {
    this.request({
      type: 'GET',
      url: '/inventory',
      contentType: 'application/json',
      dataType: 'json'
    })
    .done(function (inventory) {
      this.setup(inventory);
      callback(null, null);
    }.bind(this))
    .fail(function () {
      var error = new Error('Error loading inventory');
      callback(error, null);
    });
  };

  EdynStore.prototype.homeDepotUrl = function (sku) {
    var urls = {
      sensor: 'http://www.homedepot.com/p/Edyn-Garden-Sensor-EDYN-001/205833447',
      valve: 'http://www.homedepot.com/p/Edyn-Water-Valve-EDYN-002/205833449',
      ALL: 'http://www.homedepot.com/b/Edyn/N-5yc1vZerz'
    };

    if (!(sku in urls)) {
      sku = 'ALL';
    }

    return urls[sku];
  };

  EdynStore.prototype.productForField = function (field, val) {
    return this.products.filter(function (product) {
      return (product[field] === val);
    })[0];
  };

  EdynStore.prototype.productForId = function (id) {
    return this.productForField('id', id);
  };

  EdynStore.prototype.productForSku = function (sku) {
    return this.productForField('sku', sku);
  };

  EdynStore.prototype.remove = function (sku) {
    var id = this.productForSku(sku).id;
    delete this.cart[id];
  };

  EdynStore.prototype.incrementQuantity = function (sku) {
    this.deltaCart(sku, 1);
  };

  EdynStore.prototype.decrementQuantity = function (sku) {
    this.deltaCart(sku, -1);
  };

  EdynStore.prototype.deltaCart = function (sku, dir) {
    var product = this.productForSku(sku);
    var id = product.id;

    if (!(id in this.cart)) {
      this.cart[id] = 0;
    }

    var quantity = this.cart[id] += dir;
    this.setQuantity(sku, quantity);
  };

  EdynStore.prototype.setQuantity = function (sku, quantity) {
    var product = this.productForSku(sku);
    var id = product.id;
    this.cart[id] = quantity;

    // make sure they don't add more than we have
    var available = product.inventory;
    if (this.cart[id] > available) {
      this.cart[id] = available;
    }

    if (this.cart[id] <= 0) {
      // no more in cart, delete entry
      delete this.cart[id];
    }
  };

  EdynStore.prototype.outOfStock = function () {
    return this.products.every(function (product) {
      return (product.inventory === 0);
    });
  };

  EdynStore.prototype.cartIsEmpty = function () {
    return (Object.keys(this.cart).length === 0);
  };

  EdynStore.prototype.lineItems = function (args) {
    var includeProduct = args && args.includeProduct;

    var lineItems = [];

    var cartProductIds = Object.keys(this.cart);
    cartProductIds.forEach(function (productId) {
      var quantity = this.cart[productId];

      var lineItem = {
        product_id: productId,
        quantity: quantity
      };

      if (includeProduct) {
        var product = this.productForId(productId);
        lineItem.product = product;
      }

      lineItems.push(lineItem);
    }.bind(this));

    return lineItems;
  };

  EdynStore.prototype.buildOrder = function () {
    var order = {
			user_id: this.celeryUserId,
			buyer: this.buyer,
			shipping_address: this.shippingAddress,
      billing_address: this.billingAddress || this.shippingAddress,
			payment_source: {
				card: this.card
			},
			line_items: this.lineItems(),
			discount_codes: [this.coupon]
		};

    return order;
  };

  EdynStore.prototype.validateCoupon = function (callback) {
    var lineItems = this.lineItems().filter(function (lineItem) {
      return {
        product_id: lineItem.product_id
      };
    });

    this.celeryRequest({
      path: '/coupons/validate',
      data: {
        user_id: this.celeryUserId,
        code: this.coupon,
        line_items: lineItems
      }
    }, function (error, result) {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result.data);
      }
    });
  };

  EdynStore.prototype.serializeOrder = function (callback) {
    var order = this.buildOrder();

    this.celeryRequest({
      path: '/orders/serialize',
      data: order
    }, function (error, result) {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result.data);
      }
    });
  };

  EdynStore.prototype.checkout = function (callback) {
    var order = this.buildOrder();

    this.celeryRequest({
      path: '/orders/checkout',
      data: order
    }, function (error, results) {
      if (error) {
        return callback(error, null);
      }

      this.request({
        type: 'POST',
        data: JSON.stringify(results.data),
        contentType: 'application/json',
        url: '/confirmation'
      })
      .done(function (completedOrder) {
        callback(null, completedOrder);
      })
      .fail(function (jqXHR) {
        var error = new Error('Error showing confirmation.');
        return callback(error, null);
      });
    }.bind(this));
  };

  EdynStore.prototype.celeryRequest = function (options, callback) {
    var path = options.path;
    var data = options.data;

    var url = this.celeryApiUrl + path;

    this.request({
        type: 'POST',
        url: url,
        data: data ? JSON.stringify(data) : null,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
    })
    .done(function (result) {
      callback(null, result);
    })
    .fail(function (jqXHR) {
      var msg = 'Celery error';

      if (jqXHR) {
        if (jqXHR.responseText) {
          msg = jqXHR.responseText;
        }

        if (jqXHR.responseJSON) {
          msg = jqXHR.responseJSON.meta.error.message;
        }
      }

      var error = new Error(msg);
      callback(error, null);
    });
  };


  window.EdynStore = EdynStore;
})();
