Modernizr.Detectizr.detect({ detectScreen: true })

var windowWidth = $(window).width();
var windowHeight = $(window).height();
var $sticky = $('.formWrap'),
    $stickyrStopper = $('footer'),
    generalSidebarHeight, stickyTop, stickOffset, stickyStopperPosition, stopPoint, diff, formOffset;
$(document).ready(function() {
    basicdetailExpand();
    //datepicker();
    hamburger();
    checkButton();
    radioButton();
    radioButton2();
    scrollTop();
    toolTip();
    numberOnly();
    scrollspy();
    scrollToActiveOnMenuClick();
    header();
    headerToggle();
    inputAnimation();
    popUpScroll();
    reviewPopUpScroll();
    planOptionPopUpScroll();
    /* leftTabinMobile();*/
    /* switchAutoComplete();*/
    basicDetailsFunc();
    // connectPopup();
    apply();
    numbeToWords();
    //keyupValidation();
    faqAccord();
    addPercentageSymbolInput();
    dateInputMask();
    // progress circle calling
    //partialWithdraw();
    if ($('.progress-bar').length) {
        progressBar();
    }

    // selectpicker calling
    // setTimeout(function() { $('.selectpicker').selectpicker(); }, 100);



});

$(window).on('load', function() {
    loader();
    if ($('.formWrap').length) {
        leftNavFixedItems();
    }
    if ($(window).width() < 992) {
        reviewPopUpScroll();
        popUpScroll();
    }
});

$(window).on('resize', function() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    hambgRes();
    header();
    if ($('.formWrap').length && windowWidth < 991) {
        $('.formWrap').removeAttr('style');
    }
});

$(window).on('orientationchange', function() {

});


$(window).on('scroll', function(e) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    e.preventDefault();
    var scrollValue = $(window).scrollTop();


    // go to top button shows when window scroll reaches 100
    if (scrollValue > 100) {
        $('.toTopArrow').show();
    } else {
        $('.toTopArrow').hide();
    }

    // online term section active when window scroll reach on top of the page
    if (scrollValue == 0) {
        $('.navWrap .onlineTerm').addClass('active');
    }

    // adding sticky set to the header when window scrolls down
    if (window.pageYOffset >= 100) {
        $('header').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
    }

    if ($('.formWrap').length) {
        leftNavFixedonScroll();
    }

    $('.arrowCircle').fadeOut();
});


// nav scroll indication start
setTimeout(function() {
    $('.formWrap').on('scroll', function(e) {
        $('.arrowCircle').fadeOut();
    });
}, 1000);



// humbuger loader hide on resize start
function hambgRes() {
    if ($(window).width() > 992) {
        if ($(".navContent").hasClass("active")) {
            $(".navContent").removeClass("active");
            $('.overlay').fadeOut();
        }
    }
}
// humbuger loader hide on resize end

//Page loader
function loader() {
    $('.loader').fadeOut();
    $('.loaderOverlay').fadeOut();
    $('body').removeClass('fixed');
}

//global owlCarousel slider function start

function generateOwl(target, navigation, itemCount, displayDots, responsivecount, browserWidth, loop, destopcount, margin) {
    var owl = $(target);
    if ($(window).width() <= browserWidth) {
        owl.owlCarousel({
            items: itemCount,
            loop: loop,
            dots: displayDots,
            nav: navigation,
            navText: ["", ""],
            autoplay: false,
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
        });
    } else {
        $(target).owlCarousel('destroy');
        $(target).css('display', 'block');
    }
}
//global owlCarousel slider function end

// switch on/off Button start
function checkButton() {
    $('.switch input').on('change', function() {
        if ($(this).is(':checked')) {
            $(this).parents('.toggleBt').addClass('active');
            $(this).parents('.toggleBt').find('.label2').addClass('white');
            $('.percent').addClass('hide');
            $('.amount').removeClass('hide');
            $(this).parents('.toggleBt').find('.label1').removeClass('white');
        } else {
            $(this).parents('.toggleBt').removeClass('active');
            $(this).parents('.toggleBt').find('.label1').addClass('white');
            $(this).parents('.toggleBt').find('.label2').removeClass('white');
            $('.percent').removeClass('hide');
            $('.amount').addClass('hide');
        }
    });
}
// switch on/off Button end

