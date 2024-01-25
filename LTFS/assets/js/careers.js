var windowWidth = $(window).width();

$(document).ready(function () {
  expandedCards();
  EmpowerSlider();
  eventSitesTab();
  careerEventSlider();
  finServiceSlider();
  finService();
  carrierPopUp();
  howWeHire(); 
  trainees() ;
  galleryPopUp();
  galleryPopltfs();
  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $(".close").trigger("click");
    }
  });
  // gallerypopslide();
  //// Slider Top
  $(".talentstarslider-container .talentslider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: "ondemand",
    infinite:false,
    autoplay:false,
    fade: true,
    asNavFor: ".talentstarslider-container .talentslider-nav",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          autoplay: false,
        },
      },
    ],
  });
  $(".talentstarslider-container .talentslider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".talentstarslider-container .talentslider-for",
    centerMode: false,
    variableWidth: true,
    focusOnSelect: true,
    arrows: true,
    infinite:false,
    autoplay:false,
    accessibility: true,
    onAfterChange: function (slide, index) {
      console.log("slider-nav change");
      console.log(this.$slides.get(index));
      $(".current-slide").removeClass("current-slide");
      $(this.$slides.get(index)).addClass("current-slide");
    },
    onInit: function (slick) {
      $(slick.$slides.get(0)).addClass("current-slide");
    },
  });
  // Talented Star Slider Section End
});

$(document).on("click", ".read-more-link", function () {
  $("span.short-desc").removeClass("hide");
  $(".read-more-link").css("display", "none");
});

//How we Hire Mobile View Slider Start
mobileOnlySlider(".howWeHireSlider", false, false, 767);

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
        infinite:false,
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
}
// How we Hire MObile View Slider End

    // Media Center JS Start
    $('.MediaCenter-silder').slick({
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
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: false,
                    centerPadding: 60,
                }
            }
        ]
    });
    // Media Center JS END

    // Empowering SLider
    function EmpowerSlider() {
        $('.empoweringSlider').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false,
            centerMode: false,
            autoplaySpeed: 5000,
            autoplay: false,
            lazyLoad: 'ondemand',
            responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  arrows: true,
              }
          },
                {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                      arrows: false,
                  }
              }
            ]
        });
    }

// Empowering SLider End

// Event On Sites Section Start
function eventSitesTab() {
  $(document).on("click", ".event-list  li", function () {
    $(".awards-list  li").removeClass("active");
    $(this).addClass("active");
    var clickIndex = $(this).index();
    $(".tab-content .tab-panel").removeClass("active");
    $(".tab-content .tab-panel").eq(clickIndex).addClass("active");
    $(".eventSlider").slick("setPosition");
  });
}

function careerEventSlider() {
    $('.eventSlider').slick({
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        dots: false,
        // speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        // centerPadding: 0,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: false,
                    centerPadding: 10,
                }
            }
        ]
    });
}

// Event On Sites Section End

// why financial Services Start

function expandedCards() {
  const panels = document.querySelectorAll(".dark-card");

  panels.forEach((panel) => {
    panel.addEventListener("mouseenter", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
  });

  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }
}

function finServiceSlider() {
  $(".lt-grid").slick({
    slidesToShow: 5,
    slidesToScroll:1,
    arrows: true,
    dots: false,
    infinite:false,
    variableWidth: true,
    // speed: 300,
    autoplaySpeed: 5000,
    autoplay: false,
    // centerPadding: 0,
    cssEase: "linear",
    lazyLoad: "ondemand",
    responsive: [{
      breakpoint: 1368,
      settings: {
          slidesToShow: 4,
      }
  },
  {
    breakpoint: 1281,
    settings: {
        slidesToShow: 3,
    }
  },
      {
        breakpoint: 992,
        settings: "unslick",
      },
    ],
  });
}

// why financial Services End

// add active class on hover from life finance services
function finService() {
  $(".inner-wrap").hover(
    function () {
      $(".inner-wrap.active").addClass("inactive").removeClass("active");
    },
    function () {
      $(".inner-wrap.inactive").addClass("active").removeClass("inactive");
    }
  );
}
// End of add active class on hover from life finance services

function carrierPopUp() {
  // open modal

  $(".carrier-modal").fadeIn(300);
  $("body").addClass("no-scroll");

  // close modal
  $(document).on("click", ".close, .modal_backdrop", function () {
    $("body").removeClass("no-scroll");
    $(".carrier-modal").fadeOut(500);
  });
}

function howWeHire() {
  // open modal

  $(document).on("click", "#viewMore", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var item = $(this).attr("data-modal");
    $(".howWeHire-modal").fadeIn(300);
    $("body").addClass("no-scroll");
  });

  // close modal
  $(document).on("click", ".close, .modal_backdrop", function () {
    $("body").removeClass("no-scroll");
    $(".howWeHire-modal").fadeOut(500);
  });

}

function trainees() {
  // open modal

  $(document).on("click", "#viewtrainees", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var item = $(this).attr("data-modal");
    $(".trainees").fadeIn(300);
    $("body").addClass("no-scroll");
  });

  // close modal
  $(document).on("click", ".close, .modal_backdrop", function () {
    $("body").removeClass("no-scroll");
    $(".trainees").fadeOut(500);
  });
}

function galleryPopUp() {
  // open modal

  $(document).on("click", "#lightbox", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var item = $(this).attr("data-modal");
    $(".gallery-modal").fadeIn(300);
    $(".eventgallery").slick("refresh");
    $("body").addClass("no-scroll");
  });

  // close modal
  $(document).on("click", ".close, .modal_backdrop", function () {
    $("body").removeClass("no-scroll");
    $(".gallery-modal").fadeOut(500);
  });  
}
function galleryPopltfs() {
  // open modal

  $(document).on("click", "#lightboxltfs", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var item = $(this).attr("data-modal");
    $(".gallery-lifeltfs").fadeIn(300);
    $(".eventgallery").slick("refresh");
    $("body").addClass("no-scroll");
  });

  // close modal
  $(document).on("click", ".close, .modal_backdrop", function () {
    $("body").removeClass("no-scroll");
    $(".gallery-lifeltfs").fadeOut(500);
  });  
}
$(window).on("load", function () {
      $('.eventgallery').slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
        // speed: 300,
        focusOnSelect:true,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        centerMode:false,
        cssEase: 'linear',
      }, 200);
});