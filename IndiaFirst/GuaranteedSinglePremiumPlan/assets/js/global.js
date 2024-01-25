Modernizr.Detectizr.detect({
    detectScreen: !0
});

var generalSidebarHeight, stickyTop, stickOffset, stickyStopperPosition, stopPoint, diff, formOffset, windowWidth = $(window).width(), windowHeight = $(window).height(), $sticky = $(".formWrap"), $stickyrStopper = $("footer");

function hambgRes() {
    992 < $(window).width() && $(".navContent").hasClass("active") && ($(".navContent").removeClass("active"), 
    $(".overlay").fadeOut());
}

function loader() {
    $(".loader").fadeOut(), $(".loaderOverlay").fadeOut(), $("body").removeClass("fixed");
}

function generateOwl(target, navigation, itemCount, displayDots, responsivecount, browserWidth, loop, destopcount, margin) {
    var owl = $(target);
    $(window).width() <= browserWidth ? owl.owlCarousel({
        items: itemCount,
        loop: loop,
        dots: displayDots,
        nav: navigation,
        navText: [ "", "" ],
        autoplay: !1,
        autoplayTimeout: 2500,
        margin: margin,
        responsive: {
            0: {
                items: itemCount
            },
            768: {
                items: responsivecount
            },
            1000: {
                items: destopcount
            }
        }
    }) : ($(target).owlCarousel("destroy"), $(target).css("display", "block"));
}

function checkButton() {
    $(".switch input").on("change", function() {
        $(this).is(":checked") ? ($(this).parents(".toggleBt").addClass("active"), $(this).parents(".toggleBt").find(".label2").addClass("white"), 
        $(".percent").addClass("hide"), $(".amount").removeClass("hide"), $(this).parents(".toggleBt").find(".label1").removeClass("white")) : ($(this).parents(".toggleBt").removeClass("active"), 
        $(this).parents(".toggleBt").find(".label1").addClass("white"), $(this).parents(".toggleBt").find(".label2").removeClass("white"), 
        $(".percent").removeClass("hide"), $(".amount").addClass("hide"));
    });
}

function radioButton() {
    $(".radioBt input").on("change", function() {
        $(this).is(":checked") && ($(".radioBt").removeClass("active"), $(this).parents(".radioBt").addClass("active"));
    }), $(".radioBt2 input").on("change", function() {
        $(this).is(":checked") && ($(".radioBt2").removeClass("active"), $(this).parents(".radioBt2").addClass("active"));
    }), $(".mradioBt2 input").on("change", function() {
        $(this).is(":checked") && ($(".mradioBt2").removeClass("active"), $(this).parents(".mradioBt2").addClass("active"));
    }), $(".sgradioBt input").on("change", function() {
        $(this).is(":checked") && ($(".sgradioBt").removeClass("active"), $(this).parents(".sgradioBt").addClass("active"));
    }), $(".syradioBt input").on("change", function() {
        $(this).is(":checked") && ($(".syradioBt").removeClass("active"), $(this).parents(".syradioBt").addClass("active"));
    }), $(".cradioBt input").on("change", function() {
        $(this).is(":checked") && ($(".cradioBt").removeClass("active"), $(this).parents(".cradioBt").addClass("active"));
    }), $(".cyradioBt input").on("change", function() {
        $(this).is(":checked") && ($(".cyradioBt").removeClass("active"), $(this).parents(".cyradioBt").addClass("active"));
    }), $(".gcradioBt input").on("change", function() {
        $(this).is(":checked") && ($(".gcradioBt").removeClass("active"), $(this).parents(".gcradioBt").addClass("active"));
    }), $(".gcyradioBt input").on("change", function() {
        $(this).is(":checked") && ($(".gcyradioBt").removeClass("active"), $(this).parents(".gcyradioBt").addClass("active"));
    }), $(".ptradioBt input").on("change", function() {
        $(this).is(":checked") && ($(".ptradioBt").removeClass("active"), $(this).parents(".ptradioBt").addClass("active"));
    }), $(".ydradioBt input").on("change", function() {
        $(this).is(":checked") && ($(".ydradioBt").removeClass("active"), $(this).parents(".ydradioBt").addClass("active"));
    }), $(".bs-radio input[name='plan'").click(function() {
        $("#group1 .hidden-2").hide().removeClass("shown"), $("#" + $(this).val()).show(), 
        $(this).removeClass("active"), setTimeout(function() {
            $(".hidden-2").addClass("shown");
        }, 0);
    }), $(".bs-radio input[name='invest'").click(function() {
        $("#group2 .hidden-2").hide().removeClass("shown"), $("#" + $(this).val()).show(), 
        setTimeout(function() {
            $(".hidden-2").addClass("shown");
        }, 0);
    }), $(".bs-radio input[name='status'").click(function() {
        $("#group1 .hidden-3").hide().removeClass("shown"), $("#" + $(this).val()).show(), 
        setTimeout(function() {
            $(".hidden-3").addClass("shown");
        }, 0);
    });
}

