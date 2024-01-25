var winWidth = $(window).width();
var winHeight = $(window).height();
var counted = 0;

$(document).ready(function () {
  // tab();
  detectdevice();
  quicklinksMobile();
  tabFootermd();
  menuOverlay();
 
  // lazyLoadImgs();
  faqs();
  counterall();
  removetag();
  subsPopup();
  // hdrTabs();
  // hdrDropdown();
  sharePopUp();
  hideBox();
  if ($(window).width() < 1198) {
    dropdownMenuXs();
    headerTabsXs();
    burgerMenuXs();
  } else {
    dropdownMenuLg();
    headerTabslg();
  }
  if ($(window).width() < 992) {
    tabFooterxs();
  } else {
    tabFootermd();
  }

  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  } else {
    
    window.onbeforeunload = function () {
      //window.scrollTo(0, 0);
    };
  }

  // For Apply Now Button scroll to Get a callback
  var servPosition;  
  $(document).on('click','.js-applyNowScroll', function(){
    $('#service ul li.service-list-item').eq(2).trigger('click');
    
    servPosition = $("#service").position().top;
    
    $('html, body').animate({
       scrollTop: servPosition - 60
      }, 500); 

  });

  
  $(document).on('click', '.disabled-link', function(e){  
    if (e.ctrlKey) {
        return false;
    }
  });

  $('img[data-lazy]').each(function() {
    var $img = $(this).addClass('lazy').removeAttr('loading');
    var lazySrc = $img.attr('data-lazy');
    $img.attr('data-src', lazySrc);
    $img.removeAttr('data-lazy');
  });
  
});

$(window).on("load", function () {
  // setTimeout(function () {
  //   $("#loader").fadeOut(500);
  // }, 10);


  /*CSR and career page button redirection*/
  var windowHash = window.location.hash;
  if(windowHash != '' && $('#csrreportpolicy').find(windowHash).length > 0) {
    var scrollToId = $(windowHash).parents('section').attr('id');
    var scrollAmt = $('#' + scrollToId).offset().top - 120

    $(windowHash).click();

    // $('html, body').animate({
    //   scrollTop: $('#' + scrollToId).offset().top - 60
    // }, 500); 


    window.scrollTo(0, scrollAmt);
  }
  else{
      window.scrollTo(0, 0);    
  }
});


// Lazy Load for Image

$(window).on("scroll, load", function () {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    setTimeout(function () {
      var lazyImageObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImage.removeAttribute("data-src");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    }, 50);
  } else {
    // Possibly fall back to event handlers here
  }
});

// Chamber Start
$(window).resize(function () {
  winWidth = $(window).width();
  //deactivce quick links style in mobile on resize
  $(".chamberOverlay").removeClass("active");
  $(".sidePanel").removeClass("chamberActive");
  $(".bottomLink").removeClass("quick-links");
});
// Chamber End

function showscrollDiv() {
  var y = $(this).scrollTop();
  var winHeight = $(window).height() - $("header").outerHeight();
  // console.log(winHeight);
  if (y > winHeight) {
    $(".js_scrollTop").fadeIn();
  } else {
    $(".js_scrollTop").fadeOut();
  }
}

/**Footer Accordion ***/

function tabFootermd() {
  $(".tab_content").hide();
  $(".tab_content:first").show();

  /* if in tab mode */
  $("ul.tabs li").on("mouseenter", function () {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).show();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
  });
}
/* if in accordion mode */
function tabFooterxs() {
  $(".tab_content:first").hide();
  $("#footer")
    .find(".tab_drawer_heading")
    .click(function () {
      var isActive = $(this).hasClass("d_active");
      $(".tab_drawer_heading").removeClass("d_active");
      if (!isActive) {
        $(this).toggleClass("d_active");
      }
      $(this).next().slideToggle();
      //Hide the other panels
      $(".tab_content").not($(this).next()).slideUp();
    });
}

//     $("ul.tabs li").removeClass("active");
//     $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
//   });
// });

//	footer Top Accordion;

