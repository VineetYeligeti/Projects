var winWidth = $(window).width();
var winHeight = $(window).height();



$(document).ready(function () {
    serviceTab();
    date();
    resultsTabs();
    // chartLine();
    // barchart();
    // BSEintra();
    // NSEintra();
    // BSEeod();
    // NSEeod();
    // barchartNSEeod();
    // barchartNSEintra();
    // barchartBSEeod();
    // barchartBSEintra();
    stockTab();
    // averageflip();

        

    // if (winWidth < 991 ) {
    //     $(window).on("touchend", function(){
    //         $(".loanDatepick" ).datepicker('hide');
    //         $(".loanDatepick").blur();
    //     });
    // } else {
    //     $(window).scroll(function(){
    //         $(".loanDatepick" ).datepicker('hide');
    //         $(".loanDatepick").blur();
    //     })
    // }
 
   
   
   
    // scrollbar();



    $('.homeBannerSlider').slick({
        slidesToShow: 1,
        arrows: false,
        //slidesToScroll: 1,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 3000,
        autoplay: false,
        centerPadding: 0,
        cssEase: 'linear',
    });
});


// Tab Section//

function serviceTab() {
    $(document).on('click', '.service-tab-list  li', function () {
        $('.service-tab-list  li').removeClass('active');
        $(this).addClass('active');
        var clickIndex = $(this).index();
        $('.tab-content .tab-panel').removeClass('active')
        $('.tab-content .tab-panel').eq(clickIndex).addClass('active');
       // $('.serviceResult').slick('setPosition');
    });
}

// Tab Section js ends here//

function date() {
    

  var dateFormat = "mm/dd/yy",
    from = $( "#datefrom" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        maxDate: 0,
        yearRange: "-80:+0",
      })
      .on( "change", function(date, inst) {
        to.datepicker( "option", "minDate", getDate( this ) );
        
      }),
    to = $( "#dateto" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      changeYear: true,
      maxDate: 0,
      yearRange: "-80:+0",
      // numberOfMonths: 1
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }

}
 


// function scrollbar() {
//     $('table').on('scroll', function () {
//         $("table > *").width($("table").width() + $("table").scrollLeft());
//     });

//     $("tbody").mCustomScrollbar({
//         theme: "light-3",
//         scrollButtons: {
//             enable: false
//         },
//         mouseWheel: { preventDefault: true },
//         scrollbarPosition: 'inside',
//         autoExpandScrollbar: true,
//         theme: 'dark',
//         axis: "y",
//         setWidth: "auto"
//     });
// }


function resultsTabs() {
    $('.reportTabs li').click(function(){
        $(this).parents('.reportTabContainer').find('.reportTabs li').removeClass('active');
        $(this).addClass('active');
        var currentTabIndex = $(this).index();

        $(this).parents('.reportTabContainer').find('.content-container .reportPoliciesContent').removeClass('active');
        $(this).parents('.reportTabContainer').find('.content-container .reportPoliciesContent').eq(currentTabIndex).addClass('active');
      });
}



// function NSEeod() {

//     var ctx = document.getElementById("linechartNSEeod").getContext('2d');


//     var myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: ['', '', '', '', '', '', ''],
//             datasets: [{
//                 label: 'Price',
                
