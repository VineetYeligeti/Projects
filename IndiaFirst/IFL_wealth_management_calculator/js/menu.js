$(document).ready(function() {
    fixedHeader();
    MobilefixedHeader();
    mobileMenu();
    //accordFooter();
});

$(window).on("resize", function () {
    MobilefixedHeader();
    fixedHeader();
});

function MobilefixedHeader() {
    if ($(window).width() < 767)
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 46) $(".ifl-navbar").addClass("fixedHeder");
        else $(".ifl-navbar").removeClass("fixedHeder");
      });
  }
  function fixedHeader() {
    if ($(window).width() > 991)
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 46) $("#header").addClass("fixedHeder");
        else $("#header").removeClass("fixedHeder");
      });
  }

var menuHeight = function() {
  var t = $(window).height();
  $(".ifl-leftMenuWrap").css({
      height: t
  }),
  $(".ifl-scrollerWrap").hasClass("mCustomScrollbar") || $(".ifl-scrollerWrap").mCustomScrollbar({
      theme: "minimal"
  })
};

// window.mobileMenu = function() {
//   $(document).on("click", ".ifl-listMenu", function() {
//       $("body").addClass("ifl-overFlowHidn"),
//       $(".ifl-leftMenuOverlay").addClass("withlistMenu").fadeIn(800),
//       $(".ifl-leftMenuWrap").addClass("ifl-menuOpen").animate({
//           left: 0
//         // }, 800, "easeOutQuad", function() {
//       }, 800, "", function() {
//           $(".ifl-top-menu .ifl-top-right .ifl-social-icons, #top-menu .ifl-language").addClass("ifl-showThis"),
//           $(".ifl-scrollerWrap").mCustomScrollbar({
//               theme: "minimal"
//           })
//       })
//   }),
//   $(document).on("click", ".ifl-menuOpen .ifl-closeBtn", function() {
//       $(".ifl-leftMenuOverlay").removeClass("withlistMenu").fadeOut(800),
//       $("body").removeClass("ifl-overFlowHidn"),
//       $(".ifl-leftMenuWrap").removeClass("ifl-menuOpen").animate({
//           left: -1 * $(".ifl-leftMenuWrap").outerWidth()
//         }, 600, ""),
//     //   }, 600, "easeInQuad"),
//       $(".ifl-top-menu .ifl-top-right .ifl-social-icons,#top-menu .ifl-language").removeClass("ifl-showThis"),
//       setTimeout(function() {
//           $(".ifl-leftMenuWrap").removeAttr("style")
//       }, 500)
//   }),
//   $(document).on("click", ".withlistMenu", function() {
//       $(".ifl-menuOpen .ifl-closeBtn").click()
//   }),
//   $(".ifl-leftMenu > li").each(function() {
//       $(this).find("> ul").length ? $(this).addClass("ifl-subMenu") : $(this).find(".iconic-point-right").remove()
//   }),
//   $(".ifl-leftMenu > li > ul > li").each(function() {
//       $(this).find("> ul").length && $(this).addClass("ifl-secondarySubMenu")
//   }),
//   $(document).on("click", ".ifl-leftMenu > li.ifl-subMenu > div > span, .ifl-leftMenu > li.ifl-subMenu > div > a", function() {
//       var t = $(this).closest("li");
//       t.hasClass("ifl-active") ? (t.removeClass("ifl-active"),
//       t.find("> ul").slideUp()) : (t.addClass("ifl-active").siblings().removeClass("ifl-active"),
//       t.parent().siblings().find("li").removeClass("ifl-active"),
//       t.parent().find("li").removeClass("ifl-sel"),
//       t.parent().siblings().find("li").removeClass("ifl-sel"),
//       t.find("> ul").slideDown(600, function() {
//           $(".ifl-scrollerWrap").mCustomScrollbar("scrollTo", t, {})
//       }),
//       t.siblings("li").find("ul").slideUp(),
//       t.parent().siblings().find("li ul").slideUp())
//   }),
//   $(document).on("click", ".ifl-leftMenu li.ifl-secondarySubMenu > div > span, .ifl-leftMenu li.ifl-secondarySubMenu > div > a", function(t) {
//       t.stopPropagation();
//       t = $(this).closest("li");
//       t.hasClass("ifl-sel") ? (t.removeClass("ifl-sel"),
//       t.find("> ul").slideUp()) : (t.addClass("ifl-sel").siblings().removeClass("ifl-sel"),
//       t.parents(".ifl-leftMenu").siblings().find("li").removeClass("ifl-sel"),
//       t.find("> ul").slideDown(),
//       t.siblings("li").find("ul").slideUp())
//   })
// }

function accordFooter() {
    if ($(window).width() < 767) {
        $('.accordFooter ul').hide();
        $(document).on('click', '.accordFooter h3', function(e) {
            //e.preventDefault();
            $(this).parent('.accordFooter').find('ul').slideToggle().parents('.accordFooter').siblings('.accordFooter').find('ul').hide(500).addClass('collapsed');
            $(this).find('span').toggleClass('only-minus');
            $(this).parents('.accordFooter').siblings().find('h3 span').removeClass('only-minus');
        });
    }
}