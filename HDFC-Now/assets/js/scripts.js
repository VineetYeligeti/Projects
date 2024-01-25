var winWidth = $(window).width();
var winHeight = $(window).height();
var mob_screen = false;
var marqdirection;
var panelFixed = false;
var accordClick = false;
var wow;

history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});

$(document).ready(function () {
    
    $('html, body').animate({ scrollTop: $('body').offset().top }, 800);
    cardsSlides();
    csSliders();
    setTimeout(() => {
        $('.player1').find('.lottie_anime').trigger('stop')
    }, 50);
    
    new WOW().init();

    $('.swiperLottie > div.cmp-container > div.aem-Grid').addClass('swiper-wrapper');
    $('.swiperLottie > div.cmp-container > div.aem-Grid > div.aem-GridColumn').addClass('swiper-slide');

    var menuPlayer = $('.anim_menu,.mob_menu');
    $("#menu").on("click", function () {
        $(".menu-cont").addClass("enter");
        $(".lottie-wrap").addClass("in");
        $('.menu-overlay').show();
        menuPlayer.trigger('play');
        // $('html').css('overflow', 'hidden');

    });

    $(".logowrap .logo img").on("click", function () {
        var slideToIndex = $(this).attr('data-slideIndex');
        swiper.slideTo(slideToIndex, 1000, true);
    })
    $("#panel10 .box-wrap img").on("click", function () {
        var slideToIndex = $(this).attr('data-slideIndex');
        swiper.slideTo(slideToIndex, 1000, true);
    });

    $("footer .arrow-down").on("click", function () {
        swiper.navigation.nextEl
    })

    $(".menu-cont .accord-links, .menu-heading").on("click", function () {
        accordClick = true;
        var slideToIndex = $(this).attr('data-slideIndex');
        swiper.slideTo(slideToIndex, 1000, true);
        $(".menu-cont").removeClass("enter");
        $(".lottie-wrap").removeClass("in");
        $('.menu-overlay').hide();
        menuPlayer.trigger('stop');
        $('.accordin-head').removeClass('active');
        // $('html').css('overflow', 'auto');
        $('.accordin-content').slideUp();
    })

    $("#exit,.menu-overlay").on("click", function () {
        $(".menu-cont").removeClass("enter");
        $(".lottie-wrap").removeClass("in");
        $('.menu-overlay').hide();
        menuPlayer.trigger('stop');
        // $('html').css('overflow', 'auto');
    });

    // --------------------------------------------------

    $(".accordin-head").on("click", function () {
        $(this).siblings('.accordin-head').next('.accordin-content').slideUp();
        $(this).next().slideToggle();
        $(this).siblings('.accordin-head').removeClass('active');
        $(this).toggleClass('active');
    });
    //----------------------------------
    if (winWidth >= 992) {
        marqdirection = 'up'
    }
    else {
        marqdirection = 'left'
    }
    // maquee scrolling
    $('.marquee').marquee({
        speed: 30,
        delayBeforeStart: 0,
        direction: marqdirection,
        duplicated: true,
        pauseOnHover: true,
        gap: 0,
    });

    // $('section').mousemove(function () {
    //     $('.bg-header').css('top', 0);
    // });

    //scroll top
    $("#scrolltop").click(function () {
        $('.swiper-pagination .swiper-pagination-bullet:first-child').trigger('click')
    });

});

// loader
$(window).on("load", function () {
    setTimeout(function () {
        
        $('html, body').animate({ scrollTop: $('body').offset().top }, 50);
        $("#loader").fadeOut(100);
        $('.player-1').find('.lottie_anime').trigger('play');
    }, 50);
    $('.swiper-slide-active').find('.lottie').trigger('play')
});

