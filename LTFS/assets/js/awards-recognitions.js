$(document).ready(function() {
    LeadershipTabAR();
    leadershipSliderAR();
    sharePopUp();
    // destroyCarousel();
});

function LeadershipTabAR() {
    $(document).on('click', '.service-list  li', function() {
        $('.service-list  li').removeClass('active');
        $(this).addClass('active');
        // var clickIndex = $(this).index();
        // $('.tab-content .tab-panel').removeClass('active')
        // $('.tab-content .tab-panel').eq(clickIndex).addClass('active');
        $('.leadershipSlider').slick('unslick');
        setTimeout(function(){
            leadershipSliderAR();
            $('.leadershipSlider').slick('refresh');
        },500);
            
        });
}

// Leadership Slider Start
function leadershipSliderAR() {
    $('.leadershipSlider').slick({
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        dots: false,
        // speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        // variableWidth: true,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    // centerPadding: '50px',
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
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
}
// Leadership Slider End

function sharePopUp() {  
    $(document).on("click", "#showAwards", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var item = $(this).attr("data-modal");
      $(".awardModal").fadeIn(300);
      $("body").addClass("no-scroll");
    });
  
    $(document).on("click", ".close, .modal_backdrop", function () {
      $("body").removeClass("no-scroll");
      $(".awardModal").fadeOut(500);
    });
  
    $(document).keydown(function (event) {
      if (event.keyCode == 27) {
        $(".close").trigger("click");
      }
    });
  }