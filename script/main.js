$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        waitForAnimate: true,
        centerMode: true,
    });
});