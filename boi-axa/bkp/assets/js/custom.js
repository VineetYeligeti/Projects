var parent, parentToRemove, windowWidth = $(window).width(), windowHeight = $(window).height();

function homeSlider() {
    $(".homeSlider").length && $(".homeSlider").owlCarousel({
        margin: 10,
        nav: !0,
        items: 1,
        dots: !0
    });
}

function footerAccordian() {
    windowWidth < 981 ? $(".footerCol").hide() : $(".footerCol").show();
}

function footerShowMore() {
    $(".mobileMenu").on("click", function(e) {
        e.preventDefault(), $(this).toggleClass("menuActive").next(".footerCol").slideToggle();
    });
}

function searchBar() {
    $(".headerSearch .searchBtn").click(function(event) {
        event.stopPropagation(), windowWidth < 768 ? ($(".searcontainer").addClass("expandWidth"), 
        $(".mobileMenuSec").hide(), $(".open").removeClass("open"), $(".overlay").hide(), 
        $(".headerSearch button[type=button]").attr("type", "submit").addClass("submit"), 
        $("body").removeClass("bodyactive")) : ($(".searcontainer").addClass("expandWidth"), 
        $(".headerSearch button[type=button]").attr("type", "submit"));
    }), $("body:not(.rightBottom)").click(function() {
        $(".searcontainer").removeClass("expandWidth"), $(".headerSearch button[type=submit]").attr("type", "button").removeClass("submit");
    }), $(".searcontainer").click(function(event) {
        event.stopPropagation();
    });
}

function mobileMenu() {
    if (windowWidth < 768) {
        $(".mobileMenuSec").hide(), $(".menu").click(function() {
            $(".mobileMenuSec").slideToggle(), $(".mobileMenuSec > ul").css("height", windowHeight - $("header h1").height()), 
            $("body").toggleClass("bodyactive");
        }), $(".mobileMenuSec").hide(), $(".menuClose").click(function(e) {
            e.stopPropagation(), $(".submenu").hide(), $(".navigation li").removeClass("active");
        }), $(".nav-icon2").click(function() {
            $(this).toggleClass("open");
        }), $(".navigation li").click(function() {
            $(".submenu").show(), $(this).toggleClass("active"), $(this).siblings().removeClass("active");
        }), $(window).scroll(function() {
            $("body").hasClass("bodyactive") || (0 < $(window).scrollTop() ? $(".menu").show() : $(".menu").hide());
        });
    }
}

function mobResizeOpen() {
    $(".nav-icon2").hasClass("open") && $(".mobileMenuSec > ul").css("height", windowHeight - $("header h1").height());
}

function liqutyPopup() {
    $(".content").mCustomScrollbar(), $(".liquityPopupSec").hide(), $(".liquity").click(function() {
        $(".overlay2").fadeIn(), $("body").css("overflowY", "hidden"), $(".liquityPopupSec").fadeIn(), 
        $(".close").click(function() {
            $(".overlay2").fadeOut(), $(".liquityPopupSec").hide(), $("body").css("overflowY", "auto");
        });
    });
}

function sipshead() {
    $(".content").mCustomScrollbar(), $(".sipsheadPopupSec").hide(), $(".sipshield").click(function() {
        $(".overlay2").fadeIn(), $("body").css("overflowY", "hidden"), $(".sipsheadPopupSec").fadeIn(), 
        $(".close").click(function() {
            $(".overlay2").fadeOut(), $(".sipsheadPopupSec").hide(), $("body").css("overflowY", "auto");
        });
    });
}

function careermessage() {
    $(".carrerMesageSec").hide(), $(".doneBtn").click(function() {
        $(".overlay2").fadeIn(), $(".carrerMesageSec").fadeIn(), $(".close").click(function() {
            $(".overlay2").fadeOut(), $(".carrerMesageSec").hide();
        });
    });
}

function classAccord() {
    991 < windowWidth ? $("aside.prodLeftNew h4").removeClass("accordHead") : $("aside.prodLeftNew h4").addClass("accordHead");
}

