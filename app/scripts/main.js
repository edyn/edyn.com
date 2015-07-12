(function(){
	'use strict';

	// Whatever happens for resolutions under 47.5em
	if (window.matchMedia('(max-width: 47.5em)').matches) {
		// Fixing the jumpy background image due to 'vh' unit
		// var heroBg = jQuery('.hero-background');
		// var h = window.innerHeight;
		// heroBg.css('height', h);

		// Mobile hamburger menu events
			var headerMenuList = jQuery('.menu-header ul');
			var footerMenuElements = jQuery('.menu-footer li').clone();

			jQuery('.menu-icon').click(function() {
				headerMenuList.append(footerMenuElements);
				jQuery(this).toggleClass('is-open');
				jQuery('body').toggleClass('no-scroll');
			});
		//--- END mobile hamburger menu

		// Carousel activation
		if(jQuery('.hero-content .carousel').length) {
			jQuery('.hero-content .carousel').owlCarousel({
				navigation: true,
				navigationText: false,
				items: 3,
				itemsDesktop: [1000, 3],
				itemsDesktopSmall: [900, 3],
				itemsTablet: [600, 1],
				itemsMobile: [480, 1]
			});
		}

		if(jQuery('.section-app .carousel').length) {
			jQuery('.section-app .carousel').owlCarousel({
				navigation: true,
				navigationText: false,
				items: 3,
				itemsDesktop: [1000, 3],
				itemsDesktopSmall: [900, 3],
				itemsTablet: [600, 1],
				itemsMobile: [480, 1]
			});
		}

		if(jQuery('.section-gallery .carousel').length) {
			jQuery('.section-gallery .carousel').owlCarousel({
				navigation: true,
				navigationText: false,
				items: 3,
				itemsDesktop: [1000, 3],
				itemsDesktopSmall: [900, 3],
				itemsTablet: [600, 1],
				itemsMobile: [480, 1],
				transitionStyle: 'fade'
			});
		}
		//--- END carousel
	}

	// Whatever happens for resolutions over 47.5em
	if (window.matchMedia('(min-width: 47.5em)').matches) {
		// Carousel activation
		if(jQuery('.section-gallery .carousel').length) {
			jQuery('.section-gallery .carousel').owlCarousel({
				navigation: true,
				navigationText: false,
				items: 1,
				itemsDesktop: [1000, 1],
				itemsDesktopSmall: [900, 1],
				itemsTablet: [600, 1],
				itemsMobile: [480, 1],
				singleItem: true,
				transitionStyle: 'fade'
			});
		}

		if(jQuery('.hero-content .carousel').length) {
			jQuery('.hero-content .carousel').owlCarousel({
				navigation: true,
				navigationText: false,
				items: 3,
				itemsDesktop: [1000, 3],
				itemsDesktopSmall: [900, 3],
				itemsTablet: [600, 1],
				itemsMobile: [480, 1]
			});
		}
		//--- END carousel



		if(jQuery('.section-sensor .section-item').length) {
			jQuery('.section-sensor .section-item').eq(0).attr('data--50p-bottom-top', 'opacity: 0; position: relative; top: 40vh;');
			jQuery('.section-sensor .section-item').eq(0).attr('data--10p-center', 'opacity: 1; position: relative; top: 20vh;');
			jQuery('.section-sensor .section-item').eq(0).attr('data--50p-center', 'opacity: 1; position: relative; top: 20vh;');
			jQuery('.section-sensor .section-item').eq(0).attr('data--75p-center', 'opacity: 0; position: relative; top: 0vh;');

			jQuery('.section-sensor .section-item').eq(1).attr('data--50p-bottom-top', 'opacity: 0; position: relative; top: 25vh;');
			jQuery('.section-sensor .section-item').eq(1).attr('data--10p-center', 'opacity: 1; position: relative; top: 20vh;');
			jQuery('.section-sensor .section-item').eq(1).attr('data--50p-center', 'opacity: 1; position: relative; top: 20vh;');
			jQuery('.section-sensor .section-item').eq(1).attr('data--75p-center', 'opacity: 0; position: relative; top: 0vh;');
		}

		if(jQuery('.section-sensor').length) {
			jQuery('.section-sensor').attr('data-120p-top-top', 'background-position: 10% 30vh; background-attachment: fixed;');
			jQuery('.section-sensor').attr('data--80p-top-top', 'background-position: 10% 15vh; background-attachment: fixed;');
			jQuery('.section-sensor').attr('data--120p-top-top', 'background-position: 10% 0vh;');
		}

		if(jQuery('.section-app .carousel-item').eq(0).find('.carousel-content').length) {
			jQuery('.section-app .carousel-item').eq(0).find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(0).find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
			jQuery('.section-app .carousel-item').eq(0).find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
			jQuery('.section-app .carousel-item').eq(0).find('.carousel-content').attr('data--10p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(0).find('.carousel-content').attr('data-anchor-target', '.carousel-item-1');
		}

		if(jQuery('.section-app .carousel-item').eq(0).find('img').length) {
			jQuery('.section-app .carousel-item').eq(0).find('img').attr('data--10p-bottom-bottom', 'display:block; opacity: 0; right: 0; top: 20vh;');
			jQuery('.section-app .carousel-item').eq(0).find('img').attr('data--60p-bottom-bottom', 'opacity: 1; position: fixed; top: 18vh;');
			jQuery('.section-app .carousel-item').eq(0).find('img').attr('data--17p-top-top', 'display: none;');
			// jQuery('.section-app .carousel-item').eq(0).find('img').attr('data--10p-top-top', 'display:none;');
			jQuery('.section-app .carousel-item').eq(0).find('img').attr('data-anchor-target', '.carousel-item-1');
		}

		if(jQuery('.section-app .carousel-item').eq(1).find('.carousel-content').length) {
			jQuery('.section-app .carousel-item').eq(1).find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(1).find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
			jQuery('.section-app .carousel-item').eq(1).find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
			jQuery('.section-app .carousel-item').eq(1).find('.carousel-content').attr('data--10p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(1).find('.carousel-content').attr('data-anchor-target', '.carousel-item-2');
		}

		if(jQuery('.section-app .carousel-item').eq(1).find('img').length) {
			jQuery('.section-app .carousel-item').eq(1).find('img').attr('data--20p-bottom-bottom', 'opacity: 0; right: 0; top: 18vh;');
			jQuery('.section-app .carousel-item').eq(1).find('img').attr('data--40p-bottom-bottom', 'display:block; opacity: 1; right: 0; top: 18vh;');
			jQuery('.section-app .carousel-item').eq(1).find('img').attr('data--60p-bottom-bottom', 'opacity: 1; position: fixed; top: 16vh;');
			jQuery('.section-app .carousel-item').eq(1).find('img').attr('data--17p-top-top', 'display: none;');
			// jQuery('.section-app .carousel-item').eq(1).find('img').attr('data--10p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(1).find('img').attr('data-anchor-target', '.carousel-item-2');
		}

		if(jQuery('.section-app .carousel-item').eq(2).find('.carousel-content').length) {
			jQuery('.section-app .carousel-item').eq(2).find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(2).find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
			jQuery('.section-app .carousel-item').eq(2).find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
			jQuery('.section-app .carousel-item').eq(2).find('.carousel-content').attr('data--10p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(2).find('.carousel-content').attr('data-anchor-target', '.carousel-item-3');
		}

		if(jQuery('.section-app .carousel-item').eq(2).find('img').length) {
			jQuery('.section-app .carousel-item').eq(2).find('img').attr('data--20p-bottom-bottom', 'opacity: 0; right: 0; top: 16vh;');
			jQuery('.section-app .carousel-item').eq(2).find('img').attr('data--40p-bottom-bottom', 'display:block; opacity: 1; right: 0; top: 16vh;');
			jQuery('.section-app .carousel-item').eq(2).find('img').attr('data--60p-bottom-bottom', 'opacity: 1; position: fixed; top: 14vh;');
			jQuery('.section-app .carousel-item').eq(2).find('img').attr('data--17p-top-top', 'display: none;');
			// jQuery('.section-app .carousel-item').eq(2).find('img').attr('data--10p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(2).find('img').attr('data-anchor-target', '.carousel-item-3');
		}

		if(jQuery('.section-app .carousel-item').eq(3).find('.carousel-content').length) {
			jQuery('.section-app .carousel-item').eq(3).find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(3).find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
			jQuery('.section-app .carousel-item').eq(3).find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
			jQuery('.section-app .carousel-item').eq(3).find('.carousel-content').attr('data--10p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(3).find('.carousel-content').attr('data-anchor-target', '.carousel-item-4');
		}

		if(jQuery('.section-app .carousel-item').eq(3).find('img').length) {
			jQuery('.section-app .carousel-item').eq(3).find('img').attr('data--20p-bottom-bottom', 'opacity: 0; right: 0; top: 14vh;');
			jQuery('.section-app .carousel-item').eq(3).find('img').attr('data--40p-bottom-bottom', 'display:block; opacity: 1; right: 0; top: 14vh;');
			jQuery('.section-app .carousel-item').eq(3).find('img').attr('data--60p-bottom-bottom', 'opacity: 1; position: fixed; top: 12vh;');
			jQuery('.section-app .carousel-item').eq(3).find('img').attr('data--17p-top-top', 'display: none;');
			// jQuery('.section-app .carousel-item').eq(3).find('img').attr('data--10p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(3).find('img').attr('data-anchor-target', '.carousel-item-4');
		}

		if(jQuery('.section-app .carousel-item').eq(4).find('.carousel-content').length) {
			jQuery('.section-app .carousel-item').eq(4).find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(4).find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
			jQuery('.section-app .carousel-item').eq(4).find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
			jQuery('.section-app .carousel-item').eq(4).find('.carousel-content').attr('data--10p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(4).find('.carousel-content').attr('data-anchor-target', '.carousel-item-5');
		}

		if(jQuery('.section-app .carousel-item').eq(4).find('img').length) {
			jQuery('.section-app .carousel-item').eq(4).find('img').attr('data--20p-bottom-bottom', 'opacity: 0; right: 0; top: 12vh;');
			jQuery('.section-app .carousel-item').eq(4).find('img').attr('data--40p-bottom-bottom', 'display:block; opacity: 1; right: 0; top: 12vh;');
			jQuery('.section-app .carousel-item').eq(4).find('img').attr('data--60p-bottom-bottom', 'opacity: 1; position: fixed; top: 10vh;');
			jQuery('.section-app .carousel-item').eq(4).find('img').attr('data--17p-top-top', 'display: none;');
			// jQuery('.section-app .carousel-item').eq(4).find('img').attr('data--10p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(4).find('img').attr('data-anchor-target', '.carousel-item-5');
		}

		if(jQuery('.section-app .carousel-item').eq(5).find('.carousel-content').length) {
			jQuery('.section-app .carousel-item').eq(5).find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(5).find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
			jQuery('.section-app .carousel-item').eq(5).find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
			jQuery('.section-app .carousel-item').eq(5).find('.carousel-content').attr('data--10p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(5).find('.carousel-content').attr('data-anchor-target', '.carousel-item-6');
		}

		if(jQuery('.section-app .carousel-item').eq(5).find('img').length) {
			jQuery('.section-app .carousel-item').eq(5).find('img').attr('data--20p-bottom-bottom', 'opacity: 0; right: 0; top: 10vh;');
			jQuery('.section-app .carousel-item').eq(5).find('img').attr('data--40p-bottom-bottom', 'display:block; opacity: 1; right: 0; top: 10vh;');
			jQuery('.section-app .carousel-item').eq(5).find('img').attr('data--60p-bottom-bottom', 'opacity: 1; position: fixed; top: 8vh;');
			jQuery('.section-app .carousel-item').eq(5).find('img').attr('data--17p-top-top', 'opacity: 0;');
			// jQuery('.section-app .carousel-item').eq(5).find('img').attr('data--10p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item').eq(5).find('img').attr('data-anchor-target', '.carousel-item-6');
		}

		if(jQuery('.section-valve').length) {
			jQuery('.section-valve').attr('data--10p-top-top', 'background-position: 50% 25em;');
			jQuery('.section-valve').attr('data--40p-top-top', 'background-position: 50% 20em;');
		}
	}

	if(jQuery('.hero-background').length) {
		jQuery('.hero-background').attr('data-0p-bottom-bottom', 'opacity: 1; position: fixed;');
		jQuery('.hero-background').attr('data--70p-bottom-bottom', 'opacity: 0; position: fixed;');
		jQuery('.hero-background').attr('data--100p-bottom-bottom', 'opacity: 0; position: relative;');
		jQuery('.hero-background').attr('data-anchor-target', '.hero-content');
	}

	if(jQuery('.hero-background-blurred').length) {
		jQuery('.hero-background-blurred').attr('data-0p-bottom-bottom', 'position: fixed;');
		jQuery('.hero-background-blurred').attr('data--100p-bottom-bottom', 'position: relative;');
		jQuery('.hero-background-blurred').attr('data-anchor-target', '.hero .container');
	}

	if(jQuery('.home .hero .hero-content').eq(0).find('a').length) {
		jQuery('.hero .hero-content').eq(0).find('a').attr('data-0p-bottom-bottom', 'opacity: 1; ');
		jQuery('.hero .hero-content').eq(0).find('a').attr('data--90p-bottom-bottom', 'opacity: 0;');
		jQuery('.hero .hero-content').eq(0).find('a').attr('data-anchor-target', '.hero-content');
	}

	if(jQuery('.home .hero .hero-content').eq(0).find('h2').length) {
		jQuery('.hero .hero-content').eq(0).find('h2').attr('data-0p-bottom-bottom', 'opacity: 1; ');
		jQuery('.hero .hero-content').eq(0).find('h2').attr('data--90p-bottom-bottom', 'opacity: 0;');
		jQuery('.hero .hero-content').eq(0).find('h2').attr('data-anchor-target', '.hero-content');
	}

	if(jQuery('.home .hero .hero-content').eq(0).find('p').length) {
		jQuery('.hero .hero-content').eq(0).find('p').attr('data-0p-bottom-bottom', 'opacity: 1; ');
		jQuery('.hero .hero-content').eq(0).find('p').attr('data--90p-bottom-bottom', 'opacity: 0;');
		jQuery('.hero .hero-content').eq(0).find('p').attr('data-anchor-target', '.hero-content');
	}

	if(jQuery('.home .hero .hero-arrow').length) {
		jQuery('.hero .hero-arrow').attr('data-0p-bottom-bottom', 'opacity: 1; ');
		jQuery('.hero .hero-arrow').attr('data--90p-bottom-bottom', 'opacity: 0;');
		jQuery('.hero .hero-arrow').attr('data-anchor-target', '.hero-content');
	}


	if (window.matchMedia('(orientation: portrait)').matches) {
		if(jQuery('.section-gallery').find('img').length) {
			jQuery('.section-gallery').find('img').each(function() {
				jQuery(this).attr('src', jQuery(this).attr('data-src'));
			});
		}
	}

	//--- END bind parallax data

	// Init parallax plugin
	skrollr.init({
		render: function() {
			//console.log(data.curTop);
		},
		mobileCheck: function() {
            //hack - forces mobile version to be off
            return false;
        }
	});
	//--- END parallax plugin

	// Everything that will be loaded for any resolution
	// Press accordion events
	if(jQuery('.accordion-picture').length) {
		jQuery('.accordion-picture').click(function() {
			var accordion = jQuery(this).parents('.accordion:first'),
				element = jQuery(this).parents('.accordion-item:first');

			accordion.find('.accordion-target').text(element.text());
			accordion.find('.is-active').removeClass('is-active');
			element.addClass('is-active');
		});
	}
	//--- END press accordion

	// Transitions
	function onScroll(){
		var scrollPosition = jQuery(document).scrollTop();
		var systemSection = jQuery('.section-system'),
			sensorSection = jQuery('.section-sensor'),
			appSection = jQuery('.section-app'),
			valveSection = jQuery('.section-valve'),
			peopleSection = jQuery('.section-people'),
			menu = jQuery('.menu-header'),
			logo = jQuery('.logo');
			// hero = jQuery('.hero');

		if(systemSection.length && sensorSection.length && appSection.length && valveSection.length) {
			if(systemSection.position().top <= scrollPosition + 400 && systemSection.position().top + systemSection.outerHeight() > scrollPosition + 400) {
				jQuery(systemSection.find('.carousel-item')).each(function(i) {
					jQuery(this).find('.carousel-image').addClass('animated slideInUp' + (i + 1));
					jQuery(this).find('h3').addClass('animated fadeInUp' + (i + 1));
					jQuery(this).find('p').addClass('animated fadeInUp' + (i + 1));
					jQuery(systemSection.find('h2')).addClass('animated fadeInUp');

					window.setTimeout(function(){
						jQuery(systemSection.find('.carousel-item').eq(0)).addClass('animated');
					}, 1600);

					window.setTimeout(function(){
						jQuery(systemSection.find('.carousel-item').eq(1)).addClass('animated');
					}, 1800);
				});
			} else if(sensorSection.position().top - 5 <= scrollPosition && sensorSection.position().top + sensorSection.outerHeight() > scrollPosition - 5) {
				logo.addClass('white');
				menu.addClass('dark');
				menu.find('.button').addClass('button-alternate');
				logo.removeClass('dark');
			} else if (appSection.position().top - 5 <= scrollPosition && valveSection.position().top + valveSection.outerHeight() > scrollPosition - 5) {
				logo.addClass('dark');
				logo.removeClass('white');
			} else {
				logo.removeClass('dark');
				logo.removeClass('white');
				menu.removeClass('dark');
				menu.find('.button').removeClass('button-alternate');
			}
		}

		if(peopleSection.length) {
			if (peopleSection.position().top - 5 <= scrollPosition && peopleSection.position().top + peopleSection.outerHeight() > scrollPosition - 5) {
				logo.addClass('dark');
				menu.addClass('dark');
			} else {
				logo.removeClass('dark');
				menu.removeClass('dark');
			}
		}
	}
	jQuery(document).on('scroll', onScroll);
	//--- END transitions

})();
