var winWidth = $(window).width();
var winHeight = $(window).height();


$(document).ready(function() {
    tabs();
    doMoreTabs();
    EmpowerSlider();
    KnowMoreSlider();
    relateProdSlider();
    ProductSlider();
    AgriSlider();
    if($('#eligibility').length){
    nhlpieChart();
    nhdisplayDetails();
    nhresetAmount();
    }
    typeAmountComma();
    
    $(document).on('click', '#ltptabs .service-list-item', function() {
        $('html, body').animate({
            scrollTop: $("#ltptabs").offset().top - 80
        }, 200);
    });
});



// Do more SME loan Tabs Start
function doMoreTabs() {
    const tabs = document.querySelectorAll(".your-home-tabs li");
    const tabsContent = document.querySelectorAll(".your-home-content");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabsContent.forEach((content) => {
                content.classList.remove("active");
            });
            tabs.forEach((tab) => {
                tab.classList.remove("active");
            });
            tabsContent[index].classList.add("active");
            tabs[index].classList.add("active");
        });
    });

}
// Do more SME loan Tabs End

// SME loan Related products start
 function relateProdSlider(){
    $('.relatedProductsSlider').slick({
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        centerPadding: 0,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    autoplay: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: false,
                    centerMode: false,
                    centerPadding: 10,
                }
            }
        ]
    });
}
//  SME loan Related products End

// Empowering SLider
function EmpowerSlider() {
$('.empoweringSlider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    centerMode: false,
    autoplaySpeed: 5000,
    autoplay: false,
    lazyLoad: 'ondemand',
    responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});
}
// Empowering SLider End


// Know More about SME loan Slider Start
 function KnowMoreSlider(){
    $('.KnowMoreSlider').slick({
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        centerPadding: 0,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: false,
                    centerPadding: 10,
                }
            }
        ]
    });
}
// Know More about SME loan Slider End


