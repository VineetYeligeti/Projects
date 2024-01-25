$(document).ready(function () {
    tab2();
    AwardsTab();
    AwardsSlider();
    ImplementingSlider();
    ProductSlider();
    gallerySlider();
    reportTabs();
    // mCustom scrollbar
});
//Reports tabs js starts
function tab2() {
    $(document).on('click', '.tabsContainer button', function () {
        var tab_id = $(this).attr('data-tabs');
        $('.tabsContainer button').removeClass('active');
        $('.tabcontent').removeClass('active');
        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });
}
//Reports tabs js ends

//home loan slider js starts
$(window).on('load resize', function () {
    if ($(window).width() < 992) {

        $('.prod-slider').slick({
            infinite: false,
            navgation: false,
            autoplay: false,
            loop: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
            ]
        });
    }

    else {
        $(".prod-slider").slick('unslick');
    }
});

// Implementing Partner Slider Start
function ImplementingSlider() {
    $('.csrImplementing-container').slick({
        speed: 300,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        infinite:false,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
// Implementing Partner Slider End

// Report & Polices Tabs Start

function reportTabs() {
    const tabs = document.querySelectorAll(".reportTabs li");
    const tabsContent = document.querySelectorAll(".reportPoliciesContent");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabsContent.forEach((content) => {
                content.classList.remove("active");
            });
            tabs.forEach((tab) => {
                tab.classList.remove("active");
            });
            tabsContent[index].classList.add("active");
            tabs[index].classList.add("active");
        });
    });
}
// Report & Polices Tabs End


// Explore Other Product Start
function ProductSlider() {
    $('.explore-product-container').slick({
        speed: 300,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        infinite:false,
        // centerMode: true,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
// Explore Other Product End 


// Awards And Certification Section Start
function AwardsTab() {
    $(document).on('click', '.awards-list  li', function () {
        $('.awards-list  li').removeClass('active');
        $(this).addClass('active');
        var clickIndex = $(this).index();
        $('.tab-content .tab-panel').removeClass('active')
        $('.tab-content .tab-panel').eq(clickIndex).addClass('active');
        $('.awardsSlider').slick('setPosition');
    });
}

function AwardsSlider() {
    $('.awardsSlider').slick({
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 3000,
        autoplay: false,
        cssEase: 'linear',
        responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                arrows: true
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3
            }
        }
        ]
    });
}


// Gallery Slide Js Start
function gallerySlider() {
    $('.galleryCSRSlider').slick({
        // centerMode: true,
        // infinite: true,
        speed: 1000,
        // // variableWidth: true,
        // autoplay:false,
        autoplaySpeed:1000,
        centerMode: true,
        centerPadding: '0',
        autoplay:false,
        infinite:false,
        arrows:true,
        slidesToShow: 3,
        // // centerPadding: '0',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerPadding: '50px',
            }
        }
        ]
      });

}
// Gallery Slide Js End

//Our Sustain MObile View Slider Start
mobileOnlySlider(".OurSustainInnerWrap", false, false, 991);

    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
        var slider = $($slidername);
        var settings = {
            mobileFirst: true,
            dots: $dots,
            arrows: $arrows,
            infinite:false,
            responsive: [
                {
                    breakpoint: $breakpoint,
                    settings: "unslick"
                }
            ]
        };

        slider.slick(settings);

        $(window).on("resize", function () {
            if ($(window).width() > $breakpoint) {
                return;
            }
            if (!slider.hasClass("slick-initialized")) {
                return slider.slick(settings);
            }
        });
    } 
//   Our Sustain MObile View Slider End