// radio Button gets active on check
function radioButton() {
    $('.radioBt input').on('change', function() {
        if ($(this).is(':checked')) {
            $('.radioBt').removeClass('active');
            $(this).parents('.radioBt').addClass('active');
        }
    });

    $('.radioBt2 input').on('change', function() {
        if ($(this).is(':checked')) {
            $('.radioBt2').removeClass('active');
            $(this).parents('.radioBt2').addClass('active');
        }
    });

    $('.mradioBt2 input').on('change', function() {
        if ($(this).is(':checked')) {
            $('.mradioBt2').removeClass('active');
            $(this).parents('.mradioBt2').addClass('active');
        }
    });

    $('.sgradioBt input').on('change', function() {
        if ($(this).is(':checked')) {
            $('.sgradioBt').removeClass('active');
            $(this).parents('.sgradioBt').addClass('active');
        }
    });

    $('.syradioBt input').on('change', function() {
        if ($(this).is(':checked')) {
            $('.syradioBt').removeClass('active');
            $(this).parents('.syradioBt').addClass('active');
        }
    });

    $('.cradioBt input').on('change', function() {
        if ($(this).is(':checked')) {
            $('.cradioBt').removeClass('active');
            $(this).parents('.cradioBt').addClass('active');
        }
    });

    $('.cyradioBt input').on('change', function() {
        if ($(this).is(':checked')) {
            $('.cyradioBt').removeClass('active');
            $(this).parents('.cyradioBt').addClass('active');
        }
    });

    $('.gcradioBt input').on('change', function() {
        if ($(this).is(':checked')) {
            $('.gcradioBt').removeClass('active');
            $(this).parents('.gcradioBt').addClass('active');
        }
    });

    $('.gcyradioBt input').on('change', function() {
        if ($(this).is(':checked')) {
            $('.gcyradioBt').removeClass('active');
            $(this).parents('.gcyradioBt').addClass('active');
        }
    });


    $('.ptradioBt input').on('change', function() {
        if ($(this).is(':checked')) {
            $('.ptradioBt').removeClass('active');
            $(this).parents('.ptradioBt').addClass('active');
        }
    });

    $('.ydradioBt input').on('change', function() {
        if ($(this).is(':checked')) {
            $('.ydradioBt').removeClass('active');
            $(this).parents('.ydradioBt').addClass('active');
        }
    });


    $(".bs-radio input[name='plan'").click(function() {
        $("#group1 .hidden-2").hide().removeClass("shown");
        $("#" + $(this).val()).show();
        $(this).removeClass("active")
        setTimeout(function() {
            $(".hidden-2").addClass("shown");
        }, 0);
    });

    $(".bs-radio input[name='invest'").click(function() {
        $("#group2 .hidden-2").hide().removeClass("shown");
        $("#" + $(this).val()).show();
        setTimeout(function() {
            $(".hidden-2").addClass("shown");
        }, 0);
    });

    $(".bs-radio input[name='status'").click(function() {
        $("#group1 .hidden-3").hide().removeClass("shown");
        $("#" + $(this).val()).show();
        setTimeout(function() {
            $(".hidden-3").addClass("shown");
        }, 0);
    });

}
// radio Button end


function radioButton2() {
    $('.radioBt2').on('change', function() {
        if ($(this).is(':checked')) {
            $('.radioBt2').removeClass('active');
            $(this).parents('.radioBt2').addClass('active');
        }
    });


    // $(".bs-radio input[name='plan'").click(function() {
    //     $("#group1 .hidden-2").hide().removeClass("shown");
    //     $("#" + $(this).val()).show();
    //     $(this).removeClass("active")
    //     setTimeout(function() {
    //         $(".hidden-2").addClass("shown");
    //     }, 0);
    // });

    // $(".bs-radio input[name='invest'").click(function() {
    //     $("#group2 .hidden-2").hide().removeClass("shown");
    //     $("#" + $(this).val()).show();
    //     setTimeout(function() {
    //         $(".hidden-2").addClass("shown");
    //     }, 0);
    // });

    // $(".bs-radio input[name='status'").click(function() {
    //     $("#group1 .hidden-3").hide().removeClass("shown");
    //     $("#" + $(this).val()).show();
    //     setTimeout(function() {
    //         $(".hidden-3").addClass("shown");
    //     }, 0);
    // });

}
//mobileHamburger show/hide start
function hamburger() {
    $(document).on('click', '.jsMenu', function(e) {
        e.stopPropagation();
        e.preventDefault();
        $('.navContent').addClass('active');
        $('.overlay').fadeIn();
        $('.profileInfo').hide();
    });

    $(document).on('click', '.back', function(e) {
        e.stopPropagation();
        e.preventDefault();
        e.stopImmediatePropagation();
        $('.navContent').removeClass('active');
        $('.overlay').fadeOut();
        $('.profileInfo').hide();

    });
    $(document).on('click ', function() {
        $('.navContent').removeClass('active');
        $('.overlay').fadeOut();
    });
}
//mobileHamburger end

