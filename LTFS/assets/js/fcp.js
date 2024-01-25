$(document).ready(function() {
    lazyLoadImgs();
     hamburger();
});

$(window).on("load", function() {
    setTimeout(function() {
        $("#loader").fadeOut(500);
    }, 10);

});

$(window).resize(function() {
    
    if (winWidth < 992) {
    }

    if (winWidth < 768) {
    }
    
});



function Menu(){
    if ($(window).width() > 767) {
            $(window).scroll(function() {
        if($(window).scrollTop() >= 50) { 
            $('header').addClass('headmenu');
        }
        else{
            $('header').removeClass('headmenu')
        }
    });
}

if ($(window).width() < 991) {
    $('header').addClass('headmenu');   
}

$(document).on('click','.js-mobileMenu', function(){
    $(this).toggleClass('open');
    $('.nav-list').toggleClass('navaddbox');
   }); 
}

function hamburger(){
    $('.humburg-menu').click (function(){
        $(this).toggleClass('open');
        $('.nav-list').toggleClass('active');
        $(".cm-overlay").toggleClass('active');
        $(".search-wrap").toggleClass('active')
    });

}

