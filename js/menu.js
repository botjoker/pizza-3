"use strict";

$(document).ready(function(){
	var touch = $('#touch-menu');
	var menu = $('.menu__top-list');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 760 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

	$('.order__count-plus').click(function(){
		var count = $(this).siblings('.text-red').find('i');
		count.text(parseInt(count.text())+1);
	});
	$('.order__count-minus').click(function(){
		var count = $(this).siblings('.text-red').find('i');
		if(parseInt(count.text())>1) {
			count.text(parseInt(count.text()) - 1);
		}
	});
	//$('.order__count-X').click(function(){
	//
	//});
});