// Explore Other Product Start
function ProductSlider() {
    $(window).on('load', function () {
        if ($(window).width() < 992) {
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
}
// Explore Other Product End 


// 4-5 Tabs

function tabs() {
    $(document).on('click', '.service-list li', function(e) {
        //e.preventDefault();
        // alert('tab');
        var indexNo = $(this).index();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').addClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').siblings().removeClass('active');
        nhLoanmyChart.destroy();
        nhlpieChart()
    });
}



function rangesliders() {
    $('.range-control').each(function() {
        $(this).rangeslider({
            polyfill: false,

            onSlideEnd: function() {
                $('.card').find('.input-wrap').removeClass('focusState');
            }

        }).on('input', function() {
            $(this).parents('.range-wrap').find('.form_control').val(this.value).trigger('keyup');

            $(this).parents('.range-wrap').find('.input-wrap').removeClass('error');

            if($('.error').length == 0){
                nhdisplayDetails();
            }
        })
    });


    $('.form_control').on("blur", function() {
        var amtMin = parseFloat($(this).parents('.range-wrap').find('.range-control').attr('min'));
        var amtMax = parseFloat($(this).parents('.range-wrap').find('.range-control').attr('max'));
        var trigVal = $(this).val().replace(/,/g, "");


        if (trigVal > amtMax || trigVal == '') {
            $(this).parent().addClass('error');
            //$(this).parent().find('.error-text').show();

        } else if (trigVal < amtMin || trigVal == '') {
            $(this).parent().addClass('error');
            // $('.error-text').show();
        } else {
            $(this).parents('.range-wrap').find('.range-control').val(trigVal).trigger('change');

            $(this).parent().removeClass('error');

            if($('.error').length == 0){
                nhdisplayDetails();
            }
        }

    });

}


$(window).on("load", function () {
    if($('#eligibility').length) {
    var P = $('#nhloan-Requirement-input').val().replace(/,/g, "");
    var R = $('#nhinterest-rate-input').val().replace(/,/g, "");
    var N = $('#nhloan-Tenure-input').val().replace(/,/g, "");
    var nhLoanmyChart;
    rangesliders();
    }
})


// calculate total Interest payable
function calculateLoanDetails(p, r, emi) {
    /*
        p: principal
        r: rate of interest
        emi: monthly emi
    */
    let totalInterest = 0;
    let yearlyInterest = [];
    let yearPrincipal = [];
    let years = [];
    let year = 1;
    let [counter, principal, interes] = [0, 0, 0];
    while (p > 0) {
        let interest = parseFloat(p) * parseFloat(r);
        p = parseFloat(p) - (parseFloat(emi) - interest);
        totalInterest += interest;
        principal += parseFloat(emi) - interest;
        interes += interest;
        if (++counter == 12) {
            years.push(year++);
            yearlyInterest.push(parseInt(interes));
            yearPrincipal.push(parseInt(principal));
            counter = 0;
        }
    }
    return totalInterest;
}

// calculate details
function nhdisplayDetails() {
    P = $('#nhloan-Requirement-input').val().replace(/,/g, "");
    R = $('#nhinterest-rate-input').val().replace(/,/g, "");
    N = $('#nhloan-Tenure-input').val().replace(/,/g, "");

    let r = parseFloat(R) / 100 /12;
    let n = parseFloat(N);

    let num = parseFloat(P) * r * Math.pow(1 + r, n);
    let denom = Math.pow(1 + r, n) - 1;
    let emi = parseFloat(num) / parseFloat(denom);
    // emi = emi.toFixed(0);
    let payabaleInterest = calculateLoanDetails(P, r, emi);

    let opts = '{style:"currency", currency: "INR"}';

    document.querySelector("#nhlemiAmt").innerText =
        parseInt(emi).toLocaleString("en-IN", opts) + "/-";

    document.querySelector("#nhlloanAmount").innerText = "₹ " +
        parseInt(P).toLocaleString("en-IN", opts) + "/-";

    document.querySelector("#nhlinterestAmount").innerText = "₹ " +
        parseInt(payabaleInterest).toLocaleString("en-IN", opts) + "/-";

    nhLoanmyChart.data.datasets[0].data[0] = P;
    nhLoanmyChart.data.datasets[0].data[1] = payabaleInterest;
    nhLoanmyChart.update();
}

function nhlpieChart() {
    const getOrCreateLegendList = (chart, id) => {
        const legendContainer = document.getElementById(id);
        let listContainer = legendContainer.querySelector('ul');

        if (!listContainer) {
            listContainer = document.createElement('ul');
            listContainer.style.display = 'flex';
            listContainer.style.flexDirection = 'column';
            listContainer.style.margin = 0;
            listContainer.style.padding = 0;

            legendContainer.appendChild(listContainer);
        }

        return listContainer;
    };


    const data = {
        labels: [
            // 'Loan Amount:',
            // 'Interest Amount:'
        ],
        datasets: [{
            label: '',
            data: [100000, 1334],
            backgroundColor: [
                '#00ADEF',
                '#FFFFFF',
            ],
            hoverOffset: 0,
            borderWidth: 0
        }]
    };


    const ctx = document.getElementById('nhLoanmyChart').getContext('2d');
    nhLoanmyChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            plugins: {
                htmlLegend: {
                    // ID of the container to put the legend in
                    containerID: 'legend-container',
                },
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function(context, index) {
                            let label = context.dataset.label || '';
    
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(context.parsed);
                                
                            }
                            return label;
                        }
                    }
                }
            }
        },
        //plugins: [htmlLegendPlugin],
    });
}
 
function typeAmountComma() {
    $('.comma').keyup(function() {
        var value = $(this).val();
        var newvalue = value.replace(/,/g, '');
        var valuewithcomma = Number(newvalue).toLocaleString('en-IN');
        $(this).val(valuewithcomma);
    });
}

function nhresetAmount() {
    document.querySelector("#nhresetData").addEventListener("click", (event) => {
        // document.getElementById("loan-Requirement-input").value = '';
        // event.preventDefault();
        // R = 5000000;

        $('#nhloan-Requirement-range').val(100000).trigger('input').trigger('change');
        $('#nhinterest-rate-range').val(5).trigger('input').trigger('change');
        $('#nhloan-Tenure-range').val(1).trigger('input').trigger('change');

        P = parseInt($('#nhloan-Requirement-range').val());
        R = parseInt($('#nhinterest-rate-range').val());
        N = parseInt($('#nhloan-Tenure-range').val());

        nhdisplayDetails();
    });
}

function AgriSlider(){
    $('.agriSliderMain').slick({
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: false,
        centerPadding: 0,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    autoplay: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: false,
                    centerMode: false,
                    centerPadding: 10,
                }
            }
        ]
    });
}