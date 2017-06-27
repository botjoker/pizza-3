
$('#top-slider').slick({
    nextArrow: '<span class="gallery__link-right"><img src="img/arrow_gallery.png" ></span>',
    prevArrow: '<span class="gallery__link-left"><img src="img/arrow_gallery.png" ></span>',
});

$('#items-slider1').slick({
    prevArrow: '<span class="link-left">s</span>',
    nextArrow: '<span class="link-right">s</span>',
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
    prevArrow: '<span class="link-left">s</span>',
    nextArrow: '<span class="link-right">s</span>',

    customPaging: function (slider, i) {
        console.log(i);
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
    prevArrow: '<span class="link-left">s</span>',
    nextArrow: '<span class="link-right">s</span>',
});

$('.gallery3__link-right').click(function(){
    $('#items-slider3').slick("slickNext");
});
$('.gallery3__link-left').click(function(){
    $('#items-slider3').slick("slickPrev");
});
