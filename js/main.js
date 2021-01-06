$(function(){

    $('.slider__inner, .news_slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        infinite: false,
    });
    $('select').styler();

    $('.header__btn-menu').on('click', function() {
        $('.menu ul').slideToggle('slow');
    });

})
