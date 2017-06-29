
$('#top-slider').slick({
    nextArrow: '<span class="gallery__link-right"><img src="img/arrow_gallery.png" ></span>',
    prevArrow: '<span class="gallery__link-left"><img src="img/arrow_gallery.png" ></span>',
});

$('#items-slider1').slick({
    dots: true,
    prevArrow: '<span class="link-left">s</span>',
    nextArrow: '<span class="link-right">s</span>',
    customPaging: function (slider, i) {
        return  (i + 1) + '/' + slider.slideCount;
    },
});

$('.gallery1__link-right').click(function(){
    $('#items-slider1').slick("slickNext");
});
$('.gallery1__link-left').click(function(){
    $('#items-slider1').slick("slickPrev");
});


$('#items-slider2').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    prevArrow: '<span class="link-left">s</span>',
    nextArrow: '<span class="link-right">s</span>',

    customPaging: function (slider, i) {
        return  (i + 1) + '/' + slider.slideCount;
    },

});
$('.gallery2__link-right').click(function(){
    $('#items-slider2').slick("slickNext");
});

$('.gallery2__link-left').click(function(){
    $('#items-slider2').slick("slickPrev");
});



$('#items-slider3').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    prevArrow: '<span class="link-left">s</span>',
    nextArrow: '<span class="link-right">s</span>',
    customPaging: function (slider, i) {
        return  (i + 1) + '/' + slider.slideCount;
    },
});

$('.gallery3__link-right').click(function(){
    $('#items-slider3').slick("slickNext");
});
$('.gallery3__link-left').click(function(){
    $('#items-slider3').slick("slickPrev");
});