//scroll to top button start - takes takes to the top of the window
function scrollTop() {
    $(document).on("click", "#js_toTop", function(e) {
        e.preventDefault();
        $("body,html").animate({
            scrollTop: 0
        }, 600);
    });
}
//scroll to top button end

// scroll to element start - function used to scroll to a particular section
function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 500;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
    $('html, body').stop(true, false).animate({
        scrollTop: offsetTop
    }, time);
}
// scroll to element end


//menu scrollspy start - tracks certain elements and which element the user's screen is currently centered on.
function scrollspy() {
    // Cache selectors
    var lastId,
        topMenu = $(".navWrap"),
        topMenuHeight = topMenu.outerHeight() + 150,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function() {
            var item = $($(this).attr('href'));
            if (item.length) { return item; }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e) {
        var offsetTop;
        var href = $(this).attr("href");
        if ($(href).offset() != undefined) {
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        }
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function() {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                /* .end().filter("[href='#" + id + "']").parent().addClass("active");*/
        }
    });
}
//menu scrollspy start

/* bootstrap tooltip */
function toolTip() {
    $('[data-toggle="tooltip"]').tooltip();
}
/* bootstrap tooltip*/




// scroll to active section on menu click start
function scrollToActiveOnMenuClick() {
    $(document).on('click', '.navWrap li', function(event) {
        event.preventDefault();
        var liClass = $(this).attr('class');
        if (liClass == "Calculatepremium") {
            scrollToElement('.MainBannerWrap', 500, -80);
        } else if (liClass == "Plans") {
            scrollToElement('.planoptionWrap', 500, -80);
        } else if (liClass == "Benefits") {
            scrollToElement('.BenefitWrap', 500, -80);
        } else if (liClass == "features") {
            scrollToElement('.keyfeatureWrap', 500, -80);
        } else if (liClass == "eligibility") {
            scrollToElement('.eligibilityWrap', 500, -80);
        } else if (liClass == "Strategies") {
            scrollToElement('.investmentStratWrap', 500, -100);
        } else if (liClass == "faqs") {
            scrollToElement('.faqWrap', 500, -30);
        }
        $('.navWrap li').removeClass('active');
        $('.navContent').removeClass('active');
        $(this).addClass('active');

    });
}
// scroll to active section on menu click end

// for numbers only start
function numberOnly() {
    $(".numberOnly").keypress(function(e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            // $(this).parent().find(".error").html("Digits Only").show().fadeOut("slow");
            return false;
        }
    });
}
// for numbers only end



//header profile mobile dropdown start
function headerToggle() {
    if ($('.inside').length) {
        $(".onlineTermForm").find('.submit span').html('Update');
    }

    if ($('.ios').length) {
        $(document).on('touchstart', '.Proficon', function(e) {
            // $(".arrow").fadeToggle(500);
            $(".profileInfo").toggleClass('profileOpen');
            $(".profileInfo").slideToggle();
            e.stopPropagation();
            e.preventDefault();


        });
    } else {
        $(document).on('click', '.Proficon', function(e) {
            // $(".arrow").fadeToggle(500);
            $(".profileInfo").toggleClass('profileOpen');
            $(".profileInfo").slideToggle();
            e.stopPropagation();
            e.preventDefault();


        });
    }

    $(document).on('click', '.profileInfo .editBt', function(e) {
        if ($(window).width() <= 768) {
            if ($(".profileInfo").hasClass('profileOpen')) {
                $(".profileInfo").removeClass('profileOpen');
                $(".profileInfo").hide();
            }
        }

    });
}

function header() {
    var windowWidth = $(window).width();
    if (windowWidth < 992) {
        var profle = $(".profileInfo").hide().detach();
        $('.Proficon').after(profle);
    } else {
        var profle1 = $(".profileInfo").show().detach();
        $('.navWrap').after(profle1);
    }
}

//header profile mobile dropdown end

// input animation start
function inputAnimation() {
    $('input.textBox').each(function(index, el) {
        if ($(this).val() !== '') {
            $(this).parent().addClass('active');
        }
    });

    $('input.textBox').focus(function(index, el) {
        if ($(this).val() == '') {
            $(this).parent().addClass('active');
            $(this).siblings('.effectLabel').addClass('labelFocus');
            $(this).siblings('.effectLabel').find('.placeHolder').addClass('placeholderFocus');
        }
    });

    $('input.textBox').blur(function(index, el) {
        $(this).siblings('.effectLabel').removeClass('labelFocus');
        $(this).siblings('.effectLabel').find('.placeHolder').removeClass('placeholderFocus');
        if ($(this).val() == '') {
            $(this).parent().removeClass('active');
        }
    });
}
// input animation end


