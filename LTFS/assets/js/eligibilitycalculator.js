var tenure, netIncome, calcMinus;
var grossIncome = 0,
        existingEMI = 0,
        additionalExpenses = 0;

$(document).ready(function() {
    date();
    typeAmountComma();
    dateOfBirthSlideValidation();
    rangesliders();
    resetAmount();
    CalculateEligibility();
    scrolltop();
    getACallBack();
    stepWizard();
    stepWizardback();

    $(window).scroll(function(){
        // $( "#loanDatepick" ).datepicker('hide');
        // $("#loanDatepick").blur();
    });
    setTimeout(function () {
        $('.dateBox .error_message').fadeOut(500);
    }, 10);

    var errors = false;
    var onlyDigits = [];
    for (i = 48; i < 58; i++)
        onlyDigits.push(i);

    $('.required').on('blur', function() {
        var error_div = $(this).parent().find('.error_message');
        var field_container = $(this).parent();
        if (!$.empty_field_validation($(this).val())) {
            // error_div.html('Please enter valid name');
            error_div.css('display', 'block');
            field_container.addClass('error');
            errors = true;
        } else {
            // error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error')
            errors = false;
        }
    });

    $('.alphabateOnly').keyup(function(event) {
        $(this).val($(this).val().replace(/[^a-z A-Z]/g, ''))
    });
    $('.alphabateOnly').keydown(function(event) {
        $(this).val($(this).val().replace(/[^a-z A-Z]/g, ''))
    });

    $('#mobileNumber').on('blur', function() {
        var error_div = $(this).parent().find('.error_message');
        var field_container = $(this).parent();
        if (!$.mobile_validation($(this).val())) {
            error_div.html('Please enter valid mobile number');
            error_div.css('display', 'block');
            field_container.addClass('error');
            errors = true;
        } else {
            //error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error');
            errors = false;
            //this).parent().addClass('success')
        }
        
    });

    $('.numbersOnly').keyup(function(event) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''))
    });
    $('.numbersOnly').keydown(function(event) {
        $(this).val($(this).val().replace(/[^0-9]/g, ''))
    });
    $('.numbersOnly').keypress(function(event) {
        var error_div = $(this).parent().find('.error_message');
        var k = event.which;
        var inputValue = event.which;
        if ((inputValue == 8)) {
            event.stopImmediatePropagation();
        } else {
            if (!(onlyDigits.indexOf(k) >= 0)) {
                error_div.html('Number only.');
                error_div.css('display', 'block');
                event.preventDefault();
            } else {
                // error_div.html('');
                error_div.css('display', 'none');
            }

        }

    });

    $('.email').on('blur', function() {
        var error_div = $(this).parent().find('.error_message');
        var field_container = $(this).parent();
        //field_container.removeClass('error');
        if (!$.email_validation($(this).val())) {
            error_div.html('Please enter valid email ID');
            error_div.css('display', 'block');
            field_container.addClass('error');
            errors = true;
        } else {
           // error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error');
            errors = false;
        }
    });
    $('.email').on('keyup', function() {
        var error_div = $(this).parent().find('.error_message');
        var field_container = $(this).parent();
        error_div.css('display', 'none');
    });


});

$.empty_field_validation = function(field_value) {
    if (field_value.trim() == '') return false;
    return true;
}

$.email_validation = function(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-]{2,20})+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$.mobile_validation = function(mobile) {
    var regex = /^[789]\d{9}$/;
    return regex.test(mobile);
}

// ------ date picker------ 
function date() {
    var date21 = new Date(),
        d21mm = date21.getMonth() + 1,
        d21yy = date21.getFullYear() - 18,
        defDate = date21.getDate() + '/' + d21mm + '/' + d21yy;

    $('#loanDatepick').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'yy/mm/dd',
        yearRange: "-80:+0",
        maxDate: 0,
        // yearRange: "-" + parseInt(empRetireAge - 2) + ":+0",
        defaultDate: defDate,
        setDate: defDate,
        onSelect: function() {
            var date = $(this).datepicker('getDate');
            $('.dateBox .error_message').hide();
            year = date.getFullYear();

        },
        beforeShow: function (input, inst) {
            var calendar = inst.dpDiv;
            datePickerInterval = setInterval(function () {
                calendar.position({
                    my: 'left top',
                    at: 'left bottom',
                    collision: 'none',
                    of: input
                });
            }, 10);
        },
    });
}


// ----- END ----- 

