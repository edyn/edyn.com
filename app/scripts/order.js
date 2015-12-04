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

	// Shipping info checkbox event
	jQuery("#input-billing").click( function(){
	    if(jQuery(this).is(':checked')) {
		   jQuery(".shipping-info").hide();
	    } else {
		   jQuery(".shipping-info").show();
	    }
	});

	// Get taxes & other product info
	jQuery('#input-select-count').on('change', function(e) {
		var data = {
			'user_id': '5654f01bd5ec870300f24037',
			'line_items': [{'product_id':'5654f1c5d5ec870300f24039', 'quantity':jQuery('#input-select-count').val()}]
		}

	    var c = new Celery({userId: '5654f01bd5ec870300f24037'});
		c.serializeOrder(data)
			.done(function(results) {
				jQuery('#price-subtotal').text(results.data.subtotal);
				jQuery('#price-shipping').text(results.data.shipping);
				jQuery('#price-tax').text(results.data.taxes);
				jQuery('#price-total').text(results.data.total);
			});
	});

	// Create order
	function validateData() {
		if(!jQuery('#input-first-name').val().length
			|| !jQuery('#input-last-name').val().length
			|| !jQuery('#input-address-line-1').val().length
			|| !jQuery('#input-city').val().length)
			return false;

		if(!jQuery('#input-email').is('email'))
			return false;

		// if(!jQuery('#input-card-number').is('cc:'))
		// 	return false;

		return true;
	}

	jQuery('#placeOrder').on('click', function(e) {

		// if(!validateData())
		// 	return false;

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
				'line1': jQuery('#input-address-line-1').val(),
				'line2': jQuery('#input-address-line-2').val(),
				'city': jQuery('#input-city').val(),
				'state': jQuery('#input-state').val(),
				'zip': jQuery('#input-zip').val(),
				'country': jQuery('#input-country').val(),
				'phone': jQuery('#input-telephone').val(),
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

		var c = new Celery({userId: '5654f01bd5ec870300f24037'});
		c.createOrder(data)
			.done(function(results) {
				jQuery.post({
					url: '/order',
					data: results.data
				});
				// alert('yo');
			})
			.fail(function(results) {
				alert('fail');
			});

		return false;
	});

	// Form validation
	jQuery("#form").validetta({
		realTime : true,
	});

})();
