var swiper1 = new Swiper(".mySwiper1", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    loop:true
});

var swiper2 = new Swiper(".mySwiper2", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,

    },
});

$(document).ready(function () {
    $('.burger').on('click', function () {
        $('.burger, .header__navbar-below, .header__navbar-below-menu-1, .header__navbar-below-item').toggleClass('active')

    })

});

$(window).on('scroll', function () {
    if($(this).scrollTop() < 500){
        $('.go-top').fadeOut('slow')
    }
    else{
        $('.go-top').fadeIn('slow')
    }
});

$('.get-room__btn').on('click',function () {
    $('.overlay, .popup__consultation').fadeIn('slow')

});

$('.popup__close').on('click',function () {
    $('.overlay , .popup__consultation, .popup__thanks').fadeOut('slow')

});

$('.form__button').on('click',function (event) {
    event.preventDefault();
    $('.overlay, .popup__consultation').fadeOut('')
    $('.overlay, .popup__thanks').fadeIn('slow')

});

$('.overlay').on('click',function (e) {
    if (e.target.className==='overlay')
        $('.overlay , .popup__consultation, .popup__thanks').fadeOut('slow')

});