$(document).on('click', '#next2', function () {
        grossIncome = $('#grossIncome').val().replace(/\,/g, "");
        existingEMI = $('#existingEMI').val().replace(/\,/g, "");
        //additionalExpenses = $('#additionalExpenses').val().replace(/\,/g, ""),
        interest = $('#interestRate').val(),
        tenure = $('#loanTenure').val();
        //totalIncome = (grossIncome-existingEMI-additionalExpenses);

        netIncome = totalIncome(grossIncome, existingEMI, additionalExpenses);

        CalculateEligibility(netIncome, interest, tenure);

    if(!$('.error').is(':visible')){
        if (calcMinus == true) {
            $('#step2').hide();
            $('#head2').hide();
            $('#steppers').hide();
            $('#errorBlock').fadeIn();

            console.log('false')

        } else {
            

            $('#step2').hide();
            $('#step3').fadeIn();
            $('#head2').hide();
            $('#head3').fadeIn();

            console.log('true')
        }
    }    
    
});

function totalIncome(grossIncome, existingEMI, additionalExpenses) {
        //var inputNet = 
        var gr = parseInt(grossIncome),
            ei = parseInt(existingEMI),
            ai = parseInt(additionalExpenses);
        //console.log();
        return (gr - ei - ai);
    }

function dateOfBirthSlideValidation() {
    $(document).on('change', '.employementType input[name=incomeLoan]', function() {
        if ($('input[name=incomeLoan]:checked').length <= 0) {
            $('.employementType').find('.error_message').css('display', 'block');
        } else {
            $('.employementType').find('.error_message').css('display', 'none');
        }
    });

    $('.enterDateSec #loanDatepick').on('blur', function() {
        if ($(this).val() == '') {
            $(this).parent().find('.error_message').css('display', 'block');
        } else {
            $(this).parent().find('.error_message').css('display', 'none');
        }
    });
}


$(document).on('click', '#next', function() {
    $('#loanDatepick').trigger('blur');

    if(!$('.error_message').is(':visible')){
       
        year = new Date($('#loanDatepick').val())
        
    
        // var userinput = document.getElementById("loanDatepick").value;
        var dob = year
        //execute if the user entered a date
        //extract the year, month, and date from user date input  
        var dobYear = dob.getYear(); 
        var dobMonth = dob.getMonth();  
        var dobDate = dob.getDate();  
            
        //get the current date from the system  
        var now = new Date();  
        //extract the year, month, and date from current date  
        var currentYear = now.getYear();  
        var currentMonth = now.getMonth();  
        var currentDate = now.getDate();  
            
        //declare a variable to collect the age in year, month, and days  
        var age = {};  
        var ageString = "";  
        
        //get years  
        yearAge = currentYear - dobYear;  
            
        //get months  
        if (currentMonth >= dobMonth)  
            //get months when current month is greater  
            var monthAge = currentMonth - dobMonth;  
        else {  
            yearAge--;  
            var monthAge = 12 + currentMonth - dobMonth;  
        }  
        
        //get days  
        if (currentDate >= dobDate)  
            //get days when the current date is greater  
            var dateAge = currentDate - dobDate;  
        else {  
            monthAge--;  
            var dateAge = 31 + currentDate - dobDate;  
        
            if (monthAge < 0) {  
            monthAge = 11;  
            yearAge--;  
            }  
            
        }
        //group the age in a single variable  
        age = {  
            years: yearAge,  
            months: monthAge,  
            days: dateAge  
        };
          
        var Age = age.years;
        var Month = age.months;
        var Days = age.days;
       

        // var month_diff = Date.now() - year.getTime();
    
        // //convert the calculated difference in date format
        // var age_dt = new Date(month_diff); 
        
        // //extract year from date    
        // var utcYear = age_dt.getUTCFullYear();
        
        // //now calculate the age of the user
        // var yearAge = Math.abs(utcYear - 1970);
            
        // // console.log(year)
        // // var yearAge = (new Date()).getFullYear() - year;

             


            if ($("#self").is(':checked')) {

                if (Age >= 21 && Age < 70) {
                    $('#step1').hide();
                    $('#step2').fadeIn();
                    $('#head1').hide();
                    $('#head2').fadeIn();
                    $('#errorBlock').hide();
                    console.log(1)
                }
                else if(Age === 70){
                    if(Month > 0 || Days > 0){
                        $('#step1').hide();
                        $('#head1').hide();
                        $('#steppers').hide();
                        $('#errorBlock').fadeIn();
                        console.log(2)
                    }
                    else if(Month === 0 || Days === 0){
                        $('#step1').hide();
                        $('#step2').fadeIn();
                        $('#head1').hide();
                        $('#head2').fadeIn();
                        console.log(3)
                    }
                }
                else {
                    $('#step1').hide();
                    $('#head1').hide();
                    $('#steppers').hide();
                    $('#errorBlock').fadeIn();
                    console.log(4)
                }

            }
            
            if ($("#salaried").is(':checked')) {
                if (Age >= 21 && Age < 58) {
                    $('#step1').hide();
                    $('#step2').fadeIn();
                    $('#head1').hide();
                    $('#head2').fadeIn();
                }
                else if(Age === 58){
                    if(Month > 0 || Days > 0){
                        $('#step1').hide();
                        $('#head1').hide();
                        $('#steppers').hide();
                        $('#errorBlock').fadeIn();
                    }
                    else if(Month === 0 || Days === 0){
                        $('#step1').hide();
                        $('#step2').fadeIn();
                        $('#head1').hide();
                        $('#head2').fadeIn();
                    }
                }
                 else {
                    $('#step1').hide();
                    $('#head1').hide();
                    $('#steppers').hide();
                    $('#errorBlock').fadeIn();
                }
            }
    }
});