function radioButton2() {
    $(".radioBt2").on("change", function() {
        $(this).is(":checked") && ($(".radioBt2").removeClass("active"), $(this).parents(".radioBt2").addClass("active"));
    });
}

function hamburger() {
    $(document).on("click", ".jsMenu", function(e) {
        e.stopPropagation(), e.preventDefault(), $(".navContent").addClass("active"), $(".overlay").fadeIn(), 
        $(".profileInfo").hide();
    }), $(document).on("click", ".back", function(e) {
        e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation(), $(".navContent").removeClass("active"), 
        $(".overlay").fadeOut(), $(".profileInfo").hide();
    }), $(document).on("click ", function() {
        $(".navContent").removeClass("active"), $(".overlay").fadeOut();
    });
}

function scrollTop() {
    $(document).on("click", "#js_toTop", function(e) {
        e.preventDefault(), $("body,html").animate({
            scrollTop: 0
        }, 600);
    });
}

function scrollToElement(selector, time, verticalOffset) {
    time = void 0 !== time ? time : 500, verticalOffset = void 0 !== verticalOffset ? verticalOffset : 0, 
    element = $(selector), offset = element.offset(), offsetTop = offset.top + verticalOffset, 
    $("html, body").stop(!0, !1).animate({
        scrollTop: offsetTop
    }, time);
}

function scrollspy() {
    var lastId, topMenu = $(".navWrap"), topMenuHeight = topMenu.outerHeight() + 150, menuItems = topMenu.find("a"), scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) return item;
    });
    menuItems.click(function(e) {
        var offsetTop, href = $(this).attr("href");
        null != $(href).offset() && (offsetTop = "#" === href ? 0 : $(href).offset().top - topMenuHeight + 1), 
        $("html, body").stop().animate({
            scrollTop: offsetTop
        }, 300), e.preventDefault();
    }), $(window).scroll(function() {
        var fromTop = $(this).scrollTop() + topMenuHeight, cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop) return this;
        }), id = (cur = cur[cur.length - 1]) && cur.length ? cur[0].id : "";
        lastId !== id && (lastId = id, menuItems.parent().removeClass("active"));
    });
}

function toolTip() {
    $('[data-toggle="tooltip"]').tooltip();
}

function scrollToActiveOnMenuClick() {
    $(document).on("click", ".navWrap li", function(event) {
        event.preventDefault();
        var liClass = $(this).attr("class");
        "Calculatepremium" == liClass ? scrollToElement(".MainBannerWrap", 500, -80) : "Plans" == liClass ? scrollToElement(".planoptionWrap", 500, -80) : "Benefits" == liClass ? scrollToElement(".BenefitWrap", 500, -80) : "features" == liClass ? scrollToElement(".keyfeatureWrap", 500, -80) : "eligibility" == liClass ? scrollToElement(".eligibilityWrap", 500, -80) : "Strategies" == liClass ? scrollToElement(".investmentStratWrap", 500, -100) : "faqs" == liClass && scrollToElement(".faqWrap", 500, -30), 
        $(".navWrap li").removeClass("active"), $(".navContent").removeClass("active"), 
        $(this).addClass("active");
    });
}

