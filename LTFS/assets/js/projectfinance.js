var winWidth = $(window).width();
var winHeight = $(window).height();


$(document).ready(function() { 
    tabs();
    doMoreTabs();
    relateProdSlider();
    EmpowerSlider();
    KnowMoreSlider();
});

function tabs() {
    $(document).on('click', '.service-list li', function(e) {
        e.preventDefault();
        // alert('tab');
        var indexNo = $(this).index();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').addClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').siblings().removeClass('active');
    });
}


// Do more SME loan Tabs Start
function doMoreTabs() {
    const tabs = document.querySelectorAll(".your-home-tabs li");
    const tabsContent = document.querySelectorAll(".your-home-content");

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
// Do more SME loan Tabs End

// SME loan Related products start
 function relateProdSlider(){
    $('.relatedProductsSlider').slick({
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        centerPadding: 0,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    autoplay: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: false,
                    centerMode: false,
                    centerPadding: 10,
                }
            }
        ]
    });
}
//  SME loan Related products End

// Empowering SLider
function EmpowerSlider() {
$('.empoweringSlider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    centerMode: false,
    autoplaySpeed: 5000,
    autoplay: false,
    lazyLoad: 'ondemand',
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
}
// Empowering SLider End


// Know More about SME loan Slider Start
 function KnowMoreSlider(){
    $('.KnowMoreSlider').slick({
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        centerPadding: 0,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
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
}
// Know More about SME loan Slider End


// Explore Other Product Start
    $(window).on('load', function () {
        if (winWidth < 992) {
            $('.prodSlick').slick({
                slidesToShow: 1,
                slidesToScroll:1,
                arrows: true,
                dots: false,
                infinite: false,
                // centerMode:true,
                autoplaySpeed: 500,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll:1,
                            centerMode: true,
                            autoplaySpeed: 500,
                            autoplay: false,
                            centerPadding: 0,
                        }
                    }
                ]
            });
        }
    });

// Explore Other Product End 

