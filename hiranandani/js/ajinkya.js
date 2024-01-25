window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$(document).ready(function () {
//  var $container = $('.project-type');
//  var $card = $('.move');
//  var $pics = $('.movePic');


//     $container.on("mousemove", function (e) {
        
//         let xAxis = (window.innerWidth / 2 - e.clientX) / 30;
//         let yAxis = (window.innerHeight / 2 - e.clientY) / 30;

//         let picXAxis = (window.innerWidth / 2 - e.clientX) / 8
//         let picYAxis = (window.innerHeight / 2 - e.clientY) / 8
        
//         $card.css("transform", `translate3d(${xAxis}px, ${yAxis}px, 0)`);
        
//         $pics.css("transform", `translate3d(${picXAxis}px, ${picYAxis}px, 0)`);
//         console.log(xAxis)

//       });
    
//       $container.on("mouseleave", function () {
//         $card.css("transform", `rotateY(0deg) rotateX(0deg)`);
//       });


var rect = $('body')[0].getBoundingClientRect();
    var mouse = { x: 0, y: 0, moved: false };

    $("body").mousemove(function (e) {
        console.log(rect.left)
        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    // Ticker event will be called on every frame
    TweenLite.ticker.addEventListener('tick', function () {
        if (mouse.moved) {
            parallaxIt(".move", 80);
            parallaxIt(".movePic", -100);
            parallaxIt(".moveB", 15);
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

});

$(document).ready(function(){
    $('.pic-3').click(function(){
        $('.project-type').addClass('scaleOut');
        $('.luxuryHomes').addClass('scaleIn')
    })
})

