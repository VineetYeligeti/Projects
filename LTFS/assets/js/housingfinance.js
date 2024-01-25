var winWidth = $(window).width();
var winHeight = $(window).height();



$(document).ready(function() {
    tab();
    doMoreTabs();
    applyEase();

    if($('#eligibility').length){
        hLpieChart();
        displayDetails();
        hlresetAmount();
        btpieChart();
        btdisplayDetails();
        tupieChart();
        tudisplayDetails();
        nrpieChart();
        nrdisplayDetails();
        nrresetAmount();
        btresetAmount();
        turesetAmount();
    }
    
    rangesliders();
    typeAmountComma();
    $('.empoweringSlider .slick-track').css('transform','');

    setTimeout(function() {
        $('.empoweringSlider').slick({
          slidesToShow: 2,
          // slidesToScroll: 2,
          arrows: true,
          dots: false,
          infinite: false,
          centerMode: false,
          autoplaySpeed: 5000,
          autoplay: false,
          lazyLoad: 'ondemand',
          responsive: [
            {
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
      }, 1000); // Replace 1000 with the desired delay in milliseconds
      
    
});

// function empoweringSlider(){
    
// }
        
// $(window).on('resize', empoweringSlider);

$(window).on("load", function () {
    $('.empoweringSlider .slick-track').css('transform','');

    if($('#eligibility').length) {
        var P = $('#hloan-Requirement-input').val().replace(/,/g, "");
        var R = $('#hinterest-rate-input').val().replace(/,/g, "");
        var N = $('#hloan-Tenure-input').val().replace(/,/g, "");
        var hLoanmyChart;  
        
        
        var P = $('#btloan-Requirement-input').val().replace(/,/g, "");
        var R = $('#btinterest-rate-input').val().replace(/,/g, "");
        var N = $('#btloan-Tenure-input').val().replace(/,/g, "");
        var btLoanmyChart;

        var P = $('#tuloan-Requirement-input').val().replace(/,/g, "");
        var R = $('#tuinterest-rate-input').val().replace(/,/g, "");
        var N = $('#tuloan-Tenure-input').val().replace(/,/g, "");
        var tuLoanmyChart;    
        
        var P = $('#nrloan-Requirement-input').val().replace(/,/g, "");
        var R = $('#nrinterest-rate-input').val().replace(/,/g, "");
        var N = $('#nrloan-Tenure-input').val().replace(/,/g, "");
        var nrLoanmyChart;
    }
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
        hLoanmyChart.destroy();
        hLpieChart();
        btLoanmyChart.destroy();
        btpieChart();
        tuLoanmyChart.destroy();
        tupieChart();
        nrLoanmyChart.destroy();
        nrpieChart();

    });
}



// Do more home loan Tabs
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

// Apply With Ease

function applyEase() {
    $(document).on('click', '.applyEase-list li', function() {
        $('.applyEase-list li').removeClass('active');
        $(this).addClass('active');
        var clickInde = $(this).index();
        $('.tab-content .tab-panel').removeClass('active')
        $('.tab-content .tab-panel').eq(clickInde).addClass('active');
    });
}

// Ajinkya replica csalculator


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
                displayDetails();
                btdisplayDetails();
                tudisplayDetails();
                nrdisplayDetails();
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
                displayDetails();
                btdisplayDetails();
                tudisplayDetails();
                nrdisplayDetails();
            }
        }

    });

}

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
function displayDetails() {
    P = $('#hloan-Requirement-input').val().replace(/,/g, "");
    R = $('#hinterest-rate-input').val().replace(/,/g, "");
    N = $('#hloan-Tenure-input').val().replace(/,/g, "");

    let r = parseFloat(R) / 1200;
    let n = parseFloat(N);

    // *12;

    let num = parseFloat(P) * r * Math.pow(1 + r, n);
    let denom = Math.pow(1 + r, n) - 1;
    let emi = parseFloat(num) / parseFloat(denom);

    emi = emi.toFixed(0);

    let payabaleInterest = calculateLoanDetails(P, r, emi);

    let opts = '{style:"currency", currency: "INR"}';

    document.querySelector("#hlemiAmt").innerText = 
        parseFloat(emi).toLocaleString("en-IN", opts) + "/-";

    document.querySelector("#hlloanAmount").innerText = "₹ " +
        parseInt(P).toLocaleString("en-IN", opts) + "/-";

    document.querySelector("#hlinterestAmount").innerText = "₹ " +
        parseInt(payabaleInterest).toLocaleString("en-IN", opts) + "/-";

    hLoanmyChart.data.datasets[0].data[0] = P;
    hLoanmyChart.data.datasets[0].data[1] = payabaleInterest;
    hLoanmyChart.update();
}

