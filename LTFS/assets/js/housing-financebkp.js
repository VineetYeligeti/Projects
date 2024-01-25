var winWidth = $(window).width();
var winHeight = $(window).height();

$(document).ready(function() {
    tab();
    producthomeTab();
    hFpieChart();
    loanRequirement();
    interestRate();
    loanTenure();
    rangesliders();
    typeAmountComma();
    displayDetails();
    resetAmount();

    //Home Banner Start
    $('.homeBannerSlider').slick({
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        centerPadding: 0,
        cssEase: 'linear',
    });

    // Empower SLider
    $('.empoweringSlider').slick({
        slidesToShow: 2,
        initialSlide: 2,
        arrows: true,
        dots: false,
        infinite: true,
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

});
// tab section
function tab() {
    $(document).on('click', '.service-list li', function() {
        // alert('tab');
        var indexNo = $(this).index();
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').addClass('active');
        $(this).parent('.service-list').next('.tab-cont').children('.tab-panel[data-tab=' + indexNo + ']').siblings().removeClass('active');
    });
}

$(window).on('load resize', function() {
    if ($(window).width() < 992) {
        $('.prodGoalWrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: true,
            // centerMode:true,
            autoplaySpeed: 500,
            autoplay: false,
            lazyLoad: 'ondemand',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    autoplaySpeed: 500,
                    autoplay: false,
                    centerPadding: 0,
                    lazyLoad: 'ondemand',

                }
            }]
        });
    }
});

$(window).on('load', function() {
    if ($(window).width() < 992) {
        $('.prodGoalWrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: true,
            // centerMode:true,
            autoplaySpeed: 500,
            autoplay: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    autoplaySpeed: 500,
                    autoplay: false,
                    centerPadding: 0,
                }
            }]
        });
    }
});
// Ajinkya

var P = $('#loan-Requirement-input').val().replace(/,/g, "");
var R = $('#interest-rate-input').val().replace(/,/g, "");
var N = $('#loan-Tenure-input').val().replace(/,/g, "");
var myChart;

function loanRequirement() {
    var amount = $('#loan-Requirement-input');
    var rangeslider = $('#loan-Requirement-range');
    rangeslider
        .rangeslider({
            polyfill: false,
            onSlide: function() {
                amount.trigger('keyup');
            },
            onSlideEnd: function() {
                amount.trigger('blur');
            },
        })
        .on('input', function() {
            amount[0].value = this.value;

        });

    amount.on('blur', function() {
        var amtMin = parseFloat(rangeslider.attr('min'));
        var amtMax = parseFloat(rangeslider.attr('max'));
        var trigVal = $(this).val().replace(/,/g, "");


        if (trigVal > amtMax || trigVal == '' || trigVal < amtMin) {
            $(this).parent().addClass('error');
            $(this).parent().find('.error-text').show();

        } else {
            rangeslider.val(trigVal).trigger('change');
            P = trigVal;

            displayDetails();
            $(this).parent().removeClass('error');
        }



    });
}

function interestRate() {
    var amount = $('#interest-rate-input');
    var rangeslider = $('#interest-rate-range');
    rangeslider
        .rangeslider({
            polyfill: false,
            onSlide: function() {
                amount.trigger('keyup');
            },
            onSlideEnd: function() {
                amount.trigger('blur');
            },
        })
        .on('input', function() {
            amount[0].value = this.value;
        });

    amount.on('blur', function() {

        var amtMin = parseFloat(rangeslider.attr('min'));
        var amtMax = parseFloat(rangeslider.attr('max'));
        var trigVal = $(this).val().replace(/,/g, "");


        if (trigVal > amtMax || trigVal == '') {
            $(this).parent().addClass('error');
            //$(this).parent().find('.error-text').show();

        } else if (trigVal < amtMin || trigVal == '') {
            $(this).parent().addClass('error');
            // $('.error-text').show();
        } else {
            rangeslider.val(trigVal).trigger('change');
            R = trigVal;

            displayDetails();
            $(this).parent().removeClass('error');
        }



    });
}

function loanTenure() {
    var amount = $('#loan-Tenure-input');
    var rangeslider = $('#loan-Tenure-range');

    rangeslider
        .rangeslider({
            polyfill: false,
            onSlide: function() {
                amount.trigger('keyup');
            },
            onSlideEnd: function() {
                amount.trigger('blur');
            },
        })
        .on('input', function() {
            amount[0].value = this.value;
        });

    amount.on('blur', function() {

        var amtMin = parseFloat(rangeslider.attr('min'));
        var amtMax = parseFloat(rangeslider.attr('max'));
        var trigVal = $(this).val().replace(/,/g, "");


        if (trigVal > amtMax || trigVal == '') {
            $(this).parent().addClass('error');
            //$(this).parent().find('.error-text').show();

        } else if (trigVal < amtMin || trigVal == '') {
            $(this).parent().addClass('error');
            // $('.error-text').show();
        } else {
            rangeslider.val(trigVal).trigger('change');
            N = trigVal;

            displayDetails();
            $(this).parent().removeClass('error');
        }



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

            displayDetails();
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

            displayDetails();
        }

    });

}


