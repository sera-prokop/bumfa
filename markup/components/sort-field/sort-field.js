import ready from '../../static/js/documentReady.js';

ready(function() {
    $('.sort-field__dropdown-link').on('click', function(e) {
        e.preventDefault();

        const $this = $(this);
        let textField = $this.find('span').text();
        const inputElement = $this.closest('.sort-field').find('.sort-field__input');

        inputElement.val(textField);
    });
});
