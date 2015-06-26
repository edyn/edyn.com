(function(){
	'use strict';

	// Whatever happens for resolutions under 47.5em
	if (window.matchMedia('(max-width: 47.5em)').matches) {
		// Mobile hamburger menu events
			var headerMenuList = jQuery('.menu-header ul');
			var footerMenuElements = jQuery('.menu-footer li').clone();

			jQuery('.menu-icon').click(function() {
				headerMenuList.append(footerMenuElements);
				jQuery(this).toggleClass('is-open');
			});
		//--- END mobile hamburger menu

		// Carousel activation
		jQuery('.section-system .carousel').owlCarousel({
			navigation: true,
			navigationText: false,
			items: 3,
			itemsDesktop: [1000, 3],
			itemsDesktopSmall: [900, 3],
			itemsTablet: [600, 1],
			itemsMobile: [480, 1]
		});

		jQuery('.section-app .carousel').owlCarousel({
			navigation: true,
			navigationText: false,
			items: 3,
			itemsDesktop: [1000, 3],
			itemsDesktopSmall: [900, 3],
			itemsTablet: [600, 1],
			itemsMobile: [480, 1]
		});

		jQuery('.section-gallery .carousel').owlCarousel({
			navigation: true,
			navigationText: false,
			items: 3,
			itemsDesktop: [1000, 3],
			itemsDesktopSmall: [900, 3],
			itemsTablet: [600, 1],
			itemsMobile: [480, 1]
		});
		//--- END carousel
	}


	// Whatever happens for resolutions over 47.5em
	if (window.matchMedia('(min-width: 47.5em)').matches) {
		// Carousel activation
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
		//--- END carousel

		// Bind Parallax data
		jQuery('.section-sensor').attr('data-0-top', 'background-position: 10% -30%;');
		jQuery('.section-sensor').attr('data-100-top-bottom', 'background-position: 10% -10%;');

		jQuery('.section-sensor .section-item').attr('data-0-top-top', 'opacity: 1;');
		jQuery('.section-sensor .section-item').attr('data--100-top-top', 'opacity: 0;');

		jQuery('.section-app .carousel-item-1').attr('data--50p-top-bottom', 'opacity: 0;');
		jQuery('.section-app .carousel-item-1').attr('data--40p-top-bottom', 'opacity: 1;');
		jQuery('.section-app .carousel-item-1').attr('data-0-top-bottom', 'opacity: 1;');
		jQuery('.section-app .carousel-item-1').attr('data-10p-top-bottom', 'opacity: 0;');
		jQuery('.section-app .carousel-item-1').attr('data-anchor-target', '.carousel-item-1 h3');

		jQuery('.section-app .carousel-item-2').attr('data--200p-top-bottom', 'opacity: 0;');
		jQuery('.section-app .carousel-item-2').attr('data--190p-top-bottom', 'opacity: 1;');
		jQuery('.section-app .carousel-item-2').attr('data--150p-top-bottom', 'opacity: 1;');
		jQuery('.section-app .carousel-item-2').attr('data--140p-top-bottom', 'opacity: 0;');
		jQuery('.section-app .carousel-item-2').attr('data-anchor-target', '.carousel-item-2 h3');

		jQuery('.section-app .carousel-item-3').attr('data--350p-top-bottom', 'opacity: 0;');
		jQuery('.section-app .carousel-item-3').attr('data--340p-top-bottom', 'opacity: 1;');
		jQuery('.section-app .carousel-item-3').attr('data--290p-top-bottom', 'opacity: 1;');
		jQuery('.section-app .carousel-item-3').attr('data--280p-top-bottom', 'opacity: 0;');
		jQuery('.section-app .carousel-item-3').attr('data-anchor-target', '.carousel-item-3 h3');
		//--- END bind parallax data

		// Init parallax plugin
		skrollr.init({
			render: function(data) {
				console.log(data.curTop);
			}
		});
		//--- END parallax plugin
	}

	// Everything that will be loaded for any resolution
	// Press accordion events
		jQuery('.accordion-picture').click(function() {
			var accordion = jQuery(this).parents('.accordion:first'),
				element = jQuery(this).parents('.accordion-item:first');

			accordion.find('.accordion-target').text(element.text());
			accordion.find('.is-active').removeClass('is-active');
			element.addClass('is-active');
		});
	//--- END press accordion

	// Transitions
	jQuery(document).on('scroll', onScroll);
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		var hero = jQuery('.hero .container'),
			systemSection = jQuery('.section-system'),
			sensorSection = jQuery('.section-sensor'),
			appSection = jQuery('.section-app'),
			valveSection = jQuery('.section-valve'),
			menu = jQuery('.menu-header'),
			logo = jQuery('.logo');

		if(systemSection.position().top <= scrollPosition && systemSection.position().top + systemSection.outerHeight() > scrollPosition) {
			jQuery(systemSection.find('.carousel-item')).each(function(i) {
				jQuery(this).addClass('animated slideInUp'+(i+1));
			});
		} else if(sensorSection.position().top <= scrollPosition && sensorSection.position().top + sensorSection.outerHeight() > scrollPosition) {
			logo.addClass('white');
			menu.addClass('dark');
			menu.find('.button').addClass('button-alternate');
			logo.removeClass('dark');
		} else if (appSection.position().top <= scrollPosition && valveSection.position().top + valveSection.outerHeight() > scrollPosition) {
			logo.addClass('dark');
			logo.removeClass('white');
		} else {
			logo.removeClass('dark');
			logo.removeClass('white');
			menu.removeClass('dark');
			menu.find('.button').removeClass('button-alternate');
		}
	}
	//--- END transitions

})();
