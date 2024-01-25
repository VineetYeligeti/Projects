function articleSlider() {
    $(".js-knowledgeSlider").owlCarousel({
        loop: !1,
        dots: !0,
        margin: 10,
        nav: !0,
        navText: [ "", "" ],
        autoplay: !1,
        autoplayTimeout: 2500,
        responsive: {
            0: {
                dots: !0,
                items: 1
            },
            767: {
                dots: !0,
                items: 2
            },
            991: {
                dots: !0,
                items: 3
            }
        }
    });
}

function yourPreferedSlider() {
    windowWidth = $(window).width(), windowWidth < 767 ? $(".preferedChoiceList").owlCarousel({
        loop: !1,
        autoplay: !1,
        items: 2,
        margin: 10,
        nav: !0,
        navText: [ "", "" ],
        dots: !1,
        mouseDrag: !1,
        autoplayHoverPause: !1
    }) : $(".preferedChoiceList").owlCarousel("destroy");
}

function ReadMoreReadLess() {
    windowWidth = $(window).width(), windowWidth < 767 && $(document).on("click", ".readMore", function(e) {
        var txt = $(this).parents(".readmoreSec").find(".moretext").is(":visible") ? "Read More" : "Read Less";
        $(this).parents(".readmoreSec").find(".readMore").text(txt), $(this).parents(".readmoreSec").find(".moretext").slideToggle(200);
    });
}

function loadMore() {
    windowWidth = $(window).width(), windowWidth < 991 && ($(document).on("click", ".LoadMore", function(e) {
        $(this).parent(".loadmoreSec").find(".loadmoreBlock").fadeIn(1e3), $(this).parent(".loadmoreSec").find(".LoadMore").hide(), 
        $(this).parent(".loadmoreSec").find(".LoadLess").show(), $(this).parent(".loadmoreSec").find(".LoadLess").css("display", "inline-block");
    }), $(document).on("click", ".LoadLess", function(e) {
        $(this).parent(".loadmoreSec").find(".loadmoreBlock").fadeOut(1e3), $(this).parent(".loadmoreSec").find(".LoadLess").hide(), 
        $(this).parent(".loadmoreSec").find(".LoadMore").show(), $(this).parent(".loadmoreSec").find(".LoadMore").css("display", "inline-block");
    }));
}

function moreAccord() {
    $(document).on("click", ".moreAccord", function(e) {
        $(".displayHide").fadeIn(), $(".moreAccord").hide(), $(".loadLess").show();
    }), $(document).on("click", ".loadLess", function(e) {
        $(".displayHide").fadeOut(), $(".moreAccord").show(), $(".loadLess").hide();
    });
}

function scrollToActiveOnMenuClick() {
    $(document).on("click", ".navWrap li", function(event) {
        event.preventDefault(), console.log("called");
        var liClass = $(this).attr("class");
        "Calculatepremium" == liClass ? scrollToElement(".MainBannerWrap", 500, -80) : "Plans" == liClass ? scrollToElement(".smartInvestmentWrap", 500, -80) : "Benefits" == liClass ? scrollToElement(".BenefitWrap", 500, -80) : "features" == liClass ? scrollToElement(".keyfeatureWrap", 500, -80) : "Strategies" == liClass ? scrollToElement(".investmentStratWrap", 500, -100) : "fundDetails" == liClass ? scrollToElement(".fundperformanceWrap", 500, -30) : "faqs" == liClass ? scrollToElement(".faqWrap", 500, -30) : "eligibility" == liClass && scrollToElement(".eligibilityWrap", 500, -30), 
        $(".navWrap li").removeClass("active"), $(".navContent").removeClass("active"), 
        $(this).addClass("active");
    });
}

function preferdScrollbar() {
    991 < windowWidth ? $(".preferedLstscroll").mCustomScrollbar() : $(".preferedLstscroll").mCustomScrollbar("destroy");
}

