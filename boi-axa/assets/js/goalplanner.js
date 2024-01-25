var windowWidth = $(window).width();
var windowHeight = $(window).height();
/*-------------------Global Function ----------------*/
$(document).ready(function() {
    
    if ($('.goalPlanner').length) {
        $('.js_calc').trigger('click');
        goalplannercac();
        selectgoan();
        addComma();
        formValidations();
        removeactive();
        
    }
});
var fv;

function FV(PV,i,n){
var x=(1+i/100)
var FV=PV*(Math.pow(x,n))
return FV;
}
function Cal_FV(){
var pvalue= $(".js_moneyNeeded").val().replace(/,/g, '');
var interest=$(".js_inflation").val();

var num= $(".js_totalMonths").val();
var fvalue=FV(pvalue, interest, num);
fv=fvalue.toFixed(2);

}

// goal planner calculation and other js
function PMT(rate, nperiod, pv, fv, type) {
    if (!fv) fv = 0;
    if (!type) type = 0;

    if (rate == 0) return -(pv + fv) / nperiod;

    var pvif = Math.pow(1 + rate, nperiod);
    var pmt = rate / (pvif - 1) * -(pv * pvif + fv);

    if (type == 1) {
        pmt /= (1 + rate);
    }
    return pmt;
}

var expReturn, totalMonths, moneyNeeded, montlyInvest;

function goalplannercac() {
    $(document).on('click', '.js_calc', function(event) {
        Cal_FV();
        event.preventDefault();
        expReturn = $(".js_expReturn").val() / (12 * 100);
        totalMonths = $(".js_totalMonths").val() * 12;
        moneyNeeded = $(".js_moneyNeeded").val().replace(/,/g, '');       
        montlyInvest = PMT(expReturn, totalMonths, 0, -fv, 1);
        $(".js_monthlyInvest").text(inrFormat(Math.round(montlyInvest)));
        $(".js_totalInvest").text(inrFormat(Math.round(fv)));
    });
}

function selectgoan() {
    $(document).on('click', '.gp-btntiles', function(event) {
        showStartSip();
        event.preventDefault();
        var $this = $(this);
        $('.gp-btntiles').removeClass('active');
        $($this).addClass('active');
        var goal = $($this).find('h3').text();
        var goalimg = $($this).find('img').attr('src');
        $('.js_mygoal').text(goal);
        $('.js_mygoalimg').attr('src', goalimg);
        var scrImg = goalimg.split('.').slice(0, -1).join('.') + '1.png';
        $('.btntileswrapbottom .bottomimg').attr('src', scrImg);
        $(".js_moneyNeeded").val('1,00,000');
    });
}
// end goal planner calculation and other js

function addComma() {    
    $(document).on('focusin', '.js_addComma', function(event) {
       
        $(this).val($(this).val().replace(/,/g, ''));

    });

    $(document).on('focusout', '.js_addComma', function(event) {
        var removeComma = $(this).val().replace(/,/g, '');
        var formatted = inrFormat(removeComma);
        $(this).val(formatted);
    });

}

// for adding comma to numbers in INR format start
function inrFormat(val) {
    var x = val;
    x = x.toString();
    var afterPoint = '';
    if (x.indexOf('.') > 0) afterPoint = x.substring(x.indexOf('.'), x.length);
    x = Math.floor(x);
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != '') lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
    return res;
}

// for adding comma to numbers in INR format end


function showStartSip() {
    if (windowWidth < 768) {
        $("html,body").animate({
            scrollTop: $("#goalCalculator").offset().top - 150
        }, "slow");
        $('.goalCalculator').css('display','block');
    } 
}
function removeactive(){
    if (windowWidth < 768) {
        $('.gp-btntiles').removeClass('active');
    }
}