$(document).ready(function () {
    $(".lottie_anime").on("complete", function () {
        swiper.keyboard.enable();
        var textEffect = $(this).parents('.aem-GridColumn').find('.content-wrap');
        var picEffect = $(this).parents('.aem-GridColumn').find('.pic-wrap');
        textEffect.fadeIn();
        picEffect.fadeIn();
        $(this).parents('.aem-GridColumn').find('.static-bg').fadeIn();
    });

    $(".player-1 .lottie_anime").on("complete", function () {
        $('.lottie_anime1').show();
        // $('html').css('overflow', 'auto');
        setTimeout(() => {
            $('.arrow-down').fadeIn('slow');
            if (swiper.activeIndex == 0) {
                swiper.slideTo(1, 1000, true);
            }
        }, 4500);
    })

    $(".img-wrap").on("complete", function () {
        $('.cont-column').show();
    })

    $(".lottie_anime").on("play", function () {
        // $('html').css('overflow', 'hidden');
    })
})
// lottie hover

const playerContainers = document.querySelectorAll(".box-wrap .hoverEffects");
playerContainers.forEach(container => {
    container.addEventListener("mouseover", () => {
        const player = container.querySelector("lottie-player");
        player.setDirection(1);
        player.play();
    });

    container.addEventListener("mouseleave", () => {
        const player = container.querySelector("lottie-player");
        player.setDirection(-1);
        player.play();
    });
});

// slider 
const swiper = new Swiper('.swiperLottie .cmp-container', {
    wrapperClass: 'aem-Grid',
    slideClass: 'aem-GridColumn',
    direction: 'vertical',
    speed: 1200,
    allowTouchMove: true,
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.arrow-down',
    },
    mousewheel: {
        releaseOnEdges: true,
        invert: false,
        sensitivity: 1,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    lazy: {
        loadPrevNext: true,
    },
    touchReleaseOnEdges: true,
    on: {
        touchEnd: function(e) {
            setTimeout(() => {
                // $('body').css('overflow', 'auto');
            }, 200);
        },
    }
});

