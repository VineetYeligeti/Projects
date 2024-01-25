$(document).ready(function() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    articleSlider();
    moreAccord();
    loadMore();
    scrollToActiveOnMenuClick();
    preferdScrollbar();
    fundPerformanceSlider();
    investmentStratSlider();
    buyonlineSlider();
    tabs();
    bannerPopup();
    tabCarousel();
    hereFromOurCustomers();
    typeAmountComma();
    selectRadioButton();
});

$(window).on('load', function() {
    /* $(".benefitsOfBuyingWrap .faqsContent").mCustomScrollbar('destroy');*/
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    yourPreferedSlider();
    loadMore();
    tabCarousel();
    preferdScrollbar();
    buyonlineSlider();
    investmentStratSlider();
    buyonlineSlider();

});

$(window).on('resize', function() {

    windowWidth = $(window).width();
    windowHeight = $(window).height();
    yourPreferedSlider();
    ReadMoreReadLess();
    loadMore();
    tabCarousel();
    preferdScrollbar();
    buyonlineSlider();
    investmentStratSlider();
    hereFromOurCustomers();

});






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
        console.log('called');
        var liClass = $(this).attr('class');
        if (liClass == "Calculatepremium") {
            scrollToElement('.MainBannerWrap', 500, -80);
        } else if (liClass == "Plans") {
            scrollToElement('.smartInvestmentWrap', 500, -80);
        } else if (liClass == "Benefits") {
            scrollToElement('.BenefitWrap', 500, -80);
        } else if (liClass == "features") {
            scrollToElement('.keyfeatureWrap', 500, -80);
        } else if (liClass == "Strategies") {
            scrollToElement('.investmentStratWrap', 500, -100);
        } else if (liClass == "fundDetails") {
            scrollToElement('.fundperformanceWrap', 500, -30);
        } else if (liClass == "faqs") {
            scrollToElement('.faqWrap', 500, -30);
        } else if (liClass == "eligibility") {
            scrollToElement('.eligibilityWrap', 500, -30);
        }
        $('.navWrap li').removeClass('active');
        $('.navContent').removeClass('active');
        $(this).addClass('active');

    });
}
// scroll to active section on menu click end


function preferdScrollbar() {

    if (windowWidth > 991) {
        $(".preferedLstscroll").mCustomScrollbar();
    } else {
        $(".preferedLstscroll").mCustomScrollbar('destroy');
    }

}



function fundPerformanceSlider() {
    $(".fundPerformanceSlider").owlCarousel({
        loop: false,
        autoplay: false,
        items: 3,
        margin: 20,
        nav: true,
        navText: ["", ""],
        dots: false,
        mouseDrag: false,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1.1
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });
}

function investmentStratSlider() {
    if (windowWidth < 991) {
        $(".goallistSlider").owlCarousel({
            loop: false,
            autoplay: false,
            margin: 0,
            nav: true,
            navText: ["", ""],
            dots: false,
            mouseDrag: false,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1,
                    dots: true,

                },
                767: {
                    items: 2,
                    dots: true,
                }
            }
        });

    } else {
        $('.goallistSlider').owlCarousel('destroy');
    }
}

function buyonlineSlider() {
    if (windowWidth < 991) {
        $(".buyonlineSlider").owlCarousel({
            loop: false,
            autoplay: false,
            margin: 0,
            nav: true,
            navText: ["", ""],
            dots: false,
            mouseDrag: false,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 30,

                },
                767: {
                    items: 2,
                }
            }
        });

    } else {
        $('.buyonlineSlider').owlCarousel('destroy');
    }
}


function tabs() {
    $('.nav-tabs .nav-item .nav-link').click(function() {
        $(this).parents('.nav-item').siblings().removeClass('active');
        $(this).parents('.nav-item').addClass('active');
        var tagid = $(this).data('tag');
        $(this).parents('.cp-tab').find('.tab-pane').removeClass('active');
        $('#' + tagid).addClass('active');
    });
}





function bannerPopup() {
    $(document).on('click', '.js-openpop', function(e) {
        $(this).parents(".popUpwrap").find(".topPopup").toggle();
        $(this).parents(".popUpwrap").find(".iconBg").toggleClass("active");
    })

}

function tabCarousel() {
    windowWidth = $(window).width();
    if (windowWidth < 768) {
        $('.tabCarousal').owlCarousel({
            loop: true,
            // center: true,
            margin: 0,
            dots: true,
            dots: false,
            autoplay: false,
            mouseDrag: false,
            responsiveClass: true,
            nav: false,
            items: 2.2,
            responsive: {
                575: {
                    margin: 70,

                }
            }
        });
    } else {
        $('.tabCarousal').owlCarousel('destroy');
    }

    $(document).on('click', '.tabCarousal .owl-item', function() {
        // var tabClickedIdx = $(this).parents(".owl-item").index();
        $(".tabCarousal .nav-item").removeClass("active");
        $(this).addClass("active");
        $(".cp-tab").find(".tabPane").removeClass("active");
        var tagid = $(this).find('.nav-item ').data('tag');
        console.log(tagid);
        $('#' + tagid).addClass('active');
        // $(".bs-tab").find(".tabPane").eq(tabClickedIdx).addClass("active");
    });

}

function hereFromOurCustomers() {
    $(".js-customerSlider").owlCarousel({
        loop: true,
        autoplay: false,
        items: 1,
        nav: true,
        navText: ["", ""],
        dots: false,
        margin: 10,
        // stagePadding: 100,
        smartSpeed: 1000,
        autoplaySpeed: 2000,
        responsive: {
            0: {
                items: 1
            }
        }
    });

}

function typeAmountComma() {
    $('#investAmount').keyup(function() {
        var value = $(this).val();
        var newvalue = value.replace(/,/g, '');
        var valuewithcomma = Number(newvalue).toLocaleString('en-IN');
        $(this).val(valuewithcomma);
    });
}

function selectRadioButton() {
    $('.radioBt2 input').on('change', function() {
        if ($(this).is(':checked')) {
            var selectedRadioButton = $(this).siblings('.radioText').text();
            var dobLabel = $('.dateField .dobLabel').text();

            $('.radioBt2').removeClass('active');
            $(this).parents('.radioBt2').addClass('active');

            if (selectedRadioButton == 'Self') {
                dobLabel = "My Date Of Birth";
                $('.dateField #dobLabel').text(dobLabel);
            } else if (selectedRadioButton == 'Spouse') {
                dobLabel = "Spouse's Date Of Birth";
                $('.dateField #dobLabel').text(dobLabel);
            } else if (selectedRadioButton == 'Child') {
                dobLabel = "Child's Date Of Birth";
                $('.dateField #dobLabel').text(dobLabel);
            } else {
                dobLabel = "Grand Child's Date Of Birth";
                $('.dateField #dobLabel').text(dobLabel);
            }
        }
    });
}