"use strict";

$(document).ready(function(){
	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 760 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

	$('a[href^="#"]').on('click',function (e) {
		e.preventDefault();
		var target = this.hash;
		var $target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top-30
		}, 900, 'swing', function () {
			window.location.hash = target;
		});
	});
	$(document).on("click", ".order__count-plus", function(event){
		var count = $(this).siblings('.text-red').find('i');
		var price = $(this).closest('.order__list-item').find('.item.text-red i');
		var priceNumber = $(this).closest('.order__list-item').attr('data-price');
		console.log(price.text());
		count.text(parseInt(count.text())+1);
		price.text(parseInt(count.text())*priceNumber);
	});
	$(document).on("click", ".order__count-minus", function(event){
		var count = $(this).siblings('.text-red').find('i');
		var price = $(this).closest('.order__list-item').find('.item.text-red i');
		var priceNumber = $(this).closest('.order__list-item').attr('data-price');
		if(parseInt(count.text())>1) {
			count.text(parseInt(count.text()) - 1);
			price.text(parseInt(count.text())*priceNumber);
		}
	});
	$(document).on("click", ".block-1__count-right", function(event){
		var count = $(this).siblings('.block-1__count-center').find('p');
		var price = parseInt($(this).closest('.block-1__item').find('input[type=radio]:checked').attr('data-price'));
		var result = $(this).closest('.block-1__item').find('.block-1__price');
		if(isNaN(price)) {
			price = parseInt($(this).closest('.block-1__item').attr('data-price'));
		}
		count.text(parseInt(count.text())+1);
		result.text('$' + ((parseInt(count.text()))*price) );

	});
	$(document).on("click", ".block-1__count-left", function(event){
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


	$(document).on("change", ".block-1__item-radio input[type=radio]", function(event){
		var count = parseInt($(this).closest('.block-1__item').find('.block-1__count-center').text());
		var price = parseInt($(this).attr('data-price'));
		var result = $(this).closest('.block-1__item').find('.block-1__price');
		result.text('$' + (count*price));
	});

	$(document).on("click", ".order__count-X", function(event){
		$(this).parent().remove();
	});

	$(document).on("click", ".block-1__button", function(event){
		var parent = $(this).closest('.block-1__item');
		var title = parent.find('.block-1__item-title').text();
		var weight = parent.find('input[type=radio]:checked').attr('data-title');
		var priceNumber = parent.find('input[type=radio]:checked').attr('data-price');
		var num = parent.find('.block-1__count-center p').text();
		var price = parent.find('.block-1__price').text().replace('$', '');
		var result = '<li class="order__list-item" data-price="'+priceNumber+'">';
		result += '<p class="item order__text">';
		result += title+', <span class="order__text-text">'+weight+'</span></p>';
		result += '<div class="item order__count"><svg class="order__count-minus"><polyline fill="none" stroke="#7f7b76" stroke-width="2" points="1,0 4,5 4,5 7,0"></polyline></svg>';
		result += '<span class="text-red">x<i>'+num+'</i></span>';
		result += '<svg class="order__count-plus"><polyline fill="none" stroke="#7f7b76" stroke-width="2" points="1,5 4,0 4,0 7,5"></polyline></svg>';
		result += '<span class="point">............... </span></div>';
		result += '<p class="item text-red">$<i>'+price+'</i></p>';
		result += '<span class="order__count-X">×</span></li>';
		$('.order__list').append(result);
	});

	$('.block-1__button').click(function(){

	});

});
