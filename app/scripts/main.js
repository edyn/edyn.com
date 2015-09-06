(function(){
	'use strict';

	// Functions
	function transitions(){
		var scrollPosition = jQuery(document).scrollTop();
		var systemSection = jQuery('.section-system'),
			sensorSection = jQuery('.section-sensor'),
			appSection = jQuery('.section-app'),
			valveSection = jQuery('.section-valve'),
			peopleSection = jQuery('.section-people'),
			menu = jQuery('.menu-header'),
			logo = jQuery('.logo');

		if(systemSection.length && sensorSection.length && appSection.length && valveSection.length) {
			if(sensorSection.position().top - 70 <= scrollPosition && sensorSection.position().top + sensorSection.outerHeight() > scrollPosition + 70) {
				logo.addClass('white');
				menu.addClass('dark');
				menu.find('.button').addClass('button-alternate');
				logo.removeClass('dark');
			} else if (appSection.position().top - 70 <= scrollPosition && valveSection.position().top + valveSection.outerHeight() > scrollPosition + 70) {
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
			if (peopleSection.position().top - 70 <= scrollPosition && peopleSection.position().top + peopleSection.outerHeight() > scrollPosition) {
				logo.addClass('dark');
				menu.addClass('dark');
			} else {
				logo.removeClass('dark');
				menu.removeClass('dark');
			}
		}
	}

	// Whatever happens for resolutions under 48.75em
	if (window.matchMedia('(max-width: 48.75em)').matches) {
		// Mobile hamburger menu events
		var headerMenuList = jQuery('.menu-header ul');
		var footerMenuElements = jQuery('.menu-footer li').clone();

		jQuery('.menu-icon').click(function() {
			headerMenuList.append(footerMenuElements);
			jQuery(this).toggleClass('is-open');
			jQuery('header').toggleClass('is-nav-open');
			jQuery('body').toggleClass('no-scroll');
		});
		//--- END mobile hamburger menu

		// Carousel settings
		if(jQuery('.hero-content .carousel').length) {
			jQuery('.hero-content .carousel').owlCarousel({
				navigation: true,
				navigationText: false,
				items: 3,
				itemsDesktop: [1000, 3],
				itemsDesktopSmall: [900, 3],
				itemsTablet: [600, 1],
				itemsMobile: [480, 1],
				singleItem: true
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
				itemsMobile: [480, 1],
				singleItem: true
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
				transitionStyle: 'fade',
				singleItem: true
			});
		}
		//--- END Carousel settings
	}

	// Whatever happens for resolutions over 48.75em
	if (window.matchMedia('(min-width: 48.75em)').matches) {
		jQuery('.section-app').css('z-index', -1);
		// jQuery('.section-system').find('h2').css('opacity', 0);
		// jQuery('.section-system').find('h3').css('opacity', 0);
		// jQuery('.section-system').find('p').css('opacity', 0);
		// jQuery('.section-system').find('.carousel-image').css('opacity', 0);
		jQuery(document).on('scroll', transitions);

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

		// if(jQuery('.hero-content .carousel').length) {
		// 	jQuery('.hero-content .carousel').owlCarousel({
		// 		navigation: true,
		// 		navigationText: false,
		// 		items: 3,
		// 		itemsDesktop: [1000, 3],
		// 		itemsDesktopSmall: [900, 3],
		// 		itemsTablet: [600, 1],
		// 		itemsMobile: [480, 1]
		// 	});
		// }
		//--- END carousel

		// Parallax settings
		if(jQuery('.index .hero .hero-arrow').length) {
			jQuery('.hero .hero-arrow').attr('data-0p-bottom-bottom', 'opacity: 1; ');
			jQuery('.hero .hero-arrow').attr('data--90p-bottom-bottom', 'opacity: 0;');
			jQuery('.hero .hero-arrow').attr('data-anchor-target', '.hero-content');
		}

		if(jQuery('.section-sensor .section-item').length) {
			jQuery('.section-sensor .section-item').eq(0).attr('data--30p-bottom-top', 'opacity: 0; position: relative; top: 40vh;');
			jQuery('.section-sensor .section-item').eq(0).attr('data--10p-center', 'opacity: 1; position: relative; top: 20vh;');
			jQuery('.section-sensor .section-item').eq(0).attr('data--50p-center', 'opacity: 1; position: relative; top: 20vh;');
			jQuery('.section-sensor .section-item').eq(0).attr('data--75p-center', 'opacity: 0; position: relative; top: 0vh;');

			jQuery('.section-sensor .section-item').eq(1).attr('data--50p-bottom-top', 'opacity: 0; position: relative; top: 25vh;');
			jQuery('.section-sensor .section-item').eq(1).attr('data--10p-center', 'opacity: 1; position: relative; top: 20vh;');
			jQuery('.section-sensor .section-item').eq(1).attr('data--50p-center', 'opacity: 1; position: relative; top: 20vh;');
			jQuery('.section-sensor .section-item').eq(1).attr('data--75p-center', 'opacity: 0; position: relative; top: 0vh;');
		}

		if(jQuery('.section-sensor').length) {
			jQuery('.section-sensor').attr('data-120p-top-top', 'background-position: 17.5% 30vh; background-attachment: fixed;');
			jQuery('.section-sensor').attr('data--200p-top-top', 'background-position: 17.5% 15vh; background-attachment: fixed;');
			jQuery('.section-sensor').attr('data--220p-top-top', 'background-position: 17.5% 15vh;');
		}

		if(jQuery('.section-app .carousel-item-1').find('.carousel-content').length) {
			jQuery('.section-app .carousel-item-1').find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
			jQuery('.section-app .carousel-item-1').find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
			jQuery('.section-app .carousel-item-1').find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
			jQuery('.section-app .carousel-item-1').find('.carousel-content').attr('data--5p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item-1').find('.carousel-content').attr('data-anchor-target', '.carousel-item-1');
		}

		if(jQuery('.section-app .carousel-item-1').find('img').length) {
			jQuery('.section-app .carousel-item-1').find('img').attr('data-0p-bottom-bottom', 'display:block; right: 0; top: 0vh; z-index: 0;');
			jQuery('.section-app .carousel-item-1').find('img').attr('data--70p-bottom-bottom', 'display:block; right: 0; position: fixed; top: -2vh; z-index: -1;');
			jQuery('.section-app .carousel-item-1').find('img').attr('data--100p-bottom-bottom', 'display:none;');
			jQuery('.section-app .carousel-item-1').find('img').attr('data-anchor-target', '.carousel-item-1');
		}

		if(jQuery('.section-app .carousel-item-2').find('.carousel-content').length) {
			jQuery('.section-app .carousel-item-2').find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
			jQuery('.section-app .carousel-item-2').find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
			jQuery('.section-app .carousel-item-2').find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
			jQuery('.section-app .carousel-item-2').find('.carousel-content').attr('data--5p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item-2').find('.carousel-content').attr('data-anchor-target', '.carousel-item-2');
		}

		if(jQuery('.section-app .carousel-item-2').find('img').length) {
			jQuery('.section-app .carousel-item-2').find('img').attr('data--0p-bottom-bottom', 'display:none; z-index: -1;');
			jQuery('.section-app .carousel-item-2').find('img').attr('data--20p-bottom-bottom', 'display:block; position: fixed; opacity: 1; right: 0; top: -2vh; z-index: 0;');
			jQuery('.section-app .carousel-item-2').find('img').attr('data--90p-bottom-bottom', 'opacity: 1; position: fixed; top: -4vh; z-index: 0;');
			jQuery('.section-app .carousel-item-2').find('img').attr('data--100p-bottom-bottom', 'display: none;');
			jQuery('.section-app .carousel-item-2').find('img').attr('data-anchor-target', '.carousel-item-2');
		}

		if(jQuery('.section-app .carousel-item-3').find('.carousel-content').length) {
			jQuery('.section-app .carousel-item-3').find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
			jQuery('.section-app .carousel-item-3').find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
			jQuery('.section-app .carousel-item-3').find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
			jQuery('.section-app .carousel-item-3').find('.carousel-content').attr('data--5p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item-3').find('.carousel-content').attr('data-anchor-target', '.carousel-item-3');
		}

		if(jQuery('.section-app .carousel-item-3').find('img').length) {
			jQuery('.section-app .carousel-item-3').find('img').attr('data--0p-bottom-bottom', 'display:none; z-index: -1;');
			jQuery('.section-app .carousel-item-3').find('img').attr('data--20p-bottom-bottom', 'display:block; opacity: 1; right: 0; top: -4vh; z-index: 0;');
			jQuery('.section-app .carousel-item-3').find('img').attr('data--90p-bottom-bottom', 'opacity: 1; position: fixed; top: -6vh; z-index: 0;');
			jQuery('.section-app .carousel-item-3').find('img').attr('data--100p-bottom-bottom', 'display: none;');
			jQuery('.section-app .carousel-item-3').find('img').attr('data-anchor-target', '.carousel-item-3');
		}

		if(jQuery('.section-app .carousel-item-4').find('.carousel-content').length) {
			jQuery('.section-app .carousel-item-4').find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
			jQuery('.section-app .carousel-item-4').find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
			jQuery('.section-app .carousel-item-4').find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
			jQuery('.section-app .carousel-item-4').find('.carousel-content').attr('data--5p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item-4').find('.carousel-content').attr('data-anchor-target', '.carousel-item-4');
		}

		if(jQuery('.section-app .carousel-item-4').find('img').length) {
			jQuery('.section-app .carousel-item-4').find('img').attr('data--0p-bottom-bottom', 'display:none; z-index: -1;');
			jQuery('.section-app .carousel-item-4').find('img').attr('data--20p-bottom-bottom', 'display:block; opacity: 1; right: 0; top: -6vh; z-index: 0;');
			jQuery('.section-app .carousel-item-4').find('img').attr('data--90p-bottom-bottom', 'opacity: 1; position: fixed; top: -8vh; z-index: 0;');
			jQuery('.section-app .carousel-item-4').find('img').attr('data--100p-bottom-bottom', 'display: none;');
			jQuery('.section-app .carousel-item-4').find('img').attr('data-anchor-target', '.carousel-item-4');
		}

		if(jQuery('.section-app .carousel-item-5').find('.carousel-content').length) {
			jQuery('.section-app .carousel-item-5').find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
			jQuery('.section-app .carousel-item-5').find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
			jQuery('.section-app .carousel-item-5').find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
			jQuery('.section-app .carousel-item-5').find('.carousel-content').attr('data--5p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item-5').find('.carousel-content').attr('data-anchor-target', '.carousel-item-5');
		}

		if(jQuery('.section-app .carousel-item-5').find('img').length) {
			jQuery('.section-app .carousel-item-5').find('img').attr('data--0p-bottom-bottom', 'display:none; z-index: -1;');
			jQuery('.section-app .carousel-item-5').find('img').attr('data--20p-bottom-bottom', 'display:block; opacity: 1; right: 0; top: -8vh; z-index: 0;');
			jQuery('.section-app .carousel-item-5').find('img').attr('data--90p-bottom-bottom', 'opacity: 1; position: fixed; top: -10vh; z-index: 0;');
			jQuery('.section-app .carousel-item-5').find('img').attr('data--100p-bottom-bottom', 'display: none;');
			jQuery('.section-app .carousel-item-5').find('img').attr('data-anchor-target', '.carousel-item-5');
		}

		if(jQuery('.section-app .carousel-item-6').find('.carousel-content').length) {
			jQuery('.section-app .carousel-item-6').find('.carousel-content').attr('data-0p-bottom-bottom', 'opacity: 0;');
			jQuery('.section-app .carousel-item-6').find('.carousel-content').attr('data--20p-bottom-bottom', 'opacity: 1;');
			jQuery('.section-app .carousel-item-6').find('.carousel-content').attr('data-0p-top-top', 'opacity: 1;');
			jQuery('.section-app .carousel-item-6').find('.carousel-content').attr('data--5p-top-top', 'opacity: 0;');
			jQuery('.section-app .carousel-item-6').find('.carousel-content').attr('data-anchor-target', '.carousel-item-6');
		}

		if(jQuery('.section-app .carousel-item-6').find('img').length) {
			jQuery('.section-app .carousel-item-6').find('img').attr('data--0p-bottom-bottom', 'display:none; z-index: -1;');
			jQuery('.section-app .carousel-item-6').find('img').attr('data--20p-bottom-bottom', 'display:block; opacity: 1; right: 0; top: -10vh; z-index: 0;');
			jQuery('.section-app .carousel-item-6').find('img').attr('data--90p-bottom-bottom', 'opacity: 1; position: fixed; top: -12vh; z-index: 0;');
			jQuery('.section-app .carousel-item-6').find('img').attr('data--100p-top-top', 'top: -25vh; opacity: 0;');
			jQuery('.section-app .carousel-item-6').find('img').attr('data-anchor-target', '.carousel-item-6');
		}

		if(jQuery('.section-valve').length) {
			jQuery('.section-valve').attr('data-100p-top', 'background-position: 50% 30em;');
			jQuery('.section-valve').attr('data-0p-top-bottom', 'background-position: 50% 15em;');
		}

		if(jQuery('.index .hero .hero-content').eq(1).find('h2').length) {
			jQuery('.hero .hero-content').eq(1).find('h2').attr('data--200p-bottom-bottom', 'position: fixed; top: 10%; opacity: 0; width: 100%;margin: 0;padding: 0; left: 0;');
			jQuery('.hero .hero-content').eq(1).find('h2').attr('data--220p-bottom-bottom', 'position: fixed; top: 10%; opacity: 1; width: 100%;margin: 0;padding: 0; left: 0;');
			jQuery('.hero .hero-content').eq(1).find('h2').attr('data--250p-bottom-bottom', 'position: fixed; top: 10%;');
			jQuery('.hero .hero-content').eq(1).find('h2').attr('data--300p-bottom-bottom', 'position: fixed; top: -25%; opacity: 0;');
			jQuery('.hero .hero-content').eq(1).find('h2').attr('data-anchor-target', '.hero-content');
		}

		if(jQuery('.section-system .carousel-item').eq(0).length) {
			jQuery('.section-system .carousel-item').eq(0).attr('data--25p-bottom-bottom', 'position: fixed; top: 80%; left: 0%; opacity: 0;');
			jQuery('.section-system .carousel-item').eq(0).attr('data--200p-bottom-bottom', 'position: fixed; top: 25%; left: 0%; opacity: 1;');
			jQuery('.section-system .carousel-item').eq(0).attr('data--250p-bottom-bottom', 'opacity: 1; top: 25%;');
			jQuery('.section-system .carousel-item').eq(0).attr('data--300p-bottom-bottom', 'opacity: 0; top: -25%;');
			jQuery('.section-system .carousel-item').eq(0).attr('data-anchor-target', '.hero-content');
		}

		if(jQuery('.section-system .carousel-item').eq(0).find('h3').length) {
			jQuery('.section-system .carousel-item').eq(0).find('h3').attr('data--200p-bottom-bottom', 'position: relative; top: 0; opacity: 0;');
			jQuery('.section-system .carousel-item').eq(0).find('h3').attr('data--220p-bottom-bottom', 'position: relative; top: 0; opacity: 1;');
			jQuery('.section-system .carousel-item').eq(0).find('h3').attr('data-anchor-target', '.hero-content');
		}

		if(jQuery('.section-system .carousel-item').eq(0).find('p').length) {
			jQuery('.section-system .carousel-item').eq(0).find('p').attr('data--200p-bottom-bottom', 'position: relative; top: 0; opacity: 0;');
			jQuery('.section-system .carousel-item').eq(0).find('p').attr('data--220p-bottom-bottom', 'position: relative; top: 0; opacity: 1;');
			jQuery('.section-system .carousel-item').eq(0).find('p').attr('data-anchor-target', '.hero-content');
		}

		if(jQuery('.section-system .carousel-item').eq(1).length) {
			jQuery('.section-system .carousel-item').eq(1).attr('data--50p-bottom-bottom', 'position: fixed; top: 80%; left: 34%; opacity: 0;');
			jQuery('.section-system .carousel-item').eq(1).attr('data--200p-bottom-bottom', 'position: fixed; top: 25%; left: 34%; opacity: 1;');
			jQuery('.section-system .carousel-item').eq(1).attr('data--250p-bottom-bottom', 'opacity: 1; top: 25%;');
			jQuery('.section-system .carousel-item').eq(1).attr('data--300p-bottom-bottom', 'opacity: 0; top: -25%;');
			jQuery('.section-system .carousel-item').eq(1).attr('data-anchor-target', '.hero-content');
		}

		if(jQuery('.section-system .carousel-item').eq(1).find('h3').length) {
			jQuery('.section-system .carousel-item').eq(1).find('h3').attr('data--200p-bottom-bottom', 'position: relative; top: 0em; opacity: 0;');
			jQuery('.section-system .carousel-item').eq(1).find('h3').attr('data--220p-bottom-bottom', 'position: relative; top: 0; opacity: 1;');
			jQuery('.section-system .carousel-item').eq(1).find('h3').attr('data-anchor-target', '.hero-content');
		}

		if(jQuery('.section-system .carousel-item').eq(1).find('p').length) {
			jQuery('.section-system .carousel-item').eq(1).find('p').attr('data--200p-bottom-bottom', 'position: relative; top: 0em; opacity: 0;');
			jQuery('.section-system .carousel-item').eq(1).find('p').attr('data--220p-bottom-bottom', 'position: relative; top: 0; opacity: 1;');
			jQuery('.section-system .carousel-item').eq(1).find('p').attr('data-anchor-target', '.hero-content');
		}


		if(jQuery('.section-system .carousel-item').eq(2).length) {
			jQuery('.section-system .carousel-item').eq(2).attr('data--75p-bottom-bottom', 'position: fixed; top: 80%; left: 68%; opacity: 0;');
			jQuery('.section-system .carousel-item').eq(2).attr('data--200p-bottom-bottom', 'position: fixed; top: 25%; left: 68%; opacity: 1;');
			jQuery('.section-system .carousel-item').eq(2).attr('data--250p-bottom-bottom', 'opacity: 1; top: 25%;');
			jQuery('.section-system .carousel-item').eq(2).attr('data--300p-bottom-bottom', 'opacity: 0; top: -25%;');
			jQuery('.section-system .carousel-item').eq(2).attr('data-anchor-target', '.hero-content');
		}

		if(jQuery('.section-system .carousel-item').eq(2).find('h3').length) {
			jQuery('.section-system .carousel-item').eq(2).find('h3').attr('data--200p-bottom-bottom', 'position: relative; top: 0em; opacity: 0;');
			jQuery('.section-system .carousel-item').eq(2).find('h3').attr('data--220p-bottom-bottom', 'position: relative; top: 0; opacity: 1;');
			jQuery('.section-system .carousel-item').eq(2).find('h3').attr('data-anchor-target', '.hero-content');
		}

		if(jQuery('.section-system .carousel-item').eq(2).find('p').length) {
			jQuery('.section-system .carousel-item').eq(2).find('p').attr('data--200p-bottom-bottom', 'position: relative; top: 0; opacity: 0;');
			jQuery('.section-system .carousel-item').eq(2).find('p').attr('data--220p-bottom-bottom', 'position: relative; top: 0; opacity: 1;');
			jQuery('.section-system .carousel-item').eq(2).find('p').attr('data-anchor-target', '.hero-content');
		}


		if(jQuery('.section-system .carousel-item').eq(0).length) {
			jQuery('.section-system .carousel-item').eq(0).find('.carousel-arrow').attr('data--75p-bottom-bottom', 'width: 0;');
			jQuery('.section-system .carousel-item').eq(0).find('.carousel-arrow').attr('data--200p-bottom-bottom', 'width: 134px;');
			jQuery('.section-system .carousel-item').eq(0).find('.carousel-arrow').attr('data-anchor-target', '.hero-content');
		}

		if(jQuery('.section-system .carousel-item').eq(1).length) {
			jQuery('.section-system .carousel-item').eq(1).find('.carousel-arrow').attr('data--90p-bottom-bottom', 'width: 0;');
			jQuery('.section-system .carousel-item').eq(1).find('.carousel-arrow').attr('data--215p-bottom-bottom', 'width: 134px;');
			jQuery('.section-system .carousel-item').eq(1).find('.carousel-arrow').attr('data-anchor-target', '.hero-content');
		}
		//--- END parallax settings
	}

	if(jQuery('.hero-background').length) {
		jQuery('.hero-background').attr('data-0p-bottom-bottom', 'opacity: 1; position: fixed;');
		jQuery('.hero-background').attr('data--70p-bottom-bottom', 'opacity: 0; position: relative;');
		jQuery('.hero-background').attr('data-anchor-target', '.hero-content');
	}

	if(jQuery('.hero-background-blurred').length) {
		jQuery('.hero-background-blurred').attr('data-0p-bottom-bottom', 'position: fixed; opacity: 1;');
		jQuery('.hero-background-blurred').attr('data--150p-bottom-bottom', 'position: relative; opacity: 0;');
		jQuery('.hero-background-blurred').attr('data-anchor-target', '.hero .container');
	}

	if(jQuery('.index .hero .hero-content').eq(0).find('a').length) {
		jQuery('.hero .hero-content').eq(0).find('a').attr('data-0p-bottom-bottom', 'opacity: 1; ');
		jQuery('.hero .hero-content').eq(0).find('a').attr('data--90p-bottom-bottom', 'opacity: 0;');
		jQuery('.hero .hero-content').eq(0).find('a').attr('data-anchor-target', '.hero-content');
	}

	if(jQuery('.index .hero .hero-content').eq(0).find('h2').length) {
		jQuery('.hero .hero-content').eq(0).find('h2').attr('data-0p-bottom-bottom', 'opacity: 1; ');
		jQuery('.hero .hero-content').eq(0).find('h2').attr('data--90p-bottom-bottom', 'opacity: 0;');
		jQuery('.hero .hero-content').eq(0).find('h2').attr('data-anchor-target', '.hero-content');
	}

	if(jQuery('.index .hero .hero-content').eq(0).find('p').length) {
		jQuery('.hero .hero-content').eq(0).find('p').attr('data-0p-bottom-bottom', 'opacity: 1; ');
		jQuery('.hero .hero-content').eq(0).find('p').attr('data--90p-bottom-bottom', 'opacity: 0;');
		jQuery('.hero .hero-content').eq(0).find('p').attr('data-anchor-target', '.hero-content');
	}

	// Whatever happens on protrait mode
	if (window.matchMedia('(orientation: portrait)').matches) {
		if(jQuery('.section-gallery').find('img').length) {
			jQuery('.section-gallery').find('img').each(function() {
				jQuery(this).attr('src', jQuery(this).attr('data-src'));
			});
		}
	}

	// Whatever happens on iOS
	if(cssua.ua.ios) {
		jQuery('.app-link').unbind('click');
		jQuery('.app-link').attr('href', jQuery('.button-appstore').attr('href'));
	} else {
		// Init parallax plugin (ONLY FOR non-IOS devices)
		if(jQuery('body').hasClass('parallax')) {
			skrollr.init({
				render: function() {
					//console.log(data.curTop);
				},
				mobileCheck: function() {
					//hack - forces mobile version to be off
					return false;
				}
			});
		}
		//--- END parallax plugin
	}

	// Whatever happens on Android
	if(cssua.ua.android) {
		jQuery('.app-link').unbind('click');
		jQuery('.app-link').attr('href', jQuery('.button-googleplay').attr('href'));
	}

	// Whetever happens on OS different than iOS & Android
	// Get the app lightbox event
	if (!cssua.ua.android && !cssua.ua.ios) {
		jQuery('.toggle-lightbox').click(function(e) {
			jQuery('.lightbox').show();
			jQuery('body').toggleClass('no-scroll');

			e.prevenDefault();
			e.stopPropagation();
		});

		jQuery('.lightbox-close').click(function(e) {
			jQuery('.lightbox').hide();
			jQuery('body').toggleClass('no-scroll');

			e.prevenDefault();
			e.stopPropagation();
		});
	}
	//--- END lightbox

	// Everything that follows runs everywhere

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

	// Modal events
	if(jQuery('.modal').length) {
		var iframe = document.getElementById('vimeo-player');
		var player = $f(iframe);

		jQuery('.modal-state').on('change', function() {
			if (jQuery(this).is(':checked')) {
				jQuery('body').addClass('modal-open');
				player.api('play');
			} else {
				jQuery('body').removeClass('modal-open');
				player.api('pause');
			}
		});

		jQuery('.modal-fade-screen, .modal-close').on('click', function() {
			jQuery('.modal-state:checked').prop('checked', false).change();
		});

		jQuery('.modal-inner').on('click', function(e) {
			e.stopPropagation();
		});
	}
	//--- END modal events
})();
