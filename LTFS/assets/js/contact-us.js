$(document).ready(function() {
    tab();

    $(document).on('click', '#service a.contactclick', function() {
        $('html, body').animate({
            scrollTop: $("#locatecontact").offset().top - 10
        }, 200);
    });
   
})


function tab() {
    $(document).on('click', '.service-list li', function(e) {
        e.preventDefault();
        var indexNo = $(this).index();
        var targetScrollPosition = 100;
        $('html, body').animate({
            scrollTop: targetScrollPosition
        }, 500); 

        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').addClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').siblings().removeClass('active');
    });
}