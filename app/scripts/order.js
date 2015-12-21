(function(){
	'use strict';

	if(jQuery("#input-card-year").length) {
		// Populate years starting from current one
		var min = new Date().getFullYear(),
	    max = min + 20,
	    select = document.getElementById('input-card-year');

		for (var i = min; i<=max; i++){
		    var opt = document.createElement('option');
		    opt.value = i;
		    opt.innerHTML = i;
		    select.appendChild(opt);
		}
	}

	function bindInputs() {
		$('.shipping-info .form-control').each(function(){
			var input = $(this);
    		var target = $('input[name='+input.data('bind-input')+']');

    		target.val(input.val());
	    });
	}

	$(".shipping-info .form-control").bind( "paste keyup", bindInputs);

	//Shipping info checkbox event
	jQuery("#input-billing").click( function(){
	    if(jQuery("#input-billing:checked").length) {
			$(".shipping-info .form-control").bind( "paste keyup", bindInputs);
			bindInputs();
			jQuery(".billing-info").hide();
	    } else {
			$(".shipping-info .form-control").unbind( "paste keyup", bindInputs);
			$('.billing-info .form-control').val('');
			jQuery(".billing-info").show();
	    }
	});

	function updatePrices() {
		var data = {
			'user_id': '5654f01bd5ec870300f24037',
			'buyer': {
				'first_name': jQuery('#input-first-name').val(),
				'last_name': jQuery('#input-last-name').val(),
				'email': jQuery('#input-email').val(),
				'company': jQuery('#input-company').val(),
				'phone': jQuery('#input-telephone').val(),

			},
			'shipping_address': {
				'line1': jQuery('#input-shipping-address-line-1').val(),
				'line2': jQuery('#input-shipping-address-line-2').val(),
				'city': jQuery('#input-shipping-city').val(),
				'state': jQuery('#input-shipping-state').val(),
				'zip': jQuery('#input-shipping-zip').val(),
				'country': jQuery('#input-shipping-country').val(),
				'phone': jQuery('#input-shipping-telephone').val(),
			},
			'payment_source': {
				'card': {
					'number': jQuery('#input-card-number').val(),
					'exp_month': jQuery('#input-card-month').val(),
					'exp_year': jQuery('#input-card-year').val(),
					'cvc': jQuery('#input-card-code').val(),
				}
			},
			'line_items': [{
				'product_id': '5654f1c5d5ec870300f24039',
				'quantity': jQuery('#input-select-count').val()
			}]
		}

		if(jQuery('#input-billing:checked').length) {
			data['billing_address'] = {
				'line1': jQuery('#input-shipping-address-line-1').val(),
				'line2': jQuery('#input-shipping-address-line-2').val(),
				'city': jQuery('#input-shipping-city').val(),
				'state': jQuery('#input-shipping-state').val(),
				'zip': jQuery('#input-shipping-zip').val(),
				'country': jQuery('#input-shipping-country').val(),
				'phone': jQuery('#input-shipping-telephone').val(),
			}
		} else {
			data['billing_address'] = {
				'line1': jQuery('#input-address-line-1').val(),
				'line2': jQuery('#input-address-line-2').val(),
				'city': jQuery('#input-city').val(),
				'state': jQuery('#input-state').val(),
				'zip': jQuery('#input-zip').val(),
				'country': jQuery('#input-country').val(),
				'phone': jQuery('#input-telephone').val(),
			}
		}

	    var c = new Celery({userId: '5654f01bd5ec870300f24037'});
		c.serializeOrder(data)
			.done(function(results) {
				jQuery('.price-subtotal').text('$' + (results.data.subtotal / 100));

				if(results.data.shipping)
					jQuery('.price-shipping').text('$' + (results.data.shipping / 100));
				else
					jQuery('.price-shipping').text('');

				if(results.data.taxes)
					jQuery('.price-tax').text('$' + (results.data.taxes / 100));
				else
					jQuery('.price-tax').text('');

				if(jQuery('#input-shipping-state').val()
					&& jQuery('#input-shipping-country').val()
					&& jQuery('#input-shipping-zip').val())
						jQuery('.price-total').text('$' + (results.data.total / 100));
			});
	}

	function clearPrices() {
		jQuery('.price-subtotal').text('');
		jQuery('.price-shipping').text('');
		jQuery('.price-tax').text('');
		jQuery('.price-total').text('');
	}

	// Get taxes & other product info
	jQuery('#input-select-count').on('change', function(e) {
		jQuery('#input-count').val(jQuery('#input-select-count').val());
		updatePrices();
	});

	// jQuery('#input-shipping-address-line-1').on('blur', function(e) {
	// 	if(jQuery('#input-shipping-address-line-1').val().length)
	// 		updatePrices();
	// });

	jQuery('#input-shipping-state').on('change', function(e) {
		if(jQuery('#input-shipping-city').val().length)
			updatePrices();
	});

	jQuery('#input-shipping-country').on('change', function(e) {
		if(jQuery('#input-shipping-zip').val().length)
			updatePrices();
	});

	jQuery('#input-shipping-zip').on('blur', function(e) {
		if(jQuery('#input-shipping-zip').val().length)
			updatePrices();
	});

	// Input count component
	if(jQuery('#input-count').length) {
		jQuery('.input-count-up, .input-count-plus').click(function(e) {
			var oldValue = parseFloat(jQuery('#input-count').val());
			var newValue = oldValue + 1;
			jQuery('#input-count').val(newValue);
			jQuery('#input-select-count').val(newValue);
			updatePrices();
			e.preventDefault();
			e.stopPropagation();
		});

		jQuery('.input-count-down, .input-count-minus').click(function(e) {
			var oldValue = parseFloat(jQuery('#input-count').val());
			if(oldValue > 0) {
				var newValue = oldValue - 1;
				jQuery('#input-count').val(newValue);
				jQuery('#input-select-count').val(newValue);
				updatePrices();
				e.preventDefault();
				e.stopPropagation();
			}
		});

		jQuery('.input-count-trash').click(function(e) {
			jQuery('.input-count input').val(0);
			jQuery('#input-select-count').val(0);
			clearPrices();
			e.preventDefault();
			e.stopPropagation();
		});
	}
	//--- END count component

	function placeOrder() {
		var data = {
			'user_id': '5654f01bd5ec870300f24037',
			'buyer': {
				'first_name': jQuery('#input-first-name').val(),
				'last_name': jQuery('#input-last-name').val(),
				'email': jQuery('#input-email').val(),
				'company': jQuery('#input-company').val(),
				'phone': jQuery('#input-telephone').val(),

			},
			'shipping_address': {
				'line1': jQuery('#input-shipping-address-line-1').val(),
				'line2': jQuery('#input-shipping-address-line-2').val(),
				'city': jQuery('#input-shipping-city').val(),
				'state': jQuery('#input-shipping-state').val(),
				'zip': jQuery('#input-shipping-zip').val(),
				'country': jQuery('#input-shipping-country').val(),
				'phone': jQuery('#input-shipping-telephone').val(),
			},
			'payment_source': {
				'card': {
					'number': jQuery('#input-card-number').val(),
					'exp_month': jQuery('#input-card-month').val(),
					'exp_year': jQuery('#input-card-year').val(),
					'cvc': jQuery('#input-card-code').val(),
				}
			},
			'line_items': [{
				'product_id': '5654f1c5d5ec870300f24039',
				'quantity': jQuery('#input-select-count').val()
			}]
		}

		if(jQuery('#input-billing:checked').length) {
			data['billing_address'] = {
				'line1': jQuery('#input-shipping-address-line-1').val(),
				'line2': jQuery('#input-shipping-address-line-2').val(),
				'city': jQuery('#input-shipping-city').val(),
				'state': jQuery('#input-shipping-state').val(),
				'zip': jQuery('#input-shipping-zip').val(),
				'country': jQuery('#input-shipping-country').val(),
				'phone': jQuery('#input-shipping-telephone').val(),
			}
		} else {
			data['billing_address'] = {
				'line1': jQuery('#input-address-line-1').val(),
				'line2': jQuery('#input-address-line-2').val(),
				'city': jQuery('#input-city').val(),
				'state': jQuery('#input-state').val(),
				'zip': jQuery('#input-zip').val(),
				'country': jQuery('#input-country').val(),
				'phone': jQuery('#input-telephone').val(),
			}
		}

		var c = new Celery({userId: '5654f01bd5ec870300f24037'});
		c.createOrder(data)
			.done(function(results) {
				$.ajax({
					type: 'POST',
					data: JSON.stringify(results.data),
			        contentType: 'application/json',
                    url: '/confirmation',
                    success: function(data) {
						$('.content-wrapper').html(data);
						$(window).scrollTop(0);
                    }
                });
			})
			.fail(function(results) {
				$('#placeOrder').val('Place Order');
				$('#placeOrder').removeAttr('disabled');

				swal({
					title: "An error has occurred.",
					text: results.responseJSON.meta.error.message,
					type: "error",
					confirmButtonText: "Close",
					confirmButtonColor: "#f9c000",
				});
			});
	}

	// Disable default form behaviour
	jQuery('#form').on('submit', function(e) {
		return false;
	});


	// Form validation
	jQuery("#form").validetta({
		realTime : true,
		onValid: function(event) {
			$('#placeOrder').val('Hold On...');
			$('#placeOrder').attr('disabled', 'disabled');
			placeOrder();
		},
		onError: function() {

		}
	});

})();