function numberOnly() {
    $(".numberOnly").keypress(function(e) {
        if (8 != e.which && 0 != e.which && (e.which < 48 || 57 < e.which)) return !1;
    });
}

function headerToggle() {
    $(".inside").length && $(".onlineTermForm").find(".submit span").html("Update"), 
    $(".ios").length ? $(document).on("touchstart", ".Proficon", function(e) {
        $(".profileInfo").toggleClass("profileOpen"), $(".profileInfo").slideToggle(), e.stopPropagation(), 
        e.preventDefault();
    }) : $(document).on("click", ".Proficon", function(e) {
        $(".profileInfo").toggleClass("profileOpen"), $(".profileInfo").slideToggle(), e.stopPropagation(), 
        e.preventDefault();
    }), $(document).on("click", ".profileInfo .editBt", function(e) {
        $(window).width() <= 768 && $(".profileInfo").hasClass("profileOpen") && ($(".profileInfo").removeClass("profileOpen"), 
        $(".profileInfo").hide());
    });
}

function header() {
    if ($(window).width() < 992) {
        var profle = $(".profileInfo").hide().detach();
        $(".Proficon").after(profle);
    } else {
        var profle1 = $(".profileInfo").show().detach();
        $(".navWrap").after(profle1);
    }
}

function inputAnimation() {
    $("input.textBox").each(function(index, el) {
        "" !== $(this).val() && $(this).parent().addClass("active");
    }), $("input.textBox").focus(function(index, el) {
        "" == $(this).val() && ($(this).parent().addClass("active"), $(this).siblings(".effectLabel").addClass("labelFocus"), 
        $(this).siblings(".effectLabel").find(".placeHolder").addClass("placeholderFocus"));
    }), $("input.textBox").blur(function(index, el) {
        $(this).siblings(".effectLabel").removeClass("labelFocus"), $(this).siblings(".effectLabel").find(".placeHolder").removeClass("placeholderFocus"), 
        "" == $(this).val() && $(this).parent().removeClass("active");
    });
}

function progressBar() {
    $(".progress-bar").loading();
}

function leftNavFixedItems() {
    $sticky.offset() && (generalSidebarHeight = $sticky.innerHeight(), stickyTop = $sticky.offset().top, 
    stickOffset = 200, stickyStopperPosition = $stickyrStopper.offset().top, stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset, 
    diff = $(".formBgWrap").height() - generalSidebarHeight, null != $(".formBgWrap").offset() && (formOffset = $(".formBgWrap").offset().top));
}

function leftNavFixedonScroll() {
    if ($sticky.offset()) if (stickyStopperPosition = $stickyrStopper.offset().top, 
    stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset, diff = $(".formBgWrap").height() - generalSidebarHeight, 
    991 < windowWidth) {
        var windowTop = $(window).scrollTop();
        stopPoint < windowTop ? $sticky.stop(!0, !1).css({
            position: "absolute",
            top: diff
        }) : stickyTop < windowTop + stickOffset ? $sticky.stop(!0, !1).css({
            position: "fixed",
            top: formOffset - generalSidebarHeight / 2
        }) : $sticky.stop(!0, !1).css({
            position: "absolute",
            top: "-50px"
        });
    } else $sticky.removeAttr("style");
}

