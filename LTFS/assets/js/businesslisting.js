var winWidth = $(window).width();
var winHeight = $(window).height();

$(document).ready(function () {
   tab();
});

// Product goals js start

$(window).on('load', function () {
    if (winWidth < 992) {
        $('.prodSlick').slick({
            slidesToShow: 1,
            slidesToScroll:1,
            arrows: true,
            dots: false,
            infinite: false,
            // centerMode:true,
            autoplaySpeed: 500,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll:1,
                        centerMode: true,
                        autoplaySpeed: 500,
                        autoplay: false,
                        centerPadding: 0,
                    }
                }
            ]
        });
    }
});
// Product goals js End

// At Your Service Tab Start
function tab() {
    $(document).on('click', '.service-list li', function () {
        // alert('tab');
        var indexNo = $(this).index();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').addClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').siblings().removeClass('active');
    });
}
// At Your Service Tab End


 