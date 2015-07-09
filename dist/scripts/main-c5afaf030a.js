!function(){"use strict";function t(){var t=jQuery(document).scrollTop(),e=jQuery(".section-system"),o=jQuery(".section-sensor"),a=jQuery(".section-app"),i=jQuery(".section-valve"),r=jQuery(".section-people"),n=jQuery(".menu-header"),c=jQuery(".logo"),s=jQuery(".hero");e.length&&o.length&&a.length&&i.length&&(e.position().top<=t+400&&e.position().top+e.outerHeight()>t+400?jQuery(e.find(".carousel-item")).each(function(t){jQuery(this).find(".carousel-image").addClass("animated slideInUp"+(t+1)),jQuery(this).find("h3").addClass("animated fadeInUp"+(t+1)),jQuery(this).find("p").addClass("animated fadeInUp"+(t+1)),jQuery(e.find("h2")).addClass("animated fadeInUp"),window.setTimeout(function(){jQuery(e.find(".carousel-item").eq(0)).addClass("animated")},1600),window.setTimeout(function(){jQuery(e.find(".carousel-item").eq(1)).addClass("animated")},1800)}):o.position().top-5<=t&&o.position().top+o.outerHeight()>t-5?(c.addClass("white"),n.addClass("dark"),n.find(".button").addClass("button-alternate"),c.removeClass("dark")):a.position().top-5<=t&&i.position().top+i.outerHeight()>t-5?(c.addClass("dark"),c.removeClass("white")):(c.removeClass("dark"),c.removeClass("white"),n.removeClass("dark"),n.find(".button").removeClass("button-alternate"))),r.length&&(r.position().top-5<=t&&r.position().top+r.outerHeight()>t-5?(c.addClass("dark"),n.addClass("dark")):(c.removeClass("dark"),n.removeClass("dark"))),window.matchMedia("(max-width: 47.5em)").matches&&(0>=t?s.find(".hero-background").removeClass("blurred"):s.find(".hero-background").addClass("blurred"))}if(window.matchMedia("(max-width: 47.5em)").matches){var e=jQuery(".menu-header ul"),o=jQuery(".menu-footer li").clone();jQuery(".menu-icon").click(function(){e.append(o),jQuery(this).toggleClass("is-open"),jQuery("body").toggleClass("no-scroll")}),jQuery(".hero-content .carousel").length&&jQuery(".hero-content .carousel").owlCarousel({navigation:!0,navigationText:!1,items:3,itemsDesktop:[1e3,3],itemsDesktopSmall:[900,3],itemsTablet:[600,1],itemsMobile:[480,1]}),jQuery(".section-app .carousel").length&&jQuery(".section-app .carousel").owlCarousel({navigation:!0,navigationText:!1,items:3,itemsDesktop:[1e3,3],itemsDesktopSmall:[900,3],itemsTablet:[600,1],itemsMobile:[480,1]}),jQuery(".section-gallery .carousel").length&&jQuery(".section-gallery .carousel").owlCarousel({navigation:!0,navigationText:!1,items:3,itemsDesktop:[1e3,3],itemsDesktopSmall:[900,3],itemsTablet:[600,1],itemsMobile:[480,1],transitionStyle:"fade"})}window.matchMedia("(min-width: 47.5em)").matches&&(jQuery(".section-gallery .carousel").length&&jQuery(".section-gallery .carousel").owlCarousel({navigation:!0,navigationText:!1,items:1,itemsDesktop:[1e3,1],itemsDesktopSmall:[900,1],itemsTablet:[600,1],itemsMobile:[480,1],singleItem:!0,transitionStyle:"fade"}),jQuery(".hero-content .carousel").length&&jQuery(".hero-content .carousel").owlCarousel({navigation:!0,navigationText:!1,items:3,itemsDesktop:[1e3,3],itemsDesktopSmall:[900,3],itemsTablet:[600,1],itemsMobile:[480,1]}),jQuery(".hero-background").length&&(jQuery(".hero-background").attr("data-0p-bottom-bottom","opacity: 1;"),jQuery(".hero-background").attr("data--70p-bottom-bottom","opacity: 0;"),jQuery(".hero-background").attr("data-anchor-target",".hero-content")),jQuery(".section-sensor .section-item").length&&(jQuery(".section-sensor .section-item:first").attr("data-0-bottom-bottom","opacity: 0; position: relative; top: 40vh;"),jQuery(".section-sensor .section-item:first").attr("data--50p-bottom-bottom","opacity: 1; position: relative; top: 20vh;"),jQuery(".section-sensor .section-item:first").attr("data-0p-top-top","opacity: 1; position: relative; top: 20vh;"),jQuery(".section-sensor .section-item:first").attr("data--20p-top-top","opacity: 0; position: relative; top: 0vh;"),jQuery(".section-sensor .section-item").eq(1).attr("data-0-bottom-bottom","opacity: 0; position: relative; top: 20vh;"),jQuery(".section-sensor .section-item").eq(1).attr("data--50p-bottom-bottom","opacity: 1; position: relative; top: 0vh;"),jQuery(".section-sensor .section-item").eq(1).attr("data-0p-top-top","opacity: 1; position: relative; top: 0vh;"),jQuery(".section-sensor .section-item").eq(1).attr("data--20p-top-top","opacity: 0; position: relative; top: -20vh;")),jQuery(".section-sensor").length&&(jQuery(".section-sensor").attr("data-20p-top-top","background-position: 10% 30vh; background-attachment: fixed;"),jQuery(".section-sensor").attr("data--80p-top-top","background-position: 10% 15vh; background-attachment: fixed;"),jQuery(".section-sensor").attr("data--120p-top-top","background-position: 10% 0vh; ")),jQuery(".section-app .carousel-item").eq(0).find(".carousel-content").length&&(jQuery(".section-app .carousel-item").eq(0).find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item").eq(0).find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item").eq(0).find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item").eq(0).find(".carousel-content").attr("data--10p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item").eq(0).find(".carousel-content").attr("data-anchor-target",".carousel-item-1")),jQuery(".section-app .carousel-item").eq(0).find("img").length&&(jQuery(".section-app .carousel-item").eq(0).find("img").attr("data--10p-bottom-bottom","display:block; opacity: 0; right: 0; top: 20vh;"),jQuery(".section-app .carousel-item").eq(0).find("img").attr("data--60p-bottom-bottom","opacity: 1; position: fixed; top: 18vh;"),jQuery(".section-app .carousel-item").eq(0).find("img").attr("data--17p-top-top","display: none;"),jQuery(".section-app .carousel-item").eq(0).find("img").attr("data-anchor-target",".carousel-item-1")),jQuery(".section-app .carousel-item").eq(1).find(".carousel-content").length&&(jQuery(".section-app .carousel-item").eq(1).find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item").eq(1).find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item").eq(1).find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item").eq(1).find(".carousel-content").attr("data--10p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item").eq(1).find(".carousel-content").attr("data-anchor-target",".carousel-item-2")),jQuery(".section-app .carousel-item").eq(1).find("img").length&&(jQuery(".section-app .carousel-item").eq(1).find("img").attr("data--20p-bottom-bottom","opacity: 0; right: 0; top: 18vh;"),jQuery(".section-app .carousel-item").eq(1).find("img").attr("data--40p-bottom-bottom","display:block; opacity: 1; right: 0; top: 18vh;"),jQuery(".section-app .carousel-item").eq(1).find("img").attr("data--60p-bottom-bottom","opacity: 1; position: fixed; top: 16vh;"),jQuery(".section-app .carousel-item").eq(1).find("img").attr("data--17p-top-top","display: none;"),jQuery(".section-app .carousel-item").eq(1).find("img").attr("data-anchor-target",".carousel-item-2")),jQuery(".section-app .carousel-item").eq(2).find(".carousel-content").length&&(jQuery(".section-app .carousel-item").eq(2).find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item").eq(2).find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item").eq(2).find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item").eq(2).find(".carousel-content").attr("data--10p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item").eq(2).find(".carousel-content").attr("data-anchor-target",".carousel-item-3")),jQuery(".section-app .carousel-item").eq(2).find("img").length&&(jQuery(".section-app .carousel-item").eq(2).find("img").attr("data--20p-bottom-bottom","opacity: 0; right: 0; top: 16vh;"),jQuery(".section-app .carousel-item").eq(2).find("img").attr("data--40p-bottom-bottom","display:block; opacity: 1; right: 0; top: 16vh;"),jQuery(".section-app .carousel-item").eq(2).find("img").attr("data--60p-bottom-bottom","opacity: 1; position: fixed; top: 14vh;"),jQuery(".section-app .carousel-item").eq(2).find("img").attr("data--17p-top-top","display: none;"),jQuery(".section-app .carousel-item").eq(2).find("img").attr("data-anchor-target",".carousel-item-3")),jQuery(".section-app .carousel-item").eq(3).find(".carousel-content").length&&(jQuery(".section-app .carousel-item").eq(3).find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item").eq(3).find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item").eq(3).find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item").eq(3).find(".carousel-content").attr("data--10p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item").eq(3).find(".carousel-content").attr("data-anchor-target",".carousel-item-4")),jQuery(".section-app .carousel-item").eq(3).find("img").length&&(jQuery(".section-app .carousel-item").eq(3).find("img").attr("data--20p-bottom-bottom","opacity: 0; right: 0; top: 14vh;"),jQuery(".section-app .carousel-item").eq(3).find("img").attr("data--40p-bottom-bottom","display:block; opacity: 1; right: 0; top: 14vh;"),jQuery(".section-app .carousel-item").eq(3).find("img").attr("data--60p-bottom-bottom","opacity: 1; position: fixed; top: 12vh;"),jQuery(".section-app .carousel-item").eq(3).find("img").attr("data--17p-top-top","display: none;"),jQuery(".section-app .carousel-item").eq(3).find("img").attr("data-anchor-target",".carousel-item-4")),jQuery(".section-app .carousel-item").eq(4).find(".carousel-content").length&&(jQuery(".section-app .carousel-item").eq(4).find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item").eq(4).find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item").eq(4).find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item").eq(4).find(".carousel-content").attr("data--10p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item").eq(4).find(".carousel-content").attr("data-anchor-target",".carousel-item-5")),jQuery(".section-app .carousel-item").eq(4).find("img").length&&(jQuery(".section-app .carousel-item").eq(4).find("img").attr("data--20p-bottom-bottom","opacity: 0; right: 0; top: 12vh;"),jQuery(".section-app .carousel-item").eq(4).find("img").attr("data--40p-bottom-bottom","display:block; opacity: 1; right: 0; top: 12vh;"),jQuery(".section-app .carousel-item").eq(4).find("img").attr("data--60p-bottom-bottom","opacity: 1; position: fixed; top: 10vh;"),jQuery(".section-app .carousel-item").eq(4).find("img").attr("data--17p-top-top","display: none;"),jQuery(".section-app .carousel-item").eq(4).find("img").attr("data-anchor-target",".carousel-item-5")),jQuery(".section-app .carousel-item").eq(5).find(".carousel-content").length&&(jQuery(".section-app .carousel-item").eq(5).find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item").eq(5).find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item").eq(5).find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item").eq(5).find(".carousel-content").attr("data--10p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item").eq(5).find(".carousel-content").attr("data-anchor-target",".carousel-item-6")),jQuery(".section-app .carousel-item").eq(5).find("img").length&&(jQuery(".section-app .carousel-item").eq(5).find("img").attr("data--20p-bottom-bottom","opacity: 0; right: 0; top: 10vh;"),jQuery(".section-app .carousel-item").eq(5).find("img").attr("data--40p-bottom-bottom","display:block; opacity: 1; right: 0; top: 10vh;"),jQuery(".section-app .carousel-item").eq(5).find("img").attr("data--60p-bottom-bottom","opacity: 1; position: fixed; top: 8vh;"),jQuery(".section-app .carousel-item").eq(5).find("img").attr("data--17p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item").eq(5).find("img").attr("data-anchor-target",".carousel-item-6")),jQuery(".section-valve").length&&(jQuery(".section-valve").attr("data--10p-top-top","background-position: 50% 25em;"),jQuery(".section-valve").attr("data--40p-top-top","background-position: 50% 20em;"))),jQuery(".home .hero .hero-content").eq(0).find("a").length&&(jQuery(".hero .hero-content").eq(0).find("a").attr("data-0p-bottom-bottom","opacity: 1; "),jQuery(".hero .hero-content").eq(0).find("a").attr("data--90p-bottom-bottom","opacity: 0;"),jQuery(".hero .hero-content").eq(0).find("a").attr("data-anchor-target",".hero-content")),jQuery(".home .hero .hero-content").eq(0).find("h2").length&&(jQuery(".hero .hero-content").eq(0).find("h2").attr("data-0p-bottom-bottom","opacity: 1; "),jQuery(".hero .hero-content").eq(0).find("h2").attr("data--90p-bottom-bottom","opacity: 0;"),jQuery(".hero .hero-content").eq(0).find("h2").attr("data-anchor-target",".hero-content")),jQuery(".home .hero .hero-content").eq(0).find("p").length&&(jQuery(".hero .hero-content").eq(0).find("p").attr("data-0p-bottom-bottom","opacity: 1; "),jQuery(".hero .hero-content").eq(0).find("p").attr("data--90p-bottom-bottom","opacity: 0;"),jQuery(".hero .hero-content").eq(0).find("p").attr("data-anchor-target",".hero-content")),jQuery(".home .hero .hero-arrow").length&&(jQuery(".hero .hero-arrow").attr("data-0p-bottom-bottom","opacity: 1; "),jQuery(".hero .hero-arrow").attr("data--90p-bottom-bottom","opacity: 0;"),jQuery(".hero .hero-arrow").attr("data-anchor-target",".hero-content")),window.matchMedia("(orientation: portrait)").matches&&jQuery(".section-gallery").find("img").length&&jQuery(".section-gallery").find("img").each(function(){jQuery(this).attr("src",jQuery(this).attr("data-src"))}),skrollr.init({render:function(){},mobileCheck:function(){return!1}}),jQuery(".accordion-picture").length&&jQuery(".accordion-picture").click(function(){var t=jQuery(this).parents(".accordion:first"),e=jQuery(this).parents(".accordion-item:first");t.find(".accordion-target").text(e.text()),t.find(".is-active").removeClass("is-active"),e.addClass("is-active")}),jQuery(document).on("scroll",t)}();