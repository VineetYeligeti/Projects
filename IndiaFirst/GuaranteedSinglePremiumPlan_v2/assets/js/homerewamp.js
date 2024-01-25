$(document).ready(function() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    lifeIns();
    articleSlider();
    hearCustomersSlider();
    moreAccord();
    knowfeatureSlider();
    loadMore();
    scrollToActiveOnMenuClick();
});

$(window).on('load', function() {
    /* $(".benefitsOfBuyingWrap .faqsContent").mCustomScrollbar('destroy');*/
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    yourPreferedSlider();
    termspolicycover();
    covrageBlockSec();
    knowfeatureSlider();
    loadMore();
});

$(window).on('resize', function() {

    windowWidth = $(window).width();
    windowHeight = $(window).height();
    yourPreferedSlider();
    termspolicycover();
    covrageBlockSec();
    ReadMoreReadLess();
    loadMore();
    knowfeatureSlider();


});




function lifeIns() {
    $(document).on('click', '.title', function(event) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parents(".accBox").find('.details').removeClass('active');

        } else {
            $(this).addClass('active');
            $(this).parents(".accBox").find('.details').addClass('active');
        }

    });
}

function articleSlider() {
    var owl = $('.js-knowledgeSlider');
    owl.owlCarousel({
        loop: false,
        dots: true,
        margin: 10,
        nav: true,
        navText: ["", ""],
        autoplay: false,
        autoplayTimeout: 2500,
        responsive: {
            0: {
                dots: true,
                items: 1
            },
            767: {
                dots: true,
                items: 2
            },
            991: {
                dots: true,
                items: 3
            }
        }
    });

}

function hearCustomersSlider() {
    var owl = $('.js-hearCustomers');

    owl.owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: false,
        navText: ["", ""],
        nav: true,
        mouseDrag: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1,
                loop: false,
            },
            991: {
                items: 1,
            },
            1170: {
                items: 3,
            }
        }
    });
}

function knowfeatureSlider() {
    if (windowWidth > 991) {
        $(".featureSlider").owlCarousel({
            loop: false,
            autoplay: false,
            items: 1,
            nav: true,
            navText: ["", ""],
            dots: false,
            mouseDrag: false,
            autoplayHoverPause: false,
            // slideTransition: 'fade',
            animateOut: 'slideOutDown',
            animateIn: 'slideInUp',
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    slideBy: 2
                },
                992: {
                    items: 1,
                    slideBy: 1
                },
                1000: {
                    items: 1,
                    slideBy: 1
                }
            }
        });


        var owl = $('.reviews-testimonial');
        owl.owlCarousel();

        $('.next-review-btn').click(function() {
            // slider animation
            owl.trigger('next.owl.carousel');
        });

        $('.prev-review-btn').click(function() {
            // slider animation
            owl.trigger('prev.owl.carousel');
        });
    } else {
        $('.featureSlider').owlCarousel('destroy');
    }


}

function yourPreferedSlider() {

    windowWidth = $(window).width();
    if (windowWidth < 767) {

        $(".preferedChoiceList").owlCarousel({
            loop: false,
            autoplay: false,
            items: 2,
            margin: 10,
            nav: true,
            navText: ["", ""],
            dots: false,
            mouseDrag: false,
            autoplayHoverPause: false,
        });
    } else {
        $('.preferedChoiceList').owlCarousel('destroy');
    }
}

function termspolicycover() {

    windowWidth = $(window).width();
    if (windowWidth < 767) {
        $(".iconsPlans").owlCarousel({
            loop: false,
            autoplay: false,
            items: 2,
            nav: true,
            margin: 0,
            stagePadding: 10,
            navText: ["", ""],
            dots: false,
            mouseDrag: false,
            autoplayHoverPause: false,
        });
    } else {
        $('.iconsPlans').owlCarousel('destroy');
    }
}


function covrageBlockSec() {

    windowWidth = $(window).width();

    if (windowWidth < 767) {
        $(".covrageBlockSec").owlCarousel({
            loop: false,
            autoplay: false,
            items: 1,
            nav: true,
            navText: '',
            dots: false,
            mouseDrag: false,
            autoplayHoverPause: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                480: {
                    items: 2,

                }

            }
        });
    } else {
        $('.covrageBlockSec').owlCarousel('destroy');
    }
}


function ReadMoreReadLess() {

    windowWidth = $(window).width();
    if (windowWidth < 767) {
        $(document).on('click', '.readMore', function(e) {
            var txt = $(this).parents(".readmoreSec").find(".moretext").is(':visible') ? 'Read More' : 'Read Less';
            $(this).parents(".readmoreSec").find(".readMore").text(txt);
            $(this).parents(".readmoreSec").find('.moretext').slideToggle(200);
        });
    }

}


function loadMore() {
    windowWidth = $(window).width();
    if (windowWidth < 991) {
        $(document).on('click', '.LoadMore', function(e) {
            $(this).parent(".loadmoreSec").find(".loadmoreBlock").fadeIn(1000);
            $(this).parent(".loadmoreSec").find(".LoadMore").hide();
            $(this).parent(".loadmoreSec").find(".LoadLess").show();
            $(this).parent(".loadmoreSec").find(".LoadLess").css('display', 'inline-block')
        })

        $(document).on('click', '.LoadLess', function(e) {
            $(this).parent(".loadmoreSec").find(".loadmoreBlock").fadeOut(1000);
            $(this).parent(".loadmoreSec").find(".LoadLess").hide();
            $(this).parent(".loadmoreSec").find(".LoadMore").show();
            $(this).parent(".loadmoreSec").find(".LoadMore").css('display', 'inline-block')

        })

    }
}


function moreAccord() {
    $(document).on('click', '.moreAccord', function(e) {
        $(".displayHide").fadeIn();
        $(".moreAccord").hide();
        $(".loadLess").show();

    })

    $(document).on('click', '.loadLess', function(e) {
        $(".displayHide").fadeOut();
        $(".moreAccord").show();
        $(".loadLess").hide();
    })
}

// scroll to active section on menu click start
function scrollToActiveOnMenuClick() {
    $(document).on('click', '.navWrap li', function(event) {
        event.preventDefault();
        var liClass = $(this).attr('class');
        if (liClass == "Calculatepremium") {
            scrollToElement('.onlTermSectionWrap', 500, -80);
        } else if (liClass == "Aboutus") {
            scrollToElement('.aboutOnlinePlanWrap', 500, -80);
        } else if (liClass == "benefits") {
            scrollToElement('.benefitsOfBuyingWrap', 500, -80);
        } else if (liClass == "features") {
            scrollToElement('.knowFeatureWrap', 500, -80);
        } else if (liClass == "testimonials") {
            scrollToElement('.hearCustomersWrap', 500, -100);
        } else if (liClass == "Blogs") {
            scrollToElement('.articlesForYouWrap', 500, -30);
        } else if (liClass == "faqs") {
            scrollToElement('.faqWrap', 500, -30);
        }
        $('.navWrap li').removeClass('active');
        $('.navContent').removeClass('active');
        $(this).addClass('active');

    });
}
// scroll to active section on menu click end