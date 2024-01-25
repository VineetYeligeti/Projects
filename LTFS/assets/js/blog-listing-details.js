// Blog Listing Details Our Product For Your Needs
$(window).on("load resize", function () {
  if ($(window).width() < 992) {
    $(".prodGoalWrap").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: false,
      autoplaySpeed: 500,
      autoplay: false,
      lazyLoad: "ondemand",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            autoplaySpeed: 500,
            autoplay: false,
            centerPadding: 0,
            lazyLoad: "ondemand",
          },
        },
      ],
    });
  }
});