function basicDetailsFunc() {
    $(document).on("click", '.js-basicdetails input[type="radio"]', function() {
        var abc = $(this).val();
        "Self" == abc ? ($(".self-formwrap").removeClass("hide"), $(".spouseInfo").addClass("hide"), 
        $(".child-formwrap").addClass("hide"), $(".grandchild-formwrap").addClass("hide"), 
        $(".your-detail-wrap").addClass("hide")) : "Spouse" == abc ? ($(".spouseInfo").removeClass("hide"), 
        $(".self-formwrap").addClass("hide"), $(".child-formwrap").addClass("hide"), $(".grandchild-formwrap").addClass("hide"), 
        $(".your-detail-wrap").removeClass("hide")) : "Child" == abc ? ($(".child-formwrap").removeClass("hide"), 
        $(".self-formwrap").addClass("hide"), $(".spouseInfo").addClass("hide"), $(".grandchild-formwrap").addClass("hide"), 
        $(".your-detail-wrap").removeClass("hide")) : "Grand Child" == abc && ($(".grandchild-formwrap").removeClass("hide"), 
        $(".self-formwrap").addClass("hide"), $(".spouseInfo").addClass("hide"), $(".child-formwrap").addClass("hide"), 
        $(".your-detail-wrap").removeClass("hide"));
    }), $(document).on("click", '.js-status input[type="radio"]', function() {
        "yes" == $(this).val() ? ($(".yes").removeClass("hide"), $(".no").hide()) : ($(".yes").addClass("hide"), 
        $(".no").show());
    });
}

function basicdetailExpand() {
    $(".accordhd").click(function() {
        $(".basic-details").toggleClass("active"), $(".basicDetailAccord").toggleClass("active");
    });
}

function datepicker() {
    $(".datepicker").datepicker({
        format: "dd/mm/yyyy"
    }), $(".datepicker").on("changeDate", function(ev) {
        $(this).datepicker("hide");
    });
}

function dateInputMask() {
    var inputmask_options;
    inputmask_options = {
        mask: "99/99/9999",
        alias: "date",
        placeholder: "dd/mm/yyyy",
        insertMode: !1
    }, $(".inputmask").inputmask("99/99/9999", inputmask_options);
}

function apply() {
    $(document).on("click", ".js-apply", function(event) {
        event.preventDefault(), $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top
        }, 500);
    });
}

function convertNumberToWords(amount) {
    var words = new Array();
    words[0] = "", words[1] = "One", words[2] = "Two", words[3] = "Three", words[4] = "Four", 
    words[5] = "Five", words[6] = "Six", words[7] = "Seven", words[8] = "Eight", words[9] = "Nine", 
    words[10] = "Ten", words[11] = "Eleven", words[12] = "Twelve", words[13] = "Thirteen", 
    words[14] = "Fourteen", words[15] = "Fifteen", words[16] = "Sixteen", words[17] = "Seventeen", 
    words[18] = "Eighteen", words[19] = "Nineteen", words[20] = "Twenty", words[30] = "Thirty", 
    words[40] = "Forty", words[50] = "Fifty", words[60] = "Sixty", words[70] = "Seventy", 
    words[80] = "Eighty", words[90] = "Ninety";
    var number = (amount = amount.toString()).split(".")[0].split(",").join(""), n_length = number.length, words_string = "";
    if (n_length <= 9) {
        for (var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0), received_n_array = new Array(), i = 0; i < n_length; i++) received_n_array[i] = number.substr(i, 1);
        i = 9 - n_length;
        for (var j = 0; i < 9; i++, j++) n_array[i] = received_n_array[j];
        for (i = 0, j = 1; i < 9; i++, j++) 0 != i && 2 != i && 4 != i && 7 != i || 1 == n_array[i] && (n_array[j] = 10 + parseInt(n_array[j]), 
        n_array[i] = 0);
        value = "";
        for (i = 0; i < 9; i++) value = 0 == i || 2 == i || 4 == i || 7 == i ? 10 * n_array[i] : n_array[i], 
        0 != value && (words_string += words[value] + " "), (1 == i && 0 != value || 0 == i && 0 != value && 0 == n_array[i + 1]) && (words_string += "Crores "), 
        (3 == i && 0 != value || 2 == i && 0 != value && 0 == n_array[i + 1]) && (words_string += "Lakhs "), 
        (5 == i && 0 != value || 4 == i && 0 != value && 0 == n_array[i + 1]) && (words_string += "Thousand "), 
        6 == i && 0 != value && 0 != n_array[i + 1] && 0 != n_array[i + 2] ? words_string += "Hundred and " : 6 == i && 0 != value && (words_string += "Hundred ");
        words_string = words_string.split("  ").join(" ");
    }
    return words_string;
}