//                 data: [70.0, 72.5, 71.0, 73.5, 74.0, 71.0, 72.0, 73.5],
//                 fill: false,
//                 borderColor: '#F7941E',
//                 backgroundColor: '#F7941E',
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             legend: {
//                 display: false //This will do the task
//             },
//             scales: {
//                 x: {
//                     grid: {
//                         display: false
//                     }
//                 },
//                 y: {
//                     ticks: {
//                         stepSize: 0.5
//                     }
//                 }
//             },
//             plugins: {
//                 tooltip: {
//                     callbacks: {
//                         labelColor: function (context) {
//                             return {
//                                 bodyColor: '#fff',
//                                 borderColor: 'rgb(0, 0, 0)',
//                                 borderRadius: 2,
//                                 footerColor: '#595C73',
//                             };
//                         },
//                         labelTextColor: function (context) {
//                             return '#fff';
//                         },
//                         usePointStyle: true,
//                         labelPointStyle: function (context) {
//                             return {
//                                 pointStyle: 'triangle',
//                                 rotation: 0
//                             };
//                         },
//                         position: 'right',
//                     }
//                 }
//             },
//             animations: {
//                 tension: {
//                     duration: 1000,
//                     easing: 'linear',
//                     from: 1,
//                     to: 0,
//                     loop: false
//                 }
//             },
//         },
//     });

// }
// function NSEintra() {

//     var ctx = document.getElementById("linechartNSEintra").getContext('2d');


//     var myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: ['', '', '', '', '', '', ''],
//             datasets: [{
//                 label: 'Price',
//                 data: [70.0, 72.5, 71.0, 73.5, 74.0, 71.0, 72.0, 73.5],
//                 fill: false,
//                 borderColor: '#F7941E',
//                 backgroundColor: '#F7941E',
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             legend:{
//                 display: false,
//             },
//             scales: {
//                 x: {
//                     grid: {
//                         display: false
//                     }
//                 },
//                 y: {
//                     ticks: {
//                         stepSize: 0.5
//                     }
//                 }
//             },
//             plugins: {
//                 tooltip: {
//                     callbacks: {
//                         labelColor: function (context) {
//                             return {
//                                 bodyColor: '#fff',
//                                 borderColor: 'rgb(0, 0, 0)',
//                                 borderRadius: 2,
//                                 footerColor: '#595C73',
//                             };
//                         },
//                         labelTextColor: function (context) {
//                             return '#fff';
//                         },
//                         usePointStyle: true,
//                         labelPointStyle: function (context) {
//                             return {
//                                 pointStyle: 'triangle',
//                                 rotation: 0
//                             };
//                         },
//                         position: 'right',
//                     }
//                 }
//             },
//             animations: {
//                 tension: {
//                     duration: 1000,
//                     easing: 'linear',
//                     from: 1,
//                     to: 0,
//                     loop: false
//                 }
//             },
//         }
//     });
// }
// function BSEeod() {

//     var ctx = document.getElementById("linechartBSEeod").getContext('2d');

//     var myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: ['', '', '', '', '', '', ''],
//             datasets: [{
//                 label: 'Price',
//                 data: [70.0, 72.5, 71.0, 73.5, 74.0, 71.0, 72.0, 73.5],
//                 fill: false,
//                 borderColor: '#F7941E',
//                 backgroundColor: '#F7941E',
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             scales: {
//                 x: {
//                     grid: {
//                         display: false
//                     }
//                 },
//                 y: {
//                     ticks: {
//                         stepSize: 0.5
//                     }
//                 }
//             },
//             plugins: {
//                 tooltip: {
//                     callbacks: {
//                         labelColor: function (context) {
//                             return {
//                                 bodyColor: '#fff',
//                                 borderColor: 'rgb(0, 0, 0)',
//                                 borderRadius: 2,
//                                 footerColor: '#595C73',
//                             };
//                         },
//                         labelTextColor: function (context) {
//                             return '#fff';
//                         },
//                         usePointStyle: true,
//                         labelPointStyle: function (context) {
//                             return {
//                                 pointStyle: 'triangle',
//                                 rotation: 0
//                             };
//                         },
//                         position: 'right',
//                     }
//                 }
//             },
//             animations: {
//                 tension: {
//                     duration: 1000,
//                     easing: 'linear',
//                     from: 1,
//                     to: 0,
//                     loop: false
//                 }
//             },
//         }
//     });

// }
// function BSEintra() {

//     var ctx = document.getElementById("linechartBSEintra").getContext('2d');


//     var myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: ['', '', '', '', '', '', ''],
//             datasets: [{
//                 label: 'Price',
//                 data: [70.0, 72.5, 71.0, 73.5, 74.0, 71.0, 72.0, 73.5],
//                 fill: false,
//                 borderColor: '#F7941E',
//                 backgroundColor: '#F7941E',
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             scales: {
//                 x: {
//                     grid: {
//                         display: false
//                     }
//                 },
//                 y: {
//                     ticks: {
//                         stepSize: 0.5
//                     }
//                 }
//             },
//             plugins: {
//                 tooltip: {
//                     callbacks: {
//                         labelColor: function (context) {
//                             return {
//                                 bodyColor: '#fff',
//                                 borderColor: 'rgb(0, 0, 0)',
//                                 borderRadius: 2,
//                                 footerColor: '#595C73',
//                             };
//                         },
//                         labelTextColor: function (context) {
//                             return '#fff';
//                         },
//                         usePointStyle: true,
//                         labelPointStyle: function (context) {
//                             return {
//                                 pointStyle: 'triangle',
//                                 rotation: 0
//                             };
//                         },
//                         position: 'right',
//                     }
//                 }
//             },
//             animations: {
//                 tension: {
//                     duration: 1000,
//                     easing: 'linear',
//                     from: 1,
//                     to: 0,
//                     loop: false
//                 }
//             },
//         }
//     });

// }

// function barchartNSEeod() {

//     var ctx = document.getElementById("barchartNSEeod").getContext('2d');
//     ctx.height = 180;
//     const myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['9.34', '10.04', '10.34', '11.04', '11.34', '12.04', '12.34',],
//             datasets: [{
//                 label: 'Volume',
//                 data: [400000, 200000, 100000, 300000, 320000, 280000, 150000, 360000],
//                 backgroundColor: [
//                     '#80C2C3'
//                 ],
//                 borderColor: [
//                     '#80C2C3'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             scales: {
//                 x: {
//                     beginAtZero: false,
//                     grid: {
//                         display: false
//                     }
//                 },
//                 y: {
//                     beginAtZero: false,
//                     ticks: {
//                         stepSize: 200000
//                     }
//                 },
//                 animations: {
//                     tension: {
//                         duration: 1000,
//                         easing: 'linear',
//                         from: 1,
//                         to: 0,
//                         loop: false
//                     }
//                 },
//             }
//         }
//     });
// }
// function barchartNSEintra() {

//     var ctx = document.getElementById("barchartNSEintra").getContext('2d');

//     const myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['9.34', '10.04', '10.34', '11.04', '11.34', '12.04', '12.34',],
//             datasets: [{
//                 label: 'Volume',
//                 data: [400000, 200000, 100000, 300000, 320000, 280000, 150000, 360000],
//                 backgroundColor: [
//                     '#80C2C3'
//                 ],
//                 borderColor: [
//                     '#80C2C3'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             scales: {
//                 x: {
//                     beginAtZero: false,
//                     grid: {
//                         display: false
//                     }
//                 },
//                 y: {
//                     beginAtZero: false,
//                     ticks: {
//                         stepSize: 200000
//                     }
//                 },
//                 animations: {
//                     tension: {
//                         duration: 1000,
//                         easing: 'linear',
//                         from: 1,
//                         to: 0,
//                         loop: false
//                     }
//                 },
//             }
//         }
//     });
// }
// function barchartBSEeod() {

//     var ctx = document.getElementById("barchartBSEeod").getContext('2d');

//     const myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['9.34', '10.04', '10.34', '11.04', '11.34', '12.04', '12.34',],
//             datasets: [{
//                 label: 'Volume',
//                 data: [400000, 200000, 100000, 300000, 320000, 280000, 150000, 360000],
//                 backgroundColor: [
//                     '#80C2C3'
//                 ],
//                 borderColor: [
//                     '#80C2C3'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             scales: {
//                 x: {
//                     grid: {
//                         display: false
//                     }
//                 },
//                 y: {
//                     beginAtZero: true,
//                     ticks: {
//                         stepSize: 200000
//                     }
//                 },
//                 animations: {
//                     tension: {
//                         duration: 1000,
//                         easing: 'linear',
//                         from: 1,
//                         to: 0,
//                         loop: false
//                     }
//                 },
//             }
//         }
//     });
// }
// function barchartBSEintra() {

//     var ctx = document.getElementById("barchartBSEintra").getContext('2d');

//     const myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: ['9.34', '10.04', '10.34', '11.04', '11.34', '12.04', '12.34',],
//             datasets: [{
//                 label: 'Volume',
//                 data: [400000, 200000, 100000, 300000, 320000, 280000, 150000, 360000],
//                 backgroundColor: [
//                     '#80C2C3'
//                 ],
//                 borderColor: [
//                     '#80C2C3'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             scales: {
//                 x: {
//                     grid: {
//                         display: false
//                     }
//                 },
//                 y: {
//                     beginAtZero: true,
//                     ticks: {
//                         stepSize: 200000
//                     }
//                 },
//                 animations: {
//                     tension: {
//                         duration: 1000,
//                         easing: 'linear',
//                         from: 1,
//                         to: 0,
//                         loop: false
//                     }
//                 },
//             }
//         }
//     });
// }

function stockTab(){
    
        $('.tabs-navstock ul li').click(function(){

            var currentTabIndex = $(this).index();
            var tabsContainer = $(this).closest('.tabs-stock');
            var tabsNav = $(tabsContainer).children('.tabs-navstock').children('ul').children('li');
            var tabsContent = $(tabsContainer).children('.tabs-contentstock').children('.innerstock'); 
            
            $(tabsNav).removeClass('is-active');
            $(this).addClass('is-active');
            
            $(tabsContent).removeClass('is-active');
            $(tabsContent).eq(currentTabIndex).addClass('is-active');

            var activeFrameSrc =  $('.innerstock.is-active').find('.innerstock.is-active').find('iframe').attr('src');

            $('.innerstock.is-active').find('.innerstock.is-active').find('iframe').attr('src', activeFrameSrc);

            // $('#iframe')[0].contentWindow.location.reload(true);
            
          });
    
}

// function averageflip(){
//     var card = document.getElementById('averageflip');
//     document.getElementById('fliptoservices').addEventListener('click', function() {
//         card.classList.toggle('flipped');
//     }, false);
//     document.getElementById('fliptostocks').addEventListener('click', function() {
//         card.classList.toggle('flipped');
//     }, false);

// }