//progress circle bar start
function progressBar() {
    $(".progress-bar").loading();
}
//progress circle bar end


// left navigation fixed position on scroll starts
function leftNavFixedItems() {

    if (!!$sticky.offset()) { // make sure ".sticky" element exists

        generalSidebarHeight = $sticky.innerHeight();
        stickyTop = $sticky.offset().top;
        stickOffset = 200;
        stickyStopperPosition = $stickyrStopper.offset().top;
        stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
        // diff = stopPoint + stickOffset;
        diff = $('.formBgWrap').height() - generalSidebarHeight;
        if ($('.formBgWrap').offset() != undefined) {
            formOffset = $('.formBgWrap').offset().top;
        }
    }
}

function leftNavFixedonScroll() {

    if (!!$sticky.offset()) {
        stickyStopperPosition = $stickyrStopper.offset().top;
        stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
        diff = $('.formBgWrap').height() - generalSidebarHeight;
        if (windowWidth > 991) {
            // $(window).scroll(function() { // scroll event
            var windowTop = $(window).scrollTop(); // returns number

            if (stopPoint < windowTop) {
                $sticky.stop(true, false).css({ position: 'absolute', top: diff });
            } else if (stickyTop < windowTop + stickOffset) {
                $sticky.stop(true, false).css({ position: 'fixed', top: formOffset - (generalSidebarHeight / 2) });
            } else {
                $sticky.stop(true, false).css({ position: 'absolute', top: '-50px' });
            }
            // });
        } else {
            $sticky.removeAttr('style');
        }
    }
}
// left navigation fixed position on scroll end

function basicDetailsFunc() {
    $(document).on('click', '.js-basicdetails input[type="radio"]', function() {
        var abc = $(this).val();

        if (abc == 'Self') {
            $('.self-formwrap').removeClass('hide');
            $('.spouseInfo').addClass('hide');
            $('.child-formwrap').addClass('hide');
            $('.grandchild-formwrap').addClass('hide');
            $('.your-detail-wrap').addClass('hide');
        } else if (abc == 'Spouse') {
            $('.spouseInfo').removeClass('hide');
            $('.self-formwrap').addClass('hide');
            $('.child-formwrap').addClass('hide');
            $('.grandchild-formwrap').addClass('hide');
            $('.your-detail-wrap').removeClass('hide');
        } else if (abc == 'Child') {
            $('.child-formwrap').removeClass('hide');
            $('.self-formwrap').addClass('hide');
            $('.spouseInfo').addClass('hide');
            $('.grandchild-formwrap').addClass('hide');
            $('.your-detail-wrap').removeClass('hide');
        } else if (abc == 'Grand Child') {
            $('.grandchild-formwrap').removeClass('hide');
            $('.self-formwrap').addClass('hide');
            $('.spouseInfo').addClass('hide');
            $('.child-formwrap').addClass('hide');
            $('.your-detail-wrap').removeClass('hide');
        }
    });
    $(document).on('click', '.js-status input[type="radio"]', function() {
        var abc = $(this).val();

        if (abc == 'yes') {
            $('.yes').removeClass('hide');
            $('.no').hide();
        } else {
            $('.yes').addClass('hide');
            $('.no').show();

        }
    });
}

function basicdetailExpand() {

    $('.accordhd').click(function() {
        $(".basic-details").toggleClass('active');
        $(".basicDetailAccord").toggleClass('active');
    });
}

// datepicker for medical appointment start
function datepicker() {
    $(".datepicker").datepicker({
        format: "dd/mm/yyyy"
    });

    $(".datepicker").on('changeDate', function(ev) {
        $(this).datepicker('hide');
    });
}
// datepicker for medical appointment end


// function keyupValidation() {
//     $(document).on('keyup', '.inputField input', function(ev) {
//         if ($(this).hasClass('datepicker')) {
//             addSlashes(ev, this);
//         }
//     });
// }

function dateInputMask() {
    var inputmask_options;

    inputmask_options = {
        mask: "99/99/9999",
        alias: "date",
        placeholder: "dd/mm/yyyy",
        insertMode: false
    };

    $(".inputmask").inputmask("99/99/9999", inputmask_options);
};

// (function() {
//     var inputmask_options;

//     inputmask_options = {
//         mask: "99/99/9999",
//         alias: "date",
//         placeholder: "dd/mm/yyyy",
//         insertMode: false
//     };