function hLpieChart() {
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
            data: [2000000, 221554 ],
            backgroundColor: [
                '#00ADEF',
                '#FFFFFF',
            ],
            hoverOffset: 0,
            borderWidth: 0
        }]
    };


    const ctx = document.getElementById('hLoanmyChart').getContext('2d');
    hLoanmyChart = new Chart(ctx, {
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


// Ajinkya replica csalculator balance transfer loan




// calculate total Interest payable
function btcalculateLoanDetails(p, r, emi) {
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
function btdisplayDetails() {
    P = $('#btloan-Requirement-input').val().replace(/,/g, "");
    R = $('#btinterest-rate-input').val().replace(/,/g, "");
    N = $('#btloan-Tenure-input').val().replace(/,/g, "");
    let r = parseFloat(R) / 1200;
    let n = parseFloat(N);
    // *12;

    let num = parseFloat(P) * r * Math.pow(1 + r, n);
    let denom = Math.pow(1 + r, n) - 1;
    let emi = parseFloat(num) / parseFloat(denom);
    // emi = emi.toFixed(0);
    let payabaleInterest = btcalculateLoanDetails(P, r, emi);

    let opts = '{style:"currency", currency: "INR"}';

    document.querySelector("#btemiAmt").innerText =
        parseInt(emi).toLocaleString("en-IN", opts) + "/-";

    document.querySelector("#btloanAmount").innerText = "₹ " +
        parseInt(P).toLocaleString("en-IN", opts) + "/-";

    document.querySelector("#btinterestAmount").innerText = "₹ " +
        parseInt(payabaleInterest).toLocaleString("en-IN", opts) + "/-";

    btLoanmyChart.data.datasets[0].data[0] = P;
    btLoanmyChart.data.datasets[0].data[1] = payabaleInterest;
    btLoanmyChart.update();
}

function btpieChart() {
    const getOrCreateLegendListbt = (chart, id) => {
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
            data: [2000000, 221554],
            backgroundColor: [
                '#00ADEF',
                '#FFFFFF',
            ],
            hoverOffset: 0,
            borderWidth: 0
        }]
    };


    const ctx = document.getElementById('btLoanmyChart').getContext('2d');
    btLoanmyChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            plugins: {
                htmlLegend: {
                    // ID of the container to put the legend in
                    containerID: 'btlegend-container',
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


// Ajinkya replica csalculator Top up Loan 





// calculate total Interest payable
function tucalculateLoanDetails(p, r, emi) {
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
function tudisplayDetails() {
    P = $('#tuloan-Requirement-input').val().replace(/,/g, "");
    R = $('#tuinterest-rate-input').val().replace(/,/g, "");
    N = $('#tuloan-Tenure-input').val().replace(/,/g, "");

    let r = parseFloat(R) / 1200;
    let n = parseFloat(N);
    // * 12
    let num = parseFloat(P) * r * Math.pow(1 + r, n);
    let denom = Math.pow(1 + r, n) - 1;
    let emi = parseFloat(num) / parseFloat(denom);
    // emi = emi.toFixed(0);
    let payabaleInterest = tucalculateLoanDetails(P, r, emi);

    let opts = '{style:"currency", currency: "INR"}';

    document.querySelector("#tuemiAmt").innerText = 
        parseInt(emi).toLocaleString("en-IN", opts) + "/-";

    document.querySelector("#tuloanAmount").innerText = "₹ " +
        parseInt(P).toLocaleString("en-IN", opts) + "/-";

    document.querySelector("#tuinterestAmount").innerText = "₹ " +
        parseInt(payabaleInterest).toLocaleString("en-IN", opts) + "/-";

    tuLoanmyChart.data.datasets[0].data[0] = P;
    tuLoanmyChart.data.datasets[0].data[1] = payabaleInterest;
    tuLoanmyChart.update();
}

function tupieChart() {
    const getOrCreateLegendListbt = (chart, id) => {
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
            data: [2000000, 251983],
            backgroundColor: [
                '#00ADEF',
                '#FFFFFF',
            ],
            hoverOffset: 0,
            borderWidth: 0
        }]
    };


    const ctx = document.getElementById('tuLoanmyChart').getContext('2d');
    tuLoanmyChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            plugins: {
                htmlLegend: {
                    // ID of the container to put the legend in
                    containerID: 'tulegend-container',
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

// Sanjivani replica csalculator Non Residential Property





// calculate total Interest payable
function nrcalculateLoanDetails(p, r, emi) {
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
function nrdisplayDetails() {
    P = $('#nrloan-Requirement-input').val().replace(/,/g, "");
    R = $('#nrinterest-rate-input').val().replace(/,/g, "");
    N = $('#nrloan-Tenure-input').val().replace(/,/g, "");
    let r = parseFloat(R) / 1200;
    let n = parseFloat(N);
    // * 12

    let num = parseFloat(P) * r * Math.pow(1 + r, n);
    let denom = Math.pow(1 + r, n) - 1;
    let emi = parseFloat(num) / parseFloat(denom);
    // emi = emi.toFixed(0);
    let payabaleInterest = nrcalculateLoanDetails(P, r, emi);

    let opts = '{style:"currency", currency: "INR"}';

    document.querySelector("#nremiAmt").innerText =
        parseInt(emi).toLocaleString("en-IN", opts) + "/-";

    document.querySelector("#nrloanAmount").innerText = "₹ " +
        parseInt(P).toLocaleString("en-IN", opts) + "/-";

    document.querySelector("#nrinterestAmount").innerText = "₹ " +
        parseInt(payabaleInterest).toLocaleString("en-IN", opts) + "/-";

    nrLoanmyChart.data.datasets[0].data[0] = P;
    nrLoanmyChart.data.datasets[0].data[1] = payabaleInterest;
    nrLoanmyChart.update();
}

function nrpieChart() {
    const getOrCreateLegendListbt = (chart, id) => {
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
            data: [2000000, 251983],
            backgroundColor: [
                '#00ADEF',
                '#FFFFFF',
            ],
            hoverOffset: 0,
            borderWidth: 0
        }]
    };


    const ctx = document.getElementById('nrLoanmyChart').getContext('2d');
    nrLoanmyChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            plugins: {
                htmlLegend: {
                    // ID of the container to put the legend in
                    containerID: 'nrlegend-container',
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


function hlresetAmount() {
    document.querySelector("#hlresetData").addEventListener("click", (event) => {
        // document.getElementById("loan-Requirement-input").value = '';
        // event.preventDefault();
        // R = 5000000;

        $('#hloan-Requirement-range').val(200000).trigger('input').trigger('change');
        $('#hinterest-rate-range').val(5).trigger('input').trigger('change');
        $('#hloan-Tenure-range').val(1).trigger('input').trigger('change');
        P = parseInt($('#hloan-Requirement-range').val());
        R = parseInt($('#hinterest-rate-range').val());
        N = parseInt($('#hloan-Tenure-range').val());

        displayDetails();
    });
}

function btresetAmount() {
    document.querySelector("#btresetData").addEventListener("click", (event) => {
        // document.getElementById("loan-Requirement-input").value = '';
        // event.preventDefault();
        // R = 5000000;

        $('#btloan-Requirement-range').val(200000).trigger('input').trigger('change');
        $('#btinterest-rate-range').val(5).trigger('input').trigger('change');
        $('#btloan-Tenure-range').val(1).trigger('input').trigger('change');
        P = parseInt($('#btloan-Requirement-range').val());
        R = parseInt($('#btinterest-rate-range').val());
        N = parseInt($('#btloan-Tenure-range').val());

        btdisplayDetails();
    });
}

function turesetAmount() {
    document.querySelector("#turesetData").addEventListener("click", (event) => {
        // document.getElementById("loan-Requirement-input").value = '';
        // event.preventDefault();
        // R = 5000000;

        $('#tuloan-Requirement-range').val(200000).trigger('input').trigger('change');
        $('#tuinterest-rate-range').val(5).trigger('input').trigger('change');
        $('#tuloan-Tenure-range').val(1).trigger('input').trigger('change');
        P = parseInt($('#tuloan-Requirement-range').val());
        R = parseInt($('#tuinterest-rate-range').val());
        N = parseInt($('#tuloan-Tenure-range').val());

        tudisplayDetails();
    });
}

function nrresetAmount() {
    document.querySelector("#nrresetData").addEventListener("click", (event) => {
        // document.getElementById("loan-Requirement-input").value = '';
        // event.preventDefault();
        // R = 5000000;

        $('#nrloan-Requirement-range').val(200000).trigger('input').trigger('change');
        $('#nrinterest-rate-range').val(5).trigger('input').trigger('change');
        $('#nrloan-Tenure-range').val(1).trigger('input').trigger('change');
        P = parseInt($('#nrloan-Requirement-range').val());
        R = parseInt($('#nrinterest-rate-range').val());
        N = parseInt($('#nrloan-Tenure-range').val());

        nrdisplayDetails();
    });
}