
    $(document).ready(function() {
        $('.video').magnificPopup({
            type: 'iframe',
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/', 
                        id: function(url) {
                            var match = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                            return match && match[1] ? match[1] : null;
                        },
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            }
        });
    });  

