/* global document */

import ready from '../../static/js/documentReady.js';

ready(function() {
    var burgers = document.querySelectorAll('.burger');

    for (var i = 0; i < burgers.length; i++) {
        var burger = burgers[i];
        burger.addEventListener('click', showBurgerTarget);
    }

    function showBurgerTarget() {
        var targetId = this.getAttribute('data-target-id');
        var targetClassToggle = this.getAttribute('data-target-class-toggle');
        if (targetId && targetClassToggle) {
            this.classList.toggle('burger--close');
            if (document.getElementById(targetId)) {
                document.getElementById(targetId).classList.toggle(targetClassToggle);
            }
        }
    }
});
