$(document).ready(function () {
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  articleSlider();
  moreAccord();
  loadMore();
  scrollToActiveOnMenuClick();
  preferdScrollbar();
  fundPerformanceSlider();
  investmentStratSlider();
  buyonlineSlider();
  tabs();
  bannerPopup();
  tabCarousel();
  hereFromOurCustomers();
  typeAmountComma();
  selectRadioButton();
  stepper2();
  payfortabs();
  getIncomefortabs();
});

$(window).on("load", function () {
  /* $(".benefitsOfBuyingWrap .faqsContent").mCustomScrollbar('destroy');*/
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  yourPreferedSlider();
  loadMore();
  tabCarousel();
  preferdScrollbar();
  buyonlineSlider();
  investmentStratSlider();
  buyonlineSlider();
});

$(window).on("resize", function () {
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  yourPreferedSlider();
  ReadMoreReadLess();
  loadMore();
  tabCarousel();
  preferdScrollbar();
  buyonlineSlider();
  investmentStratSlider();
  hereFromOurCustomers();
});

var buttonPlus = $(".qty-btn-plus");
var buttonMinus = $(".qty-btn-minus");

var incrementPlus = buttonPlus.click(function () {
  var $n = $(this).parent(".qty-container").find(".input-qty");
  $n.val(Number($n.val()) + 50000);
});

var incrementMinus = buttonMinus.click(function () {
  var $n = $(this).parent(".qty-container").find(".input-qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount - 50000);
  }
});

let pdlt = $(".personal-details-form");
let pdltHeading = $(".personalDtl-heading");
let lcdltHeading = $(".lifeCoverDtl-heading");
let lcdf = $(".life-cover-dtl-form");

lcdltHeading.hide();
lcdf.hide();

function stepper2() {
  $(document).on("click", ".lifecoverdtl-btn", function (e) {
    lcdltHeading.show();
    lcdf.show();
    pdlt.hide();
    pdltHeading.hide();
  });
}

function articleSlider() {
  var owl = $(".js-knowledgeSlider");
  owl.owlCarousel({
    loop: false,
    dots: true,
    margin: 10,
    nav: true,
    navText: ["", ""],
    autoplay: false,
    autoplayTimeout: 2500,
    responsive: {
      0: {
        dots: true,
        items: 1,
      },
      767: {
        dots: true,
        items: 2,
      },
      991: {
        dots: true,
        items: 3,
      },
    },
  });
}

function yourPreferedSlider() {
  windowWidth = $(window).width();
  if (windowWidth < 991) {
    $(".preferedChoiceList").owlCarousel({
      loop: false,
      autoplay: false,
      items: 2,
      margin: 10,
      nav: true,
      navText: ["", ""],
      dots: false,
      mouseDrag: false,
      autoplayHoverPause: false,
    });
  } else {
    $(".preferedChoiceList").owlCarousel("destroy");
  }
}

function ReadMoreReadLess() {
  windowWidth = $(window).width();
  if (windowWidth < 767) {
    $(document).on("click", ".readMore", function (e) {
      var txt = $(this).parents(".readmoreSec").find(".moretext").is(":visible")
        ? "Read More"
        : "Read Less";
      $(this).parents(".readmoreSec").find(".readMore").text(txt);
      $(this).parents(".readmoreSec").find(".moretext").slideToggle(200);
    });
  }
}

function loadMore() {
  windowWidth = $(window).width();
  if (windowWidth < 991) {
    $(document).on("click", ".LoadMore", function (e) {
      $(this).parent(".loadmoreSec").find(".loadmoreBlock").fadeIn(1000);
      $(this).parent(".loadmoreSec").find(".LoadMore").hide();
      $(this).parent(".loadmoreSec").find(".LoadLess").show();
      $(this)
        .parent(".loadmoreSec")
        .find(".LoadLess")
        .css("display", "inline-block");
    });

    $(document).on("click", ".LoadLess", function (e) {
      $(this).parent(".loadmoreSec").find(".loadmoreBlock").fadeOut(1000);
      $(this).parent(".loadmoreSec").find(".LoadLess").hide();
      $(this).parent(".loadmoreSec").find(".LoadMore").show();
      $(this)
        .parent(".loadmoreSec")
        .find(".LoadMore")
        .css("display", "inline-block");
    });
  }
}

