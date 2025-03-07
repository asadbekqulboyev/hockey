
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
        const swiper2 = new Swiper(".participants_slides", {
            spaceBetween:20,
            slidesPerView:4.5,
            navigation: {
                nextEl: ".participants .next",
                prevEl: ".participants .prev",
            },
            breakpoints: {
                0:{
                    slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2, // 640px va undan katta ekranda 2 ta slayd ko'rinadi
                },
                768: {
                  slidesPerView: 3, // 768px va undan katta ekranda 3 ta slayd
                },
                1024: {
                  slidesPerView: 4.5, // 1024px va undan katta ekranda 4 ta slayd
                }
            }
        });
        // faq
        $(".faq_header").click(function(){
            var content = $(this).next(".faq_description");
            // Barcha ochilganlarni yopish
            $(".faq_description").not(content).slideUp();
            $(".accordion_icon").text("+");
            
            // Bosilgan elementni ochish yoki yopish
            if(content.is(":visible")){
                content.slideUp();
                $(this).find(".accordion_icon").text("+");
            } else {
                content.slideDown();
                $(this).find(".accordion_icon").text("-");
            }
        });
    });  

