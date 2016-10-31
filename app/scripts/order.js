(function(){
	'use strict';

	var edynStore = new EdynStore({
		request: $.ajax
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
			first_name: '#input-shipping-first-name',
			last_name: '#input-shipping-last-name',
			email: '#input-shipping-email',
			company: '#input-shipping-company',
			phone: '#input-shipping-telephone'
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
		if (!wantsBillingAddress()) {
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

	function wantsBillingAddress () {
		return ($('#input-billing:checked').length === 0);
	}

	function getTemplate (templateClass) {
		return $('.' + templateClass)
			.removeClass(templateClass)
			.remove();
	}

	function orderImageForDevice (device) {
		return 'images/edyn_web_order_' + device + '.png';
	}

	function upsellImageForDevice (device) {
		return 'images/edyn_web_upsell_' + device + '.png';
	}

	function hasNeccessaryDataToCalculateShipping () {
		var hasState = $('#input-shipping-state').val();
		var hasCountry = $('#input-shipping-country').val();
		var hasZip = $('#input-shipping-zip').val();
		return hasState && hasCountry && hasZip;
	}

	// this gets set in setupUi
	var lineItemTemplate;

	function renderLineItem (lineItem) {
		var product = lineItem.product;
		var device = product.device;
		var name = product.name;
		var inventory = product.inventory;
		var quantity = lineItem.quantity;
		var ships = product.ships;

		var lineItemNode = lineItemTemplate.clone();

		var lineItemClass = 'order-product-' + device;
		lineItemNode
			.addClass(lineItemClass)
			.attr('data-device', device);

		var src = orderImageForDevice(device);
		lineItemNode.find('.product-image').attr('src', src);

		lineItemNode.find('.product-name').html(name);

		lineItemNode.find('.order-product-ships').html(ships);

		if (inventory > 0) {
			lineItemNode.find('.input-count')
				.attr({'min': 1, 'max': inventory})
				.val(quantity);

			var selectCount = lineItemNode.find('.input-select-count');
			for (var i = 0; i <= inventory; i++) {
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

	function checkCoupon () {
		syncStoreToView();

		var errorNode = $('.input-coupon-wrapper .validetta-bubble');

		function clearErrorAndUpdatePrices () {
			$('.button-group-coupon').hide();
			errorNode.hide();
			updatePrices();
		}

		if (!edynStore.coupon) {
			clearErrorAndUpdatePrices();
			return;
		}

		var buttons = $('.button-group-coupon button');
		buttons.attr('disabled', 'disabled');
		showLoader();

		edynStore.validateCoupon(function(error, coupon) {
			buttons.removeAttr('disabled');
			if (error) {
				var msg = 'Invalid coupon.';
				if (error.message.match('is expired')) {
					msg = 'Coupon expired.';
				}
				errorNode.html(msg).show();
				hideLoader();
			} else {
				clearErrorAndUpdatePrices();
			}
		});
	}

	function checkout() {
		syncStoreToView();

		edynStore.checkout(function (error, data) {
			if (error) {
				var msg;
				if (error.message === 'Error showing confirmation.') {
					msg = 'Your order was placed successfully but there was an error displaying confirmation. Please use the chat button on this page to get in touch with us.';
				} else {
					var stripeErrors = [
						'Your card was declined.',
						'Your card\'s expiration month is invalid.',
						'Your card\'s security code is incorrect.',
						'Your card has expired.',
						'An error occurred while processing your card. Try again in a little bit.',
						'Your card number is incorrect.'
					];
					if (stripeErrors.indexOf(error.message) !== -1) {
						msg = error.message
					} else {
						msg = 'Error placing order. Please use the chat button on this page to get in touch with us.';
					}
					$('#placeOrder').val('Place Order');
					$('#placeOrder').removeAttr('disabled');
				}

				swal({
					title: 'An error has occurred.',
					text: msg,
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

	function updateSubmitState () {
		if (edynStore.cartIsEmpty()) {
			$('#placeOrder').attr('disabled', 'disabled');
		} else {
			$('#placeOrder').removeAttr('disabled');
		}
	}

	var $loader = $('.order-loader');

	function showLoader () {
		$loader.show();
	}

	function hideLoader () {
		$loader.hide();
	}

	function updatePrices() {
		showLoader();
		syncStoreToView();

		updateSubmitState();

		if (edynStore.cartIsEmpty()) {
			// clear prices
			['subtotal', 'shipping', 'tax', 'total'].forEach(function (attr) {
				$('.price-' + attr).text('');
			});
			return;
		}

		edynStore.serializeOrder(function (error, order) {
			if (error) {
				// TODO: how can we handle this situation better?
				swal({
					title: 'An error has occurred.',
					text: 'Error updating prices',
					type: 'error',
					confirmButtonText: 'Close',
					confirmButtonColor: '#f9c000',
				});
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

			if (hasNeccessaryDataToCalculateShipping()) {
				var totalText = priceText(order.total);
				$('.price-total').text(totalText);
			}

			hideLoader();
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
			var device = product.device;
			var name = product.name;
			var inventory = product.inventory;
			var price = priceText(product.price);
			var imgSrc = upsellImageForDevice(device);

			var productNode = productTemplate.clone();

			var productClass = 'product-' + device;
			if (inventory === 0) {
				productClass += ' product-soldout';
			}
			productNode.addClass(productClass);

			productNode.find('.product-name').html(name);
			productNode.find('.product-price').html(price);
			productNode.find('.product-image').attr('src', imgSrc);
			productNode.find('.product-add').attr('data-device', device);

			return productNode;
		}

		var productNodes = edynStore.products.map(renderProduct);
		$('.products')
			.empty()
			.append(productNodes);
	}

	function goToHomeDepot(device) {
		var url = edynStore.homeDepotUrl(device);
		window.location.replace(url);
	}

	function setupUi() {
		var isMobile = $('html').hasClass('ua-mobile');
		setupTooltips();

		if (edynStore.outOfStock()) {
			goToHomeDepot();
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

		if (isMobile) {
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

		//Shipping info checkbox event
		$('#input-billing').click(function(){
			if (wantsBillingAddress()) {
				$('.billing-info .custom-select').prev('span').show();
				$('.billing-info').show();
			} else {
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

		function getDevice ($node) {
			return $node.closest('.order-product').attr('data-device');
		}

		// when dropdown changes, update cart quantity
		$(document).on('change', '.input-select-count', function (e) {
			var $this = $(this);
			var device = getDevice($this);
			var quantity = $this.val();
			edynStore.setQuantity(device, quantity);
			syncViewToStore();
			updatePrices();
			e.preventDefault();
		});

		$(document).on('click', '.input-count-up, .input-count-plus', function (e) {
			var $this = $(this);
			var device = getDevice($this);
			edynStore.incrementQuantity(device);
			syncViewToStore();
			updatePrices();
			e.preventDefault();
		});

		$(document).on('click', '.input-count-down, .input-count-minus', function(e) {
			var $this = $(this);
			var device = getDevice($this);
			edynStore.decrementQuantity(device);
			syncViewToStore();
			updatePrices();
			e.preventDefault();
		});

		$(document).on('click', '.input-count-trash', function(e) {
			var $this = $(this);
			var device = getDevice($this);
			edynStore.remove(device);
			syncViewToStore();
			updatePrices();
			e.preventDefault();
		});
		//--- END count component

		$('.product-add').click(function (e) {
			// increment count for this product;
			var device = $(this).attr('data-device');
			edynStore.incrementQuantity(device);
			syncViewToStore();
			updatePrices();
			e.preventDefault();
		});

		// Disable default form behaviour
		$('#form').on('submit', function(e) {
			return false;
		});

		function doCheckout () {
			if (!edynStore.cartIsEmpty()) {
				$('#placeOrder').val('Hold On...');
				$('#placeOrder').attr('disabled', 'disabled');
				checkout();
			}
		}

		$('#input-shipping-country').on('change', function (event) {
			var country = $(this).val();
			var fn = (country === 'US') ? 'addClass' : 'removeClass';
			$('.international-note')[fn]('hidden');
		});

		// Form validation
		$('#form').validetta({
			realTime: false,
			validators: {
				callback: {
					phone: {
						callback: function (el, phone) {
							// var PhoneNumber = window.libphonenumber.PhoneNumberUtil.getInstance();
							// var number = PhoneNumber.parse(phone, 'US');
							// return PhoneNumber.isValidNumber(number);
							// NOTE: tried using PhoneNumber.isPossibleNumber but it throws an error
							//       referencing some internal function not being defined
							return true;
						},
						errorMessage: 'Invalid phone number'
					}
				}
			},
			onValid: function (event) {
				doCheckout();
			},
			onError: function (event) {
				if (!wantsBillingAddress()) {
					// ignore billing address validation errors if its not specified
					var invalidFields = this.getInvalidFields();

					var allInvalidFieldsAreBilling = invalidFields.every(function (fieldError) {
						return $(fieldError.field).is('.billing-field');
					});

					if (allInvalidFieldsAreBilling) {
						doCheckout();
					}
				}
			}
		});
	}

	// Update inventory on page load
	$(document).ready(function() {
		// yuuuuuck
		var isOrderPage = $('.order .order-products').length;
		if (!isOrderPage) {
			return;
		}

		edynStore.loadInventory(function (error) {
			var params = Edyn.Utils.queryParams();
			var device = params.device;

			if (error) {
				goToHomeDepot(device);
			} else {
				var devices = device ? [device] : ['valve', 'sensor'];
				devices.forEach(function (device) {
					edynStore.incrementQuantity(device);
				});
				updateSubmitState();
				setupUi();
				updatePrices();
			}
		});
	});
})();