function numbeToWords() {
    $(document).on("keyup", ".inputField .inputDefault", function() {
        var userValue = $(this).val();
        if (0 != userValue.length) {
            var inWords = convertNumberToWords(userValue.replace(/[,]/g, ""));
            $(this).parents(".inputField").find(".numberWord").show().html(inWords);
        } else $(this).parents(".inputField").find(".numberWord").hide();
    });
}

function popUpScroll() {
    $(".mScroll").mCustomScrollbar({
        theme: "inset-dark",
        scrollButtons: {
            enable: !0
        }
    });
}

function reviewPopUpScroll() {
    $(".reviewScroll").mCustomScrollbar({
        theme: "inset-dark",
        scrollButtons: {
            enable: !0
        }
    });
}

function planOptionPopUpScroll() {
    $(".planOptionScroll").mCustomScrollbar({
        theme: "inset-dark",
        scrollButtons: {
            enable: !0
        }
    });
}

function faqAccord() {
    $(".accord h3, .accord .accord-wrap").on("click", function() {
        $(this).hasClass("active") ? ($(".accord h3, .accord .accord-wrap").removeClass("active"), 
        $(".accordContent").slideUp()) : ($(".accordContent").slideUp().siblings("h3, .accord-wrap").removeClass("active"), 
        $(this).parent().find("h3, .accord-wrap").addClass("active").siblings(".accordContent").slideDown());
    }), $("#faqsModal .close").on("click", function() {
        $(".navContent li.faqs").removeClass("active"), 0 == $(window).scrollTop() && $(".navContent li.onlineTerm ").addClass("active");
    });
}

function addPercentageSymbolInput() {
    $(".percentField input[name='fundvalue']").on("input", function() {
        $(this).val(function(i, v) {
            return v.replace("%", "") + "%";
        });
    });
}

function partialWithdraw() {
    $(document).on("click", ".js-amtUnit input", function() {
        alert("hi"), "amount" == $(this).attr("value") ? ($(".percent").addClass("hide"), 
        $(".amount").removeClass("hide")) : (alert("hide"), $(".amount").addClass("hide"), 
        $(".percent").removeClass("hide"));
    });
}

$(document).ready(function() {
    basicdetailExpand(), hamburger(), checkButton(), radioButton(), radioButton2(), 
    scrollTop(), toolTip(), numberOnly(), scrollspy(), scrollToActiveOnMenuClick(), 
    header(), headerToggle(), inputAnimation(), popUpScroll(), reviewPopUpScroll(), 
    planOptionPopUpScroll(), basicDetailsFunc(), apply(), numbeToWords(), faqAccord(), 
    addPercentageSymbolInput(), dateInputMask(), $(".progress-bar").length && progressBar();
}), $(window).on("load", function() {
    loader(), $(".formWrap").length && leftNavFixedItems(), $(window).width() < 992 && (reviewPopUpScroll(), 
    popUpScroll());
}), $(window).on("resize", function() {
    windowWidth = $(window).width(), windowHeight = $(window).height(), hambgRes(), 
    header(), $(".formWrap").length && windowWidth < 991 && $(".formWrap").removeAttr("style");
}), $(window).on("orientationchange", function() {}), $(window).on("scroll", function(e) {
    windowWidth = $(window).width(), windowHeight = $(window).height(), e.preventDefault();
    var scrollValue = $(window).scrollTop();
    100 < scrollValue ? $(".toTopArrow").show() : $(".toTopArrow").hide(), 0 == scrollValue && $(".navWrap .onlineTerm").addClass("active"), 
    100 <= window.pageYOffset ? $("header").addClass("sticky") : $("header").removeClass("sticky"), 
    $(".formWrap").length && leftNavFixedonScroll(), $(".arrowCircle").fadeOut();
}), setTimeout(function() {
    $(".formWrap").on("scroll", function(e) {
        $(".arrowCircle").fadeOut();
    });
}, 1e3);