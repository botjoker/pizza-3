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
	$('.block-1__count-right').click(function(){
		var count = $(this).siblings('.block-1__count-center').find('p');
		var price = parseInt($(this).closest('.block-1__item').find('input[type=radio]:checked').attr('data-price'));
		var result = $(this).closest('.block-1__item').find('.block-1__price');
		if(isNaN(price)) {
			price = parseInt($(this).closest('.block-1__item').attr('data-price'));
		}
		count.text(parseInt(count.text())+1);
		result.text('$' + ((parseInt(count.text()))*price) );

	});
	$('.block-1__count-left').click(function(){
		var count = $(this).siblings('.block-1__count-center').find('p');
		var price = parseInt($(this).closest('.block-1__item').find('input[type=radio]:checked').attr('data-price'));
		var result = $(this).closest('.block-1__item').find('.block-1__price');
		if(parseInt(count.text())>1) {
			if(isNaN(price)) {
				price = parseInt($(this).closest('.block-1__item').attr('data-price'));
			}
			count.text(parseInt(count.text()) - 1);
			result.text('$' + ((parseInt(count.text()))*price) );
		}
	});

	$('.block-1__item-radio input[type=radio]').change(function(){
		var count = parseInt($(this).closest('.block-1__item').find('.block-1__count-center').text());
		var price = parseInt($(this).attr('data-price'));
		var result = $(this).closest('.block-1__item').find('.block-1__price');
		result.text('$' + (count*price));
	});

	$('.order__count-X').click(function(){
		$(this).parent().remove();
	});
});
