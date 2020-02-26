import ready from '../../static/js/documentReady.js';

ready(function() {
    $('.about-video__big-link').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this)
            .find('video')[0]
            .play();

        console.log($(this).find('video')[0]);
    });
});
