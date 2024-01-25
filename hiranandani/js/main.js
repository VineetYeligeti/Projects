// gsap.registerplugin('scrollTrigger')


$(document).ready(function () {
    $(".loader .clickMe").click(function (e) {
        $(".loader").slideUp();
        $(".mainDiv").show();

    });
    $('.logo img').addClass('active');


    // var $container = $('.storyTxt');
    // var $card = $('.moveTxt')
   
    //    $container.on("mousemove", function (e) {
           
    //        let xAxis = (window.innerWidth / 2 - e.clientX) / 25;
    //        let yAxis = (window.innerHeight / 2 - e.clientY) / 25;
           
    //        $card.css("transform", `translate3d(${xAxis}px, ${yAxis}px, 0)`);
           
    //        console.log(xAxis)
   
    //      });
       
    //      $container.on("mouseleave", function () {
    //        $card.css("transform", `rotateY(0deg) rotateX(0deg)`);
    //      });
   


    // ajinkya
    window.addEventListener('scroll', function(){

        scrollPos = this.scrollY;


        if(scrollPos >= 150){
            $('.logo').animate({
                transform: 'scale(.5)'})
            .addClass('animatee');
            $('.storyTxt img').show();
            $('.navBar').delay(400).fadeIn();

        }
        else{
            $('.logo').css('scale', '1')
            .removeClass('animatee');
            $('.storyTxt img').hide();
        
        }

        if(scrollPos >= 550){

            console.log(scrollPos);
            $('.landingSec').addClass('scalee');
            $('.project-type').addClass('show')
        }
        else{
            $('.landingSec').removeClass('scalee');
            
            $('.project-type').removeClass('show')

        }
    })
    // ajinkya
    


    // parallextest();

    // const zoomElement = document.querySelector(".landingSec");
    // let zoom = 1;
    // const ZOOM_SPEED = 0.5;

    // document.addEventListener("wheel", function (e) {
    //     console.log(zoom)
    //     if (zoom > 0.9) {
    //         if (e.deltaY > 0) {
    //             zoom += ZOOM_SPEED
    //             // zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;
    //         } else {
    //             // zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;
    //             zoom -= ZOOM_SPEED
    //         }
            
    //     }

    //     if (zoom > 1.5) {
    //         $('.logo').addClass('animatee')
    //     } else {
    //         $('.logo').removeClass('animatee')
    //     }

    //     if (zoom > 2) {
    //         $('.storyTxt img').show()
    //     } else {
    //         $('.storyTxt img').hide()
    //     }

    //     if (zoom < 1.5) {
    //         zoom = 1.5;
    //     }
    // });


    // const zoomElement2 = document.querySelector(".landingSec");

    // document.addEventListener("wheel", function (e) {

    //     if (zoom == 4) {
    //         $('.landingSec').addClass('scalee');
    //         setTimeout(function(){
    //             $('.landingSec').css('opacity','0');
    //             $('.project-type').fadeIn();
    //         },500)         
    //     }else if(zoom < 4){
    //         $('.landingSec').removeClass('scalee');
    //         $('.landingSec').css('opacity','1');           
    //     }


    // });




});

function parallextest(){
    
    // -------------------------------------------------------
    var rect = $('.lgo')[0].getBoundingClientRect();
    var mouse = { x: 0, y: 0, moved: false };

    $(".lgo").mousemove(function (e) {
        console.log(rect.left)
        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    // Ticker event will be called on every frame
    TweenLite.ticker.addEventListener('tick', function () {
        if (mouse.moved) {
            parallaxIt(".logo img", -300);
            // parallaxIt(".tile", -20);
        }
        mouse.moved = false;
    });

    function parallaxIt(target, movement) {
        TweenMax.to(target, 0.5, {

            x: (mouse.x - rect.width / 2) / rect.width * movement,
            y: (mouse.y - rect.height / 2) / rect.height * movement
        });
    }

    
    $(window).on('resize scroll', function () {
        rect = $('.loo')[0].getBoundingClientRect();
    })
}