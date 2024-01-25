$(document).ready(function () {
  $(".homeBannerSlider").slick({
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    dots: true,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    centerPadding: 0,
    cssEase: "linear",
  });

  expandedCards();
});



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
