var winWidth = $(window).width();
var winHeight = $(window).height();


$(document).ready(function() {
    doMoreTabs();
    EmpowerSlider();
    relateProdSlider();
    KnowMoreSlider();
    ProductSlider();
    tabs();
    rangesliders();
    nhlpieChart();

    typeAmountComma();
    nhdisplayDetails();
    nhresetAmount();
});



// Do more Micro loan Tabs Start
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
// Do more Micro loan Tabs End

// Empowering SLider
function EmpowerSlider() {
    $('.empoweringSlider').slick({
        slidesToShow: 2,
        initialSlide: 2,
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: false,
        autoplaySpeed: 5000,
        autoplay: true,
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

// Micro loan Related products start
function relateProdSlider(){
    $('.relatedProductsSlider').slick({
        slidesToShow: 3,
        arrows: false,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        centerPadding: 0,
        cssEase: 'linear',
        lazyLoad: 'ondemand',
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    autoplay: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    centerMode: false,
                    centerPadding: 10,
                }
            }
        ]
    });
}
// Micro loan Related products End


// Know More about Micro loan Slider Start
 function KnowMoreSlider(){
    $('.KnowMoreSlider').slick({
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        dots: false,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
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
// Know More about Micro loan Slider End


// Explore Other Product Start
function ProductSlider() {
    $(window).on('load', function () {
        if ($(window).width() < 992) {
            $('.prodSlick').slick({
                slidesToShow: 1,
                slidesToScroll:1,
                arrows: true,
                dots: false,
                infinite: true,
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
    $(document).on('click', '.service-list li', function() {
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

            nhdisplayDetails();
        })
    });


    $('.form_control').on("input", function() {
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

            nhdisplayDetails();
        }

    });

}

var P = parseInt($('#nhloan-Requirement-input').val().replace(/,/g, ""));
var R = 24;
var N = parseInt($('#nhloan-Tenure-input').val().replace(/,/g, ""));
var nhLoanmyChart;



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
    P = parseInt($('#nhloan-Requirement-input').val().replace(/,/g, ""));
    R = 24;
    N = parseInt($('#nhloan-Tenure-input').val().replace(/,/g, ""));

    let r = parseFloat(R) / 1200;
    let n = parseFloat(N);

    let num = parseFloat(P) * r * Math.pow(1 + r, n);
    let denom = Math.pow(1 + r, n) - 1;
    let emi = parseFloat(num) / parseFloat(denom);
    // emi = emi.toFixed(0);
    let payabaleInterest = calculateLoanDetails(P, r, emi);

    let opts = '{style:"currency", currency: "INR"}';

    document.querySelector("#nhlemiAmt").innerText =
        parseInt(emi).toLocaleString("en-US", opts) + "/-";

    document.querySelector("#nhlloanAmount").innerText =
        parseInt(P).toLocaleString("en-US", opts) + "/-";

    document.querySelector("#nhlinterestAmount").innerText =
        parseInt(payabaleInterest).toLocaleString("en-US", opts) + "/-";

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
            label: 'My First Dataset',
            data: [5000000, 571446],
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

        $('#nhloan-Requirement-range').val(100000).trigger('change');
        //$('#nhinterest-rate-range').val(5).trigger('change');
        $('#nhloan-Tenure-range').val(1).trigger('change');

        P = parseInt($('#nhloan-Requirement-range').val());
        R = 24;
        N = parseInt($('#nhloan-Tenure-range').val());

        nhdisplayDetails();
    });
}