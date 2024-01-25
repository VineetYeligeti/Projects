var winWidth = $(window).width();
var winHeight = $(window).height();
var genderStatus = false;
var emplStatus = false;
var pincodeStauts = false;
let timerOn = true;
$(document).ready(function() {
    rangesliders();
    dob();
    nextclickbtn();
    getotp();
    RadioSelect();
    nextClick();
    ToggleBtn();
    Tnc();
    typeAmountComma();
    panvalidate();
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
    $('.panNumber').on('blur', function() {
        var error_div = $(this).parent().find('.error_message');
        var field_container = $(this).parent();
        //field_container.removeClass('error');
        if (!$.pan_validation($(this).val())) {
            error_div.html('Please enter valid PAN Number');
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
    $(document).on("keyup",".otp-form input[name='opt-field[]']",function(){
        js_otp();
    })
});

function panvalidate(){
    $('.panNumber').bind('keypress', function (e) {
        var regex;
        if ((this.selectionStart >=0 && this.selectionStart <= 4)) {
            regex = new RegExp("^[a-zA-Z]+$");
        }
    
        if ((this.selectionStart > 4 && this.selectionStart <= 8)) {
            regex = new RegExp("^[0-9]+$");
        }
        if ((this.selectionStart == 9)) {
            regex = new RegExp("^[a-zA-Z]+$");
        }
        var key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
        //var key = $(this).val();
        if (this.selectionStart < 10) {
            if (!regex.test(key)) {
                e.preventDefault();
                return false;
            }
        } 
    });
    // $('.panNumber').focusout(function () {
    //     var res = $(this).val();
    //     $this = $(this);
    //     panNumCheck(res, $this);
    // });
}

function rangesliders() {
    $('.range-control').each(function() {
        $(this).rangeslider({
            polyfill: false,
        }).on('input', function() {
            $(this).parents('.range-wrap').find('.form_control').val(this.value).trigger('keyup');
            $(this).parents('.range-wrap').find('.input-wrap').removeClass('error');
        });
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

            
        }

    });
}
function dob(){
    var date21 = new Date(),
    ageSelfEmp = 80,
    empRetireAge = ageSelfEmp,
    d21mm = date21.getMonth() + 1,
    d21yy = date21.getFullYear() - 22,
    defDate = date21.getDate() + '/' + d21mm + '/' + d21yy;
    //console.log(defDate);
    $('#loanDatepick').datepicker({
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd/mm/yy',
        maxDate: "-18Y",
        minDate: "-70y",
        yearRange: "-80:+0",
        //yearRange: "-" + parseInt(empRetireAge - 2) + ":+0",
        defaultDate: defDate,
        setDate: defDate,
        // onClose: function(dateText, inst) { 
        //     $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDate));
        // },
        onSelect: function() {
            //$('#loanSecrion2, #loanSecrion3').hide();
            //$('#ui-datepicker-div table td a').attr('href', 'javascript:;');
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
     $('#loanDatepick').on('blur', function() {
        if ($(this).val() == '') {
            $(this).parent().find('.error_message').css('display', 'block');
        } else {
            $(this).parent().find('.error_message').css('display', 'none');
        }
    });
}

function nextclickbtn(){
    $("#backbtn").on('click', function() {
        $(".cibilwrapstep2").fadeOut(function(){
            $(".cibilwrapstep1").fadeIn();
        });
    });
    $("#backbtn2,.changenum").on('click', function() {
        $('.otp-form input').val('');
        $(".cibilwrapstep3").fadeOut(function(){
            $(".cibilwrapstep2").fadeIn();
        });
        timerOn = false
    });
    $(".resendotp").on('click', function() {
        $('.otp-form input').val('');
        $(this).hide();
        $('#timer').fadeIn();
        timerOn = true
        timer(180);
    });
}

function getotp(){
    $(".otp-form *:input[type!=hidden]:first").focus();
	let otp_fields = $(".otp-form .otp-field"),
		otp_value_field = $(".otp-form .otp-value");
	otp_fields
    .on("input", function (e) {
        $(this).val(
            $(this)
                .val()
                .replace(/[^0-9]/g, "")
        );
        let opt_value = "";
        otp_fields.each(function () {
            let field_value = $(this).val();
            if (field_value != "") opt_value += field_value;
        });
        otp_value_field.val(opt_value);
    })
    .on("keyup", function (e) {
        let key = e.keyCode || e.charCode;
        if (key == 8 || key == 46 || key == 37 || key == 40) {
            // Backspace or Delete or Left Arrow or Down Arrow
            $(this).prev().focus();
        } else if (key == 38 || key == 39 || $(this).val() != "") {
            // Right Arrow or Top Arrow or Value not empty
            $(this).next().focus();
        }
    })
}

function RadioSelect() {
    $(document).on('click','.radio input:radio',function(){
        $(this).parents('.radio').addClass('active').siblings().removeClass('active');
    });
}

function nextClick() {
    $(document).on('click', '.formValidate', function() {
        $(this).parents(".cibilwrapbox").find('.required').trigger('blur');
        
        if($(this).attr('id') === 'generateotp'){
            if($('.loanToggleBtn[name="interestedloan"]:checked').length === 0){
                $('.loanToggleBtn').parents('.loantype').find('.error_message').show();
            }
            if($('#acknowledge[name="acknowledge"]:checked').length === 0){
                $('#acknowledge').parents('.tnccheckbox').find('.error_message').show();
            }
        }
        if($(this).attr('id') === 'proceed'){
            js_otp();
            if($('#acknowledgeotp[name="acknowledgeotp"]:checked').length === 0){
                $('#acknowledgeotp').parents('.tnccheckbox').find('.error_message').show();
            }
        }
        var errrlength = $(this).parents(".cibilwrapbox").find('.error_message:visible').length;
         
        if (errrlength === 0) {
            if($(this).attr('id') === 'nextslide'){
                $(".cibilwrapstep1").fadeOut(function(){
                    $(".cibilwrapstep2").fadeIn();
                }); 
            }
            if($(this).attr('id') === 'generateotp'){

                $(".cibilwrapstep2").fadeOut(function(){
                    $(".cibilwrapstep3").fadeIn();
                    focusInput();
                }); 
                $('#timer').fadeIn();
                    timerOn = true;
                    timer(180);
                
            }
            if($(this).attr('id') === 'proceed'){
                $(".creditWrapper").fadeOut(function(){
                    $(".cibilscorecheck").fadeIn();
                    setTimeout(function() {
                        CibilPercent();
                    },500);
                });
            }
        } 
         
    });
}

function ToggleBtn() {
    $('.loantype .loanToggleBtn[name="interestedloan"]').on('change', function() {
        if ($(this).is(':checked')) {
            $('.loanType .loanToggleBtn[name="interestedloan"]').prop('checked', false)
            $('.loanAmtBlock').show();
            $(this).prop('checked', true);
            $('.loantype .error_message').hide();
        } else {
            $('.loanAmtBlock').hide();
            $('.loantype .error_message').hide();
            
        }
    });
    $(document).on('blur', '.loanAmtInput', function() {
        $(this).val($(this).val().replace(/,/g, ''));
        var loanAmt = $(this).val();
        console.log(loanAmt)
        if ((!loanAmt.length) || (loanAmt < 300000 || loanAmt > 100000000)) {
            $('.loanAmtError').css('display', 'block');
        } else {
            $('.loanAmtError').css('display', 'none');
        }
        if (loanAmt < 300000) {
            $(".loanAmtInput").val("300000");
        }
        if (loanAmt > 100000000) {
            $(".loanAmtInput").val("100000000");
        }
        // $(this).val(numberFormatter($(this).val()));
    });
}

function Tnc() {
    $('#acknowledge[name="acknowledge"]').on('change', function() {
        if ($(this).is(':checked')) {
            $('.tnccheckbox .error_message').hide();
        } else {
           $('.tnccheckbox .error_message').show();
        }
    });
    $('#acknowledgeotp[name="acknowledgeotp"]').on('change', function() {
        if ($(this).is(':checked')) {
            $('.tnccheckbox .error_message').hide();
        } else {
           $('.tnccheckbox .error_message').show();
        }
    });
}
function js_otp() {
    var InputLength = $(".otp-form input[name='opt-field[]']").length;
    var OtpvalLength = $("#optvalue").val().length;
    if(InputLength === OtpvalLength){
        $('.formwrapotp .error_message').hide();
    }else{
        $('.formwrapotp .error_message').show();
    }
}
 
 function CibilPercent() {
    let CIBILscore = $('#CIBILscore').val();
    
    let CibilPercent = (parseInt(CIBILscore) - 300) * 100 / 600;
    $('#ProgressThumb').text(CIBILscore);
    
    $('#ProgressThumb').css('left',CibilPercent + "%");

    switch (true) {
        case (CIBILscore < 300):
            $('#ProgressThumb').css('display','none');
            $('.colorrange').css('color','#E14028');
            $('.colorrange').text(CIBILscore + ' is Very Poor');
        break;
        case (CIBILscore > 300 && CIBILscore <= 650 ):
            $('#ProgressThumb').css('background','#E14028');
            $('.colorrange').css('color','#E14028');
            $('.colorrange').text(CIBILscore + ' is Poor');
        break;
        case (CIBILscore > 650 && CIBILscore <= 700):
            $('#ProgressThumb').css('background','#f5d143');
            $('.colorrange').css('color','#f5d143');
            $('.colorrange').text(CIBILscore + ' is Fair');
        break;
        case (CIBILscore > 700 && CIBILscore <= 750):
            $('#ProgressThumb').css('background','#2ece72');
            $('.colorrange').css('color','#2ece72');
            $('.colorrange').text(CIBILscore + ' is Good');
        break;
        case (CIBILscore > 750):
            $('#ProgressThumb').css('background','#00b56c');
            $('.colorrange').css('color','#00b56c');
            $('.colorrange').text(CIBILscore + ' is Excellent');
        break;
    }

 }

 function typeAmountComma() {
    $('.comma').keyup(function() {
        var value = $(this).val();
        var newvalue = value.replace(/,/g, '');
        var valuewithcomma = Number(newvalue).toLocaleString('en-IN');
        $(this).val(valuewithcomma);
    });
}



function timer(remaining) {
  var m = Math.floor(remaining / 60);
  var s = remaining % 60;
  
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  document.getElementById('timer').innerHTML = m + ':' + s;
  remaining -= 1;
  
  if(remaining >= 0 && timerOn) {
    setTimeout(function() {
        timer(remaining);
    }, 1000);
    return;
  }

  if(!timerOn) {
    return;
  }
  
  $('#timer').hide();
  $('.resendotp').fadeIn();
}

function focusInput() {
    document.getElementById("input1").focus();
}
