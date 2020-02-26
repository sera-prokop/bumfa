import ready from '../../static/js/documentReady.js';

ready(function() {
    /**/
    const breakpoint = window.matchMedia('(min-width: 768px)');

    const breakpointChecker = function() {
        if (breakpoint.matches === true) {
        } else if (breakpoint.matches === false) {
        }
    };

    breakpoint.addListener(breakpointChecker);

    breakpointChecker();
});
