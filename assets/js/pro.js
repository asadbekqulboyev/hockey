
    $(document).ready(function() {
        // vide 
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
        // slide
        const swiper = new Swiper(".offer_slide", {
            spaceBetween:20,
            navigation: {
                nextEl: ".offer_slide .next",
                prevEl: ".offer_slide .prev",
            },
        });
        const swiper2 = new Swiper(".participants_slide", {
            spaceBetween:20,
            navigation: {
                nextEl: ".participants .next",
                prevEl: ".participants .prev",
            },
        });
    });  