function moreAccord() {
  $(document).on("click", ".moreAccord", function (e) {
    $(".displayHide").fadeIn();
    $(".moreAccord").hide();
    $(".loadLess").show();
  });

  $(document).on("click", ".loadLess", function (e) {
    $(".displayHide").fadeOut();
    $(".moreAccord").show();
    $(".loadLess").hide();
  });
}

// scroll to active section on menu click start
function scrollToActiveOnMenuClick() {
  $(document).on("click", ".navWrap li", function (event) {
    event.preventDefault();
    console.log("called");
    var liClass = $(this).attr("class");
    if (liClass == "Calculatepremium") {
      scrollToElement(".MainBannerWrap", 500, -80);
    } else if (liClass == "Plans") {
      scrollToElement(".smartInvestmentWrap", 500, -80);
    } else if (liClass == "Benefits") {
      scrollToElement(".BenefitWrap", 500, -80);
    } else if (liClass == "features") {
      scrollToElement(".keyfeatureWrap", 500, -80);
    } else if (liClass == "Strategies") {
      scrollToElement(".investmentStratWrap", 500, -100);
    } else if (liClass == "fundDetails") {
      scrollToElement(".fundperformanceWrap", 500, -30);
    } else if (liClass == "faqs") {
      scrollToElement(".faqWrap", 500, -30);
    } else if (liClass == "eligibility") {
      scrollToElement(".eligibilityWrap", 500, -30);
    }
    $(".navWrap li").removeClass("active");
    $(".navContent").removeClass("active");
    $(this).addClass("active");
  });
}
// scroll to active section on menu click end

function preferdScrollbar() {
  if (windowWidth > 991) {
    $(".preferedLstscroll").mCustomScrollbar();
  } else {
    $(".preferedLstscroll").mCustomScrollbar("destroy");
  }
}

function fundPerformanceSlider() {
  $(".fundPerformanceSlider").owlCarousel({
    loop: false,
    autoplay: false,
    items: 3,
    margin: 20,
    nav: true,
    navText: ["", ""],
    dots: false,
    mouseDrag: false,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1.1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 3,
      },
    },
  });
}

function investmentStratSlider() {
  if (windowWidth < 991) {
    $(".goallistSlider").owlCarousel({
      loop: false,
      autoplay: false,
      margin: 0,
      nav: true,
      navText: ["", ""],
      dots: false,
      mouseDrag: false,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1,
          dots: true,
        },
        767: {
          items: 2,
          dots: true,
        },
      },
    });
  } else {
    $(".goallistSlider").owlCarousel("destroy");
  }
}

function buyonlineSlider() {
  if (windowWidth < 991) {
    $(".buyonlineSlider").owlCarousel({
      loop: false,
      autoplay: false,
      margin: 0,
      nav: true,
      navText: ["", ""],
      dots: false,
      mouseDrag: false,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1,
          margin: 30,
        },
        767: {
          items: 2,
        },
      },
    });
  } else {
    $(".buyonlineSlider").owlCarousel("destroy");
  }
}

function tabs() {
  $(".nav-tabs .nav-item .nav-link").click(function () {
    $(this).parents(".nav-item").siblings().removeClass("active");
    $(this).parents(".nav-item").addClass("active");
    var tagid = $(this).data("tag");
    $(this).parents(".cp-tab").find(".tab-pane").removeClass("active");
    $("#" + tagid).addClass("active");
  });
}

function payfortabs() {
  $(".payfor_tab .payfor_tab_item .nav-link").click(function () {
    $(this).parents(".payfor_tab_item").siblings().removeClass("active");
    $(this).parents(".payfor_tab_item").addClass("active");

    var tagid = $(this).data("tag");
    $(this).parents(".cp-tab").find(".tab-pane").removeClass("active");
    $("#" + tagid).addClass("active");
    // $('.nav-link').not(this).removeClass('active');
  });
}

function getIncomefortabs() {
  $(".Getincomefor_tab .Getincomefor_tab_item .nav-link").click(function () {
    $(this).parents(".Getincomefor_tab_item").siblings().removeClass("active");
    $(this).parents(".Getincomefor_tab_item").addClass("active");

    var tagid = $(this).data("tag");
    $(this).parents(".cp-tab").find(".tab-pane").removeClass("active");
    $("#" + tagid).addClass("active");
    // $('.nav-link').not(this).removeClass('active');
  });
}

