window.Modernizr=function(e,t,n){function r(e){y.cssText=e}function o(e,t){return r(k.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&y[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+C.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?s(o,t):(o=(e+" "+S.join(r+" ")+r).split(" "),c(o,t,n))}function u(){m.input=function(n){for(var r=0,o=n.length;o>r;r++)N[n[r]]=!!(n[r]in w);return N.list&&(N.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var r,o,i,a=0,s=e.length;s>a;a++)w.setAttribute("type",o=e[a]),r="text"!==w.type,r&&(w.value=x,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&w.style.WebkitAppearance!==n?(h.appendChild(w),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,h.removeChild(w)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?w.checkValidity&&w.checkValidity()===!1:w.value!=x)),$[e[a]]=!!r;return $}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,p,f="2.8.3",m={},b=!0,h=t.documentElement,g="modernizr",v=t.createElement(g),y=v.style,w=t.createElement("input"),x=":)",E={}.toString,k=" -webkit- -moz- -o- -ms- ".split(" "),_="Webkit Moz O ms",C=_.split(" "),S=_.toLowerCase().split(" "),j={svg:"http://www.w3.org/2000/svg"},T={},$={},N={},P=[],R=P.slice,M=function(e,n,r,o){var i,a,s,c,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=o?o[r]:g+(r+1),l.appendChild(s);return i=["&#173;",'<style id="s',g,'">',e,"</style>"].join(""),l.id=g,(u?l:d).innerHTML+=i,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=h.style.overflow,h.style.overflow="hidden",h.appendChild(d)),a=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),h.style.overflow=c),!!a},z=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return M("@media "+t+" { #"+g+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},F=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),D={}.hasOwnProperty;p=i(D,"undefined")||i(D.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return D.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=R.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(R.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(R.call(arguments)))};return r}),T.flexbox=function(){return l("flexWrap")},T.flexboxlegacy=function(){return l("boxDirection")},T.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},T.canvastext=function(){return!(!m.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},T.webgl=function(){return!!e.WebGLRenderingContext},T.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:M(["@media (",k.join("touch-enabled),("),g,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},T.geolocation=function(){return"geolocation"in navigator},T.postmessage=function(){return!!e.postMessage},T.websqldatabase=function(){return!!e.openDatabase},T.indexedDB=function(){return!!l("indexedDB",e)},T.hashchange=function(){return F("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},T.history=function(){return!(!e.history||!history.pushState)},T.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},T.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},T.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(y.backgroundColor,"rgba")},T.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(y.backgroundColor,"rgba")||a(y.backgroundColor,"hsla")},T.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(y.background)},T.backgroundsize=function(){return l("backgroundSize")},T.borderimage=function(){return l("borderImage")},T.borderradius=function(){return l("borderRadius")},T.boxshadow=function(){return l("boxShadow")},T.textshadow=function(){return""===t.createElement("div").style.textShadow},T.opacity=function(){return o("opacity:.55"),/^0.55$/.test(y.opacity)},T.cssanimations=function(){return l("animationName")},T.csscolumns=function(){return l("columnCount")},T.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+k.join(n+e)).slice(0,-e.length)),a(y.backgroundImage,"gradient")},T.cssreflections=function(){return l("boxReflect")},T.csstransforms=function(){return!!l("transform")},T.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in h.style&&M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},T.csstransitions=function(){return l("transition")},T.fontface=function(){var e;return M('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},T.generatedcontent=function(){var e;return M(["#",g,"{font:0/0 a}#",g,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},T.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},T.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},T.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(e){return!1}},T.sessionstorage=function(){try{return sessionStorage.setItem(g,g),sessionStorage.removeItem(g),!0}catch(e){return!1}},T.webworkers=function(){return!!e.Worker},T.applicationcache=function(){return!!e.applicationCache},T.svg=function(){return!!t.createElementNS&&!!t.createElementNS(j.svg,"svg").createSVGRect},T.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==j.svg},T.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(E.call(t.createElementNS(j.svg,"animate")))},T.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(E.call(t.createElementNS(j.svg,"clipPath")))};for(var A in T)p(T,A)&&(d=A.toLowerCase(),m[d]=T[A](),P.push((m[d]?"":"no-")+d));return m.input||u(),m.addTest=function(e,t){if("object"==typeof e)for(var r in e)p(e,r)&&m.addTest(r,e[r]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof b&&b&&(h.className+=" "+(t?"":"no-")+e),m[e]=t}return m},r(""),v=w=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=g[e[b]];return t||(t={},h++,e[b]=h,g[h]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||f.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,s=r(),c=s.length;c>a;a++)i.createElement(s[a]);return i}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function c(e){e||(e=t);var r=o(e);return!v.shivCSS||l||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||s(e,r),e}var l,u,d="3.7.0",p=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,b="_html5shiv",h=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var v={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:a};e.html5=v,c(t)}(this,t),m._version=f,m._prefixes=k,m._domPrefixes=S,m._cssomPrefixes=C,m.mq=z,m.hasEvent=F,m.testProp=function(e){return s([e])},m.testAllProps=l,m.testStyles=M,m.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(b?" js "+P.join(" "):""),m}(this,this.document);var cssua=function(e,t,n){"use strict";var r=" ua-",o=/\s*([\-\w ]+)[\s\/\:]([\d_]+\b(?:[\-\._\/]\w+)*)/,i=/([\w\-\.]+[\s\/][v]?[\d_]+\b(?:[\-\._\/]\w+)*)/g,a=/\b(?:(blackberry\w*|bb10)|(rim tablet os))(?:\/(\d+\.\d+(?:\.\w+)*))?/,s=/\bsilk-accelerated=true\b/,c=/\bfluidapp\b/,l=/(\bwindows\b|\bmacintosh\b|\blinux\b|\bunix\b)/,u=/(\bandroid\b|\bipad\b|\bipod\b|\bwindows phone\b|\bwpdesktop\b|\bxblwp7\b|\bzunewp7\b|\bwindows ce\b|\bblackberry\w*|\bbb10\b|\brim tablet os\b|\bmeego|\bwebos\b|\bpalm|\bsymbian|\bj2me\b|\bdocomo\b|\bpda\b|\bchtml\b|\bmidp\b|\bcldc\b|\w*?mobile\w*?|\w*?phone\w*?)/,d=/(\bxbox\b|\bplaystation\b|\bnintendo\s+\w+)/,p={parse:function(e,t){var n={};if(t&&(n.standalone=t),e=(""+e).toLowerCase(),!e)return n;for(var r,p,f=e.split(/[()]/),m=0,b=f.length;b>m;m++)if(m%2){var h=f[m].split(";");for(r=0,p=h.length;p>r;r++)if(o.exec(h[r])){var g=RegExp.$1.split(" ").join("_"),v=RegExp.$2;(!n[g]||parseFloat(n[g])<parseFloat(v))&&(n[g]=v)}}else{var y=f[m].match(i);if(y)for(r=0,p=y.length;p>r;r++){var w=y[r].split(/[\/\s]+/);w.length&&"mozilla"!==w[0]&&(n[w[0].split(" ").join("_")]=w.slice(1).join("-"))}}if(u.exec(e))n.mobile=RegExp.$1,a.exec(e)&&(delete n[n.mobile],n.blackberry=n.version||RegExp.$3||RegExp.$2||RegExp.$1,RegExp.$1?n.mobile="blackberry":"0.0.1"===n.version&&(n.blackberry="7.1.0.0"));else if(d.exec(e)){n.game=RegExp.$1;var x=n.game.split(" ").join("_");n.version&&!n[x]&&(n[x]=n.version)}else l.exec(e)&&(n.desktop=RegExp.$1);return n.intel_mac_os_x?(n.mac_os_x=n.intel_mac_os_x.split("_").join("."),delete n.intel_mac_os_x):n.cpu_iphone_os?(n.ios=n.cpu_iphone_os.split("_").join("."),delete n.cpu_iphone_os):n.cpu_os?(n.ios=n.cpu_os.split("_").join("."),delete n.cpu_os):"iphone"!==n.mobile||n.ios||(n.ios="1"),n.opera&&n.version?(n.opera=n.version,delete n.blackberry):s.exec(e)?n.silk_accelerated=!0:c.exec(e)&&(n.fluidapp=n.version),n.edge&&(delete n.applewebkit,delete n.safari,delete n.chrome,delete n.android),n.applewebkit?(n.webkit=n.applewebkit,delete n.applewebkit,n.opr&&(n.opera=n.opr,delete n.opr,delete n.chrome),n.safari&&(n.chrome||n.crios||n.fxios||n.opera||n.silk||n.fluidapp||n.phantomjs||n.mobile&&!n.ios?(delete n.safari,n.vivaldi&&delete n.chrome):n.version&&!n.rim_tablet_os?n.safari=n.version:n.safari={419:"2.0.4",417:"2.0.3",416:"2.0.2",412:"2.0",312:"1.3",125:"1.2",85:"1.0"}[parseInt(n.safari,10)]||n.safari)):n.msie||n.trident?(n.opera||(n.ie=n.msie||n.rv),delete n.msie,delete n.android,n.windows_phone_os?(n.windows_phone=n.windows_phone_os,delete n.windows_phone_os):"wpdesktop"!==n.mobile&&"xblwp7"!==n.mobile&&"zunewp7"!==n.mobile||(n.mobile="windows desktop",n.windows_phone=+n.ie<9?"7.0":+n.ie<10?"7.5":"8.0",delete n.windows_nt)):(n.gecko||n.firefox)&&(n.gecko=n.rv),n.rv&&delete n.rv,n.version&&delete n.version,n},format:function(e){function t(e,t){e=e.split(".").join("-");var n=r+e;if("string"==typeof t){t=t.split(" ").join("_").split(".").join("-");for(var o=t.indexOf("-");o>0;)n+=r+e+"-"+t.substring(0,o),o=t.indexOf("-",o+1);n+=r+e+"-"+t}return n}var n="";for(var o in e)o&&e.hasOwnProperty(o)&&(n+=t(o,e[o]));return n},encode:function(e){var t="";for(var n in e)n&&e.hasOwnProperty(n)&&(t&&(t+="&"),t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t}};p.userAgent=p.ua=p.parse(t,n);var f=p.format(p.ua)+" js";return e.className?e.className=e.className.replace(/\bno-js\b/g,"")+f:e.className=f.substr(1),p}(document.documentElement,navigator.userAgent,navigator.standalone);