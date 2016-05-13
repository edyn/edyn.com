(function () {
  'use strict';

  function EdynStore (args) {
    this.request = args.request;
    this.celeryApiUrl = args.celeryApiUrl;

    this.inventory = null;

    // object with project ids keyed to quantity
    this.cart = {};

    this.buyer = null;
    this.shippingAddress = null;
    this.billingAddress = null;
    this.card = null;
    this.coupon = null;
  }

  EdynStore.HOME_DEPOT_URL = 'http://www.homedepot.com/b/Edyn/N-5yc1vZerz';

  EdynStore.prototype.setup = function (inventory) {
    if (!inventory) {
      // TODO: what to do here?
    }

    this.celeryUserId = inventory[0].userId;
    this.inventory = inventory;
  };

  EdynStore.prototype.loadInventory = function (callback) {
    var FAKE_INVENTORY = [
      {
        id: '5654f1f9d5ec870300f2403c',
        userId: '5654f01bd5ec870300f24037',
        name: 'Edyn Water Valve',
        price: 5999,
        inventory: 50,
        sku: 'valve'
      },
      {
        id: '5654f1c5d5ec870300f24039',
        userId: '5654f01bd5ec870300f24037',
        name: 'Edyn Garden Sensor',
        price: 9999,
        inventory: 7,
        sku: 'sensor'
      }
    ];

    this.setup(FAKE_INVENTORY);
    callback(null);
    return;

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

  EdynStore.prototype.productForField = function (field, val) {
    return this.inventory.filter(function (product) {
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

  EdynStore.prototype.setQuantity = function (sku, quantity) {
    var product = this.productForSku(sku);
    var id = product.id;
    this.cart[id] = quantity;
  };

  EdynStore.prototype.deltaCart = function (sku, dir) {
    var product = this.productForSku(sku);
    var id = product.id;

    if (!(id in this.cart)) {
      this.cart[id] = 0;
    }

    this.cart[id] += dir;

    if (this.cart[id] <= 0) {
      // no more in cart, delete entry
      delete this.cart[id];
    } else {
      // make sure they don't add more than we have
      var available = product.inventory;
      if (this.cart[id] > available) {
        this.cart[id] = available;
      }
    }
  };

  EdynStore.prototype.outOfStock = function () {
    return this.inventory.every(function (product) {
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
			payment_source: {
				card: this.card
			},
			line_items: this.lineItems(),
			discount_codes: [this.coupon]
		};

    if (this.billingAddress) {
      // if user specified billing address, then add that.
      order.billing_address = this.billingAddress;
    }

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

      // TODO: handle error case for /confirmation
      this.request({
        type: 'POST',
        data: JSON.stringify(results.data),
        contentType: 'application/json',
        url: '/confirmation',
        success: function(data) {
          callback(null, data);
        }
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