$(document).on('click', '#next3', function() {
    $('.required').trigger('blur');
    if ($())   
    
    if (!$('#step3 .error_message ').is(':visible')) {
        $('#step3').hide();
        $('#step4').fadeIn();
        $('#head3').hide();
        $('#head4').fadeIn();

        CalculateEligibility();
    } else {}
}); 



function rangesliders() {
    $('.range-control').each(function() {
        $(this).rangeslider({
            polyfill: false,

            onSlideEnd: function() {
                $('.card').find('.input-wrap').removeClass('focusState');
            }

        }).on('input', function() {
            $(this).parents('.range-wrap').find('.form_control').val(this.value).trigger('keyup');

            $(this).parents('.range-wrap').find('.inputField').removeClass('error');
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
        }

    });

}


function resetAmount() {
    $(".recalculate").on("click", function() {
        $('#thankYouBlock').hide();
        $('#errorBlock').hide();
        $('#failedBlock').hide();
        $('#step4').hide();
        $('#steppers').fadeIn();
        $('#step1').fadeIn();
        $('#head4').hide();
        $('#head1').fadeIn();

        $('.wizard-list > li:not(:first-child)').removeClass('active');
        $('.wizard-list > li').removeClass('visited');
        $('.wizard-bar').css('width', '0%');

        $('#loanDatepick').val('');
        $('.dateBox .error_message').hide();
        $('#firstname, #lastname, #emailid, #mobileNumber').val('');
        $('.inputField').removeClass('error');
        $('.inputField .error_message').hide();
        $('#incomeCampare').val(500000).trigger('change');
        $('#emiSlider').val(200000).trigger('change');
        $('.sec-wrap .inputField input').val('');
        $('.sec-wrap .inputField select').val('');
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


function CalculateEligibility(netIncome, interest, tenure) {
       
    tenure = $('#loanTenure').val().replace(/,/g, '') * 12;
    netIncome = $('#grossIncome').val().replace(/,/g, '');
    var emis = $('#existingEMI').val().replace(/,/g, '');
    var roi = ($('#interestRate').val() / 100) /12;  // 8.65 / 1200;
    var pmt =(PMT(roi, tenure, -100000));//(PMT(roi, tenure, -netincome));
    var elg = (Eligibility(netIncome, emis, pmt));
    var emi = pmt * elg;
    if (elg < 1) {
        calcMinus = true
        //$('#loanSecrion3').hide();
    } else {
        calcMinus = false
    }
    $("#emiAmount").html(numberFormatter(Math.round(emi)));

    
    $("#monthEmi").html(Math.round(emi).toLocaleString('en-IN'));

    $("#eligibleLoan").html(Math.round(elg * 100000).toLocaleString('en-IN'));
    $("#rateOfIntOutput").html($('#interestRate').val());

}

function PMT(rate, nper, pv, fv, type) {
       
    if (!fv) fv = 0;
    if (!type) type = 0;

    if (rate == 0) return -(pv + fv) / nper;

    var pvif = Math.pow(1 + rate, nper);
    var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

    if (type == 1) {
        pmt /= (1 + rate);
    };
    return pmt;
}

function Eligibility(NetAdjIncome, emis, pmt) {
       
    var appFOIR;
    var FOIR20000Less = 50 ;
    var FOIR20000Per = 60 ;
    var FOIR100000Per = 65 ;
    var FOIRLess100000Per = 70 ;


    if ($('#self').is(':checked')) {
        appFOIR =FOIRLess100000Per;

        //t = (r = 70 * n / 100) / calculateEMI(1e5, interest, tenure) * 1e5;
    } else {
        // t = (r = (
        //         //This for is less than 25000 with 50% 
        //         n = parseInt(n, 10)) <= 25000 ? 50 * n / 100 :
        //     //This for is between 25000 to 50000 with 60% 
        //     n > 25001 && n <= 50000 ? 60 * n / 100 :
        //     //This for is between 50000 to 125000 with 65%
        //     n > 50001 && n <= 125000 ? 65 * n / 100 :
        //     //This for is more than 125000 with 70% 
        //     70 * n / 100) / calculateEMI(1e5, interest, tenure) * 1e5;

        if (NetAdjIncome <= 25000)
            appFOIR = FOIR20000Less;
        else if (NetAdjIncome <= 50000)
        appFOIR = FOIR20000Per;
    else if (NetAdjIncome <= 125000)
        appFOIR = FOIR100000Per;    
    else if (NetAdjIncome > 125000)
        appFOIR =FOIRLess100000Per;
    else
        appFOIR = 0;

    }

    //alert(appFOIR)
    return ((NetAdjIncome * (appFOIR/100)) - emis) / pmt;
}


$(document).on('input', '#tenureSlider', function(){
    CalculateEligibility(netIncome, $('#interestRate').val(), $('#loanTenure').val());
})

$(document).on('input', '#rateOfInterest', function(){
    CalculateEligibility(netIncome, $('#interestRate').val(), $('#loanTenure').val());
})

function getACallBack(){
    $(document).on('click', '.getACallBack', function(){
        $('#head4').hide();
        $('#steppers').hide();
        $('#step4').hide();
        $('#thankYouBlock').fadeIn();
    })
}

function stepWizard(){
    $(document).on('click', '.nextbtn', function(){
        if($('#head2').is(':visible')){
            $('.wizard-list > li:nth-of-type(2)').addClass('active');
            $('.wizard-bar').css('width', '35%');
            $('.wizard-list > li:first-child').addClass('visited');
        }

        if($('#head3').is(':visible')){
            $('.wizard-list > li:nth-of-type(3)').addClass('active');
            $('.wizard-bar').css('width', '65%');
            $('.wizard-list > li:nth-of-type(2)').addClass('visited');
        }

        if($('#head4').is(':visible')){
            $('.wizard-list > li:nth-of-type(4)').addClass('active');
            $('.wizard-bar').css('width', '100%');
            $('.wizard-list > li:nth-of-type(3)').addClass('visited');
        }
    })
}


function stepWizardback(){
    $("#backbtn").on('click', function() {
        $("#step2").fadeOut(function(){
            $("#step1").fadeIn();
            $("#head1").fadeIn();
            $("#head2").hide();
            $("#head3").hide();
            $('.wizard-bar').css('width', '0%');
            $('.wizard-list > li:nth-of-type(2)').removeClass('active');            
            $('.wizard-list > li:first-child').removeClass('visited');
            $('.wizard-list > li:nth-of-type(3)').removeClass('active');
            $('.wizard-list > li:nth-of-type(2)').removeClass('visited');
        });
    });
    $("#backbtn2").on('click', function() {
        $("#step3").fadeOut(function(){
            $("#step2").fadeIn();
            $("#head1").hide();
            $("#head3").hide();
            $("#head2").fadeIn();
            $('.wizard-list > li:nth-of-type(3)').removeClass('active');
            $('.wizard-bar').css('width', '35%');
            $('.wizard-list > li:nth-of-type(2)').removeClass('visited');
            $('.wizard-list > li:nth-of-type(3)').removeClass('visited');
        });
    });
}
function scrolltop(){
$(document).on('click', '.loan-stepper-banner .btn-default', function(){
    $('html, body').animate({
        scrollTop: $(".loan-stepper-banner").offset().top - 50
    }, 500);
})
}

function numberFormatter(n) {
    var r = "",
        t, i;
    return 0 < (n = n.toString()).indexOf(".") && (r = n.substring(n.indexOf("."), n.length)), t = (n = (n = Math.floor(n)).toString()).substring(n.length - 3), i = n.substring(0, n.length - 3), "" != i && (t = "," + t), i.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + t + r
}