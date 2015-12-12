(function(){
	'use strict';

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
				jQuery('#price-subtotal').text('$' + (results.data.subtotal / 100));
				jQuery('#price-shipping').text('$' + (results.data.shipping / 100));
				jQuery('#price-tax').text('$' + (results.data.taxes / 100));

				if(jQuery('#input-shipping-address-line-1').val().length
					&& jQuery('#input-shipping-city').val().length
					&& jQuery('#input-shipping-zip').val().length)
						jQuery('#price-total').text('$' + (results.data.total / 100));
			});
	}

	// Get taxes & other product info
	jQuery('#input-select-count').on('change', function(e) {
		updatePrices();
	});

	jQuery('#input-shipping-address-line-1').on('blur', function(e) {
		if(jQuery('#input-shipping-address-line-1').val().length)
			updatePrices();
	});

	jQuery('#input-shipping-city').on('blur', function(e) {
		if(jQuery('#input-shipping-city').val().length)
			updatePrices();
	});

	jQuery('#input-shipping-zip').on('blur', function(e) {
		if(jQuery('#input-shipping-zip').val().length)
			updatePrices();
	});

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

	// Form validation
	jQuery("#form").validetta({
		realTime : true,
		onValid: function(event) {
			$(this).val('Hold On...');
			$(this).attr('disabled', 'disabled');
			placeOrder();
		},
		onError: function() {
			console.log('not valid');
		}
	});

})();
