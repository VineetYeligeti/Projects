$(document).ready(function() {
    developmentTab();
    tabs();
    serviceTab();
    resultsTabs();
    leadershipSlider();
    leadershipModal()
});

// At Your Service Tab Start
function tabs() {
    $(document).on('click', '.at-your-service .service-list  li', function () {
        $('.at-your-service .service-list  li').removeClass('active');
        $(this).addClass('active');
        var clickIndex = $(this).index();
        $('.at-your-service .tab-cont .tab-panel').removeClass('active')
        $('.at-your-service .tab-cont .tab-panel').eq(clickIndex).addClass('active');
       // $('.serviceResult').slick('setPosition');
    });
}
// At Your Service Tab End

// financial Service result Start

function serviceTab() {
    $(document).on('click', '.service-tab-list  li', function () {
        $('.service-tab-list  li').removeClass('active');
        $(this).addClass('active');
        var clickIndex = $(this).index();
        $('.service-tab-wrapper .tab-content .tab-panel').removeClass('active')
        $('.service-tab-wrapper .tab-content .tab-panel').eq(clickIndex).addClass('active'); 
       // $('.serviceResult').slick('setPosition');
    });
}

function resultsTabs() {
    $('.reportTabs li').click(function(){
        $(this).parents('.reportTabContainer').find('.reportTabs li').removeClass('active');
        $(this).addClass('active');
        var currentTabIndex = $(this).index();

        $(this).parents('.reportTabContainer').find('.content-container .reportPoliciesContent').removeClass('active');
        $(this).parents('.reportTabContainer').find('.content-container .reportPoliciesContent').eq(currentTabIndex).addClass('active');
      });
}

// financial Service result End

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
          breakpoint: 991,
          settings: {
              slidesToShow: 2,
              arrows: true
            }
          },
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: true
            }
          },
          {
            breakpoint: 580,
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


function leadershipModal() {
    // open modal
    $(document).on("click", ".leadershipItem .contWrap", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var item = $(this).attr("data-modal");
      $(".leadershipmodal").fadeIn(300);
      $("body").addClass("no-scroll");
      $("div.modalContWrap").addClass("d-none");
      $("div.modalContWrap#" + item).removeClass("d-none");
    });
  
    // close modal
    $(document).on("click", ".close, .modal_backdrop", function () {
      $("body").removeClass("no-scroll");
      $(".leadershipmodal").fadeOut(500);
    });
  
    $(document).keydown(function(event) {
      if (event.keyCode == 27) {
          $('.close').trigger('click');
      }
  });
}

// L&T Finance tabs
function developmentTab() {
  $(document).on('click', '.infra-tabs .service-list  li', function () {
      $('.infra-tabs .service-list li').removeClass('active');
      $(this).addClass('active');
      var clickIndex = $(this).index();
      $('.infra-tabs .tab-cont .tab-panel').removeClass('active')
      $('.infra-tabs .tab-cont .tab-panel').eq(clickIndex).addClass('active');
     // $('.serviceResult').slick('setPosition');
  });
}
// L&T Finance tabs End