import ready from '../../static/js/documentReady.js';

ready(function() {
    $(document).on('click', function(e) {
        var div = $('.header-menu__dropdown');

        if (
            !div.is(e.target) && // если клик был не по нашему блоку
            div.has(e.target).length === 0
        ) {
            // и не по его дочерним элементам
            // $(this).closest('.header-menu__item--drop').removeClass('show')
            // div.closest('.header-menu__item--drop').removeClass('show');
        }
    });

    $('.header-menu__link').on('click', function(e) {
        const content = $(this).siblings('.header-menu__dropdown');

        const div = $(e.target.closest('.header-menu__item--drop'));

        // console.log(e.target.closest('.header-menu__item--drop'));
        if (content.length) {
            e.preventDefault();

            $(this)
                .closest('.header-menu__item--drop')
                .toggleClass('show')
                .siblings()
                .removeClass('show');
        }
    });
});
