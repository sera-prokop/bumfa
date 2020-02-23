import ready from '../../static/js/documentReady.js';

ready(function() {
    // $('.modal--catalog').modal('show');

    $('.catalog-card__link').on('click', function(e) {
        e.preventDefault();

        const modalElement = $(this).siblings('.modal--catalog');

        modalElement.modal('show');

        new Swiper(modalElement.find('.swiper-container'), {
            slidesPerView: '1',
            navigation: {
                nextEl: modalElement.find('.catalog-modal__next')[0],
                prevEl: modalElement.find('.catalog-modal__prev')[0],
            },
        });
    });
});