function accordion() {
    $(".wrapper-content").on("click", ".accordHead", function(event) {
        $(this).hasClass("active") ? ($(this).removeClass("active"), $(this).next(".accord").slideUp(800)) : ($(".accord").slideUp(400), 
        $(".socialLinks").hide(), $(".accordHead").removeClass("active"), $(this).addClass("active"), 
        $(this).next(".accord").slideDown(1e3));
    });
}

function keepintouch() {
    $(".keepInTouchSec").hide(), $(".keep").click(function() {
        $(".overlay2").fadeIn(), $(".keepInTouchSec").fadeIn(), $(".close").click(function() {
            $(".overlay2").fadeOut(), $(".keepInTouchSec").hide();
        });
    });
}

function brachLoacatorPopUp() {
    $(".brachThankPopup").hide(), $(".close").click(function() {
        $(".overlay2").fadeOut(), $(".brachThankPopup").hide();
    });
}

function thankuContSec() {
    $(".thankuCont").hide(), $(".submitsubscribe").click(function() {}), $("#terms").change(function() {
        this.checked;
    }), $(".keepInTouchSec .close,.keepInTouchSec .cancelSub,.thankuCont .close,.ackCont .close").click(function() {
        $(".keepInTouchSec .formCont input").val(""), $("#terms").attr("checked", !1), $(".overlay2,.keepInTouchSec,.thankuCont").fadeOut(), 
        $(".thankuCont,.ackCont").hide();
    });
}

function pageHeight() {
    windowHeight > $(".wrapper-content").height() + $("footer").height() ? $(".wrapper-content").css("min-height", windowHeight - $("footer").height()) : $(".wrapper-content").css("min-height", "auto");
}

function CreateThumbnail(ID, errSpn, ctrl, imgsrc) {
    if (-1 == $.inArray($(ID).val().split(".").pop().toLowerCase(), [ "pdf", "doc", "docx" ])) $(ID).parents(".uploadBlock").find(".erroretext").show(), 
    $(ID).parents(".uploadBlock").find(".delIcon").removeClass("active"), ID.value = ""; else {
        $(ID).parents(".uploadBlock").find(".erroretext").hide(), $(ID).parents(".uploadBlock").find(".delIcon").addClass("active"), 
        parent = $(ID).parents(".imgHolder");
        var preview = $(ID).parent().find("img")[0], file = $(ID).parent().find(".clsfile")[0].files[0];
        if (2 < (file.size / 1024e3).toFixed(2) || 0 == (file.size / 1024e3).toFixed(2)) return $(errSpn).show(), 
        $(errSpn).html("Please upload less than 2 MB and more than 0 MB file"), void (ID.value = "");
        $(errSpn).hide(), $(errSpn).html("");
        var fullPath = $(ID).val();
        if (fullPath) {
            var startIndex = 0 <= fullPath.indexOf("\\") ? fullPath.lastIndexOf("\\") : fullPath.lastIndexOf("/"), filename = fullPath.substring(startIndex);
            0 !== filename.indexOf("\\") && 0 !== filename.indexOf("/") || (filename = filename.substring(1)), 
            $(ID).parents(".uploadWrap").find(".fileName").html("<p class='imgName'>" + filename + "</p>");
        }
        var reader = new FileReader();
        reader.onloadend = function() {
            parent.find(".progressBarHolder").show(), parent.find(".deleteFile").show(), parent.find(".progress, .percent").show(), 
            parent.find(".uploadTxt").hide(), parent.find(".bar").animate({
                width: "100%"
            }, {
                progress: function(a, p, c) {
                    $(".percent").html(100 * p + "% done");
                }
            }), setTimeout(function() {
                parent.find(errSpn).hide(), parent.find(errSpn).html("");
            }, 1200);
        }, file ? reader.readAsDataURL(file) : (preview.src = "", $(ID).parent().find(".imgsrc").val(""), 
        $(ID).parent().find("span").show(), $(ID).parent().find("img").hide());
    }
}