//     $(".inputmask").inputmask("99/99/9999", inputmask_options);

// }).call(this);

// function addSlashes(ev, input) {
//     var v = input.value;
//     if (ev.keyCode != 8) {
//         if (v.match(/^\d{2}$/) !== null) {
//             input.value = v + '/';
//         } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
//             input.value = v + '/';
//         } else if (v.match(/^\d{2}\/\d{2}\/\d{4}$/) !== null) {
//             $(".active.day").trigger('click');

//             $(".loader.active").parent(".inputFeild").find("input").trigger('focusout');

//         }
//     }
// }

function apply() {
    $(document).on('click', '.js-apply', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
}

function convertNumberToWords(amount) {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    var atemp = amount.split(".");
    var number = atemp[0].split(",").join("");
    var n_length = number.length;
    var words_string = "";
    if (n_length <= 9) {
        var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
        var received_n_array = new Array();
        for (var i = 0; i < n_length; i++) {
            received_n_array[i] = number.substr(i, 1);
        }
        for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
            n_array[i] = received_n_array[j];
        }
        for (var i = 0, j = 1; i < 9; i++, j++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                if (n_array[i] == 1) {
                    n_array[j] = 10 + parseInt(n_array[j]);
                    n_array[i] = 0;
                }
            }
        }
        value = "";
        for (var i = 0; i < 9; i++) {
            if (i == 0 || i == 2 || i == 4 || i == 7) {
                value = n_array[i] * 10;
            } else {
                value = n_array[i];
            }
            if (value != 0) {
                words_string += words[value] + " ";
            }
            if ((i == 1 && value != 0) || (i == 0 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Crores ";
            }
            if ((i == 3 && value != 0) || (i == 2 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Lakhs ";
            }
            if ((i == 5 && value != 0) || (i == 4 && value != 0 && n_array[i + 1] == 0)) {
                words_string += "Thousand ";
            }
            if (i == 6 && value != 0 && (n_array[i + 1] != 0 && n_array[i + 2] != 0)) {
                words_string += "Hundred and ";
            } else if (i == 6 && value != 0) {
                words_string += "Hundred ";
            }
        }
        words_string = words_string.split("  ").join(" ");
    }
    return words_string;
}

function numbeToWords() {
    $(document).on('keyup', '.inputField .inputDefault', function() {
        var userValue = $(this).val();
        if (userValue.length != 0) {
            var withoutComma = userValue.replace(/[,]/g, '');
            var inWords = convertNumberToWords(withoutComma);
            $(this).parents('.inputField').find('.numberWord').show().html(inWords);
        } else {
            $(this).parents('.inputField').find('.numberWord').hide();
        }
    });
}

function popUpScroll() {
    $(".mScroll").mCustomScrollbar({
        theme: "inset-dark",
        scrollButtons: { enable: true }
    });
}

function reviewPopUpScroll() {
    $(".reviewScroll").mCustomScrollbar({
        theme: "inset-dark",
        scrollButtons: { enable: true }
    });
}

function planOptionPopUpScroll() {
    $(".planOptionScroll").mCustomScrollbar({
        theme: "inset-dark",
        scrollButtons: { enable: true }
    });
}



// accordian start
function faqAccord() {
    $('.accord h3, .accord .accord-wrap').on('click', function() {
        if ($(this).hasClass('active')) {
            $('.accord h3, .accord .accord-wrap').removeClass('active');
            $('.accordContent').slideUp();
        } else {
            $('.accordContent').slideUp().siblings('h3, .accord-wrap').removeClass('active');
            $(this).parent().find('h3, .accord-wrap').addClass('active').siblings('.accordContent').slideDown();
            // scrollToElement($(this), 500, -50)
        }
    });

    $('#faqsModal .close').on('click', function() {
        $('.navContent li.faqs').removeClass('active');
        if ($(window).scrollTop() == 0) {
            $('.navContent li.onlineTerm ').addClass('active');
        }

    });
}
// accordian end



// to add percentage symbol in input field - investment strategy page
function addPercentageSymbolInput() {
    $(".percentField input[name='fundvalue']").on('input', function() {
        $(this).val(function(i, v) {
            return v.replace('%', '') + '%';
        });
    });
}

function partialWithdraw() {
    $(document).on('click', '.js-amtUnit input', function() {
        alert("hi")
        var xyz = $(this).attr('value');
        if (xyz == 'amount') {
            $('.percent').addClass('hide');
            $('.amount').removeClass('hide');
        } else {
            alert('hide')
            $('.amount').addClass('hide');
            $('.percent').removeClass('hide');
        }
    });
}