function bannerPopup() {
  $(document).on("click", ".js-openpop", function (e) {
    $(this).parents(".popUpwrap").find(".topPopup").toggle();
    $(this).parents(".popUpwrap").find(".iconBg").toggleClass("active");
  });
}

function tabCarousel() {
  $(document).on("click", ".tabCarousal .owl-item", function () {
    // var tabClickedIdx = $(this).parents(".owl-item").index();
    $(".tabCarousal .nav-item").removeClass("active");
    $(this).addClass("active");
    $(".cp-tab").find(".tabPane").removeClass("active");
    var tagid = $(this).find(".nav-item ").data("tag");
    console.log(tagid);
    $("#" + tagid).addClass("active");
    // $(".bs-tab").find(".tabPane").eq(tabClickedIdx).addClass("active");
  });
}

function hereFromOurCustomers() {
  $(".js-customerSlider").owlCarousel({
    loop: true,
    autoplay: false,
    items: 1,
    nav: true,
    navText: ["", ""],
    dots: false,
    margin: 10,
    // stagePadding: 100,
    smartSpeed: 1000,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
}

function typeAmountComma() {
  $("#investAmount").keyup(function () {
    var value = $(this).val();
    var newvalue = value.replace(/,/g, "");
    var valuewithcomma = Number(newvalue).toLocaleString("en-IN");
    $(this).val(valuewithcomma);
  });
}

function selectRadioButton() {
  $(".radioBt2 input").on("change", function () {
    if ($(this).is(":checked")) {
      var selectedRadioButton = $(this).siblings(".radioText").text();
      var dobLabel = $(".dateField .dobLabel").text();

      $(".radioBt2").removeClass("active");
      $(this).parents(".radioBt2").addClass("active");

      if (selectedRadioButton == "Self") {
        dobLabel = "My Date Of Birth";
        $(".dateField #dobLabel").text(dobLabel);
      } else if (selectedRadioButton == "Spouse") {
        dobLabel = "Spouse's Date Of Birth";
        $(".dateField #dobLabel").text(dobLabel);
      } else if (selectedRadioButton == "Child") {
        dobLabel = "Child's Date Of Birth";
        $(".dateField #dobLabel").text(dobLabel);
      } else {
        dobLabel = "Grand Child's Date Of Birth";
        $(".dateField #dobLabel").text(dobLabel);
      }
    }
  });
}

$(".verifyingYour").hide();
$(".profileEdit").hide();
$("#existcustcheck").change(function () {
  if (this.checked) {
    $(".no-option").hide();
    $(".profileEdit").show();
    $(".apamt-edit").hide();
    $(".verifyingYour").show();
  } else {
    $(".no-option").show();
    $(".verifyingYour").hide();
    $(".profileEdit").hide();
    $(".apamt-edit").show();
  }
});

// popup
// let overlays = document.querySelector("#overlays");
// let getExtra = document.querySelector("#getExtra");
// let extraOnline = document.querySelector("#extraOnline");
// let getCloseBtn = document.querySelector("#get-close-btn");

// extraOnline.addEventListener("click", () => {
//   overlays.style.display = "block";
//   getExtra.style.display = "block";
// });

// overlays.addEventListener("click", () => {
//   overlays.style.display = "none";
//   getExtra.style.display = "none";
// });

// getCloseBtn.addEventListener("click", () => {
//   overlays.style.display = "none";
//   getExtra.style.display = "none";
// });

// tax saving popup

// let overlays1 = document.querySelector("#overlays1");
// let taxSavingBlock = document.querySelector("#taxSavingBlock");
// let taxSaving = document.querySelector("#taxSaving");
// let taxCloseBtn = document.querySelector("#tax-close-btn");

// taxSaving.addEventListener("click", () => {
//   overlays1.style.display = "block";
//   taxSavingBlock.style.display = "block";
// });

// overlays1.addEventListener("click", () => {
//   overlays1.style.display = "none";
//   taxSavingBlock.style.display = "none";
// });

// taxCloseBtn.addEventListener("click", () => {
//   overlays1.style.display = "none";
//   taxSavingBlock.style.display = "none";
// });

// payout Radio button
// let payoutRadio = document.querySelectorAll(".payoutRadio");
// let dateMonth = document.querySelector("#dateMonth");
// payoutRadio.forEach((radioVal) => {
//   radioVal.addEventListener("change", () => {
//     if (radioVal.value === "Yes") {
//       dateMonth.style.visibility = "visible";
//     } else {
//       dateMonth.style.visibility = "hidden";
//     }
//   });
// });

/******************CHART JS******************* */
if ($("#lineBarChart").length) {
  const ctx = document.getElementById("lineBarChart");
  const labels = [
    ["1Years"],
    ["2Years"],
    ["3Years"],
    ["4Years"],
    ["5Years"],
    ["6Years"],
    ["7Years"],
    ["8Years"],
    ["9Years"],
    ["10-30", "Years"],
  ];

  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          // label: 'Yearly Income',
          data: [
            5000, 10000, 15000, 30000, 45000, 50000, 50000, 50000, 60000, 60000,
          ],
          backgroundColor: [],
          borderRadius: 5,
          barPercentage: 0.3,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "*During the given  policy term user will get Life Cover benefit of ₹560,000 ",
            fontColor: "#2A2A2A",
            font: {
              size: 14,
            }
          },

          grid: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
            maxRotation: 0, // Rotate the labels to 0 degrees
            minRotation: 0,
          },
        },
        y: {
          title: {
            display: true,
            text: "Total Income ",
            color: "#F47920",
            font: {
              size: 13,
            },
          },
          min: 0,
          steSize: 15,
          max: 1200000,

          axis: {
            color: "#585755",
          },
          grid: {
            borderDash: [10, 10],
          },
          ticks: {
            beginAtZero: 0,
            stepSize: 50000,
            callback: function (value) {
              if (value % 2 === 0) {
                  if (value >= 100000) {
                    if(window.innerWidth < 992){
                      var formattedValue = (value / 100000).toFixed(0) + ' L';
                      return '₹' + formattedValue;
                    }else{
                      var formattedValue = (value / 100000).toFixed(0) + ' Lakhs';
                      return '₹' + formattedValue;
                    }
                    
                  }else if(value>= 1000){
                    var formattedValue = (value / 1000).toFixed(0) + 'k';
                      return '₹' + formattedValue;
                  } else {
                    return '₹' + value;
                  }
                }
              return ""; // Return empty string for odd values to hide them
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          mode: "index",
          intersect: false,
          position: "nearest",
          yAlign: "bottom",
          backgroundColor: "#fff",
          borderColor: "#DEE6EE",
          borderWidth: 1,
          titleColor: "#999794",
          titleAlign: "center",
          bodyColor: "#999794",
          // bodyAlign: 'center',
          callbacks: {
            title: function (context, data) {
              return context[0].label.replaceAll(",", " ");
            },
            displayTitle: !1,
            label: function (context) {
              var tooltipLabel;
              return (tooltipLabel =
                null !== context.parsed.y
                  ? new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      maximumSignificantDigits: 2,
                    }).format(context.parsed.y)
                  : tooltipLabel);
            },
          },
        },
      },
      responsive: true,
    },
    // tooltips: {
    //   callbacks: {
    //     label: function(tooltipItem) {
    //         var value = tooltipItem.value || ''; // Get the tooltip value
    //         var formattedValue = '₹' + Number(value).toLocaleString('en-IN'); // Format value with Rupee sign and comma separator
    //         return formattedValue;
    //         }
    //   }
    //   },
    spanGaps: true,
    responsive: true,
    maintainAspectRatio: true,
  });

  let dataLength = myChart.data.datasets[0].data.length;
  for (i = 0; i < dataLength; i++) {
    myChart.data.datasets[0].backgroundColor.push("#99DFF9");
  }
  // labels.push(["Maturity", "Benefits", "31st Year"]);
  myChart.data.datasets[0].data.push(1000000);
  myChart.data.datasets[0].backgroundColor[dataLength] = "#F47920";
  myChart.update();
}



// function resizing() {
// window.addEventListener('resize', function() {
//   if (myChart.options.scales.x.title.display) {
//     var fontSize = 12; // Default font size
//     if (window.innerWidth <= 991) {
//         fontSize = 8; // Decreased font size for smaller screens
//     }
//     myChart.options.scales.x.title.font.size = fontSize;
//     myChart.update();
// }
// });
// }

// resizing();
/***************Chart Js END********************/
