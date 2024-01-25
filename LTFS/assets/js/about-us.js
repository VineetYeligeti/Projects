// const { event } = require("grunt");

$(document).ready(function () {
  LeadershipTab();
  leadershipSlider();
  leadershipModal();
  sharePopUp();

  // Media Center JS Start
  $(".MediaCenter-silder").slick({
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    dots: false,
    speed: 300,
    infinite: false,
    autoplaySpeed: 5000,
    autoplay: false,
    centerMode: false,
    centerPadding: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: false,
          centerPadding: 60,
        },
      },
    ],
  });
  // Media Center JS END

  //Growth Journey Slider Start
  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    loop: true,
    autoplay: false,
    adaptiveHeight: true,
    infinite: true,
    useTransform: false,
    speed: 400,
    cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows:false,
        },
      },
    ],
  });
  $(".journeySlider-bar").on("init", function (event, slick) {
    $(".journeySlider-bar .slick-slide.slick-current").addClass("is-active");
  });

  $(".journeySlider-bar").slick({
    slidesToShow: 10,
    slidesToScroll: 5,
    dots: false,
    // focusOnSelect: true,
    infinite: false,
    draggable: true,
    easing: 'linear',
    arrows:false,
    // touchMove: true,
    autoplay: false,
    // centerMode: true,
    loop: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
    ],
  });
  $(".slider-single").on("afterChange", function (event, slick, currentSlide) {
    $(".journeySlider-bar").slick("slickGoTo", currentSlide);
    var currrentNavSlideElem =
      '.journeySlider-bar .slick-slide[data-slick-index="' + currentSlide + '"]';
    $(".journeySlider-bar .slick-slide.is-active").removeClass("is-active");
    $(currrentNavSlideElem).addClass("is-active");
  });
  $(".journeySlider-bar").on("click", ".slick-slide", function (event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data("slick-index");
    $(".slider-single").slick("slickGoTo", goToSingleSlide);
  });

  //Growth Journey Slider End
});
$(window).on('load resize', function() {
    if ($(window).width() < 992) {
        $('.companies-slider').slick({
            infinite: false,
            navgation: false,
            autoplay: false,
            arrows: false,
            lazyLoad: 'ondemand',
            loop: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                },
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                },
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }]
        });
    }
});

function LeadershipTab() {
  $(document).on("click", ".service-list  li", function () {
    $(".service-list  li").removeClass("active");
    $(this).addClass("active");
    var clickIndex = $(this).index();
    $(".tab-content .tab-panel").removeClass("active");
    $(".tab-content .tab-panel").eq(clickIndex).addClass("active");

    $(".leadershipSlider").slick("setPosition");
  });
}

// Leadership Slider Start
function leadershipSlider() {
    $('.leadershipSlider').slick({
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 1,
        dots: false,
        // speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        responsive: [{
            breakpoint: 1367,
            settings: {
                slidesToShow: 3,
                arrows: true
            }
        },
        {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              arrows: true
            }
          },
          {
            breakpoint: 578,
            settings: {
                slidesToShow: 1,
                arrows: false,
                variableWidth: true,
            }
          },          
        ]
    });
}
// Leadership Slider End

// leadership slider item on click modal
function leadershipModal() {
  // open modal
  $(document).on("click", ".leadershipItem .contWrap", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var item = $(this).attr("data-modal");
    $(".modal-wrapper").fadeIn(300);
    $("body").addClass("no-scroll");
    $("div.modalContWrap").addClass("d-none");
    $("div.modalContWrap#" + item).removeClass("d-none");
  });

  // close modal
  $(document).on("click", ".close, .modal_backdrop", function () {
    $("body").removeClass("no-scroll");
    $(".modal-wrapper").fadeOut(500);
  });

  $(document).keydown(function(event) {
    if (event.keyCode == 27) {
        $('.close').trigger('click');
    }
});

}

// Achievements Awards Slider Start
$('.achievementsAwardsSlider').slick({
    slidesToShow: 3,
    arrows: true,
    dots: false,
    infinite: false,
    centerMode: false,
    autoplaySpeed: 5000,
    autoplay: false,
    centerPadding: 0,
    lazyLoad: 'ondemand',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: false
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

// Abour us - our values
$(document).on("click", ".main-cont-wrap .cont-img-wrap", function () {
  if ($(window).width() < 993) {
    $(".main-cont-wrap").removeClass("active");
    $(this).parent(".main-cont-wrap").addClass("active");
  }
});

$(".main-cont-wrap .cont-img-wrap")
  .mouseover(function () {
    if ($(window).width() > 993) {
      $(this).parent(".main-cont-wrap").siblings().removeClass("active");
      $(this).parent(".main-cont-wrap").addClass("active");
    }
  })
  .mouseout(function () {
    if ($(window).width() > 993) {
      $(this).parent(".main-cont-wrap").removeClass("active");
    }
  });

// About Us Our Companies Section Start

mobileOnlySlider(".ourcompright", false, false, 767);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
  var slider = $($slidername);
  var settings = {
    mobileFirst: true,
    dots: $dots,
    arrows: $arrows,
    infinite:false,
    responsive: [
      {
        breakpoint: $breakpoint,
        settings: "unslick",
      },
    ],
  };

  slider.slick(settings);

  $(window).on("resize", function () {
    if ($(window).width() > $breakpoint) {
      return;
    }
    if (!slider.hasClass("slick-initialized")) {
      return slider.slick(settings);
    }
  });
} // Mobile Only Slider
//About US Our Companies Section End

// Pop Up Modal Code

function sharePopUp() {  
  $(document).on("click", "#showAwards", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var item = $(this).attr("data-modal");
    $("#awardModal").fadeIn(300);
    $("body").addClass("no-scroll");
    
  });

  $(document).on("click", ".close, .modal_backdrop", function () {
    $("body").removeClass("no-scroll");
    $("#awardModal").fadeOut(500);
  });

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $(".close").trigger("click");
    }
  });
}