(function(){
	'use strict';

	// Whatever happens for resolutions under 47.5em
	if (window.matchMedia('(max-width: 47.5em)').matches) {
		// Fixing the jumpy background image due to "vh" unit
		var heroBg = $('.hero-background');
    	var h = window.innerHeight;
    	heroBg.css('min-height', h);

		// Mobile hamburger menu events
			var headerMenuList = jQuery('.menu-header ul');
			var footerMenuElements = jQuery('.menu-footer li').clone();

			jQuery('.menu-icon').click(function() {
				headerMenuList.append(footerMenuElements);
				jQuery(this).toggleClass('is-open');
			});
		//--- END mobile hamburger menu

		// Carousel activation
		jQuery('.hero-content .carousel').owlCarousel({
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

		jQuery('.hero-content .carousel').owlCarousel({
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
		jQuery('.hero .hero-content').eq(0).find('a').attr('data-0p-bottom-bottom', 'opacity: 1; ');
		jQuery('.hero .hero-content').eq(0).find('a').attr('data--50p-bottom-bottom', 'opacity: 0;');
		jQuery('.hero .hero-content').eq(0).find('a').attr('data-anchor-target', '.hero-content');
		jQuery('.hero .hero-content').eq(0).find('h2').attr('data-0p-bottom-bottom', 'opacity: 1; ');
		jQuery('.hero .hero-content').eq(0).find('h2').attr('data--50p-bottom-bottom', 'opacity: 0;');
		jQuery('.hero .hero-content').eq(0).find('h2').attr('data-anchor-target', '.hero-content');
		jQuery('.hero .hero-content').eq(0).find('p').attr('data-0p-bottom-bottom', 'opacity: 1; ');
		jQuery('.hero .hero-content').eq(0).find('p').attr('data--50p-bottom-bottom', 'opacity: 0;');
		jQuery('.hero .hero-content').eq(0).find('p').attr('data-anchor-target', '.hero-content');

		jQuery('.hero-background').attr('data-0p-top-top', 'opacity: 1;');
		jQuery('.hero-background').attr('data--10p-top-top', 'opacity: 0;');

		jQuery('.section-sensor .section-item:first').attr('data-0-bottom-bottom', 'opacity: 0; position: relative; top: 40vh;');
		jQuery('.section-sensor .section-item:first').attr('data--20p-bottom-bottom', 'opacity: 1; position: relative; top: 20vh;');
		jQuery('.section-sensor .section-item:first').attr('data-0p-top-top', 'opacity: 1; position: relative; top: 20vh;');
		jQuery('.section-sensor .section-item:first').attr('data--20p-top-top', 'opacity: 0; position: relative; top: 0vh;');

		jQuery('.section-sensor .section-item').eq(1).attr('data-0-bottom-bottom', 'opacity: 0; position: relative; top: 20vh;');
		jQuery('.section-sensor .section-item').eq(1).attr('data--20p-bottom-bottom', 'opacity: 1; position: relative; top: 0vh;');
		jQuery('.section-sensor .section-item').eq(1).attr('data-0p-top-top', 'opacity: 1; position: relative; top: 0vh;');
		jQuery('.section-sensor .section-item').eq(1).attr('data--20p-top-top', 'opacity: 0; position: relative; top: -20vh;');

		jQuery('.section-sensor').attr('data-80p-top-top', 'background-position: 10% 100vh;');
		jQuery('.section-sensor').attr('data-20p-top-top', 'background-position: 10% 30vh; background-attachment: fixed;');
		jQuery('.section-sensor').attr('data--80p-top-top', 'background-position: 10% 15vh; background-attachment: fixed;');
		jQuery('.section-sensor').attr('data--120p-top-top', 'background-position: 10% 0vh; ');

		jQuery('.section-app .carousel-item').eq(0).find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
		jQuery('.section-app .carousel-item').eq(0).find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
		jQuery('.section-app .carousel-item').eq(0).find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
		jQuery('.section-app .carousel-item').eq(0).find('.carousel-content').attr('data--10p-top-top', 'opacity: 0;');
		jQuery('.section-app .carousel-item').eq(0).find('.carousel-content').attr('data-anchor-target', '.carousel-item-1');

		jQuery('.section-app .carousel-item').eq(0).find('img').attr('data--10p-bottom-bottom', 'opacity: 0; right: 0; top: 20vh;');
		jQuery('.section-app .carousel-item').eq(0).find('img').attr('data--60p-bottom-bottom', 'opacity: 1; position: fixed; top: 10vh;');
		jQuery('.section-app .carousel-item').eq(0).find('img').attr('data-0p-top-top', 'opacity: 1;');
		jQuery('.section-app .carousel-item').eq(0).find('img').attr('data--10p-top-top', 'opacity: 0;');
		jQuery('.section-app .carousel-item').eq(0).find('img').attr('data-anchor-target', '.carousel-item-1');

		jQuery('.section-app .carousel-item').eq(1).find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
		jQuery('.section-app .carousel-item').eq(1).find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
		jQuery('.section-app .carousel-item').eq(1).find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
		jQuery('.section-app .carousel-item').eq(1).find('.carousel-content').attr('data--10p-top-top', 'opacity: 0;');
		jQuery('.section-app .carousel-item').eq(1).find('.carousel-content').attr('data-anchor-target', '.carousel-item-2');

		jQuery('.section-app .carousel-item').eq(1).find('img').attr('data-0p-bottom-bottom', 'opacity: 0; position: fixed; right: 0; top: 10vh;');
		jQuery('.section-app .carousel-item').eq(1).find('img').attr('data--20p-bottom-bottom', 'opacity: 1;');
		jQuery('.section-app .carousel-item').eq(1).find('img').attr('data-0p-top-top', 'opacity: 1;');
		jQuery('.section-app .carousel-item').eq(1).find('img').attr('data--10p-top-top', 'opacity: 0;');
		jQuery('.section-app .carousel-item').eq(1).find('img').attr('data-anchor-target', '.carousel-item-2');

		jQuery('.section-app .carousel-item').eq(2).find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
		jQuery('.section-app .carousel-item').eq(2).find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
		jQuery('.section-app .carousel-item').eq(2).find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
		jQuery('.section-app .carousel-item').eq(2).find('.carousel-content').attr('data--10p-top-top', 'opacity: 0;');
		jQuery('.section-app .carousel-item').eq(2).find('.carousel-content').attr('data-anchor-target', '.carousel-item-3');

		jQuery('.section-app .carousel-item').eq(2).find('img').attr('data-0p-bottom-bottom', 'opacity: 0; position: fixed; right: 0; top: 10vh;');
		jQuery('.section-app .carousel-item').eq(2).find('img').attr('data--20p-bottom-bottom', 'opacity: 1;');
		jQuery('.section-app .carousel-item').eq(2).find('img').attr('data-0p-top-top', 'opacity: 1;');
		jQuery('.section-app .carousel-item').eq(2).find('img').attr('data--10p-top-top', 'opacity: 0;');
		jQuery('.section-app .carousel-item').eq(2).find('img').attr('data-anchor-target', '.carousel-item-3');


		//--- END bind parallax data

		// Init parallax plugin
		skrollr.init({
			render: function(data) {
				console.log(data.curTop);
			}
		});
		//--- END parallax plugin
	}

	// // Everything that will be loaded for any resolution
	// // Press accordion events
	// 	jQuery('.accordion-picture').click(function() {
	// 		var accordion = jQuery(this).parents('.accordion:first'),
	// 			element = jQuery(this).parents('.accordion-item:first');

	// 		accordion.find('.accordion-target').text(element.text());
	// 		accordion.find('.is-active').removeClass('is-active');
	// 		element.addClass('is-active');
	// 	});
	// //--- END press accordion

	// Transitions
	function onScroll(){
		var scrollPosition = jQuery(document).scrollTop();
		var systemSection = jQuery('.section-system'),
			sensorSection = jQuery('.section-sensor'),
			appSection = jQuery('.section-app'),
			valveSection = jQuery('.section-valve'),
			menu = jQuery('.menu-header'),
			logo = jQuery('.logo');

		if(systemSection.position().top <= scrollPosition + 200 && systemSection.position().top + systemSection.outerHeight() > scrollPosition + 200) {
			jQuery(systemSection.find('.carousel-item')).each(function(i) {
				jQuery(this).addClass('animated slideInUp' + (i + 1));
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
	jQuery(document).on('scroll', onScroll);
	//--- END transitions

})();
