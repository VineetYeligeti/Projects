var winWidth = $(window).width();
var winHeight = $(window).height();


$(document).ready(function() {

     // Thought leadership goals

    $('.tl-testimonialSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        centerMode: false,
        autoplaySpeed: 2000,
        autoplay: false,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });
});
