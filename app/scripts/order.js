(function(){
	'use strict';

	// Update inventory on page load
	jQuery(document).ready(function() {
		$.ajax({
			type: 'GET',
			contentType: 'application/json',
			url: '/inventory',
			success: function(data) {

				if(data.product.inventory) {
					jQuery('#input-count').attr({'min': 1, 'max': data.product.inventory});
					for (var i = 1; i <= data.product.inventory; i++) {
						jQuery('#input-select-count').append('<option value="'+ i +'">'+ i +'</option>');
					}
				} else {
					$('#placeOrder').attr('disabled', 'disabled');
					$('.input-number-count').html('<span class="error">Sold out</span>');
				}
			}
		});
	});

	// Custom select dropdowns
	jQuery(document).on( "change", ".custom-select", function() {
		$(this).prev('span').hide();
	});

	if(jQuery('html').hasClass('ua-mobile')) {
		if(jQuery("#input-coupon").length) {
			jQuery($("#input-coupon").attr('placeholder', 'Enter Code'));
		}

		jQuery(document).on( "click", ".trigger-cvv", function() {
			jQuery(".card-cvv").show();
			jQuery(".overlay").show();
		});

		jQuery(document).on( "click", ".overlay", function() {
			jQuery(".card-cvv").hide();
			jQuery(".overlay").hide();
		});

		$(".input-select span").each(function() {
			if($(this).data('mobile-label')) {
				$(this).text($(this).data('mobile-label'));
				$(this).next('.form-control').attr('placeholder', $(this).data('mobile-label')).val("").focus().blur();
			}
		});

	} else {
		jQuery(".trigger-cvv").hover(
			function() {
				jQuery(".card-cvv").show();
			}, function() {
				jQuery(".card-cvv").hide();
			}
		);
	}

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

	function checkCoupon() {
		var data = {
			'user_id': '5654f01bd5ec870300f24037',
			'code': jQuery('#input-coupon').val(),
			'line_items': [{
				'product_id': '5654f1c5d5ec870300f24039',
				'quantity': jQuery('#input-select-count').val()
			}]
		}

		var c = new Celery({userId: '5654f01bd5ec870300f24037'});
		c.validateCoupon(data).done(function(results) {
			$(".button-group-coupon").hide();
			updatePrices();
		}).fail(function(results) {
			$(".input-coupon").append('<span class="validetta-bubble">Invalid Code.</span>');
		});

		return true;
	}

	$("#input-coupon").bind( "focus", function() {
		$(".button-group-coupon").show();
	});

	$("#input-coupon").bind( "blur", function() {
		if($("#input-coupon").val() === "") {
			$(".button-group-coupon").hide();
		}
	});

	$(".button-group-coupon .button-apply").bind( "click", function(e) {
		checkCoupon();
		e.preventDefault();
		e.stopPropagation();
	});

	$(".button-group-coupon .button-cancel").bind( "click", function(e) {
		$("#input-coupon").val('');
		$(".button-group-coupon").hide();
		e.preventDefault();
		e.stopPropagation();
	});

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
			$('.billing-info .custom-select').prev('span').show();
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
			}],
			'discount_codes': [jQuery('#input-coupon').val()]
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
				jQuery('.price-subtotal').text('$' + (results.data.linetotal / 100));

				if(results.data.discount) {
					jQuery('.price-discount').text('- $' + (results.data.discount / 100));
					jQuery('.line-discount').show();
				}


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

			if(newValue <= jQuery('#input-count').attr('max')) {
				jQuery('#input-count').val(newValue);
				jQuery('#input-select-count').val(newValue);
				updatePrices();
			}

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
			}

			e.preventDefault();
			e.stopPropagation();
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
				'first_name': jQuery('#input-shipping-first-name').val(),
				'last_name': jQuery('#input-shipping-last-name').val(),
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
			}],
			'discount_codes': [jQuery('#input-coupon').val()]
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

						if(cssua.ua.android) {
							jQuery('.button-app').attr('href', jQuery('.button-googleplay-outline').attr('href'));
						}

						if(cssua.ua.ios) {
							jQuery('.button-app').attr('href', jQuery('.button-appstore-outline').attr('href'));
						}

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

	// Tooltips
	var targets = $( '[rel~=tooltip]' ),
        target  = false,
        tooltip = false,
        title   = false,
		tip 	= false;

    targets.bind( 'mouseenter', function()
    {
        target  = $( this );
        tip     = target.attr( 'title' );
        tooltip = $( '<div id="tooltip"></div>' );

        if( !tip || tip == '' )
            return false;

        target.removeAttr( 'title' );
        tooltip.css( 'opacity', 0 )
               .html( tip )
               .appendTo( 'body' );

        var init_tooltip = function()
        {
            if( $( window ).width() < tooltip.outerWidth() * 1.5 )
                tooltip.css( 'max-width', $( window ).width() / 2 );
            else
                tooltip.css( 'max-width', 340 );

            var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
                pos_top  = target.offset().top - tooltip.outerHeight() - 20;

            if( pos_left < 0 )
            {
                pos_left = target.offset().left + target.outerWidth() / 2 - 20;
                tooltip.addClass( 'left' );
            }
            else
                tooltip.removeClass( 'left' );

            if( pos_left + tooltip.outerWidth() > $( window ).width() )
            {
                pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                tooltip.addClass( 'right' );
            }
            else
                tooltip.removeClass( 'right' );

            if( pos_top < 0 )
            {
                var pos_top  = target.offset().top + target.outerHeight();
                tooltip.addClass( 'top' );
            }
            else
                tooltip.removeClass( 'top' );

            tooltip.css( { left: pos_left, top: pos_top } )
                   .animate( { top: '+=10', opacity: 1 }, 50 );
        };

        init_tooltip();
        $( window ).resize( init_tooltip );

        var remove_tooltip = function()
        {
            tooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
            {
                $( this ).remove();
            });

            target.attr( 'title', tip );
        };

        target.bind( 'mouseleave', remove_tooltip );
        tooltip.bind( 'click', remove_tooltip );
    });

})();
