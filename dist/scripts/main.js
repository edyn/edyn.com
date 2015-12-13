!function(){"use strict";function t(){var t=jQuery(document).scrollTop(),e=jQuery(".section-system"),o=jQuery(".section-sensor"),a=jQuery(".section-app"),i=jQuery(".section-valve"),n=jQuery(".section-people"),r=jQuery(".menu-header"),p=jQuery(".logo");e.length&&o.length&&a.length&&i.length&&(o.position().top-70<=t&&o.position().top+o.outerHeight()>t+70?(p.addClass("white"),r.addClass("dark"),r.find(".button").addClass("button-alternate"),p.removeClass("dark")):a.position().top-70<=t&&i.position().top+i.outerHeight()>t+70?(p.addClass("dark"),p.removeClass("white")):(p.removeClass("dark"),p.removeClass("white"),r.removeClass("dark"),r.find(".button").removeClass("button-alternate"))),n.length&&(n.position().top-70<=t&&n.position().top+n.outerHeight()>t?(p.addClass("dark"),r.addClass("dark")):(p.removeClass("dark"),r.removeClass("dark")))}if(window.matchMedia("(max-width: 48.75em)").matches){var e=jQuery(".menu-header ul"),o=jQuery(".menu-footer li").clone();jQuery(".menu-icon").click(function(){e.append(o),jQuery(this).toggleClass("is-open"),jQuery("header").toggleClass("is-nav-open"),jQuery("body").toggleClass("no-scroll")}),jQuery(".hero-content .carousel").length&&jQuery(".hero-content .carousel").owlCarousel({navigation:!0,navigationText:!1,items:3,itemsDesktop:[1e3,3],itemsDesktopSmall:[900,3],itemsTablet:[600,1],itemsMobile:[480,1],singleItem:!0}),jQuery(".section-app .carousel").length&&jQuery(".section-app .carousel").owlCarousel({navigation:!0,navigationText:!1,items:3,itemsDesktop:[1e3,3],itemsDesktopSmall:[900,3],itemsTablet:[600,1],itemsMobile:[480,1],singleItem:!0}),jQuery(".section-gallery .carousel").length&&jQuery(".section-gallery .carousel").owlCarousel({navigation:!0,navigationText:!1,items:3,itemsDesktop:[1e3,3],itemsDesktopSmall:[900,3],itemsTablet:[600,1],itemsMobile:[480,1],transitionStyle:"fade",singleItem:!0})}if(window.matchMedia("(min-width: 48.75em)").matches&&(jQuery(".section-app").css("z-index",-1),jQuery(document).on("scroll",t),jQuery(".section-gallery .carousel").length&&jQuery(".section-gallery .carousel").owlCarousel({navigation:!0,navigationText:!1,items:1,itemsDesktop:[1e3,1],itemsDesktopSmall:[900,1],itemsTablet:[600,1],itemsMobile:[480,1],singleItem:!0,transitionStyle:"fade"}),jQuery(".index .hero .hero-arrow").length&&(jQuery(".hero .hero-arrow").attr("data-0p-bottom-bottom","opacity: 1; "),jQuery(".hero .hero-arrow").attr("data--90p-bottom-bottom","opacity: 0;"),jQuery(".hero .hero-arrow").attr("data-anchor-target",".hero-content")),jQuery(".section-sensor .section-item").length&&(jQuery(".section-sensor .section-item").eq(0).attr("data--30p-bottom-top","opacity: 0; position: relative; top: 40vh;"),jQuery(".section-sensor .section-item").eq(0).attr("data--10p-center","opacity: 1; position: relative; top: 20vh;"),jQuery(".section-sensor .section-item").eq(0).attr("data--50p-center","opacity: 1; position: relative; top: 20vh;"),jQuery(".section-sensor .section-item").eq(0).attr("data--75p-center","opacity: 0; position: relative; top: 0vh;"),jQuery(".section-sensor .section-item").eq(1).attr("data--50p-bottom-top","opacity: 0; position: relative; top: 25vh;"),jQuery(".section-sensor .section-item").eq(1).attr("data--10p-center","opacity: 1; position: relative; top: 20vh;"),jQuery(".section-sensor .section-item").eq(1).attr("data--50p-center","opacity: 1; position: relative; top: 20vh;"),jQuery(".section-sensor .section-item").eq(1).attr("data--75p-center","opacity: 0; position: relative; top: 0vh;")),jQuery(".section-sensor").length&&(jQuery(".section-sensor").attr("data-120p-top-top","background-position: 17.5% 30vh; background-attachment: fixed;"),jQuery(".section-sensor").attr("data--200p-top-top","background-position: 17.5% 15vh; background-attachment: fixed;"),jQuery(".section-sensor").attr("data--220p-top-top","background-position: 17.5% 15vh;")),jQuery(".section-app .carousel-item-1").find(".carousel-content").length&&(jQuery(".section-app .carousel-item-1").find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item-1").find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item-1").find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item-1").find(".carousel-content").attr("data--5p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item-1").find(".carousel-content").attr("data-anchor-target",".carousel-item-1")),jQuery(".section-app .carousel-item-1").find("img").length&&(jQuery(".section-app .carousel-item-1").find("img").attr("data-0p-bottom-bottom","display:block; right: 0; top: 0vh; z-index: 0;"),jQuery(".section-app .carousel-item-1").find("img").attr("data--70p-bottom-bottom","display:block; right: 0; position: fixed; top: -2vh; z-index: -1;"),jQuery(".section-app .carousel-item-1").find("img").attr("data--100p-bottom-bottom","display:none;"),jQuery(".section-app .carousel-item-1").find("img").attr("data-anchor-target",".carousel-item-1")),jQuery(".section-app .carousel-item-2").find(".carousel-content").length&&(jQuery(".section-app .carousel-item-2").find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item-2").find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item-2").find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item-2").find(".carousel-content").attr("data--5p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item-2").find(".carousel-content").attr("data-anchor-target",".carousel-item-2")),jQuery(".section-app .carousel-item-2").find("img").length&&(jQuery(".section-app .carousel-item-2").find("img").attr("data--0p-bottom-bottom","display:none; z-index: -1;"),jQuery(".section-app .carousel-item-2").find("img").attr("data--20p-bottom-bottom","display:block; position: fixed; opacity: 1; right: 0; top: -2vh; z-index: 0;"),jQuery(".section-app .carousel-item-2").find("img").attr("data--90p-bottom-bottom","opacity: 1; position: fixed; top: -4vh; z-index: 0;"),jQuery(".section-app .carousel-item-2").find("img").attr("data--100p-bottom-bottom","display: none;"),jQuery(".section-app .carousel-item-2").find("img").attr("data-anchor-target",".carousel-item-2")),jQuery(".section-app .carousel-item-3").find(".carousel-content").length&&(jQuery(".section-app .carousel-item-3").find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item-3").find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item-3").find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item-3").find(".carousel-content").attr("data--5p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item-3").find(".carousel-content").attr("data-anchor-target",".carousel-item-3")),jQuery(".section-app .carousel-item-3").find("img").length&&(jQuery(".section-app .carousel-item-3").find("img").attr("data--0p-bottom-bottom","display:none; z-index: -1;"),jQuery(".section-app .carousel-item-3").find("img").attr("data--20p-bottom-bottom","display:block; opacity: 1; right: 0; top: -4vh; z-index: 0;"),jQuery(".section-app .carousel-item-3").find("img").attr("data--90p-bottom-bottom","opacity: 1; position: fixed; top: -6vh; z-index: 0;"),jQuery(".section-app .carousel-item-3").find("img").attr("data--100p-bottom-bottom","display: none;"),jQuery(".section-app .carousel-item-3").find("img").attr("data-anchor-target",".carousel-item-3")),jQuery(".section-app .carousel-item-4").find(".carousel-content").length&&(jQuery(".section-app .carousel-item-4").find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item-4").find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item-4").find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item-4").find(".carousel-content").attr("data--5p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item-4").find(".carousel-content").attr("data-anchor-target",".carousel-item-4")),jQuery(".section-app .carousel-item-4").find("img").length&&(jQuery(".section-app .carousel-item-4").find("img").attr("data--0p-bottom-bottom","display:none; z-index: -1;"),jQuery(".section-app .carousel-item-4").find("img").attr("data--20p-bottom-bottom","display:block; opacity: 1; right: 0; top: -6vh; z-index: 0;"),jQuery(".section-app .carousel-item-4").find("img").attr("data--90p-bottom-bottom","opacity: 1; position: fixed; top: -8vh; z-index: 0;"),jQuery(".section-app .carousel-item-4").find("img").attr("data--100p-bottom-bottom","display: none;"),jQuery(".section-app .carousel-item-4").find("img").attr("data-anchor-target",".carousel-item-4")),jQuery(".section-app .carousel-item-5").find(".carousel-content").length&&(jQuery(".section-app .carousel-item-5").find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item-5").find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item-5").find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item-5").find(".carousel-content").attr("data--5p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item-5").find(".carousel-content").attr("data-anchor-target",".carousel-item-5")),jQuery(".section-app .carousel-item-5").find("img").length&&(jQuery(".section-app .carousel-item-5").find("img").attr("data--0p-bottom-bottom","display:none; z-index: -1;"),jQuery(".section-app .carousel-item-5").find("img").attr("data--20p-bottom-bottom","display:block; opacity: 1; right: 0; top: -8vh; z-index: 0;"),jQuery(".section-app .carousel-item-5").find("img").attr("data--90p-bottom-bottom","opacity: 1; position: fixed; top: -10vh; z-index: 0;"),jQuery(".section-app .carousel-item-5").find("img").attr("data--100p-bottom-bottom","display: none;"),jQuery(".section-app .carousel-item-5").find("img").attr("data-anchor-target",".carousel-item-5")),jQuery(".section-app .carousel-item-6").find(".carousel-content").length&&(jQuery(".section-app .carousel-item-6").find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item-6").find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item-6").find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item-6").find(".carousel-content").attr("data--5p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item-6").find(".carousel-content").attr("data-anchor-target",".carousel-item-6")),jQuery(".section-app .carousel-item-6").find("img").length&&(jQuery(".section-app .carousel-item-6").find("img").attr("data--0p-bottom-bottom","display:none; z-index: -1;"),jQuery(".section-app .carousel-item-6").find("img").attr("data--20p-bottom-bottom","display:block; opacity: 1; right: 0; top: -10vh; z-index: 0;"),jQuery(".section-app .carousel-item-6").find("img").attr("data--90p-bottom-bottom","opacity: 1; position: fixed; top: -12vh; z-index: 0;"),jQuery(".section-app .carousel-item-6").find("img").attr("data--100p-top-top","top: -25vh; opacity: 0;"),jQuery(".section-app .carousel-item-6").find("img").attr("data-anchor-target",".carousel-item-6")),jQuery(".section-valve").length&&(jQuery(".section-valve").attr("data-100p-top","background-position: 50% 30em;"),jQuery(".section-valve").attr("data-0p-top-bottom","background-position: 50% 15em;")),jQuery(".index .hero .hero-content").eq(1).find("h2").length&&(jQuery(".hero .hero-content").eq(1).find("h2").attr("data--200p-bottom-bottom","position: fixed; top: 10%; opacity: 0; width: 100%;margin: 0;padding: 0; left: 0;"),jQuery(".hero .hero-content").eq(1).find("h2").attr("data--220p-bottom-bottom","position: fixed; top: 10%; opacity: 1; width: 100%;margin: 0;padding: 0; left: 0;"),jQuery(".hero .hero-content").eq(1).find("h2").attr("data--250p-bottom-bottom","position: fixed; top: 10%;"),jQuery(".hero .hero-content").eq(1).find("h2").attr("data--300p-bottom-bottom","position: fixed; top: -25%; opacity: 0;"),jQuery(".hero .hero-content").eq(1).find("h2").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(0).length&&(jQuery(".section-system .carousel-item").eq(0).attr("data--25p-bottom-bottom","position: fixed; top: 80%; left: 0%; opacity: 0;"),jQuery(".section-system .carousel-item").eq(0).attr("data--200p-bottom-bottom","position: fixed; top: 25%; left: 0%; opacity: 1;"),jQuery(".section-system .carousel-item").eq(0).attr("data--250p-bottom-bottom","opacity: 1; top: 25%;"),jQuery(".section-system .carousel-item").eq(0).attr("data--300p-bottom-bottom","opacity: 0; top: -25%;"),jQuery(".section-system .carousel-item").eq(0).attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(0).find("h3").length&&(jQuery(".section-system .carousel-item").eq(0).find("h3").attr("data--200p-bottom-bottom","position: relative; top: 0; opacity: 0;"),jQuery(".section-system .carousel-item").eq(0).find("h3").attr("data--220p-bottom-bottom","position: relative; top: 0; opacity: 1;"),jQuery(".section-system .carousel-item").eq(0).find("h3").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(0).find("p").length&&(jQuery(".section-system .carousel-item").eq(0).find("p").attr("data--200p-bottom-bottom","position: relative; top: 0; opacity: 0;"),jQuery(".section-system .carousel-item").eq(0).find("p").attr("data--220p-bottom-bottom","position: relative; top: 0; opacity: 1;"),jQuery(".section-system .carousel-item").eq(0).find("p").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(1).length&&(jQuery(".section-system .carousel-item").eq(1).attr("data--50p-bottom-bottom","position: fixed; top: 80%; left: 34%; opacity: 0;"),jQuery(".section-system .carousel-item").eq(1).attr("data--200p-bottom-bottom","position: fixed; top: 25%; left: 34%; opacity: 1;"),jQuery(".section-system .carousel-item").eq(1).attr("data--250p-bottom-bottom","opacity: 1; top: 25%;"),jQuery(".section-system .carousel-item").eq(1).attr("data--300p-bottom-bottom","opacity: 0; top: -25%;"),jQuery(".section-system .carousel-item").eq(1).attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(1).find("h3").length&&(jQuery(".section-system .carousel-item").eq(1).find("h3").attr("data--200p-bottom-bottom","position: relative; top: 0em; opacity: 0;"),jQuery(".section-system .carousel-item").eq(1).find("h3").attr("data--220p-bottom-bottom","position: relative; top: 0; opacity: 1;"),jQuery(".section-system .carousel-item").eq(1).find("h3").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(1).find("p").length&&(jQuery(".section-system .carousel-item").eq(1).find("p").attr("data--200p-bottom-bottom","position: relative; top: 0em; opacity: 0;"),jQuery(".section-system .carousel-item").eq(1).find("p").attr("data--220p-bottom-bottom","position: relative; top: 0; opacity: 1;"),jQuery(".section-system .carousel-item").eq(1).find("p").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(2).length&&(jQuery(".section-system .carousel-item").eq(2).attr("data--75p-bottom-bottom","position: fixed; top: 80%; left: 68%; opacity: 0;"),jQuery(".section-system .carousel-item").eq(2).attr("data--200p-bottom-bottom","position: fixed; top: 25%; left: 68%; opacity: 1;"),jQuery(".section-system .carousel-item").eq(2).attr("data--250p-bottom-bottom","opacity: 1; top: 25%;"),jQuery(".section-system .carousel-item").eq(2).attr("data--300p-bottom-bottom","opacity: 0; top: -25%;"),jQuery(".section-system .carousel-item").eq(2).attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(2).find("h3").length&&(jQuery(".section-system .carousel-item").eq(2).find("h3").attr("data--200p-bottom-bottom","position: relative; top: 0em; opacity: 0;"),jQuery(".section-system .carousel-item").eq(2).find("h3").attr("data--220p-bottom-bottom","position: relative; top: 0; opacity: 1;"),jQuery(".section-system .carousel-item").eq(2).find("h3").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(2).find("p").length&&(jQuery(".section-system .carousel-item").eq(2).find("p").attr("data--200p-bottom-bottom","position: relative; top: 0; opacity: 0;"),jQuery(".section-system .carousel-item").eq(2).find("p").attr("data--220p-bottom-bottom","position: relative; top: 0; opacity: 1;"),jQuery(".section-system .carousel-item").eq(2).find("p").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(0).length&&(jQuery(".section-system .carousel-item").eq(0).find(".carousel-arrow").attr("data--75p-bottom-bottom","width: 0;"),jQuery(".section-system .carousel-item").eq(0).find(".carousel-arrow").attr("data--200p-bottom-bottom","width: 134px;"),jQuery(".section-system .carousel-item").eq(0).find(".carousel-arrow").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(1).length&&(jQuery(".section-system .carousel-item").eq(1).find(".carousel-arrow").attr("data--90p-bottom-bottom","width: 0;"),jQuery(".section-system .carousel-item").eq(1).find(".carousel-arrow").attr("data--215p-bottom-bottom","width: 134px;"),jQuery(".section-system .carousel-item").eq(1).find(".carousel-arrow").attr("data-anchor-target",".hero-content"))),jQuery(".hero-background").length&&(jQuery(".hero-background").attr("data-0p-bottom-bottom","opacity: 1; position: fixed;"),jQuery(".hero-background").attr("data--70p-bottom-bottom","opacity: 0; position: relative;"),jQuery(".hero-background").attr("data-anchor-target",".hero-content")),jQuery(".hero-background-blurred").length&&(jQuery(".hero-background-blurred").attr("data-0p-bottom-bottom","position: fixed; opacity: 1;"),jQuery(".hero-background-blurred").attr("data--150p-bottom-bottom","position: relative; opacity: 0;"),jQuery(".hero-background-blurred").attr("data-anchor-target",".hero .container")),jQuery(".index .hero .hero-content").eq(0).find("a").length&&(jQuery(".hero .hero-content").eq(0).find("a").attr("data-0p-bottom-bottom","opacity: 1; "),jQuery(".hero .hero-content").eq(0).find("a").attr("data--90p-bottom-bottom","opacity: 0;"),jQuery(".hero .hero-content").eq(0).find("a").attr("data-anchor-target",".hero-content")),jQuery(".index .hero .hero-content").eq(0).find("h2").length&&(jQuery(".hero .hero-content").eq(0).find("h2").attr("data-0p-bottom-bottom","opacity: 1; "),jQuery(".hero .hero-content").eq(0).find("h2").attr("data--90p-bottom-bottom","opacity: 0;"),jQuery(".hero .hero-content").eq(0).find("h2").attr("data-anchor-target",".hero-content")),jQuery(".index .hero .hero-content").eq(0).find("p").length&&(jQuery(".hero .hero-content").eq(0).find("p").attr("data-0p-bottom-bottom","opacity: 1; "),jQuery(".hero .hero-content").eq(0).find("p").attr("data--90p-bottom-bottom","opacity: 0;"),jQuery(".hero .hero-content").eq(0).find("p").attr("data-anchor-target",".hero-content")),window.matchMedia("(orientation: portrait)").matches&&jQuery(".section-gallery").find("img").length&&jQuery(".section-gallery").find("img").each(function(){jQuery(this).attr("src",jQuery(this).attr("data-src"))}),cssua.ua.ios?(jQuery(".app-link").unbind("click"),jQuery(".app-link").attr("href",jQuery(".button-appstore").attr("href"))):jQuery("body").hasClass("parallax")&&skrollr.init({render:function(){},mobileCheck:function(){return!1}}),cssua.ua.android&&(jQuery(".app-link").unbind("click"),jQuery(".app-link").attr("href",jQuery(".button-googleplay").attr("href"))),cssua.ua.android||cssua.ua.ios||(jQuery(".toggle-lightbox").click(function(t){jQuery(".lightbox").show(),jQuery("body").toggleClass("no-scroll"),t.prevenDefault(),t.stopPropagation()}),jQuery(".lightbox-close").click(function(t){jQuery(".lightbox").hide(),jQuery("body").toggleClass("no-scroll"),t.prevenDefault(),t.stopPropagation()})),jQuery(".accordion-picture").length&&jQuery(".accordion-picture").click(function(){var t=jQuery(this).parents(".accordion:first"),e=jQuery(this).parents(".accordion-item:first");t.find(".accordion-target").text(e.text()),t.find(".is-active").removeClass("is-active"),e.addClass("is-active")}),jQuery(".content-sidebar").length&&jQuery(document).on("scroll",function(){jQuery(document).scrollTop()>65?jQuery(".content-wrapper").addClass("fixed"):jQuery(".content-wrapper").removeClass("fixed")}),jQuery(".modal").length){var a=document.getElementById("vimeo-player"),i=$f(a);jQuery(".modal-state").on("change",function(){jQuery(this).is(":checked")?(jQuery("body").addClass("modal-open"),i.api("play")):(jQuery("body").removeClass("modal-open"),i.api("pause"))}),jQuery(".modal-fade-screen, .modal-close").on("click",function(){jQuery(".modal-state:checked").prop("checked",!1).change()}),jQuery(".modal-inner").on("click",function(t){t.stopPropagation()})}}(),function(){"use strict";function t(){$(".shipping-info .form-control").each(function(){var t=$(this),e=$("input[name="+t.data("bind-input")+"]");e.val(t.val())})}function e(){var t={user_id:"5654f01bd5ec870300f24037",buyer:{first_name:jQuery("#input-first-name").val(),last_name:jQuery("#input-last-name").val(),email:jQuery("#input-email").val(),company:jQuery("#input-company").val(),phone:jQuery("#input-telephone").val()},shipping_address:{line1:jQuery("#input-shipping-address-line-1").val(),line2:jQuery("#input-shipping-address-line-2").val(),city:jQuery("#input-shipping-city").val(),state:jQuery("#input-shipping-state").val(),zip:jQuery("#input-shipping-zip").val(),country:jQuery("#input-shipping-country").val(),phone:jQuery("#input-shipping-telephone").val()},payment_source:{card:{number:jQuery("#input-card-number").val(),exp_month:jQuery("#input-card-month").val(),exp_year:jQuery("#input-card-year").val(),cvc:jQuery("#input-card-code").val()}},line_items:[{product_id:"5654f1c5d5ec870300f24039",quantity:jQuery("#input-select-count").val()}]};t.billing_address=jQuery("#input-billing:checked").length?{line1:jQuery("#input-shipping-address-line-1").val(),line2:jQuery("#input-shipping-address-line-2").val(),city:jQuery("#input-shipping-city").val(),state:jQuery("#input-shipping-state").val(),zip:jQuery("#input-shipping-zip").val(),country:jQuery("#input-shipping-country").val(),phone:jQuery("#input-shipping-telephone").val()}:{line1:jQuery("#input-address-line-1").val(),line2:jQuery("#input-address-line-2").val(),city:jQuery("#input-city").val(),state:jQuery("#input-state").val(),zip:jQuery("#input-zip").val(),country:jQuery("#input-country").val(),phone:jQuery("#input-telephone").val()};var e=new Celery({userId:"5654f01bd5ec870300f24037"});e.serializeOrder(t).done(function(t){jQuery(".price-subtotal").text("$"+t.data.subtotal/100),jQuery(".price-shipping").text("$"+t.data.shipping/100),jQuery(".price-tax").text("$"+t.data.taxes/100),jQuery("#input-shipping-state").val()&&jQuery("#input-shipping-country").val()&&jQuery("#input-shipping-zip").val()&&jQuery(".price-total").text("$"+t.data.total/100)})}function o(){jQuery(".price-subtotal").text(""),jQuery(".price-shipping").text(""),jQuery(".price-tax").text(""),jQuery(".price-total").text("")}function a(){var t={user_id:"5654f01bd5ec870300f24037",buyer:{first_name:jQuery("#input-first-name").val(),last_name:jQuery("#input-last-name").val(),email:jQuery("#input-email").val(),company:jQuery("#input-company").val(),phone:jQuery("#input-telephone").val()},shipping_address:{line1:jQuery("#input-shipping-address-line-1").val(),line2:jQuery("#input-shipping-address-line-2").val(),city:jQuery("#input-shipping-city").val(),state:jQuery("#input-shipping-state").val(),zip:jQuery("#input-shipping-zip").val(),country:jQuery("#input-shipping-country").val(),phone:jQuery("#input-shipping-telephone").val()},payment_source:{card:{number:jQuery("#input-card-number").val(),exp_month:jQuery("#input-card-month").val(),exp_year:jQuery("#input-card-year").val(),cvc:jQuery("#input-card-code").val()}},line_items:[{product_id:"5654f1c5d5ec870300f24039",quantity:jQuery("#input-select-count").val()}]};t.billing_address=jQuery("#input-billing:checked").length?{line1:jQuery("#input-shipping-address-line-1").val(),line2:jQuery("#input-shipping-address-line-2").val(),city:jQuery("#input-shipping-city").val(),state:jQuery("#input-shipping-state").val(),zip:jQuery("#input-shipping-zip").val(),country:jQuery("#input-shipping-country").val(),phone:jQuery("#input-shipping-telephone").val()}:{line1:jQuery("#input-address-line-1").val(),line2:jQuery("#input-address-line-2").val(),city:jQuery("#input-city").val(),state:jQuery("#input-state").val(),zip:jQuery("#input-zip").val(),country:jQuery("#input-country").val(),phone:jQuery("#input-telephone").val()};var e=new Celery({userId:"5654f01bd5ec870300f24037"});e.createOrder(t).done(function(t){$.ajax({type:"POST",data:JSON.stringify(t.data),contentType:"application/json",url:"/confirmation",success:function(t){$(".content-wrapper").html(t)}})}).fail(function(t){$("#placeOrder").val("Place Order"),$("#placeOrder").removeAttr("disabled"),swal({title:"An error has occurred.",text:t.responseJSON.meta.error.message,type:"error",confirmButtonText:"Close",confirmButtonColor:"#f9c000"})})}for(var i=(new Date).getFullYear(),n=i+20,r=document.getElementById("input-card-year"),p=i;n>=p;p++){var s=document.createElement("option");s.value=p,s.innerHTML=p,r.appendChild(s)}$(".shipping-info .form-control").bind("paste keyup",t),jQuery("#input-billing").click(function(){jQuery("#input-billing:checked").length?($(".shipping-info .form-control").bind("paste keyup",t),t(),jQuery(".billing-info").hide()):($(".shipping-info .form-control").unbind("paste keyup",t),$(".billing-info .form-control").val(""),jQuery(".billing-info").show())}),jQuery("#input-select-count").on("change",function(t){jQuery("#input-count").val(jQuery("#input-select-count").val()),e()}),jQuery("#input-shipping-state").on("change",function(t){jQuery("#input-shipping-city").val().length&&e()}),jQuery("#input-shipping-country").on("change",function(t){jQuery("#input-shipping-zip").val().length&&e()}),jQuery("#input-shipping-zip").on("blur",function(t){jQuery("#input-shipping-zip").val().length&&e()}),jQuery("#input-count").length&&(jQuery(".input-count-up, .input-count-plus").click(function(t){var o=parseFloat(jQuery("#input-count").val()),a=o+1;jQuery("#input-count").val(a),jQuery("#input-select-count").val(a),e(),t.preventDefault(),t.stopPropagation()}),jQuery(".input-count-down, .input-count-minus").click(function(t){var o=parseFloat(jQuery("#input-count").val());if(o>0){var a=o-1;jQuery("#input-count").val(a),jQuery("#input-select-count").val(a),e(),t.preventDefault(),t.stopPropagation()}}),jQuery(".input-count-trash").click(function(t){jQuery(".input-count input").val(0),jQuery("#input-select-count").val(0),o(),t.preventDefault(),t.stopPropagation()})),jQuery("#form").on("submit",function(t){return!1}),jQuery("#form").validetta({realTime:!0,onValid:function(t){$("#placeOrder").val("Hold On..."),$("#placeOrder").attr("disabled","disabled"),a()},onError:function(){}})}();