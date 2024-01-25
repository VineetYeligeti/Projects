var winWidth = $(window).width();
var winHeight = $(window).height();


$(document).ready(function() {
    developmentTab();
    tabs();
    serviceTab();
    AwardsTab();
    AwardsSlider();
    resultsTabs();

    $(document).on('click', '#infrafinancetab .service-list-item', function() {
        $('html, body').animate({
            scrollTop: $("#infrafinancetab").offset().top - 50
        }, 200);
    });
});





// Awards And Certification Section Start
function AwardsTab() {
    $(document).on('click', '.awards-list  li', function () {
        $('.awards-list  li').removeClass('active');
        $(this).addClass('active');
        var clickIndex = $(this).index();
        $('.awards-certificate-wrap .tab-content .tab-panel').removeClass('active')
        $('.awards-certificate-wrap .tab-content .tab-panel').eq(clickIndex).addClass('active');
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
        responsive: [{
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
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
// Awards And Certification Section End

// Tab Section//

function tabs() {
    $(document).on('click', '.at-your-service .service-list  li', function () {
        $('.at-your-service .service-list  li').removeClass('active');
        $(this).addClass('active');
        var clickIndex = $(this).index();
        $('.at-your-service .tab-cont .tab-panel').removeClass('active')
        $('.at-your-service .tab-cont .tab-panel').eq(clickIndex).addClass('active');
       // $('.serviceResult').slick('setPosition');
    });
}

function developmentTab() {
    $(document).on('click', '.infra-tabs .service-list  li', function () {
        $('.infra-tabs .service-list li').removeClass('active');
        $(this).addClass('active');
        var clickIndex = $(this).index();
        $('.infra-tabs .tab-cont .tab-panel').removeClass('active')
        $('.infra-tabs .tab-cont .tab-panel').eq(clickIndex).addClass('active');
       // $('.serviceResult').slick('setPosition');
    });
}

function serviceTab() {
    $(document).on('click', '.service-tab-list  li', function () {
        $('.service-tab-list  li').removeClass('active');
        $(this).addClass('active');
        var clickIndex = $(this).index();
        $('.service-tab-wrapper .tab-content .tab-panel').removeClass('active')
        $('.service-tab-wrapper .tab-content .tab-panel').eq(clickIndex).addClass('active'); 
       // $('.serviceResult').slick('setPosition');
    });
}
function resultsTabs() {
    $('.reportTabs li').click(function(){
        $(this).parents('.reportTabContainer').find('.reportTabs li').removeClass('active');
        $(this).addClass('active');
        var currentTabIndex = $(this).index();

        $(this).parents('.reportTabContainer').find('.content-container .reportPoliciesContent').removeClass('active');
        $(this).parents('.reportTabContainer').find('.content-container .reportPoliciesContent').eq(currentTabIndex).addClass('active');
      });
}
