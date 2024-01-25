/*Start Validation*/
var errors = false;
var onlyDigits = [];
for (i = 48; i < 58; i++)
    onlyDigits.push(i);
    
$('.inputField input').on('focus', function() {
    $(this).parent().removeClass('error');
    $(this).parents('.inputField').find('.errorText').hide();
});

$('.inputField input').on('blur', function() {
    $(this).each(function() {
        if ($(this).val() != "") {
            $(this).parents(".inputField").addClass('valid');
        }else{
            $(this).parents(".inputField").removeClass('valid');
        }
        
    });
    $(this).parent().find('.newtooltiptext').addClass('vhide').removeClass('vshow');
    $(this).parent().find('.topnewtooltiptext').addClass('vhide').removeClass('vshow');
});
$('.inputField input').on('focus', function() { 
    $(this).parent().find('.newtooltiptext').addClass('vshow');
    $(this).parent().find('.newtooltip').css('z-index','11');
    $(this).parent().find('.topnewtooltiptext').addClass('vshow');
    $(this).css('z-index','11');
});



$('.js-required').on('blur', function() {
    var error_div = $(this).parents('.inputField').find('.errorText');
    var field_container = $(this).parent();
    if (!$.empty_field_validation($(this).val())) {
        error_div.html('This field is required.');
        error_div.css('display', 'block');
        field_container.removeClass('valid').addClass('error');
        errors = true;
    } else {
        error_div.html('');
        error_div.css('display', 'none');
        field_container.removeClass('error');
        
        errors = false;
    }
});
$('.js-alphabateOnly').keyup(function() {
    $(this).val($(this).val().replace(/[^a-z A-Z]/g, ''));
    
});
$('.js-alphabateOnly').on('keypress', function(e) {
    var error_div = $(this).parents('.inputField').find('.errorText');
    var inputValue = e.which;
    if (!(inputValue >= 65 && inputValue <= 122 && inputValue != 8) && (inputValue != 32 && inputValue != 0 && inputValue != 8)) {
        error_div.html('Please use only alphabets.');
        error_div.css('display', 'block');
        e.preventDefault();
        return false;
    } else {
        error_div.html('');
        error_div.css('display', 'none');
    }
});


$(document).on('keypress', '.js-numbersOnly', function(e) {
    var error_div = $(this).parents('.inputField').find('.errorText');
    var k = e.which;
    if (e.which == 8 || e.which == 13) {
        return true;
    } else {
    if (!(onlyDigits.indexOf(parseInt(k)) >= 0)) {
        error_div.html('Please use numbers only.');
        error_div.css('display', 'block');
        return false;
    } else {
        error_div.html('');
        error_div.css('display', 'none');
    }
}
});

$(document).on('keypress', '.js-numbersWithDecimal', function(e) {
    var error_div = $(this).parents('.inputField').find('.errorText');
    var num = $(this);
    num.val(num.val().replace(/[^0-9\.]/g, ''));
    if ((e.which != 46 || num.val().indexOf('.') != -1) && (e.which < 48 || e.which > 57)) {
        error_div.html('Please use numbers only.');
        error_div.css('display', 'block');
        e.preventDefault();
    }
    else{
        error_div.html('');
        error_div.css('display', 'none');
    }
});


// $(document).on('keyup', '.js-numbersOnly', function(e) {
//     var error_div = $(this).parents('.inputField').find('.errorText');
//     var k = e.which;
//  if (e.which == 8) {
//         return true;
//     } else {
//     if (!(onlyDigits.indexOf(parseInt(k)) >= 0)) {
//         error_div.html('numbers only.');
//         error_div.css('display', 'block');
//         return false;
//     } else {
//         error_div.html('');
//         error_div.css('display', 'none');
//     }
// }
// });

// $('.js-email').on('blur', function() {
//     var error_div = $(this).parents('.inputField').find('.errorText');
//     var field_container = $(this).parent();
//     if (!$.email_validation($(this).val())) {
//         error_div.html('Invalid Email ID');
//         error_div.css('display', 'block');
//         field_container.removeClass('valid').addClass('error');
//         errors = true;
//     } else {
//         error_div.html('');
//         error_div.css('display', 'none');
//         field_container.removeClass('error');
//         errors = false;
//     }
// });

