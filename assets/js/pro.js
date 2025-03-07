
    $(document).ready(function() {
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
        // effects
        gsap.registerPlugin(ScrollTrigger);
        $("section , footer").each(function () {
          gsap.from($(this), {
            opacity: 0,
            y: 90,
            duration: 0.5,
            scrollTrigger: {
              trigger: this,
              start: "top 100%",
              toggleActions: "play none none reverse"
            }
          });
        });
    });  

