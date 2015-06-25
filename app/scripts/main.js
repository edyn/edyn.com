(function(){
	'use strict';

	// Init
		$(".section-sensor .section-item").not(':eq(0)').hide();
		$(".section-app .carousel-item").not(':eq(0)').hide();
	//--- END init

	// Mobile hamburger menu events
		var headerMenuList = $('.menu-header ul');
		var footerMenuElements = $('.menu-footer li').clone();

		$('.menu-icon').click(function() {
			headerMenuList.append(footerMenuElements);
			$(this).toggleClass('is-open');
		});
	//--- END mobile hamburger menu


	// Press accordion events
		$('.accordion-picture').click(function() {
			var accordion = $(this).parents('.accordion:first'),
				element = $(this).parents('.accordion-item:first');

			accordion.find('.accordion-target').text(element.text());
			accordion.find('.is-active').removeClass('is-active');
			element.addClass('is-active');
		});
	//--- END press accordion

	// Carousel settings
		if (window.matchMedia("(max-width: 47.5em)").matches) {
			$(".carousel").owlCarousel({
				navigation: true,
				navigationText: false,
				items : 3,
				itemsDesktop : [1000,3],
				itemsDesktopSmall : [900,3],
				itemsTablet: [600,1],
				itemsMobile : [480,1]
			});
		}

		if (window.matchMedia("(min-width: 47.5em)").matches) {
			$(".section-gallery .carousel").owlCarousel({
				navigation: true,
				navigationText: false,
				items : 1,
				itemsDesktop : [1000,1],
				itemsDesktopSmall : [900,1],
				itemsTablet: [600,1],
				itemsMobile : [480,1]
			});

			$(".section-system .carousel").owlCarousel({
				navigation: true,
				navigationText: false,
				items : 3,
				itemsDesktop : [1000,3],
				itemsDesktopSmall : [900,3],
				itemsTablet: [600,1],
				itemsMobile : [480,1]
			});
		}
	//--- END carousel settings


	// Parallax transitions
		if (window.matchMedia("(min-width: 47.5em)").matches) {
			// Bind parallax transitions to hero unit
			$(".hero .container").attr("data-start", "opacity: 1;");
			$(".hero .container").attr("data-400-start", "opacity: 0;");

			// Bind parralax transitions to system section elements
			$(".section-system .container").attr("data-start", "opacity: 0; position: relative; top: 200px;");
			$(".section-system .container").attr("data-400-start", "opacity: 1; position: relative; top: 0;");

			// Bind parralax transitions to sensor section elements
			$(".section-sensor").attr("data-600-bottom", "background-position: 0% -40%;");
			$(".section-sensor").attr("data-500-bottom", "background-position: 0% -30%;");
			$(".section-sensor").attr("data-400-bottom", "background-position: 0% -20%;");
			$(".section-sensor").attr("data-300-bottom", "background-position: 0% -10%;");
			$(".section-sensor").attr("data-200-bottom", "background-position: 0% 0%;");
			$(".section-sensor").attr("data-100-bottom", "background-position: 0% 10%;");
			$(".section-sensor").attr("data-bottom", "background-position: 0% 20%;");

			$(".section-sensor .section-item").eq(0).attr("data-650-top", "opacity: 0; top: 50%; position: absolute;");
			$(".section-sensor .section-item").eq(0).attr("data-600-top", "opacity:1; top: 40%; position: absolute;");
			$(".section-sensor .section-item").eq(0).attr("data-450-top", "opacity: 1; top: 10%; position: absolute;");
			$(".section-sensor .section-item").eq(0).attr("data-400-top", "opacity: 0; top: 0%; position: absolute;");

			$(".section-sensor .section-item").eq(1).attr("data--1900-top", "opacity: 0; top: 20%; position: absolute; display: block;");
			$(".section-sensor .section-item").eq(1).attr("data--1850-top", "opacity: 1; top: 70%; position: absolute; display: block;");
			$(".section-sensor .section-item").eq(1).attr("data--1800-top", "opacity: 0; top: 100%; position: absolute; display: block;");

			// $(".section-sensor .section-item").eq(1).attr("data--500-top", "opacity: 0; top: 30%; position: absolute; display: block;");
			// $(".section-sensor .section-item").eq(1).attr("data--200-top", "opacity:1; top: 40%; position: absolute; display: block;");
			// $(".section-sensor .section-item").eq(1).attr("data--100-top", "opacity: 0; top: 60%; position: absolute; display: block;");

			$(".section-app .carousel-item").eq(0).attr("data-650-top", "opacity: 0; top: 50%; position: absolute;");
			$(".section-app .carousel-item").eq(0).attr("data-600-top", "opacity:1; top: 40%; position: absolute;");
			$(".section-app .carousel-item").eq(0).attr("data-450-top", "opacity: 1; top: 10%; position: absolute;");
			$(".section-app .carousel-item").eq(0).attr("data-400-top", "opacity: 0; top: 0%; position: absolute;");

			$(".section-app .carousel-item").eq(1).attr("data-650-top", "opacity: 0; top: 50%; position: absolute;");
			$(".section-app .carousel-item").eq(1).attr("data-600-top", "opacity:1; top: 40%; position: absolute;");
			$(".section-app .carousel-item").eq(1).attr("data-450-top", "opacity: 1; top: 10%; position: absolute;");
			$(".section-app .carousel-item").eq(1).attr("data-400-top", "opacity: 0; top: 0%; position: absolute;");

			$(".section-app .carousel-item").eq(2).attr("data-650-top", "opacity: 0; top: 50%; position: absolute;");
			$(".section-app .carousel-item").eq(2).attr("data-600-top", "opacity:1; top: 40%; position: absolute;");
			$(".section-app .carousel-item").eq(2).attr("data-450-top", "opacity: 1; top: 10%; position: absolute;");
			$(".section-app .carousel-item").eq(2).attr("data-400-top", "opacity: 0; top: 0%; position: absolute;");

			$(".section-app .carousel-item").eq(3).attr("data-650-top", "opacity: 0; top: 50%; position: absolute;");
			$(".section-app .carousel-item").eq(3).attr("data-600-top", "opacity:1; top: 40%; position: absolute;");
			$(".section-app .carousel-item").eq(3).attr("data-450-top", "opacity: 1; top: 10%; position: absolute;");
			$(".section-app .carousel-item").eq(3).attr("data-400-top", "opacity: 0; top: 0%; position: absolute;");
		}

		var s = skrollr.init({
	        render: function(data) {
	            var sectionSystem = $(".section-system");
	            var posSectionSystem = sectionSystem.offset().top;
	            if(data.curTop >= posSectionSystem) {
	            	if(!(sectionSystem.hasClass(".is-blurred"))) {
	            		sectionSystem.addClass("is-blurred");
	            	}
	            } else {
	            	sectionSystem.removeClass("is-blurred");
	            }
	        }
	    });
	//--- END parallax transitions

})();
