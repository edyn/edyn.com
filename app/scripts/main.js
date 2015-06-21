(function(){
	'use strict';

	var headerMenuList = $('.menu-header ul');
	var footerMenuElements = $('.menu-footer li').clone();

	$('.menu-icon').click(function() {
		headerMenuList.append(footerMenuElements);
		$(this).toggleClass('is-open');
	});

})();
