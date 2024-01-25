$(document).ready(function() {
    tabs();
    viewfaq();

    $(document).on('click', '#faqSection .service-list-item', function() {
        $('html, body').animate({
            scrollTop: $("#faqSection").offset().top - 50
        }, 200);
    });
    $(function(){
        var hash = window.location.hash;
        // console.log('abc',hash)
        if(hash != ''){
            $('#faqSection ul.service-list a[href="' + hash + '"]').parents('#faqSection .service-list-item').trigger('click');
            $('html, body').animate({
                scrollTop: $("#faqSection").offset().top
        }, 200); 
        }   
    });
});


// Do more SME loan Tabs Start
function tabs() {
    $(document).on('click', '.service-list li', function() {
        // alert('tab');
        var indexNo = $(this).index();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').addClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').siblings().removeClass('active');

    });
}


function viewfaq() {
    $('.tab-panel').each(function(){

        var leng = $(this).find('.accordItem').length;
        if($(this).find('.accordItem').length < 6){
            $(this).find(".loadmore").hide();
            // console.log('less')
        }else{
            $(this).find(".accordItem").slice(5,leng).hide();
            $(this).find(".loadmore").show();
            // console.log(leng)

            $(".loadMore").on("click", function(e) {
                // e.preventDefault();
                var indexNo = $(this).index(".loadMore");
                // console.log(indexNo);
                
                $(this).parents('.tab-panel[data-tab=' + indexNo + ']').find(".accordItem:hidden").slice(0, 6).slideDown();
                if ($(this).parents('.tab-panel[data-tab=' + indexNo + ']').find(".accordItem:hidden").length === 0) {
                    $(this).css('display','none');
                }   
            });
        }
    })
}

