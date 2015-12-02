(function(){
	'use strict';

    jQuery('#placeOrder').on('click', function(e) {
        var data = {
            'user_id' : '5654f01bd5ec870300f24037',
        	'buyer.email' : jQuery('input[name=input-email]').val(),
            'buyer.first_name' : jQuery('input[name=input-first-name]').val(),
            'buyer.last_name' : jQuery('input[name=input-last-name]').val(),
            'buyer.company' : jQuery('input[name=input-company]').val(),
            'buyer.phone' : jQuery('input[name=input-telephone]').val(),
            'shipping_address.line1' : jQuery('input[name=input-address-line-1]').val(),
            'shipping_address.line2' : jQuery('input[name=input-address-line-2]').val(),
            'shipping_address.city' : jQuery('input[name=input-city]').val(),
            'shipping_address.state' : jQuery('input[name=input-state]').val(),
            'shipping_address.zip' : jQuery('input[name=input-zip]').val(),
            'shipping_address.country' : jQuery('input[name=input-country]').val(),
            'shipping_address.phone' : jQuery('input[name=input-telephone]').val(),
            'line_items[].product_id': '5654f1c5d5ec870300f24039',
            'line_items[].quantity': jQuery('input[name=input-count]').val(),
            'payment_source.card.number' : jQuery('input[name=input-card-number]').val(),
            'payment_source.card.exp_month' : jQuery('input[name=input-card-month]').val(),
    		'payment_source.card.exp_year': jQuery('input[name=input-card-year]').val(),
    		'payment_source.card.cvc': jQuery('input[name=input-card-code]').val()
        };

        var c = new Celery();
        c.serializeOrder(data, function(result) {
            console.log(result);
        });

		c.createOrder(data, function(result) {
			window.location = "confirmation.html";
		})

        e.preventDefault();
        e.stopPropagation();
    });


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
	   if( jQuery(this).is(':checked') ) jQuery(".shipping-info").hide();
	   else jQuery(".shipping-info").show();
	});

})();