$(function () {
  if ($(window).width() < 992) {
    var footer = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
      var links = this.el.find(".title");
      links.on(
        "click",
        {
          el: this.el,
          multiple: this.multiple,
        },
        this.dropdown
      );
    };

    footer.prototype.dropdown = function (e) {
      var $el = e.data.el;
      var $this = $(this),
        $next = $this.next();
      $next.slideToggle();
      $this.parent().toggleClass("active");
      if (!e.data.multiple) {
        $el
          .find(".footer-list")
          .not($next)
          .slideUp()
          .parent()
          .removeClass("active");
      }
    };
    var footer = new footer($(".contents"), false);
  }
});

$(document).on("click", function (event) {
  var $this = $(this);
  if (!$(event.target).closest(".footer-menu").length) {
    $this.parent().toggleClass("on");
  }
});
// Footer Accordion Ends

function scrolltoTop() {
  $(document).on("click", ".js_scrollTop", function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
}

// Mobile quick links start
function quicklinksMobile() {
  $(".bottomTabLink .bottomLink").on("click", function () {
    // this code is used to remove active class when clicked on bottom tab index 2 and 3
    var linkClicked = $(this).index();
    if (linkClicked == 0) {
      $(".sidePanel").toggleClass("chamberActive");
      $(".chamberOverlay ").toggleClass("active");
      $("#chamberNav").toggleClass("active");
    } else {
      $(".sidePanel").removeClass("chamberActive");
      $(".chamberOverlay ").removeClass("active");
      $("#chamberNav").removeClass("active");
    }
  });

  $(".chamberOverlay, .side_link").on("click", function () {
    if ($(".sidePanel").hasClass("chamberActive")) {
      $(".sidePanel").removeClass("chamberActive");
      $(".chamberOverlay").removeClass("active");
      $("#chamberNav").removeClass("active");
    }
  });

  $(".side_list").on("click", function () {
    $(".sidePanel").removeClass("chamberActive");
    $(".side_list").removeClass("active");
  });
}
// Mobile quick links end

// Growing Trust Counter Start
function counterall() {
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            // $(this).text(Math.ceil(now));
            $(this).text(
              Math.ceil(now)
                .toString()
                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            );
          },
        }
      );
  });
}
// Growing Trust Counter End

//Burger Menu
function burgerMenuXs() {
  // document.getElementById('burger').addEventListener('click', function(){
  //     document.body.classList.toggle('no-scroll')

  // });
  var burgerMenu = document.getElementById("burger");

  //Show and Hide Navbar Menu
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
  });
  document.getElementById("burger").addEventListener("click", function () {
    document.body.classList.toggle("no-scroll");
    $(".nav_bar").toggleClass("open");
    $(".dropdown_item").removeClass("navActive");
    $(".hdr-tab_content").removeClass("tabShow");
  });
}

// searchbar

$(document).on("click", ".search-toggle", function () {
  $(".searchOverlay").show();
  $(".search-block").addClass("openSearch");
  setTimeout(function () {
    $(".search-input").focus();
  }, 100);
});
$(document).on("click", ".icon.search-cancel", function () {
  $(".searchOverlay").hide();
  $(".search-block").removeClass("openSearch");
  $(".search-input").val("");
  $(".search-input").blur();
});

//Searchba end

//Breadcrumb Js Start
$(window).on("load", function () {
  headerHeight();
  TabClick();
});

$(window).resize(function () {
  headerHeight();
});

//Breadcrumb Js End

function headerHeight() {
  var navbarOffset = $(".header .container").offset();
  var navbarLeftOffset = navbarOffset.left + 15;
  var headerHeight = $(".header").height() + 15 + "px";
  $(".breadcrumb").css("left", navbarLeftOffset);
  $(".breadcrumb").css("top", headerHeight);
}

//- Mega Menu Js

// header tabs
function headerTabslg() {
  $(".tabmenu:not(:first-child)").hide();
  $(".tabmenu:first-child").show();

  $(".drop-tab_list > li .tab_link:not(.notabactive)").on("mouseenter", function () {
    $(this)
      .parents(".dropdown_menu")
      .find(".drop-tab_list > li .tab_link")
      .removeClass("tabActive");
    $(this).addClass("tabActive");
   
    var activeTab = $(this).attr("href");
    // $(".notabactive").removeClass("tabActive");

    $(this).parents(".dropdown_menu").find(".tabmenu").hide();
    $(activeTab).show();
  });
}