// calculate total Interest payable
function calculateLoanDetails(p, r, emi) {

    P = $('#loan-Requirement-input').val().replace(/,/g, "");
    R = $('#interest-rate-input').val().replace(/,/g, "");
    N = $('#loan-Tenure-input').val().replace(/,/g, "");
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
function displayDetails() {

    let r = parseFloat(R) / 1200;
    let n = parseFloat(N) * 12;

    let num = parseFloat(P) * r * Math.pow(1 + r, n);
    let denom = Math.pow(1 + r, n) - 1;
    let emi = parseFloat(num) / parseFloat(denom);
    emi = emi.toFixed(0);
    let payabaleInterest = calculateLoanDetails(P, r, emi);

    let opts = '{style:"currency", currency: "INR"}';

    document.querySelector("#emiAmt").innerText =
        parseInt(emi).toLocaleString("en-IN", opts) + "/-";

    document.querySelector("#loanAmount").innerText =
        parseInt(P).toLocaleString("en-IN", opts) + "/-";

    document.querySelector("#interestAmount").innerText =
        parseInt(payabaleInterest).toLocaleString("en-IN", opts) + "/-";

    myChart.data.datasets[0].data[0] = P;
    myChart.data.datasets[0].data[1] = payabaleInterest;
    myChart.update();
}

function hFpieChart() {
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
    const htmlLegendPlugin = {
        id: 'htmlLegend',
        afterUpdate(chart, args, options) {
            const ul = getOrCreateLegendList(chart, options.containerID);

            // Remove old legend items
            while (ul.firstChild) {
                ul.firstChild.remove();
            }

            // Reuse the built-in legendItems generator
            const items = chart.options.plugins.legend.labels.generateLabels(chart);

            items.forEach(item => {
                const li = document.createElement('li');
                li.style.alignItems = 'center';
                li.style.cursor = 'pointer';
                li.style.display = 'flex';
                li.style.marginLeft = '10px';

                li.onclick = () => {
                    const { type } = chart.config;
                    if (type === 'pie' || type === 'doughnut') {
                        // Pie and doughnut charts only have a single dataset and visibility is per item
                        chart.toggleDataVisibility(item.index);
                    } else {
                        chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
                    }
                    chart.update();
                };

                // Color box
                const boxSpan = document.createElement('span');
                boxSpan.style.background = item.fillStyle;
                boxSpan.style.borderColor = item.strokeStyle;
                boxSpan.style.borderWidth = item.lineWidth + 'px';
                boxSpan.style.display = 'inline-block';
                boxSpan.style.height = '30px';
                boxSpan.style.marginRight = '10px';
                boxSpan.style.width = '7px';

                // Text
                const textContainer = document.createElement('p');
                textContainer.style.color = item.fontColor;
                textContainer.style.margin = 0;
                textContainer.style.padding = 0;
                // textContainer.style.textDecoration = item.hidden ? 'line-through' : '';

                const text = document.createTextNode(item.text);
                const amt = document.createTextNode(P);
                textContainer.appendChild(text);

                console.log(amt)

                li.appendChild(boxSpan);
                li.appendChild(textContainer);
                ul.appendChild(li);
            });
        }
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


    const ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
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

//Refresh Values - Sanjivani

function resetAmount() {
    document.querySelector("#resetData").addEventListener("click", (event) => {
        // document.getElementById("loan-Requirement-input").value = '';
        // event.preventDefault();
        // R = 5000000;

        $('#loan-Requirement-range').val(500000).trigger('change');
        $('#interest-rate-range').val(5).trigger('change');
        $('#loan-Tenure-range').val(1).trigger('change');

        P = parseInt($('#loan-Requirement-range').val());
        R = parseInt($('#interest-rate-range').val());
        N = parseInt($('#loan-Tenure-range').val());

        displayDetails();
    });
}

// Report & Polices Tabs Start

function producthomeTab() {
    const tabs = document.querySelectorAll(".reportTabs li");
    const tabsContent = document.querySelectorAll(".reportPoliciesContent");

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
// Report & Polices Tabs End