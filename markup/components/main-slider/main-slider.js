import ready from '../../static/js/documentReady.js';

ready(function() {
    new Swiper('.main-slider__slider', {
        loop: true,
        keyboard: {
            enabled: true,
            // onlyInViewport: false,
        },
        grabCursor: true,
        slidesPerView: '1',
        navigation: {
            nextEl: '.main-slider__next',
            prevEl: '.main-slider__prev',
        },
    });
});
