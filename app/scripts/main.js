(function(){
	'use strict';

	var headerMenuList = $('.menu-header ul');
	var footerMenuElements = $('.menu-footer li').clone();

	$('.menu-icon').click(function() {
		headerMenuList.append(footerMenuElements);
		$(this).toggleClass('is-open');
	});

	$('.accordion-picture').click(function() {
		$(this).parents('.accordion:first').find('.is-active').removeClass('is-active');
		$(this).parents('.accordion-item:first').addClass('is-active');
	});
})();
