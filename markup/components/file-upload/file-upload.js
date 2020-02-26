import ready from '../../static/js/documentReady.js';

ready(function() {
    const inputs = document.querySelectorAll('.js-inputfile');

    Array.prototype.forEach.call(inputs, function(input) {
        let label = input.nextElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener('change', function(e) {
            let fileName = '';
            if (this.files && this.files.length > 1) {
                fileName = (this.getAttribute('data-multiple-caption') || '').replace(
                    '{count}',
                    this.files.length
                );
            } else {
                fileName = e.target.value.split('\\').pop();
            }

            if (fileName) {
                label.querySelector('span').classList.add('file');
                label.querySelector('i').innerHTML = fileName;
            } else {
                label.innerHTML = labelVal;
            }
        });

        // Firefox bug fix
        input.addEventListener('focus', function() {
            input.classList.add('has-focus');
        });
        input.addEventListener('blur', function() {
            input.classList.remove('has-focus');
        });
    });
});
