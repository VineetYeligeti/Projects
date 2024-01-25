var winWidth = $(window).width();
var winHeight = $(window).height();

$(document).ready(function() {
    tabs();
    gallerySlider();
    AchievementTab();
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
});

function tabs() {
    $(document).on('click', '.service-list li', function() {
        // alert('tab');
        var indexNo = $(this).index();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').addClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').siblings().removeClass('active');
        // nhlpieChart()
    });
}


// Gallery Slide Js Start
function gallerySlider() {
    $('.galleryCSRSlider').slick({
        speed: 1000,
        autoplaySpeed:1000,
        centerMode: true,
        centerPadding: '0',
        arrows:true,
        autoplay: false,
        infinite: false,
        slidesToShow: 3,
        initialSlide:1,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerPadding: '50px',
            }
        }
        ]
      });
}
// Gallery Slide Js End

function AchievementTab(){
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

 