function fundPerformanceSlider() {
    $(".fundPerformanceSlider").owlCarousel({
        loop: !1,
        autoplay: !1,
        items: 3,
        margin: 20,
        nav: !0,
        navText: [ "", "" ],
        dots: !1,
        mouseDrag: !1,
        autoplayHoverPause: !1,
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
    windowWidth < 991 ? $(".goallistSlider").owlCarousel({
        loop: !1,
        autoplay: !1,
        margin: 0,
        nav: !0,
        navText: [ "", "" ],
        dots: !1,
        mouseDrag: !1,
        autoplayHoverPause: !1,
        responsive: {
            0: {
                items: 1,
                dots: !0
            },
            767: {
                items: 2,
                dots: !0
            }
        }
    }) : $(".goallistSlider").owlCarousel("destroy");
}

function buyonlineSlider() {
    windowWidth < 991 ? $(".buyonlineSlider").owlCarousel({
        loop: !1,
        autoplay: !1,
        margin: 0,
        nav: !0,
        navText: [ "", "" ],
        dots: !1,
        mouseDrag: !1,
        autoplayHoverPause: !1,
        responsive: {
            0: {
                items: 1,
                margin: 30
            },
            767: {
                items: 2
            }
        }
    }) : $(".buyonlineSlider").owlCarousel("destroy");
}

function tabs() {
    $(".nav-tabs .nav-item .nav-link").click(function() {
        $(this).parents(".nav-item").siblings().removeClass("active"), $(this).parents(".nav-item").addClass("active");
        var tagid = $(this).data("tag");
        $(this).parents(".cp-tab").find(".tab-pane").removeClass("active"), $("#" + tagid).addClass("active");
    });
}

function bannerPopup() {
    $(document).on("click", ".js-openpop", function(e) {
        $(this).parents(".popUpwrap").find(".topPopup").toggle(), $(this).parents(".popUpwrap").find(".iconBg").toggleClass("active");
    });
}

function tabCarousel() {
    windowWidth = $(window).width(), windowWidth < 768 ? $(".tabCarousal").owlCarousel({
        loop: !0,
        margin: 0,
        dots: !0,
        dots: !1,
        autoplay: !1,
        mouseDrag: !1,
        responsiveClass: !0,
        nav: !1,
        items: 2.2,
        responsive: {
            575: {
                margin: 70
            }
        }
    }) : $(".tabCarousal").owlCarousel("destroy"), $(document).on("click", ".tabCarousal .owl-item", function() {
        $(".tabCarousal .nav-item").removeClass("active"), $(this).addClass("active"), $(".cp-tab").find(".tabPane").removeClass("active");
        var tagid = $(this).find(".nav-item ").data("tag");
        console.log(tagid), $("#" + tagid).addClass("active");
    });
}

function hereFromOurCustomers() {
    $(".js-customerSlider").owlCarousel({
        loop: !0,
        autoplay: !1,
        items: 1,
        nav: !0,
        navText: [ "", "" ],
        dots: !1,
        margin: 10,
        smartSpeed: 1e3,
        autoplaySpeed: 2e3,
        responsive: {
            0: {
                items: 1
            }
        }
    });
}

function typeAmountComma() {
    $("#investAmount").keyup(function() {
        var newvalue = $(this).val().replace(/,/g, ""), valuewithcomma = Number(newvalue).toLocaleString("en-IN");
        $(this).val(valuewithcomma);
    });
}

$(document).ready(function() {
    windowWidth = $(window).width(), windowHeight = $(window).height(), articleSlider(), 
    moreAccord(), loadMore(), scrollToActiveOnMenuClick(), preferdScrollbar(), fundPerformanceSlider(), 
    investmentStratSlider(), buyonlineSlider(), tabs(), bannerPopup(), tabCarousel(), 
    hereFromOurCustomers(), typeAmountComma();
}), $(window).on("load", function() {
    windowWidth = $(window).width(), windowHeight = $(window).height(), yourPreferedSlider(), 
    loadMore(), tabCarousel(), preferdScrollbar(), buyonlineSlider(), investmentStratSlider(), 
    buyonlineSlider();
}), $(window).on("resize", function() {
    windowWidth = $(window).width(), windowHeight = $(window).height(), yourPreferedSlider(), 
    ReadMoreReadLess(), loadMore(), tabCarousel(), preferdScrollbar(), buyonlineSlider(), 
    investmentStratSlider(), hereFromOurCustomers();
});