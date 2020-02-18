import ready from '../../static/js/documentReady.js';
ready(function() {
new Swiper('.main-slider__container', {
loop: true,
slidesPerView: '1',
navigation: {
nextEl: '.main-slider__next',
prevEl: '.main-slider__prev',
},
});
});

