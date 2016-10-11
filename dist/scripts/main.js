!function(){"use strict";function t(){function t(t,e,o){var a=70,i=r+a,n=t.position().top,s=e.position().top+e.outerHeight(),c=o?r:i;return i>=n&&s>c}var e=jQuery(".menu-header"),o=jQuery(".logo"),a={};["system","sensor","app","valve","people"].forEach(function(t){var e=jQuery(".section-"+t);a[t]=e.length?e:null});var r=jQuery(document).scrollTop();a.system&&a.sensor&&a.app&&a.valve&&(t(a.sensor,a.sensor)?(o.addClass("white").removeClass("dark"),e.addClass("dark").find(".button").addClass("button-alternate")):t(a.app,a.valve)?o.addClass("dark").removeClass("white"):(o.removeClass("white dark"),e.removeClass("dark").find(".button").removeClass("button-alternate"))),a.people&&(t(a.people,a.people,!0)?(o.addClass("dark"),e.addClass("dark")):(o.removeClass("dark"),e.removeClass("dark")))}if(window.Edyn={Utils:{queryParams:function(){var t=window.location.search.substring(1),e={},o=t.split("&");return o.forEach(function(t){var o=t.split("=").map(decodeURIComponent),a=o[0],r=o[1];e[a]=r}),e}}},window.matchMedia("(max-width: 48.75em)").matches){var e=jQuery(".menu-header ul"),o=jQuery(".menu-footer li").clone();jQuery(".menu-icon").click(function(){e.append(o),jQuery(this).toggleClass("is-open"),jQuery("header").toggleClass("is-nav-open"),jQuery("body").toggleClass("no-scroll")}),jQuery(".hero-content .carousel").length&&jQuery(".hero-content .carousel").owlCarousel({navigation:!0,navigationText:!1,items:3,itemsDesktop:[1e3,3],itemsDesktopSmall:[900,3],itemsTablet:[600,1],itemsMobile:[480,1],singleItem:!0}),jQuery(".section-app .carousel").length&&jQuery(".section-app .carousel").owlCarousel({navigation:!0,navigationText:!1,items:3,itemsDesktop:[1e3,3],itemsDesktopSmall:[900,3],itemsTablet:[600,1],itemsMobile:[480,1],singleItem:!0}),jQuery(".section-gallery .carousel").length&&jQuery(".section-gallery .carousel").owlCarousel({navigation:!0,navigationText:!1,items:3,itemsDesktop:[1e3,3],itemsDesktopSmall:[900,3],itemsTablet:[600,1],itemsMobile:[480,1],transitionStyle:"fade",singleItem:!0})}if(window.matchMedia("(min-width: 48.75em)").matches&&(jQuery(".section-app").css("z-index",-1),jQuery(document).on("scroll",t),jQuery(".section-gallery .carousel").length&&jQuery(".section-gallery .carousel").owlCarousel({navigation:!0,navigationText:!1,items:1,itemsDesktop:[1e3,1],itemsDesktopSmall:[900,1],itemsTablet:[600,1],itemsMobile:[480,1],singleItem:!0,transitionStyle:"fade"}),jQuery(".index .hero .hero-arrow").length&&(jQuery(".hero .hero-arrow").attr("data-0p-bottom-bottom","opacity: 1; "),jQuery(".hero .hero-arrow").attr("data--90p-bottom-bottom","opacity: 0;"),jQuery(".hero .hero-arrow").attr("data-anchor-target",".hero-content")),jQuery(".section-sensor .section-item").length&&(jQuery(".section-sensor .section-item").eq(0).attr("data--30p-bottom-top","opacity: 0; position: relative; top: 40vh;"),jQuery(".section-sensor .section-item").eq(0).attr("data--10p-center","opacity: 1; position: relative; top: 20vh;"),jQuery(".section-sensor .section-item").eq(0).attr("data--50p-center","opacity: 1; position: relative; top: 20vh;"),jQuery(".section-sensor .section-item").eq(0).attr("data--75p-center","opacity: 0; position: relative; top: 0vh;"),jQuery(".section-sensor .section-item").eq(1).attr("data--50p-bottom-top","opacity: 0; position: relative; top: 25vh;"),jQuery(".section-sensor .section-item").eq(1).attr("data--10p-center","opacity: 1; position: relative; top: 20vh;"),jQuery(".section-sensor .section-item").eq(1).attr("data--50p-center","opacity: 1; position: relative; top: 20vh;"),jQuery(".section-sensor .section-item").eq(1).attr("data--75p-center","opacity: 0; position: relative; top: 0vh;")),jQuery(".section-sensor").length&&(jQuery(".section-sensor").attr("data-120p-top-top","background-position: 17.5% 30vh; background-attachment: fixed;"),jQuery(".section-sensor").attr("data--200p-top-top","background-position: 17.5% 15vh; background-attachment: fixed;"),jQuery(".section-sensor").attr("data--220p-top-top","background-position: 17.5% 15vh;")),jQuery(".section-app .carousel-item-1").find(".carousel-content").length&&(jQuery(".section-app .carousel-item-1").find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item-1").find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item-1").find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item-1").find(".carousel-content").attr("data--5p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item-1").find(".carousel-content").attr("data-anchor-target",".carousel-item-1")),jQuery(".section-app .carousel-item-1").find("img").length&&(jQuery(".section-app .carousel-item-1").find("img").attr("data-0p-bottom-bottom","display:block; right: 0; top: 0vh; z-index: 0;"),jQuery(".section-app .carousel-item-1").find("img").attr("data--70p-bottom-bottom","display:block; right: 0; position: fixed; top: -2vh; z-index: -1;"),jQuery(".section-app .carousel-item-1").find("img").attr("data--100p-bottom-bottom","display:none;"),jQuery(".section-app .carousel-item-1").find("img").attr("data-anchor-target",".carousel-item-1")),jQuery(".section-app .carousel-item-2").find(".carousel-content").length&&(jQuery(".section-app .carousel-item-2").find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item-2").find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item-2").find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item-2").find(".carousel-content").attr("data--5p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item-2").find(".carousel-content").attr("data-anchor-target",".carousel-item-2")),jQuery(".section-app .carousel-item-2").find("img").length&&(jQuery(".section-app .carousel-item-2").find("img").attr("data--0p-bottom-bottom","display:none; z-index: -1;"),jQuery(".section-app .carousel-item-2").find("img").attr("data--20p-bottom-bottom","display:block; position: fixed; opacity: 1; right: 0; top: -2vh; z-index: 0;"),jQuery(".section-app .carousel-item-2").find("img").attr("data--90p-bottom-bottom","opacity: 1; position: fixed; top: -4vh; z-index: 0;"),jQuery(".section-app .carousel-item-2").find("img").attr("data--100p-bottom-bottom","display: none;"),jQuery(".section-app .carousel-item-2").find("img").attr("data-anchor-target",".carousel-item-2")),jQuery(".section-app .carousel-item-3").find(".carousel-content").length&&(jQuery(".section-app .carousel-item-3").find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item-3").find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item-3").find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item-3").find(".carousel-content").attr("data--5p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item-3").find(".carousel-content").attr("data-anchor-target",".carousel-item-3")),jQuery(".section-app .carousel-item-3").find("img").length&&(jQuery(".section-app .carousel-item-3").find("img").attr("data--0p-bottom-bottom","display:none; z-index: -1;"),jQuery(".section-app .carousel-item-3").find("img").attr("data--20p-bottom-bottom","display:block; opacity: 1; right: 0; top: -4vh; z-index: 0;"),jQuery(".section-app .carousel-item-3").find("img").attr("data--90p-bottom-bottom","opacity: 1; position: fixed; top: -6vh; z-index: 0;"),jQuery(".section-app .carousel-item-3").find("img").attr("data--100p-bottom-bottom","display: none;"),jQuery(".section-app .carousel-item-3").find("img").attr("data-anchor-target",".carousel-item-3")),jQuery(".section-app .carousel-item-4").find(".carousel-content").length&&(jQuery(".section-app .carousel-item-4").find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item-4").find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item-4").find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item-4").find(".carousel-content").attr("data--5p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item-4").find(".carousel-content").attr("data-anchor-target",".carousel-item-4")),jQuery(".section-app .carousel-item-4").find("img").length&&(jQuery(".section-app .carousel-item-4").find("img").attr("data--0p-bottom-bottom","display:none; z-index: -1;"),jQuery(".section-app .carousel-item-4").find("img").attr("data--20p-bottom-bottom","display:block; opacity: 1; right: 0; top: -6vh; z-index: 0;"),jQuery(".section-app .carousel-item-4").find("img").attr("data--90p-bottom-bottom","opacity: 1; position: fixed; top: -8vh; z-index: 0;"),jQuery(".section-app .carousel-item-4").find("img").attr("data--100p-bottom-bottom","display: none;"),jQuery(".section-app .carousel-item-4").find("img").attr("data-anchor-target",".carousel-item-4")),jQuery(".section-app .carousel-item-5").find(".carousel-content").length&&(jQuery(".section-app .carousel-item-5").find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item-5").find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item-5").find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item-5").find(".carousel-content").attr("data--5p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item-5").find(".carousel-content").attr("data-anchor-target",".carousel-item-5")),jQuery(".section-app .carousel-item-5").find("img").length&&(jQuery(".section-app .carousel-item-5").find("img").attr("data--0p-bottom-bottom","display:none; z-index: -1;"),jQuery(".section-app .carousel-item-5").find("img").attr("data--20p-bottom-bottom","display:block; opacity: 1; right: 0; top: -8vh; z-index: 0;"),jQuery(".section-app .carousel-item-5").find("img").attr("data--90p-bottom-bottom","opacity: 1; position: fixed; top: -10vh; z-index: 0;"),jQuery(".section-app .carousel-item-5").find("img").attr("data--100p-bottom-bottom","display: none;"),jQuery(".section-app .carousel-item-5").find("img").attr("data-anchor-target",".carousel-item-5")),jQuery(".section-app .carousel-item-6").find(".carousel-content").length&&(jQuery(".section-app .carousel-item-6").find(".carousel-content").attr("data-0p-bottom-bottom","opacity: 0;"),jQuery(".section-app .carousel-item-6").find(".carousel-content").attr("data--20p-bottom-bottom","opacity: 1;"),jQuery(".section-app .carousel-item-6").find(".carousel-content").attr("data-0p-top-top","opacity: 1;"),jQuery(".section-app .carousel-item-6").find(".carousel-content").attr("data--5p-top-top","opacity: 0;"),jQuery(".section-app .carousel-item-6").find(".carousel-content").attr("data-anchor-target",".carousel-item-6")),jQuery(".section-app .carousel-item-6").find("img").length&&(jQuery(".section-app .carousel-item-6").find("img").attr("data--0p-bottom-bottom","display:none; z-index: -1;"),jQuery(".section-app .carousel-item-6").find("img").attr("data--20p-bottom-bottom","display:block; opacity: 1; right: 0; top: -10vh; z-index: 0;"),jQuery(".section-app .carousel-item-6").find("img").attr("data--90p-bottom-bottom","opacity: 1; position: fixed; top: -12vh; z-index: 0;"),jQuery(".section-app .carousel-item-6").find("img").attr("data--100p-top-top","top: -25vh; opacity: 0;"),jQuery(".section-app .carousel-item-6").find("img").attr("data-anchor-target",".carousel-item-6")),jQuery(".section-valve").length&&(jQuery(".section-valve").attr("data-100p-top","background-position: 50% 30em;"),jQuery(".section-valve").attr("data-0p-top-bottom","background-position: 50% 15em;")),jQuery(".index .hero .hero-content").eq(1).find("h2").length&&(jQuery(".hero .hero-content").eq(1).find("h2").attr("data--200p-bottom-bottom","position: fixed; top: 10%; opacity: 0; width: 100%;margin: 0;padding: 0; left: 0;"),jQuery(".hero .hero-content").eq(1).find("h2").attr("data--220p-bottom-bottom","position: fixed; top: 10%; opacity: 1; width: 100%;margin: 0;padding: 0; left: 0;"),jQuery(".hero .hero-content").eq(1).find("h2").attr("data--250p-bottom-bottom","position: fixed; top: 10%;"),jQuery(".hero .hero-content").eq(1).find("h2").attr("data--300p-bottom-bottom","position: fixed; top: -25%; opacity: 0;"),jQuery(".hero .hero-content").eq(1).find("h2").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(0).length&&(jQuery(".section-system .carousel-item").eq(0).attr("data--25p-bottom-bottom","position: fixed; top: 80%; left: 0%; opacity: 0;"),jQuery(".section-system .carousel-item").eq(0).attr("data--200p-bottom-bottom","position: fixed; top: 25%; left: 0%; opacity: 1;"),jQuery(".section-system .carousel-item").eq(0).attr("data--250p-bottom-bottom","opacity: 1; top: 25%;"),jQuery(".section-system .carousel-item").eq(0).attr("data--300p-bottom-bottom","opacity: 0; top: -25%;"),jQuery(".section-system .carousel-item").eq(0).attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(0).find("h3").length&&(jQuery(".section-system .carousel-item").eq(0).find("h3").attr("data--200p-bottom-bottom","position: relative; top: 0; opacity: 0;"),jQuery(".section-system .carousel-item").eq(0).find("h3").attr("data--220p-bottom-bottom","position: relative; top: 0; opacity: 1;"),jQuery(".section-system .carousel-item").eq(0).find("h3").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(0).find("p").length&&(jQuery(".section-system .carousel-item").eq(0).find("p").attr("data--200p-bottom-bottom","position: relative; top: 0; opacity: 0;"),jQuery(".section-system .carousel-item").eq(0).find("p").attr("data--220p-bottom-bottom","position: relative; top: 0; opacity: 1;"),jQuery(".section-system .carousel-item").eq(0).find("p").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(1).length&&(jQuery(".section-system .carousel-item").eq(1).attr("data--50p-bottom-bottom","position: fixed; top: 80%; left: 34%; opacity: 0;"),jQuery(".section-system .carousel-item").eq(1).attr("data--200p-bottom-bottom","position: fixed; top: 25%; left: 34%; opacity: 1;"),jQuery(".section-system .carousel-item").eq(1).attr("data--250p-bottom-bottom","opacity: 1; top: 25%;"),jQuery(".section-system .carousel-item").eq(1).attr("data--300p-bottom-bottom","opacity: 0; top: -25%;"),jQuery(".section-system .carousel-item").eq(1).attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(1).find("h3").length&&(jQuery(".section-system .carousel-item").eq(1).find("h3").attr("data--200p-bottom-bottom","position: relative; top: 0em; opacity: 0;"),jQuery(".section-system .carousel-item").eq(1).find("h3").attr("data--220p-bottom-bottom","position: relative; top: 0; opacity: 1;"),jQuery(".section-system .carousel-item").eq(1).find("h3").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(1).find("p").length&&(jQuery(".section-system .carousel-item").eq(1).find("p").attr("data--200p-bottom-bottom","position: relative; top: 0em; opacity: 0;"),jQuery(".section-system .carousel-item").eq(1).find("p").attr("data--220p-bottom-bottom","position: relative; top: 0; opacity: 1;"),jQuery(".section-system .carousel-item").eq(1).find("p").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(2).length&&(jQuery(".section-system .carousel-item").eq(2).attr("data--75p-bottom-bottom","position: fixed; top: 80%; left: 68%; opacity: 0;"),jQuery(".section-system .carousel-item").eq(2).attr("data--200p-bottom-bottom","position: fixed; top: 25%; left: 68%; opacity: 1;"),jQuery(".section-system .carousel-item").eq(2).attr("data--250p-bottom-bottom","opacity: 1; top: 25%;"),jQuery(".section-system .carousel-item").eq(2).attr("data--300p-bottom-bottom","opacity: 0; top: -25%;"),jQuery(".section-system .carousel-item").eq(2).attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(2).find("h3").length&&(jQuery(".section-system .carousel-item").eq(2).find("h3").attr("data--200p-bottom-bottom","position: relative; top: 0em; opacity: 0;"),jQuery(".section-system .carousel-item").eq(2).find("h3").attr("data--220p-bottom-bottom","position: relative; top: 0; opacity: 1;"),jQuery(".section-system .carousel-item").eq(2).find("h3").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(2).find("p").length&&(jQuery(".section-system .carousel-item").eq(2).find("p").attr("data--200p-bottom-bottom","position: relative; top: 0; opacity: 0;"),jQuery(".section-system .carousel-item").eq(2).find("p").attr("data--220p-bottom-bottom","position: relative; top: 0; opacity: 1;"),jQuery(".section-system .carousel-item").eq(2).find("p").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(0).length&&(jQuery(".section-system .carousel-item").eq(0).find(".carousel-arrow").attr("data--75p-bottom-bottom","width: 0;"),jQuery(".section-system .carousel-item").eq(0).find(".carousel-arrow").attr("data--200p-bottom-bottom","width: 134px;"),jQuery(".section-system .carousel-item").eq(0).find(".carousel-arrow").attr("data-anchor-target",".hero-content")),jQuery(".section-system .carousel-item").eq(1).length&&(jQuery(".section-system .carousel-item").eq(1).find(".carousel-arrow").attr("data--90p-bottom-bottom","width: 0;"),jQuery(".section-system .carousel-item").eq(1).find(".carousel-arrow").attr("data--215p-bottom-bottom","width: 134px;"),jQuery(".section-system .carousel-item").eq(1).find(".carousel-arrow").attr("data-anchor-target",".hero-content"))),jQuery(".hero-background").length&&(jQuery(".hero-background").attr("data-0p-bottom-bottom","opacity: 1; position: fixed;"),jQuery(".hero-background").attr("data--70p-bottom-bottom","opacity: 0; position: relative;"),jQuery(".hero-background").attr("data-anchor-target",".hero-content")),jQuery(".hero-background-blurred").length&&(jQuery(".hero-background-blurred").attr("data-0p-bottom-bottom","position: fixed; opacity: 1;"),jQuery(".hero-background-blurred").attr("data--150p-bottom-bottom","position: relative; opacity: 0;"),jQuery(".hero-background-blurred").attr("data-anchor-target",".hero .container")),jQuery(".index .hero .hero-content").eq(0).find("a").length&&(jQuery(".hero .hero-content").eq(0).find("a").attr("data-0p-bottom-bottom","opacity: 1; "),jQuery(".hero .hero-content").eq(0).find("a").attr("data--90p-bottom-bottom","opacity: 0;"),jQuery(".hero .hero-content").eq(0).find("a").attr("data-anchor-target",".hero-content")),jQuery(".index .hero .hero-content").eq(0).find("h2").length&&(jQuery(".hero .hero-content").eq(0).find("h2").attr("data-0p-bottom-bottom","opacity: 1; "),jQuery(".hero .hero-content").eq(0).find("h2").attr("data--90p-bottom-bottom","opacity: 0;"),jQuery(".hero .hero-content").eq(0).find("h2").attr("data-anchor-target",".hero-content")),jQuery(".index .hero .hero-content").eq(0).find("p").length&&(jQuery(".hero .hero-content").eq(0).find("p").attr("data-0p-bottom-bottom","opacity: 1; "),jQuery(".hero .hero-content").eq(0).find("p").attr("data--90p-bottom-bottom","opacity: 0;"),jQuery(".hero .hero-content").eq(0).find("p").attr("data-anchor-target",".hero-content")),window.matchMedia("(orientation: portrait)").matches&&jQuery(".section-gallery").find("img").length&&jQuery(".section-gallery").find("img").each(function(){jQuery(this).attr("src",jQuery(this).attr("data-src"))}),cssua.ua.ios?(jQuery(".app-link").unbind("click"),jQuery(".app-link").attr("href",jQuery(".button-appstore").attr("href"))):jQuery("body").hasClass("parallax")&&skrollr.init({render:function(){},mobileCheck:function(){return!1}}),cssua.ua.android&&(jQuery(".app-link").unbind("click"),jQuery(".app-link").attr("href",jQuery(".button-googleplay").attr("href"))),cssua.ua.android||cssua.ua.ios||(jQuery(".toggle-lightbox").click(function(t){jQuery(".lightbox").show(),jQuery("body").toggleClass("no-scroll"),t.preventDefault(),t.stopPropagation()}),jQuery(".lightbox-close").click(function(t){jQuery(".lightbox").hide(),jQuery("body").toggleClass("no-scroll"),t.preventDefault(),t.stopPropagation()})),jQuery(".accordion-picture").length&&jQuery(".accordion-picture").click(function(){var t=jQuery(this).parents(".accordion:first"),e=jQuery(this).parents(".accordion-item:first");t.find(".accordion-target").text(e.text()),t.find(".is-active").removeClass("is-active"),e.addClass("is-active")}),jQuery(".content-sidebar").length&&jQuery(document).on("scroll",function(){jQuery(document).scrollTop()>65?jQuery(".content-wrapper").addClass("fixed"):jQuery(".content-wrapper").removeClass("fixed")}),jQuery(".modal").length){var a=document.getElementById("vimeo-player"),r=$f(a);r.addEvent("ready",function(){jQuery(".modal-state").on("change",function(){jQuery(this).is(":checked")?(jQuery("body").addClass("modal-open"),r.api("play")):(jQuery("body").removeClass("modal-open"),r.api("pause"))})}),jQuery(".modal-fade-screen, .modal-close").on("click",function(){jQuery(".modal-state:checked").prop("checked",!1).change()}),jQuery(".modal-inner").on("click",function(t){t.stopPropagation()})}}(),function(){"use strict";function t(t){this.request=t.request,this.products=null,this.cart={},this.buyer=null,this.shippingAddress=null,this.billingAddress=null,this.card=null,this.coupon=null}t.prototype.setup=function(t){this.celeryUserId=t.userId,this.products=t.products,this.celeryApiUrl=t.apiUrl},t.prototype.loadInventory=function(t){this.request({type:"GET",url:"/inventory",contentType:"application/json",dataType:"json"}).done(function(e){this.setup(e),t(null,null)}.bind(this)).fail(function(){var e=new Error("Error loading inventory");t(e,null)})},t.prototype.homeDepotUrl=function(t){var e={sensor:"http://www.homedepot.com/p/Edyn-Garden-Sensor-EDYN-001/205833447",valve:"http://www.homedepot.com/p/Edyn-Water-Valve-EDYN-002/205833449",ALL:"http://www.homedepot.com/b/Edyn/N-5yc1vZerz"};return t in e||(t="ALL"),e[t]},t.prototype.productForField=function(t,e){return this.products.filter(function(o){return o[t]===e})[0]},t.prototype.productForId=function(t){return this.productForField("id",t)},t.prototype.productForDevice=function(t){return this.productForField("device",t)},t.prototype.remove=function(t){var e=this.productForDevice(t).id;delete this.cart[e]},t.prototype.incrementQuantity=function(t){this.deltaCart(t,1)},t.prototype.decrementQuantity=function(t){this.deltaCart(t,-1)},t.prototype.deltaCart=function(t,e){var o=this.productForDevice(t),a=o.id;a in this.cart||(this.cart[a]=0);var r=this.cart[a]+=e;this.setQuantity(t,r)},t.prototype.setQuantity=function(t,e){var o=this.productForDevice(t),a=o.id;this.cart[a]=e;var r=o.inventory;this.cart[a]>r&&(this.cart[a]=r),this.cart[a]<=0&&delete this.cart[a]},t.prototype.outOfStock=function(){return this.products.every(function(t){return 0===t.inventory})},t.prototype.cartIsEmpty=function(){return 0===Object.keys(this.cart).length},t.prototype.lineItems=function(t){var e=t&&t.includeProduct,o=[],a=Object.keys(this.cart);return a.forEach(function(t){var a=this.cart[t],r={product_id:t,quantity:a};if(e){var i=this.productForId(t);r.product=i}o.push(r)}.bind(this)),o},t.prototype.buildOrder=function(){var t={user_id:this.celeryUserId,buyer:this.buyer,shipping_address:this.shippingAddress,billing_address:this.billingAddress||this.shippingAddress,payment_source:{card:this.card},line_items:this.lineItems(),discount_codes:[this.coupon]};return t},t.prototype.validateCoupon=function(t){var e=this.lineItems().filter(function(t){return{product_id:t.product_id}});this.celeryRequest({path:"/coupons/validate",data:{user_id:this.celeryUserId,code:this.coupon,line_items:e}},function(e,o){e?t(e,null):t(null,o.data)})},t.prototype.serializeOrder=function(t){var e=this.buildOrder();this.celeryRequest({path:"/orders/serialize",data:e},function(e,o){e?t(e,null):t(null,o.data)})},t.prototype.checkout=function(t){var e=this.buildOrder();this.celeryRequest({path:"/orders/checkout",data:e},function(e,o){return e?t(e,null):void this.request({type:"POST",data:JSON.stringify(o.data),contentType:"application/json",url:"/confirmation"}).done(function(e){t(null,e)}).fail(function(e){var o=new Error("Error showing confirmation.");return t(o,null)})}.bind(this))},t.prototype.celeryRequest=function(t,e){var o=t.path,a=t.data,r=this.celeryApiUrl+o;this.request({type:"POST",url:r,data:a?JSON.stringify(a):null,contentType:"application/json; charset=utf-8",dataType:"json"}).done(function(t){e(null,t)}).fail(function(t){var o="Celery error";t&&(t.responseText&&(o=t.responseText),t.responseJSON&&(o=t.responseJSON.meta.error.message));var a=new Error(o);e(a,null)})},window.EdynStore=t}(),function(){"use strict";function t(t){var e={};return Object.keys(t).forEach(function(o){var a=t[o];e[o]=$(a).val()}),e}function e(){return t({first_name:"#input-shipping-first-name",last_name:"#input-shipping-last-name",email:"#input-shipping-email",company:"#input-shipping-company",phone:"#input-shipping-telephone"})}function o(){return t({first_name:"#input-shipping-first-name",last_name:"#input-shipping-last-name",company:"#input-shipping-company",line1:"#input-shipping-address-line-1",line2:"#input-shipping-address-line-2",city:"#input-shipping-city",state:"#input-shipping-state",zip:"#input-shipping-zip",country:"#input-shipping-country",phone:"#input-shipping-telephone"})}function a(){return n()?t({first_name:"#input-billing-first-name",last_name:"#input-billing-last-name",company:"#input-billing-company",line1:"#input-billing-address-line-1",line2:"#input-billing-address-line-2",city:"#input-billing-city",state:"#input-billing-state",zip:"#input-billing-zip",country:"#input-billing-country",phone:"#input-billing-telephone"}):null}function r(){return t({number:"#input-card-number",exp_month:"#input-card-month",exp_year:"#input-card-year",cvc:"#input-card-code"})}function i(){var t=$("#input-coupon").val();return t.match(/\s+/)?null:t}function n(){return 0===$("#input-billing:checked").length}function s(t){return $("."+t).removeClass(t).remove()}function c(t){return"images/edyn_web_order_"+t+".png"}function p(t){return"images/edyn_web_upsell_"+t+".png"}function u(){var t=$("#input-shipping-state").val(),e=$("#input-shipping-country").val(),o=$("#input-shipping-zip").val();return t&&e&&o}function d(t){var e=t.product,o=e.device,a=e.name,r=e.inventory,i=t.quantity,n=e.ships,s=k.clone(),p="order-product-"+o;s.addClass(p).attr("data-device",o);var u=c(o);if(s.find(".product-image").attr("src",u),s.find(".product-name").html(a),s.find(".order-product-ships").html(n),r>0){s.find(".input-count").attr({min:1,max:r}).val(i);for(var d=s.find(".input-select-count"),l=0;r>=l;l++)d.append('<option value="'+l+'">'+l+"</option>");d.val(i)}else s.find(".input-number-count").html('<span class="error">Sold out</span>');return s}function l(){C.buyer=e(),C.coupon=i(),C.shippingAddress=o(),C.billingAddress=a(),C.card=r()}function m(){var t=C.lineItems({includeProduct:!0}).map(d);$(".order-products").empty().append(t);var e=$(".coupon");C.cartIsEmpty()?e.hide():e.show()}function y(){function t(){$(".button-group-coupon").hide(),e.hide(),j()}l();var e=$(".input-coupon-wrapper .validetta-bubble");if(!C.coupon)return void t();var o=$(".button-group-coupon button");o.attr("disabled","disabled"),g(),C.validateCoupon(function(a,r){if(o.removeAttr("disabled"),a){var i="Invalid coupon.";a.message.match("is expired")&&(i="Coupon expired."),e.html(i).show(),v()}else t()})}function h(){l(),C.checkout(function(t,e){if(t){var o;if("Error showing confirmation."===t.message)o="Your order was placed successfully but there was an error displaying confirmation. Please use the chat button on this page to get in touch with us.";else{var a=["Your card was declined.","Your card's expiration month is invalid.","Your card's security code is incorrect.","Your card has expired.","An error occurred while processing your card. Try again in a little bit.","Your card number is incorrect."];o=-1!==a.indexOf(t.message)?t.message:"Error placing order. Please use the chat button on this page to get in touch with us.",$("#placeOrder").val("Place Order"),$("#placeOrder").removeAttr("disabled")}swal({title:"An error has occurred.",text:o,type:"error",confirmButtonText:"Close",confirmButtonColor:"#f9c000"})}else $(".content-wrapper").html(e),cssua.ua.android&&$(".button-app").attr("href",$(".button-googleplay-outline").attr("href")),cssua.ua.ios&&$(".button-app").attr("href",$(".button-appstore-outline").attr("href")),$(window).scrollTop(0)})}function f(t){return"$"+(t/100).toFixed(2)}function b(){C.cartIsEmpty()?$("#placeOrder").attr("disabled","disabled"):$("#placeOrder").removeAttr("disabled")}function g(){E.show()}function v(){E.hide()}function j(){return g(),l(),b(),C.cartIsEmpty()?void["subtotal","shipping","tax","total"].forEach(function(t){$(".price-"+t).text("")}):void C.serializeOrder(function(t,e){if(t)return void swal({title:"An error has occurred.",text:"Error updating prices",type:"error",confirmButtonText:"Close",confirmButtonColor:"#f9c000"});var o=f(e.linetotal);if($(".price-subtotal").text(o),e.discount){var a="- "+f(e.discount);$(".price-discount").text(a),$(".line-discount").show()}else $(".price-discount").text(""),$(".line-discount").hide();var r=e.shipping?f(e.shipping):"";$(".price-shipping").text(r);var i=e.taxes?f(e.taxes):"";if($(".price-tax").text(i),u()){var n=f(e.total);$(".price-total").text(n)}v()})}function Q(){var t=$("[rel~=tooltip]");t.bind("mouseenter",function(){function t(){$(window).width()<1.5*r.outerWidth()?r.css("max-width",$(window).width()/2):r.css("max-width",340);var t=o.offset().left+o.outerWidth()/2-r.outerWidth()/2,e=o.offset().top-r.outerHeight()-20;if(0>t?(t=o.offset().left+o.outerWidth()/2-20,r.addClass("left")):r.removeClass("left"),t+r.outerWidth()>$(window).width()?(t=o.offset().left-r.outerWidth()+o.outerWidth()/2+20,r.addClass("right")):r.removeClass("right"),0>e){var e=o.offset().top+o.outerHeight();r.addClass("top")}else r.removeClass("top");r.css({left:t,top:e}).animate({top:"+=10",opacity:1},50)}function e(){r.animate({top:"-=10",opacity:0},50,function(){$(this).remove()}),o.attr("title",a)}var o=$(this),a=o.attr("title"),r=$('<div id="tooltip"></div>');return a&&""!=a?(o.removeAttr("title"),r.css("opacity",0).html(a).appendTo("body"),t(),$(window).resize(t),o.bind("mouseleave",e),void r.bind("click",e)):!1})}function w(){function t(t){var o=t.device,a=t.name,r=t.inventory,i=f(t.price),n=p(o),s=e.clone(),c="product-"+o;return 0===r&&(c+=" product-soldout"),s.addClass(c),s.find(".product-name").html(a),s.find(".product-price").html(i),s.find(".product-image").attr("src",n),s.find(".product-add").attr("data-device",o),s}var e=s("product-template"),o=C.products.map(t);$(".products").empty().append(o)}function x(t){var e=C.homeDepotUrl(t);window.location.replace(e)}function q(){function t(t){return t.closest(".order-product").attr("data-device")}function e(){C.cartIsEmpty()||($("#placeOrder").val("Hold On..."),$("#placeOrder").attr("disabled","disabled"),h())}if(Q(),C.outOfStock()?x():w(),k=s("order-product-template"),m(),$(document).on("change",".custom-select",function(){$(this).prev("span").hide()}),$("html").hasClass("ua-mobile")?($("#input-coupon").length&&$($("#input-coupon").attr("placeholder","Enter Code")),$(document).on("click",".trigger-cvv",function(){$(".card-cvv").show(),$(".overlay").show()}),$(document).on("click",".overlay",function(){$(".card-cvv").hide(),$(".overlay").hide()}),$(".input-select span").each(function(){$(this).data("mobile-label")&&($(this).text($(this).data("mobile-label")),$(this).next(".form-control").attr("placeholder",$(this).data("mobile-label")).val("").focus().blur())})):$(".trigger-cvv").hover(function(){$(".card-cvv").show()},function(){$(".card-cvv").hide()}),$("#input-card-year").length)for(var o=(new Date).getFullYear(),a=o+20,r=document.getElementById("input-card-year"),i=o;a>=i;i++){
var c=document.createElement("option");c.value=i,c.innerHTML=i,r&&r.appendChild(c)}$("#input-coupon").bind("focus",function(){$(".button-group-coupon").show()}),$("#input-coupon").bind("blur",function(){""===$("#input-coupon").val()&&$(".button-group-coupon").hide()}),$(".button-group-coupon .button-apply").bind("click",function(t){y(),t.preventDefault(),t.stopPropagation()}),$(".button-group-coupon .button-cancel").bind("click",function(t){$("#input-coupon").val(""),$(".button-group-coupon").hide(),y(),t.preventDefault(),t.stopPropagation()}),$("#input-billing").click(function(){n()?($(".billing-info .custom-select").prev("span").show(),$(".billing-info").show()):$(".billing-info").hide()}),$("#input-shipping-state").on("change",function(t){$("#input-shipping-city").val().length&&j()}),$("#input-shipping-country").on("change",function(t){$("#input-shipping-zip").val().length&&j()}),$("#input-shipping-zip").on("blur",function(t){$("#input-shipping-zip").val().length&&j()}),$(document).on("change",".input-select-count",function(e){var o=$(this),a=t(o),r=o.val();C.setQuantity(a,r),m(),j(),e.preventDefault()}),$(document).on("click",".input-count-up, .input-count-plus",function(e){var o=$(this),a=t(o);C.incrementQuantity(a),m(),j(),e.preventDefault()}),$(document).on("click",".input-count-down, .input-count-minus",function(e){var o=$(this),a=t(o);C.decrementQuantity(a),m(),j(),e.preventDefault()}),$(document).on("click",".input-count-trash",function(e){var o=$(this),a=t(o);C.remove(a),m(),j(),e.preventDefault()}),$(".product-add").click(function(t){var e=$(this).attr("data-device");C.incrementQuantity(e),m(),j(),t.preventDefault()}),$("#form").on("submit",function(t){return!1}),$("#form").validetta({realTime:!1,validators:{callback:{phone:{callback:function(t,e){var o=window.libphonenumber.PhoneNumberUtil.getInstance(),a=o.parse(e,"US");return o.isValidNumber(a)},errorMessage:"Invalid phone number"}}},onValid:function(t){e()},onError:function(t){if(!n()){var o=this.getInvalidFields(),a=o.every(function(t){return $(t.field).is(".billing-field")});a&&e()}}})}var k,C=new EdynStore({request:$.ajax}),E=$(".order-loader");$(document).ready(function(){var t=$(".order .order-products").length;t&&C.loadInventory(function(t){var e=Edyn.Utils.queryParams(),o=e.device;if(t)x(o);else{var a=o?[o]:["valve","sensor"];a.forEach(function(t){C.incrementQuantity(t)}),b(),q(),j()}})})}(),function(){"use strict";function t(t){n(t).show().siblings().hide()}function e(t,e,o){var a="https://api.identity.prod.edyn.com/users/password",r=a+t;n.ajax({url:r,data:e,type:"POST",complete:function(t){var e=null,a=t.responseJSON;200!==t.status&&a.error&&(e=new Error(a.message)),o(e)}})}function o(t,o){var a={email:t};e("/reset",a,o)}function a(t,o,a){var r={resetToken:t,password:o};e("/update",r,a)}function r(t){var e=n(t);e.is("["+c+"]")||e.attr(c,e.val());var o=e.attr(p);e.val(o).attr("disabled","disabled")}function i(t){var e=n(t),o=e.attr(c);e.val(o).attr("disabled",null)}var n=jQuery,s={forgot:{start:"#forgot-password",success:"#forgot-password-success",error:"#forgot-password-error",retry:".forgot-password-retry",email:"#forgot-password-email",submit:"#forgot-password-submit",notFound:"#forgot-password-not-found"},update:{start:"#update-password",success:"#update-password-success",error:"#update-password-error",retry:"#update-password-retry",password:"#update-password-new-password",confirm:"#update-password-confirm-password",submit:"#update-password-submit",tokenExpired:"#update-password-token-expired"}},c="data-enabled-text",p="data-disabled-text";n(document).ready(function(){var e=Edyn.Utils.queryParams(),c=e.token?s.update.start:s.forgot.start;t(c),n(s.forgot.retry).click(function(e){e.preventDefault(),n(s.forgot.email).val(""),i(s.forgot.submit),t(s.forgot.start)}),n(s.update.retry).click(function(e){e.preventDefault(),n(s.update.password).val(""),n(s.update.confirm).val(""),i(s.update.submit),t(s.update.start)}),n(s.forgot.start).validetta({realTime:!1,onValid:function(e){e.preventDefault(),r(s.forgot.submit);var a=n(s.forgot.email).val();o(a,function(e){var o=s.forgot.success;if(e){var a="No user for that email address"===e.message;o=a?s.forgot.notFound:s.forgot.error}t(o)})}}),n(s.update.start).validetta({realTime:!1,validators:{callback:{confirm:{callback:function(t,e){var o=n(s.update.password).val();return e===o},errorMessage:"Confirmation does not match password"}}},onValid:function(o){o.preventDefault(),r(s.update.submit);var i=e.token,c=n(s.update.password).val();a(i,c,function(e){var o=s.update.success;if(e){var a="Token expired"===e.message;o=a?s.update.tokenExpired:s.update.error}t(o)})}})})}();