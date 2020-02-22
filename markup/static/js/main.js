'use strict';

// LazyLoad init
import LazyLoad from 'vanilla-lazyload';

const lazyLoadOptions = {
    elements_selector: '.lazy',
};

const createLazyLoadInstance = () => {
    return new LazyLoad(lazyLoadOptions);
};

document.addEventListener('DOMContentLoaded', createLazyLoadInstance);
// end LazyLoad init

import objectFitImages from 'object-fit-images';

import ready from './documentReady.js';

// import {example} from 'components/example/example';
// example();

ready(function() {
    // Polyfill for object-fit init
    objectFitImages();

    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector;
    }

    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }

    if ($('.smooth-scroll').length) {
        const scroll = new SmoothScroll('.smooth-scroll');
    }
    if ($('.gumshoe').length) {
        const spy = new Gumshoe('.gumshoe');
    }
    if ($('.sticky').length) {
        const sticky = new Sticky('.sticky');
    }
    $('.phone-mask').mask('+7 (000) 000-00-00', {placeholder: '+7 (976) 231-32-43'});

    autosize($('textarea'));
});

// Imports components

// import 'components/example/example';
import 'components/burger/burger';
import 'components/main-slider/main-slider';
import 'components/modal/modal';
import 'components/header-menu/header-menu';
import 'components/sort-field/sort-field';
import 'components/file-upload/file-upload';
// import 'components/production-menu/production-menu';
