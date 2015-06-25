(function(){
	'use strict';

	// Init
		jQuery('.section-sensor .section-item').not(':eq(0)').hide();
		jQuery('.section-app .carousel-item').not(':eq(0)').hide();
	//--- END init

	// Mobile hamburger menu events
		var headerMenuList = jQuery('.menu-header ul');
		var footerMenuElements = jQuery('.menu-footer li').clone();

		jQuery('.menu-icon').click(function() {
			headerMenuList.append(footerMenuElements);
			jQuery(this).toggleClass('is-open');
		});
	//--- END mobile hamburger menu


	// Press accordion events
		jQuery('.accordion-picture').click(function() {
			var accordion = jQuery(this).parents('.accordion:first'),
				element = jQuery(this).parents('.accordion-item:first');

			accordion.find('.accordion-target').text(element.text());
			accordion.find('.is-active').removeClass('is-active');
			element.addClass('is-active');
		});
	//--- END press accordion

	// Carousel settings
		if (window.matchMedia('(max-width: 47.5em)').matches) {
			jQuery('.carousel').owlCarousel({
				navigation: true,
				navigationText: false,
				items: 3,
				itemsDesktop: [1000, 3],
				itemsDesktopSmall: [900, 3],
				itemsTablet: [600, 1],
				itemsMobile: [480, 1]
			});
		}

		if (window.matchMedia('(min-width: 47.5em)').matches) {
			jQuery('.section-gallery .carousel').owlCarousel({
				navigation: true,
				navigationText: false,
				items: 1,
				itemsDesktop: [1000, 1],
				itemsDesktopSmall: [900, 1],
				itemsTablet: [600, 1],
				itemsMobile: [480, 1]
			});

			jQuery('.section-system .carousel').owlCarousel({
				navigation: true,
				navigationText: false,
				items: 3,
				itemsDesktop: [1000, 3],
				itemsDesktopSmall: [900, 3],
				itemsTablet: [600, 1],
				itemsMobile: [480, 1]
			});
		}
	//--- END carousel settings


	// Parallax transitions
		if (window.matchMedia('(min-width: 47.5em)').matches) {
			// Bind parallax transitions to hero unit
			jQuery('.hero .container').attr('data-start', 'opacity: 1;');
			jQuery('.hero .container').attr('data-400-start', 'opacity: 0;');

			// Bind parralax transitions to system section elements
			jQuery('.section-system .container').attr('data-start', 'opacity: 0; position: relative; top: 200px;');
			jQuery('.section-system .container').attr('data-400-start', 'opacity: 1; position: relative; top: 0;');

			// Bind parralax transitions to sensor section elements
			jQuery('.section-sensor').attr('data-600-bottom', 'background-position: 0% -40%;');
			jQuery('.section-sensor').attr('data-500-bottom', 'background-position: 0% -30%;');
			jQuery('.section-sensor').attr('data-400-bottom', 'background-position: 0% -20%;');
			jQuery('.section-sensor').attr('data-300-bottom', 'background-position: 0% -10%;');
			jQuery('.section-sensor').attr('data-200-bottom', 'background-position: 0% 0%;');
			jQuery('.section-sensor').attr('data-100-bottom', 'background-position: 0% 10%;');
			jQuery('.section-sensor').attr('data-bottom', 'background-position: 0% 20%;');

			jQuery('.section-sensor .section-item').eq(0).attr('data-650-top', 'opacity: 0; top: 50%; position: absolute;');
			jQuery('.section-sensor .section-item').eq(0).attr('data-600-top', 'opacity:1; top: 40%; position: absolute;');
			jQuery('.section-sensor .section-item').eq(0).attr('data-450-top', 'opacity: 1; top: 10%; position: absolute;');
			jQuery('.section-sensor .section-item').eq(0).attr('data-400-top', 'opacity: 0; top: 0%; position: absolute;');

			jQuery('.section-sensor .section-item').eq(1).attr('data--1900-top', 'opacity: 0; top: 20%; position: absolute; display: block;');
			jQuery('.section-sensor .section-item').eq(1).attr('data--1850-top', 'opacity: 1; top: 70%; position: absolute; display: block;');
			jQuery('.section-sensor .section-item').eq(1).attr('data--1800-top', 'opacity: 0; top: 100%; position: absolute; display: block;');

			// jQuery('.section-sensor .section-item').eq(1).attr('data--500-top', 'opacity: 0; top: 30%; position: absolute; display: block;');
			// jQuery('.section-sensor .section-item').eq(1).attr('data--200-top', 'opacity:1; top: 40%; position: absolute; display: block;');
			// jQuery('.section-sensor .section-item').eq(1).attr('data--100-top', 'opacity: 0; top: 60%; position: absolute; display: block;');

			jQuery('.section-app .carousel-item').eq(0).attr('data-650-top', 'opacity: 0; top: 50%; position: absolute;');
			jQuery('.section-app .carousel-item').eq(0).attr('data-600-top', 'opacity:1; top: 40%; position: absolute;');
			jQuery('.section-app .carousel-item').eq(0).attr('data-450-top', 'opacity: 1; top: 10%; position: absolute;');
			jQuery('.section-app .carousel-item').eq(0).attr('data-400-top', 'opacity: 0; top: 0%; position: absolute;');

			jQuery('.section-app .carousel-item').eq(1).attr('data-650-top', 'opacity: 0; top: 50%; position: absolute;');
			jQuery('.section-app .carousel-item').eq(1).attr('data-600-top', 'opacity:1; top: 40%; position: absolute;');
			jQuery('.section-app .carousel-item').eq(1).attr('data-450-top', 'opacity: 1; top: 10%; position: absolute;');
			jQuery('.section-app .carousel-item').eq(1).attr('data-400-top', 'opacity: 0; top: 0%; position: absolute;');

			jQuery('.section-app .carousel-item').eq(2).attr('data-650-top', 'opacity: 0; top: 50%; position: absolute;');
			jQuery('.section-app .carousel-item').eq(2).attr('data-600-top', 'opacity:1; top: 40%; position: absolute;');
			jQuery('.section-app .carousel-item').eq(2).attr('data-450-top', 'opacity: 1; top: 10%; position: absolute;');
			jQuery('.section-app .carousel-item').eq(2).attr('data-400-top', 'opacity: 0; top: 0%; position: absolute;');

			jQuery('.section-app .carousel-item').eq(3).attr('data-650-top', 'opacity: 0; top: 50%; position: absolute;');
			jQuery('.section-app .carousel-item').eq(3).attr('data-600-top', 'opacity:1; top: 40%; position: absolute;');
			jQuery('.section-app .carousel-item').eq(3).attr('data-450-top', 'opacity: 1; top: 10%; position: absolute;');
			jQuery('.section-app .carousel-item').eq(3).attr('data-400-top', 'opacity: 0; top: 0%; position: absolute;');
		}

		skrollr.init({
			render: function(data) {
				var sectionSystem = jQuery('.section-system');
				var posSectionSystem = sectionSystem.offset().top;
				if(data.curTop >= posSectionSystem) {
					if(!(sectionSystem.hasClass('.is-blurred'))) {
						sectionSystem.addClass('is-blurred');
					}
				} else {
					sectionSystem.removeClass('is-blurred');
				}
			}
		});
	//--- END parallax transitions

})();
