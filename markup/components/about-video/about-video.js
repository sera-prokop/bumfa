import ready from '../../static/js/documentReady.js';

ready(function() {
    $('.about-video__big-link').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this)
            .find('video')[0]
            .play();
    });

    $('.about-video__img').on('click', function(e) {
        e.preventDefault();

        const dataTime = $(this).data('time');
        const videoWrapper = $(this)
            .closest('.about-video')
            .find('.about-video__big-link');
        const videoElement = videoWrapper.find('video')[0];

        videoWrapper.addClass('active');
        if (dataTime) {
            videoElement.addEventListener(
                'seeked',
                function() {
                    videoElement.play();
                },
                true
            );
            videoElement.currentTime = dataTime;
        } else {
            videoElement.play();
        }
    });
});