function RemoveFile() {
    console.log(parentToRemove), parentToRemove.find(".clsfile")[0].value = "", parentToRemove.find(".bar").css("width", "0%"), 
    parentToRemove.find(".percent").html("0%"), parentToRemove.next(".fileName").html("");
}

function shareVacancy() {
    $(".shareVacWrap").click(function(event) {
        $(this).parents(".uploadShare").find(".socialLinks").fadeToggle();
    });
}

function homeSubscribe() {
    formValidations(), $(".submitsubscribe").click(function(event) {
        event.preventDefault(), checkRequired(), validateEmailContact(), $(".keepInTouchSec .formCont").hasClass("errorField") || $(".keepInTouchSec").hide();
    });
}

function formValidations() {
    $(".required").keyup(function(event) {
        $(this).parent().removeClass("errorField");
    }), $(".numbersField").keypress(function(e) {
        var code = e.keyCode || e.which;
        if (32 != code && 46 != code && 8 != code && 37 != code && 39 != code && (code < 48 || 57 < code)) return !1;
    }), $(".alpha").keypress(function(e) {
        var code = e.keyCode || e.which;
        if ((code < 65 || 90 < code) && (code < 97 || 122 < code) && 32 != code && 46 != code && 8 != code && 37 != code && 39 != code) return !1;
    });
}

function checkRequired() {
    $(".required").each(function(index, el) {
        "" == $(this).val() ? $(this).parent().addClass("errorField") : $(this).parent().removeClass("errorField");
    });
}

function validateEmailContact() {
    var x = $(".emailField").val(), atpos = x.indexOf("@"), dotpos = x.lastIndexOf(".");
    if (1 <= $(".emailField").val().length) {
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) return $(".emailField").parent().addClass("errorField"), 
        $(".emailField").parent().find(".error").text("Please enter correct format of Email ID"), 
        !1;
        $(".emailField").parent().removeClass("errorField");
    } else $(".emailField").parent().find(".error").text("Email ID is required");
}

function mobVal() {
    var Number = $(".mobNo").val();
    1 <= $(".mobNo").val().length && $(".mobNo").val().length < 10 ? ($(".mobNo").parent().find(".error").text("Please enter 10 digits in Phone No"), 
    /^[7-9][0-9]{9}$/.test(Number) ? $(".mobNo").parent().removeClass("errorField") : $(".mobNo").parent().addClass("errorField")) : $(".mobNo").parent().find(".error").text("Phone no is required");
}

function heightAdjust(refDiv, isStatic) {
    var maxHeight = 0;
    $(refDiv).find(".eq-height").each(function(index) {
        isStatic ? $(this).height() > maxHeight && (maxHeight = $(this).height()) : $(this).outerHeight() > maxHeight && (maxHeight = $(this).outerHeight());
    }), isStatic ? $(refDiv).find(".eq-height").height(maxHeight) : (console.log(maxHeight), 
    $(refDiv).find(".eq-height").css({
        "min-height": maxHeight + "px"
    }));
}

function sitemapAccordian() {
    windowWidth < 768 && ($(".sitemapmenu").hide(), $(".sitemapMenuCont h3").on("click", function(e) {
        e.preventDefault(), $(this).toggleClass("menuActive").next(".sitemapmenu").slideToggle();
    }));
}

function resumeUpload() {
    $(".erroretext").hide(), $("#identityproofFile2").change(function() {
        -1 == $.inArray($(this).val().split(".").pop().toLowerCase(), [ "pdf", "doc", "docx" ]) ? $(".erroretext").show() : $(".erroretext").hide();
    });
}

function overClickClose() {
    $(".overlay,.overlay2").click(function(event) {
        $(".popupSec .close").trigger("click");
    }), $(document).keyup(function(e) {
        27 == e.keyCode && $(".popupSec .close").trigger("click");
    });
}

function answerPopup() {
    $(".homeBanner p a").click(function() {
        $(".answerPopUp").fadeIn(), $(".close").click(function() {
            $(".answerPopUp").fadeOut();
        });
    });
}