function headerTabsXs() {
  $(".drop-tab_list > li .tab_link").removeClass("tabActive");
  $(".tabmenu").hide();

  $(".drop-tab_list > li .tab_link").on("click", function () {
    var activeTab = $(this).attr("href");

    $(".tabmenu").hide();
    $(activeTab).show();
    $(".hdr-tab_content").addClass("tabShow");
  });

  $(".xs-nav_title").on("click", function () {
    $(".hdr-tab_content").removeClass("tabShow");
  });
}
// dropdown Desktop
function dropdownMenuLg() {
  $(".dropdown_item")
    .on("mouseover", function () {
      
      $(this).addClass("navActive");
      $(".overlay_menu").show();
    })
    .on("mouseout", function () {
      $(this).removeClass("navActive");
      $(".overlay_menu").hide();
    });

  $(".dropdown_menu").on("mouseleave", function () {
    $(this).find(".tab_link").removeClass("tabActive");
    var activeTabInd = $(this)
      .find(".drop-tab_title:nth-child(1) ")
      .next(".drop-tab_list")
      .find(".tab_item:first-child .tab_link");
    activeTabInd.addClass("tabActive");
    var activeTabHref = activeTabInd.attr("href");

    $(this).find(".tabmenu").hide();
    $(activeTabHref).show();
  });
}

function menuOverlay() {
  // $('.nav_bar').on('mouseenter', function(){
  //     $('.overlay_menu').show();
  // })
  // .on('mouseout', function(){
  //     $('.overlay_menu').hide();
  // });
}

// dropdown Desktop
function dropdownMenuXs() {
  $(".dropdown_item .nav_link").on("click", function () {
    $(this).parent(".dropdown_item").toggleClass("navActive");
  });
  $(".xs-drop-title").on("click", function () {
    $(this).parents(".dropdown_item").removeClass("navActive");
  });
}

function headerHeight() {
  var navbarOffset = $(".main-header .container").offset();
  var navbarLeftOffset = navbarOffset.left + 15;
  var headerHeight = $(".header").height() + 15 + "px";
  $(".breadcrumb").css("left", navbarLeftOffset);
  $(".breadcrumb").css("top", headerHeight);
}

function faqs() {
  $(document).on("click", ".accordLinks", function (e) {
    // $('.accordItem').removeClass('active');
    e.stopPropagation();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).next(".accordDesc").slideUp(300);
    } else {
      $(".accordLinks").removeClass("active");
      $(".accordDesc").slideUp(300);
      $(this).addClass("active");
      $(this).next(".accordDesc").slideDown(300);
    }
  });

  // $(".faqs-container .accordItem").slice(0, 5).show();
  var leng = $(".faqs-container .accordItem").length;
  // if(leng <= 4){
  //     console.log(leng)
  //     $(".faqs-container .btn-default").hide()
  // }else{
  //     $(".faqs-container .btn-default").show()
  // }
  $(".faqs-container .accordItem").slice(5, leng).hide();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".faqs-container .accordItem:hidden").slice(0, 4).slideDown();
    if ($(".faqs-container .accordItem:hidden").length == 0) {
      $("#loadMore").css("display", "none");
    }
  });
}

// form dropdown js
$(function () {
  $("#selectProduct").on("click", function (a) {
    $(".selectdiv").addClass("dropdownOpen");
    a.stopPropagation();
  });
  $(document).on("click", function (a) {
    $(".selectdiv").removeClass("dropdownOpen");
  });
  $("#selectProduct").on("change", function (a) {
    setTimeout(function () {
      $(".selectdiv").removeClass("dropdownOpen");
    }, 100);
  });
});

// for removing alt tag on banner

function removetag() {
  var elements = document.getElementsByTagName("a");
  for (var i = 0, len = elements.length; i < len; i++) {
    elements[i].removeAttribute("title");
  }
}

// $(".title-inner").html(function(){
//     var text= $(this).text().trim().split(" ");
//     var first = text.shift();
//     var last = text.pop();
//     return (text.length > 0 ? "<strong class='initial'>"+ first + "</strong> " : first) + text.join(" ") + " " + "<span class='lineBlock'>" + last + "</span> " ;
//   });

