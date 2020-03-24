var swiper = new Swiper('.home-banner .swiper-container', {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.home-banner .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.home-banner .swiper-button-next',
        prevEl: '.home-banner .swiper-button-prev',
    },

});



