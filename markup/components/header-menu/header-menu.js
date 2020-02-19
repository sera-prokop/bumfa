import ready from '../../static/js/documentReady.js';

ready(function() {
    // $('.header-menu__link').on('click', function(e) {
    //     const content = $(this).siblings('.header-menu__dropdown');
    //
    //     const div = $(e.target.closest('.header-menu__item--drop'));
    //
    //     if (content.length) {
    //         e.preventDefault();
    //
    //         $(this)
    //             .closest('.header-menu__item--drop')
    //             .toggleClass('show')
    //             .siblings()
    //             .removeClass('show');
    //     }
    // });
    //
    // window.onclick = function(event) {
    //     if (!event.target.closest('.header-menu__link')) {
    //         var dropdowns = document.getElementsByClassName("header-menu__item--drop");
    //         var i;
    //         for (i = 0; i < dropdowns.length; i++) {
    //             var openDropdown = dropdowns[i];
    //             if (openDropdown.classList.contains('show')) {
    //                 openDropdown.classList.remove('show');
    //             }
    //         }
    //     }
    // }
});