const swipercard = new Swiper('.swiperLottie .swiper-netbanking', {
    loop: false,
    slideClass: 'slider-box-wrap',
    slidesPerView: 2,
    slidesPerGroupSkip: 2,
    speed: 1200,
    allowTouchMove: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

swiper.on('slideChangeTransitionStart', function () {
    $('.aem-GridColumn').find('.lottie_anime').trigger('pause')
    $('.aem-GridColumn').find('.mob_anime').trigger('pause');
    $('.arrow-down').fadeIn('slow');

    if (winWidth > 992) {
        if ($(".swiper-slide-active .lottie").length > 0 && $(".swiper-slide-active .lottie").attr('data-src')) {
            var lottiePlayer = document.querySelector(".swiper-slide-active .lottie")
            lottiePlayer.load($('.swiper-slide-active .lottie').attr('data-src'));
            $('.swiper-slide-active .lottie').removeAttr('data-src');
            swiper.keyboard.disable()
        }

        if ($(".swiper-slide-next .lottie").length > 0 && $(".swiper-slide-next .lottie").attr('data-src')){
            var lottiePlayerNext = document.querySelector(".swiper-slide-next .lottie")
            lottiePlayerNext.load($('.swiper-slide-next .lottie').attr('data-src'));
        }

    } else {
        if ($(".swiper-slide-active .lottie").length > 0 && $(".swiper-slide-active .lottie").attr('data-mob')) {
            var lottiePlayer = document.querySelector(".swiper-slide-active .lottie")
            lottiePlayer.load($('.swiper-slide-active .lottie').attr('data-mob'));
            $('.swiper-slide-active .lottie').removeAttr('data-mob');
        }

        if ($(".swiper-slide-next .lottie").length > 0 && $(".swiper-slide-next .lottie").attr('data-mob')){
            var lottiePlayerNext = document.querySelector(".swiper-slide-next .lottie")
            lottiePlayerNext.load($('.swiper-slide-next .lottie').attr('data-mob'));
        }
    }

    setTimeout(() => {
        $('.swiper-slide.swiper-slide-active').find('.lottie_anime').trigger('play');
        $('.swiper-slide.swiper-slide-active').find('.mob_anime').trigger('play');
        //$('.swiper-slide.swiper-slide-active').find('.cmg-soon').trigger('play');
    }, 800);

    // $('body').css('overflow', 'hidden');

    $(".swiper-slide-active .lottie_anime").on("complete", function () {
        swiper.keyboard.enable(); 
        // $(".swiper-slide-active").find('.wow').css('visibility', 'visible');
        // var animeName = $(".swiper-slide-active").find('.wow').data('anime');
        // $(".swiper-slide-active").find('.wow').css('animation-name', animeName);

        if ($(".swiper-slide-active .cmg-soon").length > 0 && $(".swiper-slide-active .cmg-soon").attr('data-src')) {
            var comingPlayer = document.querySelector(".swiper-slide-active .cmg-soon");
            comingPlayer.load($(".swiper-slide-active .cmg-soon").attr('data-src'));
            $(".swiper-slide-active .cmg-soon").removeAttr('data-src');
        }
    });


    $(".lottie_future").on("complete", function () {
        var futurecont = $(this).parents('.aem-GridColumn').find('.future-of-banking');
        var csCont = $(this).parents('.aem-GridColumn').find('.cs-panel');
        var digBankCont = $(this).parents('.aem-GridColumn').find('#digitalBanking');
        futurecont.addClass('active')
        digBankCont.css('display', 'flex');
        csCont.addClass('active');
        // cardsSlides();
        // csSliders();
    })

    // $(".swiper-slide-active .mob_anime").on("complete", function () {
    //   $('.cmg-soon').show().trigger('play');
    // });

    $('html, body').animate({ scrollTop: $('.swiperLottie').offset().top }, 800);
    if ($('cmp-container.swiper-slide-active').find('.lottie_anime').length == 0) {
        //alert('')
        $(this).find('.wow').fadeIn();
    }
});

// swiper.on('slideNextTransitionStart', function () {
//     if (accordClick == false && window.innerWidth > 767) {
//         $('.bg-header').css('top', -150);
//     }
// })

swiper.on('slideNextTransitionEnd', function () {
    if ($(".swiper-slide-active .lottie_anime").length == 0) {
        // $('html').css('overflow', 'auto');
    }
    $('.scrolltop').css('opacity', 1);
    accordClick = false;
})

swiper.on('reachBeginning', function () {
    $('.scrolltop').css('opacity', 0);
})

swiper.on('reachEnd', function () {
    setTimeout(() => {
        enablePageScroll();
        // $('body').css('overflow', 'auto');
    }, 200);
})

swiper.on('slideChange', function () {
    if (swiper.isEnd) {
      enablePageScroll();
    } else {
      disablePageScroll();
    }
  });
  
  function disablePageScroll() {
    document.body.style.overflow = 'hidden';
    $('.body-overlay').hide()
    // You can also add any custom logic or event listeners to prevent scrolling
  }

function enablePageScroll() {
    document.body.style.overflow = 'auto';
    $('.body-overlay').show();
    
    $('.arrow-down').fadeOut();
  }

swiper.on('slidePrevTransitionStart', function () {
    if ($(".swiper-slide-active .lottie_anime").length == 0) {
        // $('html').css('overflow', 'auto');
    }
    // $('.bg-header').css('top', 0);
})

swiper.setTransition(this, 500);

function digiBankswiper() {
    var digiBankswipe = new Swiper('.mob-box-wrap', {
        slidesPerView: 1,
        loop: false,
        speed: 1000,
        centeredSlides: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            480: {
                slidesPerView: 1.5,
            },

            767: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2.5,
            },

            1000: {
                slidesPerView: 3,
            },

            1180: {
                slidesPerView: 3.5,
            },
            
            1300: {
                slidesPerView: 4,
            }
        }
    });
    if (window.innerWidth <= 768) {
        const idx = $(".digi-link ul li");
        $(idx).on("click", function () {
          var ftrSlideIdx = $(this).attr("digi-slideIndex");
        //   console.log(ftrSlideIdx.value);
          digiBankswipe.slideTo(ftrSlideIdx, 0, true);
        });
      } 
}

$(window).on('resize load', function () {
    digiBankswiper();
    // nowSwiper.destroy();
    cardsSlides();
    csSliders();
})


function RemoveSlide() {
    var slide = Math.floor(Math.random() * swiper.slides.length);
    swiper.removeSlide(slide);
}