$('.js-email').on('blur', function() {
    var error_div = $(this).parents('.inputField').find('.errorText');
    var sEmail = $(this).val();
    var field_container = $(this).parent();
    if($.trim(sEmail).length == 0){
        error_div.html('This field is required');
    }
    else if (!$.email_validation(sEmail)) {
        error_div.html('Invalid Email ID');
        error_div.css('display', 'block');
        field_container.removeClass('valid').addClass('error');
        errors = true;
    } else {
        error_div.html('');
        error_div.css('display', 'none');
        field_container.removeClass('error');
        errors = false;
    }
});

$('#mobileNumber').on('blur', function() {
    var error_div = $(this).parents('.inputField').find('.errorText');
    var field_container = $(this).parent();
    if (!$.mobile_validation($(this).val())) {
        error_div.html('Please enter valid Mobile Number.');
        error_div.css('display', 'block');
        field_container.removeClass('valid').addClass('error');
        errors = true;
    } else {
        error_div.html('');
        error_div.css('display', 'none');
        field_container.removeClass('error');
        errors = false;
    }
});
$.mobile_validation = function(mobile) {
    var regex = /^[789]\d{9}$/;
    return regex.test(mobile);
}
$.empty_field_validation = function(field_value) {
    if (field_value.trim() == '') return false;
    return true;
}

$.email_validation = function(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
/*End Validation*/

$('.panNum').bind('keypress', function (e) {
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

$('.panNum').on('keyup', function () {
    var sln = $(this).val().length;
    if(sln == 10) {
        $(this).parent('.inputField').siblings().find('.nextBtn').removeClass('disabled');
    } else {
        $(this).parent('.inputField').siblings().find('.nextBtn').addClass('disabled');
    }
});

$('.panNum').focusout(function () {
    var res = $(this).val();
    $this = $(this);
    panNumCheck(res, $this);
});

function panNumCheck(res, $this) {
    var reggst = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
    if (reggst.test(res) && res != '' && res.length == 10) {
        return;
    }
    else {
        if (res.length > 0 && res.length < 10) {
            $this.parent().siblings('.errorText').html('Enter complete PAN number').show();
        }
    }
}


$.pan_validation = function(pan) {
    var regex = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
    return regex.test(pan);
};




$('.alphaNum').keyup(function(event) {
    $(this).val($(this).val().replace(/[^a-zA-Z0-9]/g, ''));
});




$('.js-alphaNumeric').on('keypress', function(e) {
    var error_div = $(this).parents('.inputField').find('.errorText');
    var inputValue = e.which;
    if ((inputValue >= 32 && inputValue <= 47) || (inputValue >= 58 && inputValue <= 64) || (inputValue >= 91 && inputValue <= 96) || (inputValue >= 123 && inputValue <= 126)) {
        error_div.html('Special characters are not allowed.');
        error_div.css('display', 'block');
        e.preventDefault();
        return false;
    } else {
        error_div.html('');
        error_div.css('display', 'none');
    }
});

// for alphanumeric validation start
$('.js-alphaNumeric').on('keyup', function(e) {
    var error_div = $(this).parents('.feilds').find('.errorText');
    var field_container = $(this).parent();
    var k = e.which;
    // console.log(k);
    var alphaNumRegex = /[^a-zA-Z0-9]/g;
    if (alphaNumRegex.test($(this).val())) {
        $(this).val($(this).val().replace(alphaNumRegex, ''));
        error_div.html('Special Characters are not allowed');
        error_div.css('display', 'block');
        field_container.removeClass('valid').addClass('error');
        errors = true;
    } else {
        error_div.html('');
        error_div.css('display', 'none');
        field_container.removeClass('error');
        errors = false;
    }
});
// for alphanumeric validation end
// 
$('.js-dateOnly').on('keyup', function(e) {
    var error_div = $(this).parents('.inputField').find('.errorText');
    var field_container = $(this).parent();
    var k = e.which;
    // console.log(k);
    var onlyDate = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
    if (onlyDate.test($(this).val())) {
        $(this).val($(this).val().replace(onlyDate, ''));
        error_div.html('Please select valid date');
        error_div.css('display', 'block');
        field_container.removeClass('valid').addClass('error');
        errors = true;
    } else {
        error_div.html('');
        error_div.css('display', 'none');
        field_container.removeClass('error');
        errors = false;
    }
});