var winWidth = $(window).width();
var winHeight = $(window).height();


$(document).ready(function() {
    tab();
    // socialshare();
    // resize();

    //Home Banner Start
    $('.empoweringSlider.slick-initialized.slick-slider .slick-list .slick-track').removeAttr('style');
    $('.homeBannerSlider').slick({
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        dots: true,
        speed: 800,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        centerPadding: 0,
        cssEase: 'linear',
    });
    //Home Banner Ends

});

function tab() {
    $(document).on('click', '.service-list li', function() {
        // alert('tab');
        var indexNo = $(this).index();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').addClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').siblings().removeClass('active');
    });
}
$(window).on('scroll', function() {

});

// efficient component slider js

$(window).on('load', function() {

    // Start Our Products Goal Component
    $('.KnowMoreSlider').slick({
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 2000,
        autoplay: false,
        centerPadding: 0,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: false,
                    centerPadding: 10,
                }
            }
        ]
    });
    // End Product goals

    // StartEmpowering goals
    
    $('.empoweringSlider').slick({
        slidesToShow: 2,
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
                    arrows: false,
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
$(window).on('load resize', function() {
    if (winWidth < 992) {

        $('.effecient-slider').slick({
            infinite: false,
            navgation: false,
            autoplay: false,
            loop: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }]
        });

        $('.companies-slider').slick({
            infinite: false,
            navgation: false,
            autoplay: false,
            arrows: false,
            loop: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }]
        });

        $('.prodGoalWrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false,
            // centerMode:true,
            autoplaySpeed: 500,
            autoplay: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    autoplaySpeed: 500,
                    autoplay: false,
                    centerPadding: 0,

                }
            }]
        });
    }
    // else {
    //     $(".effecient-slider, .prodGoalWrap, .companies-slider").slick('unslick');

    // }
});

// efficient component slider js end



// form read more js
// function myFunction() {
//     var dots = document.getElementById("threedots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("readmorebtn");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }
// efficient component slider js end


// function socialshare(){
    
//     $(document).on("mouseover", function () {
//         // alert("hiii")
//         $(".share").removeClass("hover");
//       });
//     $(".dateTImewrap").on("mouseout", function () {
//     setTimeout(function () {
//         $(".share").addClass("hover");
//     }, 100);
//     });
// }


