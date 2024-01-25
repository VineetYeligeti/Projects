
let timerOn = true;
$(document).ready(function() {
    sumbitform();
    otpPopUp();
    getotp();
    nextClick();
    

    $(document).on('click', '.dndformsubmit', function() {
        $('html, body').animate({
            scrollTop: $(".dnd").offset().top - 80
        }, 500);
    });
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

    // number validation with error message but not mandatory

    $("#notmandatory").on('change', function(){
        var error_div = $(this).parent().find('.error_message');
        var field_container = $(this).parent();
        var inputValue = $(this).val();
        if(isNaN(inputValue)){
            error_div.html('Please enter valid mobile number');
            error_div.css('display', 'block');
            field_container.addClass('error');
            errors = true;
            $(this).val('');
        } else {
            //error_div.html('');
            error_div.css('display', 'none');
            field_container.removeClass('error');
            errors = false;
            //this).parent().addClass('success')
        }
    })

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

    $(document).on("keyup",".otp-form input[name='opt-field[]']",function(){
        js_otp();
    })
})



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

// function sumbitform(){
//     $(document).on('click', '.dndformsubmit', function(){
//         $('.dndstepform').hide();
//         $('#thankYouBlock').show();
//         $('#thankYouBlock').parents('.dndform').addClass('thankyouPanel');
//     })
// }

function sumbitform(){
    $(document).on('click', '.dndformsubmit', function(){
        $('.dndstepform').hide();
        $('#thankYouBlock').show();
        $(this).parents('.dndform').addClass('thankyouPanel');
    })
}


function otpPopUp() {
    // open modal
  
    $(document).on("click", "#otpmodal", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var item = $(this).attr("data-modal");
      $(".otpmodal").fadeIn(300);
      $("body").addClass("no-scroll");
      /* Otp Timer and first input focus code */
      focusInput();
      $('.resendotptime').fadeIn();
        timerOn = true;
        timer(20);
    });
  
    // close modal
    $(document).on("click", ".close, .modal_backdrop", function () {
      $("body").removeClass("no-scroll");
      $(".otpmodal").fadeOut(500);
    });
  
    $(document).keydown(function (event) {
      if (event.keyCode == 27) {
        $(".close").trigger("click");
      }
    });
}

$(".resendotp").on('click', function() {
    // $(".otpmodal").fadeOut(500);
    $('.otp-form input').val('');
    $(this).hide();
    $('.resendotptime').fadeIn();
    timerOn = true
    timer(20);
});
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

function nextClick() {
    $(document).on('click', '.nextbtn', function() {
        if($(this).attr('id') === 'proceed'){
            js_otp();
        }
        var errrlength = $(this).parents(".otpblocks").find('.error_message:visible').length;
        if (errrlength === 0) {
           

            if($(this).attr('id') === 'proceed'){
                // $('.otp-form .error_message').hide();
                // $(".otpmodal").fadeOut(500);
            }

        } 
         
    });
} 


function js_otp() {
    var InputLength = $(".otp-form input[name='opt-field[]']").length;
    var OtpvalLength = $("#optvalue").val().length;
    $(document).on('click', '.nextbtn', function() {
        if(InputLength === OtpvalLength){
            $('.otp-form .error_message').hide();
        }else{
            $('.otp-form .error_message').show();
        }
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
    
    $('.resendotptime').hide();
    $('.resendotp').fadeIn();
  }

  function focusInput() {
    document.getElementById("input1").focus();
}