// Pop-Up Modal for sharing articles

function sharePopUp() {
  // open modal

  $(document).on("click", "#shareArticle", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var item = $(this).attr("data-modal");
    $(".sharemodal").fadeIn(300);
    $("body").addClass("no-scroll");
  });

  // close modal
  $(document).on("click", ".close, .modal_backdrop", function () {
    $("body").removeClass("no-scroll");
    $(".sharemodal").fadeOut(500);
  });

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $(".close").trigger("click");
    }
  });
}

// Copy function
function copyLink() {
  var copyText = document.querySelector(".copy-link input");
  var copyBtn = document.querySelector(".copy-link a");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  copyBtn.innerHTML = "Copied";
  setTimeout(() => {
    copyBtn.innerHTML = "Copy";
  }, 5000);
}

function subsPopup() {
  // open modal

  $(document).on("click", "#getCallBack", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var item = $(this).attr("data-modal");
    $(".subs-modal").fadeIn(300);
    $("body").addClass("no-scroll");
  });

  // close modal
  $(document).on("click", ".close, .modal_backdrop", function () {
    $("body").removeClass("no-scroll");
    $(".subs-modal").fadeOut(500);
  });

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $(".close").trigger("click");
    }
  });
}

// Menu click 
var headerH = $(".header").outerHeight();
var tabUlH = $(".service-list").outerHeight();
$(".hdr-tab_content .card .list li a, .hdr-tab_content .card .list-bullets li a").on("click", function () {
  $("body").append('<div class="fixed-overlay"></div>');

  setTimeout(() => {
    var hash = window.location.hash;
    $(".fixed-overlay").remove();
    if ($(window).width() < 1198) {
      $("#burger").trigger("click");
    }

    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top - (headerH + tabUlH),
      },
      200
    );
  }, 500);

  if ($(this).hasClass("pageclicked")) {
    setTimeout(() => {
      var hash = window.location.hash;
      $('.twl-tabs ul.service-list a[href="' + hash + '"], #faqSection ul.service-list a[href="' + hash + '"]')
        .parents(".twl-tabs .service-list-item, #faqSection .service-list-item")
        .trigger("click");
      $(".dropdown_item").removeClass("dropdown_menu");
    }, 50);
  }
});
function TabClick() {
  var hash = window.location.hash;
    if ($('.twl-tabs ul.service-list a[href="' + hash + '"], #faqSection ul.service-list a[href="' + hash + '"]').length > 0) {
      $('.twl-tabs ul.service-list a[href="' + hash + '"], #faqSection ul.service-list a[href="' + hash + '"]')
        .parents(".twl-tabs .service-list-item,  #faqSection .service-list-item").trigger("click");

        setTimeout(() => {
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top - (headerH + tabUlH),
            },
            200
          );
        }, 50);
    }
    
}
// Menu click end


// Disclaimer checkbox Start
function hideBox() {
  $(document).on('click', '#agree', function() {
    if ($('#agree:checked').length > 0) {
        $('#myButton').removeAttr('disabled');
          $("#myButton").on("click", function(){
           $(".rightsFiles").show()
          })
    } else {
        $('#myButton').attr('disabled', 'disabled');
        $(".rightsFiles").hide()
    }
  });
}
// Disclaimer checkbox End

function detectdevice(){
  $(document).on('click', '.detectdevice', function(){
      var isMobile = (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone/i.test(navigator.userAgent));
      if (isMobile == true){
          let os = getMobileOperatingSystem();
          if (os == "Android") {
              window.location.href = "https://play.google.com/store/apps/details?id=com.ltfs.d2c"; 
          } 
          else {
              window.location.href = "https://apps.apple.com/in/app/planet-by-l-t-finance/id1612832519";
          }
      }
      else{
          window.location.href = "https://planet.ltfs.com/LTFS/";
      }
  })
}

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

// $(document).on('click', '#service .service-list-item', function() {
//   $('html, body').animate({
//       scrollTop: $("#service").offset().top - 80
//   }, 200);
// });



