(function(){
	'use strict';

	var edynStore = new EdynStore({
		request: $.ajax,
		celeryApiUrl: 'https://api-sandbox.trycelery.com/v2'
		// celeryApiUrl: 'https://api.trycelery.com/v2'
	});

	function getInputVals (map) {
		var result = {};
		Object.keys(map).forEach(function (name) {
			var sel = map[name];
			result[name] = $(sel).val();
		});
		return result;
	}

	function getBuyer () {
		return getInputVals({
			first_name: '#input-first-name',
			last_name: '#input-last-name',
			email: '#input-email',
			company: '#input-company',
			phone: '#input-telephone'
		});
	}

	function getShippingAddress () {
		return getInputVals({
			first_name: '#input-shipping-first-name',
			last_name: '#input-shipping-last-name',
			company: '#input-shipping-company',
			line1: '#input-shipping-address-line-1',
			line2: '#input-shipping-address-line-2',
			city: '#input-shipping-city',
			state: '#input-shipping-state',
			zip: '#input-shipping-zip',
			country: '#input-shipping-country',
			phone: '#input-shipping-telephone',
		});
	}

	function getBillingAddress () {
		if (!hasBillingAddress()) {
			return null;
		}

		return getInputVals({
			first_name: '#input-billing-first-name',
			last_name: '#input-billing-last-name',
			company: '#input-billing-company',
			line1: '#input-billing-address-line-1',
			line2: '#input-billing-address-line-2',
			city: '#input-billing-city',
			state: '#input-billing-state',
			zip: '#input-billing-zip',
			country: '#input-billing-country',
			phone: '#input-billing-telephone'
		});
	}

	function getCreditCard () {
		return getInputVals({
			number: '#input-card-number',
			exp_month: '#input-card-month',
			exp_year: '#input-card-year',
			cvc: '#input-card-code'
		});
	}

	function getCoupon () {
		var val = $('#input-coupon').val();
		return val.match(/\s+/) ? null : val;
	}

	function hasBillingAddress () {
		return ($('#input-billing:checked').length === 0);
	}

	function getTemplate (templateClass) {
		return $('.' + templateClass)
			.removeClass(templateClass)
			.remove();
	}

	function imageForSku (sku) {
		return 'images/edyn_' + sku + '_thumbnail_2x.png';
	}

	// this gets set in setupUi
	var lineItemTemplate;

	function renderLineItem (lineItem) {
		var product = lineItem.product;
		var sku = product.sku;
		var name = product.name;
		var inventory = product.inventory;
		var quantity = lineItem.quantity;

		var lineItemNode = lineItemTemplate.clone();

		var lineItemClass = 'order-product-' + sku;
		lineItemNode
			.addClass(lineItemClass)
			.attr('data-sku', sku);

		var src = imageForSku(sku);
		lineItemNode.find('.product-image').attr('src', src);

		lineItemNode.find('.product-name').html(name);

		if (inventory > 0) {
			lineItemNode.find('.input-count')
				.attr({'min': 1, 'max': inventory})
				.val(quantity);

			var selectCount = lineItemNode.find('.input-select-count');
			for (var i = 1; i <= inventory; i++) {
				selectCount.append('<option value="'+ i +'">'+ i +'</option>');
			}
			selectCount.val(quantity);
		} else {
			lineItemNode.find('.input-number-count').html('<span class="error">Sold out</span>');
		}

		return lineItemNode;
	}


	function syncStoreToView () {
		// Just sync the store to order form, not the cart view
		edynStore.buyer = getBuyer();
		edynStore.coupon = getCoupon();
		edynStore.shippingAddress = getShippingAddress();
		edynStore.billingAddress = getBillingAddress();
		edynStore.card = getCreditCard();
	}

	function syncViewToStore () {
		// Just sync the cart view, not the order form
		var lineItemNodes = edynStore.lineItems({
			includeProduct: true
		}).map(renderLineItem);

		$('.order-products')
			.empty()
			.append(lineItemNodes);

		var $coupon = $('.coupon');
		if (edynStore.cartIsEmpty()) {
			$coupon.hide();
		} else {
			$coupon.show();
		}
	}

	function checkCoupon() {
		syncStoreToView();

		if (!edynStore.coupon) {
			updatePrices();
			return;
		}

		edynStore.validateCoupon(function(error, coupon) {
			var errorNode = $('.input-coupon-wrapper .validetta-bubble');
			if (error) {
				var msg = 'Invalid coupon.';
				if (error.message.match('is expired')) {
					msg = 'Coupon expired.';
				}
				errorNode.html(msg).show();
			} else {
				$('.button-group-coupon').hide();
				errorNode.hide();
				updatePrices();
			}
		});
	}

	function checkout() {
		syncStoreToView();

		edynStore.checkout(function (error, data) {
			if (error) {
				$('#placeOrder').val('Place Order');
				$('#placeOrder').removeAttr('disabled');

				swal({
					title: 'An error has occurred.',
					text: error.responseJSON.meta.error.message,
					type: 'error',
					confirmButtonText: 'Close',
					confirmButtonColor: '#f9c000',
				});
			} else {

				$('.content-wrapper').html(data);

				if(cssua.ua.android) {
					$('.button-app').attr('href', $('.button-googleplay-outline').attr('href'));
				}

				if(cssua.ua.ios) {
					$('.button-app').attr('href', $('.button-appstore-outline').attr('href'));
				}

				$(window).scrollTop(0);
			}
		});
	}

	function priceText (price) {
		return '$' + (price / 100).toFixed(2);
	}

	function updatePrices() {
		syncStoreToView();

		if (edynStore.cartIsEmpty()) {
			// clear prices
			['subtotal', 'shipping', 'tax', 'total'].forEach(function (attr) {
				$('.price-' + attr).text('');
			});
			return;
		}

		edynStore.serializeOrder(function (error, order) {
			if (error) {
				// TODO: properly handle this
				console.log(error);
				return;
			}

			var subTotalText = priceText(order.linetotal);
			$('.price-subtotal').text(subTotalText);

			if (order.discount) {
				var discountText = '- ' + priceText(order.discount);
				$('.price-discount').text(discountText);
				$('.line-discount').show();
			} else {
				$('.price-discount').text('');
				$('.line-discount').hide();
			}

			var shippingText = order.shipping ? priceText(order.shipping) : '';
			$('.price-shipping').text(shippingText);

			var taxText = order.taxes ? priceText(order.taxes) : '';
			$('.price-tax').text(taxText);

			var hasState = $('#input-shipping-state').val();
			var hasCountry = $('#input-shipping-country').val();
			var hasZip = $('#input-shipping-zip').val();

			if (hasState && hasCountry && hasZip) {
				var totalText = priceText(order.total);
				$('.price-total').text(totalText);
			}
		});
	}

	function bindInputs() {
		$('.shipping-info .form-control').each(function(){
			var input = $(this);
			var target = $('input[name='+input.data('bind-input')+']');
			target.val(input.val());
		});
	}

	function setupTooltips() {
		var targets = $('[rel~=tooltip]');
		targets.bind('mouseenter', function() {
			var target = $(this);
			var tip = target.attr('title');
			var tooltip = $('<div id="tooltip"></div>');

			if(!tip || tip == '') {
				return false;
			}

			target.removeAttr('title');
			tooltip
				.css('opacity', 0)
				.html(tip)
				.appendTo('body');

			function init_tooltip () {
				if($(window).width() < tooltip.outerWidth() * 1.5) {
					tooltip.css('max-width', $(window).width() / 2);
				} else {
					tooltip.css('max-width', 340);
				}

				var pos_left = target.offset().left + (target.outerWidth() / 2) - (tooltip.outerWidth() / 2);
				var pos_top  = target.offset().top - tooltip.outerHeight() - 20;

				if (pos_left < 0) {
					pos_left = target.offset().left + target.outerWidth() / 2 - 20;
					tooltip.addClass('left');
				} else {
					tooltip.removeClass('left');
				}

				if (pos_left + tooltip.outerWidth() > $(window).width()) {
					pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
					tooltip.addClass('right');
				} else {
					tooltip.removeClass('right');
				}

				if (pos_top < 0) {
					var pos_top  = target.offset().top + target.outerHeight();
					tooltip.addClass('top');
				} else {
					tooltip.removeClass('top');
				}

				tooltip
					.css({ left: pos_left, top: pos_top })
					.animate({ top: '+=10', opacity: 1 }, 50);
			}

			function remove_tooltip () {
				tooltip.animate({ top: '-=10', opacity: 0 }, 50, function() {
					$(this).remove();
				});

				target.attr('title', tip);
			};

			init_tooltip();
			$(window).resize(init_tooltip);
			target.bind('mouseleave', remove_tooltip);
			tooltip.bind('click', remove_tooltip);
		});
	}

	function renderProducts () {
		var productTemplate = getTemplate('product-template');

		function renderProduct (product) {
			var sku = product.sku;
			var name = product.name;
			var price = priceText(product.price);
			var imgSrc = imageForSku(sku);

			var productNode = productTemplate.clone();

			var productClass = 'product-' + sku;
			productNode.addClass(productClass);

			productNode.find('.product-name').html(name);
			productNode.find('.product-price').html(price);
			productNode.find('.product-add').attr('data-sku', sku);
			productNode.find('.product-image').attr('src', imgSrc);

			return productNode;
		}

		var productNodes = edynStore.inventory.map(renderProduct);
		$('.products')
			.empty()
			.append(productNodes);
	}

	function setupUi() {
		setupTooltips();

		if (edynStore.outOfStock()) {
			// TODO: better messaging
			$('#placeOrder').attr('disabled', 'disabled');
		} else {
			renderProducts();
		}

		// NOTE: we need to do this before syncViewToStore since that
		// empties .order-products which contains this template
		lineItemTemplate = getTemplate('order-product-template');

		syncViewToStore();

		// Custom select dropdowns
		$(document).on('change', '.custom-select', function() {
			$(this).prev('span').hide();
		});

		if($('html').hasClass('ua-mobile')) {
			if($('#input-coupon').length) {
				$($('#input-coupon').attr('placeholder', 'Enter Code'));
			}

			$(document).on('click', '.trigger-cvv', function() {
				$('.card-cvv').show();
				$('.overlay').show();
			});

			$(document).on('click', '.overlay', function() {
				$('.card-cvv').hide();
				$('.overlay').hide();
			});

			$('.input-select span').each(function() {
				if($(this).data('mobile-label')) {
					$(this).text($(this).data('mobile-label'));
					$(this).next('.form-control').attr('placeholder', $(this).data('mobile-label')).val('').focus().blur();
				}
			});

		} else {
			$('.trigger-cvv').hover(
				function() {
					$('.card-cvv').show();
				}, function() {
					$('.card-cvv').hide();
				}
			);
		}

		if($('#input-card-year').length) {
			// Populate years starting from current one
			var min = new Date().getFullYear();
			var max = min + 20;
			var select = document.getElementById('input-card-year');

			for (var i = min; i<=max; i++){
				var opt = document.createElement('option');
				opt.value = i;
				opt.innerHTML = i;
				// added this to avoid console error
				if (select) {
					select.appendChild(opt);
				}
			}
		}

		$('#input-coupon').bind('focus', function() {
			$('.button-group-coupon').show();
		});

		$('#input-coupon').bind('blur', function() {
			if($('#input-coupon').val() === '') {
				$('.button-group-coupon').hide();
			}
		});

		$('.button-group-coupon .button-apply').bind('click', function(e) {
			checkCoupon();
			e.preventDefault();
			e.stopPropagation();
		});

		$('.button-group-coupon .button-cancel').bind('click', function(e) {
			$('#input-coupon').val('');
			$('.button-group-coupon').hide();
			checkCoupon();
			e.preventDefault();
			e.stopPropagation();
		});

		$('.shipping-info .form-control').bind('paste keyup', bindInputs);

		//Shipping info checkbox event
		$('#input-billing').click(function(){
			if (hasBillingAddress()) {
				$('.shipping-info .form-control').unbind('paste keyup', bindInputs);
				$('.billing-info .form-control').val('');
				$('.billing-info .custom-select').prev('span').show();
				$('.billing-info').show();
			} else {
				$('.shipping-info .form-control').bind('paste keyup', bindInputs);
				bindInputs();
				$('.billing-info').hide();
			}
		});

		// $('#input-shipping-address-line-1').on('blur', function(e) {
		// 	if($('#input-shipping-address-line-1').val().length)
		// 		updatePrices();
		// });

		$('#input-shipping-state').on('change', function(e) {
			if($('#input-shipping-city').val().length) {
				updatePrices();
			}
		});

		$('#input-shipping-country').on('change', function(e) {
			if($('#input-shipping-zip').val().length) {
				updatePrices();
			}
		});

		$('#input-shipping-zip').on('blur', function(e) {
			if($('#input-shipping-zip').val().length) {
				updatePrices();
			}
		});

		// There is one of these for each product the user has added
		// var inputCount = $('.input-count');

		function getSku ($node) {
			return $node.closest('.order-product').attr('data-sku');
		}

		// when dropdown changes, update cart quantity
		$(document).on('change', '.input-select-count', function (e) {
			var $this = $(this);
			var sku = getSku($this);
			var quantity = $this.val();
			edynStore.setQuantity(sku, quantity);
			syncViewToStore();
			updatePrices();
			e.preventDefault();
		});

		$(document).on('click', '.input-count-up, .input-count-plus', function (e) {
			var $this = $(this);
			var sku = getSku($this);
			edynStore.incrementQuantity(sku);
			syncViewToStore();
			updatePrices();
			e.preventDefault();
		});

		$(document).on('click', '.input-count-down, .input-count-minus', function(e) {
			var $this = $(this);
			var sku = getSku($this);
			edynStore.decrementQuantity(sku);
			syncViewToStore();
			updatePrices();
			e.preventDefault();
		});

		$(document).on('click', '.input-count-trash', function(e) {
			var $this = $(this);
			var sku = getSku($this);
			edynStore.remove(sku);
			syncViewToStore();
			updatePrices();
			e.preventDefault();
		});
		//--- END count component

		$('.product-add').click(function (e) {
			// increment count for this product;
			var sku = $(this).attr('data-sku');
			edynStore.incrementQuantity(sku);
			syncViewToStore();
			updatePrices();
			e.preventDefault();
		});

		// Disable default form behaviour
		$('#form').on('submit', function(e) {
			return false;
		});


		// Form validation
		$('#form').validetta({
			realTime : true,
			onValid: function(event) {
				$('#placeOrder').val('Hold On...');
				$('#placeOrder').attr('disabled', 'disabled');
				placeOrder();
			},
			onError: function() {
			}
		});
	}

	// Update inventory on page load
	$(document).ready(function() {
		edynStore.loadInventory(function (error) {
			if (error) {
				// Error loading inventory. Redirect to Home Depot
				window.location.replace(EdynStore.HOME_DEPOT_URL);
			} else {
				// Got inventory, get view wired up
				setupUi();
			}
		});
	});
})();