$(window).on("load", function () {
    setTimeout(function () {
        $("#loader").fadeOut(500);
        // $('.swiper-slide-active').find('.lottie').trigger('play')
    }, 10);
});

$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

LottieInteractivity.create({
    player: "#footer-pixel",
    mode: "scroll",
    actions: [
        {
            visibility: [0, 1.0],
            type: 'play',
        },
    ]
});

$(window).on("load", function () {
    if (winWidth <= 992 && window.innerHeight < window.innerWidth) {
        alert("Website best viewed in potrait");
    }
});

var nowSwiper = null;

function csSliders() {

    if (window.innerWidth > 991) {
        if (nowSwiper) {
            nowSwiper.destroy();
        }
        // Destroy the desktopSwiper instance if it exists
        nowSwiper = new Swiper('.cs-container', {
            loop: false,
            speed: 1000,
            // autoplay: {
            //     delay: 5000,
            // },
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 50,
            // spaceBetween: 2000,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
            },
            pagination: {
                el: ".cs-pagination",
                clickable: true,
            },
            on: {
                // init: function () {
                //     var totalSlides = this.slides.length;
                //     document.querySelector('.totalSlides').textContent = totalSlides;
                // },
                slideChange: function () {
                    var activeIndex = this.realIndex + 1;
                    document.querySelector('.activeIndex').textContent = activeIndex;
                },
            },
        })
    }
    else {

        if (nowSwiper) {
            nowSwiper.destroy();
        }
        nowSwiper = new Swiper('.cs-container', {
            loop: false,
            speed: 1000,
            observer: true,
            observeParents: true,
            spaceBetween: 0,
            effect: "cards",
            // autoplay: {
            //     delay: 5000,
            // },
            grabCursor: true,
            centeredSlides: true,
            rotate: true,
            cardsEffect: {

                perSlideOffset: 5,
                rotate: true,
                perSlideRotate: 3,
                slideShadows: false,
            },
            pagination: {
                el: ".cs-pagination",
                clickable: true
            },
            on: {
                // init: function () {
                //     var totalSlides = this.slides.length;
                //     document.querySelector('.totalSlides').textContent = totalSlides;
                // },
                slideChange: function () {
                    var activeIndex = this.realIndex + 1;
                    document.querySelector('.activeIndex').textContent = activeIndex;
                },
            },
        })
    }
}


// now swiper
var csSwiperSlide = null; // Initialize swiper as null
function cardsSlides() {

    if (window.innerWidth > 991) {

        if (csSwiperSlide) {
            csSwiperSlide.destroy();
        }
        // Destroy the desktopSwiper instance if it exists
        csSwiperSlide = new Swiper('#comingsoon .now-container', {
            loop: false,
            speed: 1000,
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 50,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
            },
            pagination: {
                el: ".now-pagination",
                clickable: true
            },
            on: {
                slideChange: function () {
                    var activeIndex = this.realIndex + 1;
                    document.querySelector('.activeIndex1').textContent = activeIndex;
                },
            },
        })
    }
    else {

        if (csSwiperSlide) {
            csSwiperSlide.destroy();
        }
        csSwiperSlide = new Swiper('#comingsoon .now-container', {
            loop: false,
            speed: 1000,
            observer: true,
            observeParents: true,
            spaceBetween: 0,
            effect: "cards",
            // autoplay: {
            //     delay: 5000,
            // },
            grabCursor: true,

            centeredSlides: true,
            rotate: true,
            cardsEffect: {

                perSlideOffset: 8,
                rotate: true,
                perSlideRotate: 1,

                slideShadows: false,

            },
            pagination: {
                el: ".now-pagination",
                clickable: true
            },
            on: {
                slideChange: function () {
                    var activeIndex = this.realIndex + 1;
                    document.querySelector('.activeIndex1').textContent = activeIndex;
                },
            },
        })
    }
}

// Event listener for window resize
window.addEventListener('resize', function() {
  // Reinitialize Swiper when the window is resized
  cardsSlides();
  csSliders();
});
