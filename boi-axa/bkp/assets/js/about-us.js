function dirtabs() {
    $(".dir-content:not(:first)").hide(), $(".dirTabslink li a").click(function(e) {
        var dir = $(this).parent().index();
        $(".dirTabslink li a").removeClass("diractive"), $(this).addClass("diractive"), 
        $(".dir-content").hide(), $(".dirtabBlock>div").eq(dir).show(), e.preventDefault();
    }), $(".directorInfo:not(:first-child)").hide(), $(".directorsDetails").on("click", ".dirListing .owl-item a", function(e) {
        e.preventDefault();
        var thumb = $(this).parent().index();
        $(this).parents(".directorsDetails").find(".dirListing .owl-item a").removeClass("thumbactive"), 
        $(this).addClass("thumbactive"), $(this).parents(".directorsDetails").find(".directorInfo").hide(), 
        $(this).parents(".directorsDetails").find(".directorInfoWrapper>div").eq(thumb).show();
    });
}

function tabs() {
    $(".tabs-content:not(:first)").hide(), $(".tabsLink li a").click(function(e) {
        var num = $(this).parent().index();
        $(".tabsLink li a").removeClass("active"), $(this).addClass("active"), $(".tabs-content").hide(), 
        $(".tabsMain>div").eq(num).show();
    });
}

function dirthumbSlider() {
    $(".dirthumbSlider").owlCarousel({
        margin: 30,
        nav: !0,
        mouseDrag: !0,
        responsive: {
            320: {
                items: 1
            },
            480: {
                items: 2
            },
            560: {
                items: 4
            },
            1e3: {
                items: 6
            }
        }
    });
}

function serviceSlider() {
    $(".owl-carousel").owlCarousel({
        margin: 0,
        nav: !0,
        autoHeight: !1,
        responsive: {
            320: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });
}

function timeline() {
    var sync1 = $("#sync1"), sync2 = $("#sync2");
    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2e3,
        nav: !0,
        autoplay: !1,
        dots: !1,
        loop: !0,
        stagePadding: 50,
        margin: 10,
        autoheight: !0,
        responsiveRefreshRate: 200,
        navText: [ "" ],
        responsive: {
            0: {
                stagePadding: 20
            },
            767: {
                stagePadding: 50
            }
        }
    }).on("changed.owl.carousel", function(el) {
        var count = el.item.count - 1, current = Math.round(el.item.index - el.item.count / 2 - .5);
        current < 0 && (current = count);
        count < current && (current = 0);
        sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
        sync2.find(".owl-item.active").length;
        var start = sync2.find(".owl-item.active").first().index(), end = sync2.find(".owl-item.active").last().index();
        end < current && sync2.data("owl.carousel").to(current, 100, !0);
        current < start && sync2.data("owl.carousel").to(current, 100, !0);
    }), sync2.on("initialized.owl.carousel", function() {
        sync2.find(".owl-item").eq(0).addClass("current");
    }).owlCarousel({
        items: 4,
        dots: !1,
        autoplay: !1,
        nav: !0,
        navText: [ "<span>", "</span>" ],
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: 4,
        responsiveRefreshRate: 100,
        responsive: {
            0: {
                items: 3
            },
            767: {
                items: 4
            },
            1024: {
                items: 7
            }
        }
    }).on("changed.owl.carousel", function(el) {
        {
            var number = el.item.index;
            sync1.data("owl.carousel").to(number, 100, !0);
        }
    }), sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data("owl.carousel").to(number, 300, !0);
    });
}

function datepicker() {
    $("#to").datepicker({
        dateFormat: "dd/mm/yy",
        defaultDate: "+1w",
        changeMonth: !0,
        changeYear: !0,
        numberOfMonths: 1,
        ignoreReadonly: !0,
        maxDate: 0,
        yearRange: "-80:+0"
    }), $("#from").datepicker({
        dateFormat: "dd/mm/yy",
        defaultDate: "+1w",
        changeMonth: !0,
        changeYear: !0,
        numberOfMonths: 1,
        ignoreReadonly: !0,
        maxDate: 0,
        yearRange: "-80:+0"
    }).bind("change", function() {
        var minValue = $(this).val();
        (minValue = $.datepicker.parseDate("dd/mm/yy", minValue)).setDate(minValue.getDate()), 
        $("#to").datepicker("option", "minDate", minValue);
    });
}

$(document).ready(function() {
    tabs(), $(document).one("click", ".js-sync-owl", function() {
        timeline();
    });
});