function homeBannermain() {
    setInterval(function() {
        $(".homeBanner .BOI_tksPage").addClass("tkspageanimate");
    }, 800);
    var counter = 0;
    setInterval(function() {
        if ($(".animationSec .mainBannerCont").eq(counter).addClass("active"), 4 == counter) return !1;
        counter++;
    }, 1500), setInterval(function() {
        $(".homeBanner p").addClass("textAnimate");
    }, 7e3);
}

function sitemaplink() {
    var pageURL = $(location).attr("href"), lastChar = pageURL.substr(pageURL.indexOf("#") + 1), tabChar = lastChar.substr(lastChar.length - 1);
    "t" == lastChar.charAt(0) && ($(".tabsLink li").eq(tabChar - 1).find("a").click(), 
    $(".aboutscroll").length && $("body, html").animate({
        scrollTop: $("#aboutCont").offset().top - $("header").height()
    }, 500));
}

function fundmanger() {
    $(".fundmangerSec").length && $(".fundmangerSec").owlCarousel({
        margin: 60,
        nav: !1,
        items: 1,
        dots: !0,
        autoplay: !0,
        autoplayTimeout: 2e3,
        loop: !0,
        autoplayHoverPause: !0
    });
}

function seeDetailFundManger() {
    $(".seeDetailSec").hide(), $(".wrapper-content").on("click", ".seeDetail", function(event) {
        $(this).hasClass("Detailactive") ? ($(this).removeClass("Detailactive"), $(this).next(".seeDetailSec").slideUp("fast")) : ($(".seeDetailSec").slideUp("fast"), 
        $(".seeDetail").removeClass("Detailactive"), $(this).addClass("Detailactive"), $(this).next(".seeDetailSec").slideDown(1e3));
    });
}

function homeBannerSlider() {
    $(".homeBannerSlider").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !1,
        items: 1,
        dots: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        animateOut: "fadeOut"
    });
}

function flyingSlider() {
    $(".simpleFlyingSlider").owlCarousel({
        loop: !0,
        margin: 0,
        nav: !0,
        items: 1,
        dots: !1,
        navText: [ " ", " " ],
        autoplay: !0,
        autoplayTimeout: 8e3,
        animateOut: "fadeOut"
    });
}

$(document).ready(function() {
    footerAccordian(), footerShowMore(), searchBar(), mobileMenu(), classAccord(), accordion(), 
    liqutyPopup(), sipshead(), keepintouch(), thankuContSec(), pageHeight(), shareVacancy(), 
    sitemapAccordian(), careermessage(), overClickClose(), brachLoacatorPopUp(), answerPopup(), 
    sitemaplink(), seeDetailFundManger(), $(".content").length && $(".content .mCSB_container >*:last-child").css({
        marginBottom: 0
    }), $(".tabsMain").length && dirtabs(), $(".dirthumbSlider").length && (dirthumbSlider(), 
    serviceSlider()), $(".datpikerSec").length && datepicker(), $("#map").length && branchSearch(), 
    $(".close4").click(function() {
        $(this).prev().css("visibility", "hidden");
    }), $(".products").length && (productHeight(), mobFilter()), $(".keepInTouchSec").length && homeSubscribe(), 
    $(".insightSec").length && heightAdjust(".insightSec", !1), $(".communiqueCont").length && $("html").hasClass("ie") && $("header").css("position", "absolute"), 
    $(".homeBannerSlider").length && homeBannerSlider(), $(".simpleFlyingSlider").length && flyingSlider();
}), $(window).on("load", function() {
    $(".loader").fadeOut();
}), $(window).scroll(function(event) {
    $(".toolTipText").hide();
}), $(window).resize(function() {
    windowWidth = $(window).width(), windowHeight = $(window).height(), footerAccordian(), 
    mobResizeOpen(), pageHeight(), classAccord(), $(".products").length && ($(".productList .productInner").css("height", "auto"), 
    productHeight(), filterHeight());
}), $(".deleteFile").click(function() {
    parentToRemove = $(this).parent(), RemoveFile(), $(".erroretext").hide(), $(".delIcon").removeClass("active");
}), $(".chooseBtnWrap").click(function(e) {
    $(".deleteFile").trigger("click");
});