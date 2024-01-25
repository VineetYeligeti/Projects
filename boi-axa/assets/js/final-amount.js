var winHeight = $(window).height(), winWidth = $(window).width();

function calCTab() {
    $(".tabLink li a").click(function(e) {
        e.preventDefault(), $(".tabLink li a").removeClass("active"), $(this).addClass("active");
        var ind = $(this).index(".tabLink li a");
        $(".sipTabContentWrap .tabContent").hide(), $(".sipTabContentWrap .tabContent").eq(ind).show();
    });
}

function sipEmi() {
    var mia, dur, ror, calPow, result01, result02, R1 = $(".emiAmnt1"), R2 = $(".emiAmnt"), amt1 = $(".amount1"), amt2 = $(".amount2"), amt3 = $(".amount3");
    function calculateResult() {
        mia = parseFloat(amt1.val().replace(/,/g, "")), dur = 12 * amt2.val(), ror = amt3.val() / 1200, 
        calPow = Math.pow(1 + ror, dur) - 1, result01 = ror / calPow * mia / (1 + ror), 
        result02 = ror / calPow * mia, R1.html(thousand_separator(parseFloat(result01.toFixed()))), 
        R2.html(thousand_separator(parseFloat(result02.toFixed())));
    }
    function thousand_separator(nStr) {
        x = (nStr += "").split("."), x1 = x[0], x2 = 1 < x.length ? "." + x[1] : "";
        for (var rgx = /(\d+)(\d{3})/, z = 0, len = String(x1).length, num = parseInt(len / 2 - 1); rgx.test(x1) && (0 < z ? x1 = x1.replace(rgx, "$1,$2") : (x1 = x1.replace(rgx, "$1,$2"), 
        rgx = /(\d+)(\d{2})/), z++, 0 != --num); ) ;
        return x1 + x2;
    }
    amt1.keyup(function(evt) {
        var charCode = evt.which ? evt.which : event.keyCode;
        if (31 < charCode && (charCode < 48 || 57 < charCode) && (charCode < 96 || 105 < charCode)) return !1;
        calculateResult();
    }), amt1.blur(function(evt) {
        amt1.val(thousand_separator(amt1.val()));
    }), $(".amount1").keyup(function(evt) {
        amt1.val(), $(".mValue").html(thousand_separator(amt1.val())), calculateResult();
    }), $(".amount2").change(function(evt) {
        amt2.val(), calculateResult();
    }), $(".amount3").change(function(evt) {
        amt3.val(), calculateResult();
    }), calculateResult();
}

function investAmount() {
    investamt = parseFloat($(".Mamount1").val().replace(/,/g, "")), dur = 12 * $(".Mamount2").val(), 
    finalamt = investamt * dur, $(".inputValue").html(function(nStr) {
        x = (nStr += "").split("."), x1 = x[0], x2 = 1 < x.length ? "." + x[1] : "";
        var rgx = /(\d+)(\d{3})/, z = 0, len = String(x1).length, num = parseInt(len / 2 - 1);
        for (;rgx.test(x1) && (0 < z ? x1 = x1.replace(rgx, "$1,$2") : (x1 = x1.replace(rgx, "$1,$2"), 
        rgx = /(\d+)(\d{2})/), z++, 0 != --num); ) ;
        return x1 + x2;
    }(finalamt.toFixed())), emiAmt = $(".emiBlock .amount1").val(), $(".mValue").html(emiAmt);
}

function sipMaturity() {
    var mia, dur, ror, calPow, result01, result02, M1 = $(".finalamt1"), M2 = $(".maturitAmnt"), amt1 = $(".Mamount1"), amt2 = $(".Mamount2"), amt3 = $(".Mamount3");
    function calculateResult2() {
        mia = parseFloat(remove_comma(amt1.val())), dur = 12 * amt2.val(), ror = amt3.val() / 1200, 
        calPow = Math.pow(1 + ror, dur) - 1, result01 = calPow / ror * mia * (1 + ror), 
        result02 = calPow / ror * mia, M1.html(thousand_separator(parseFloat(result01.toFixed()))), 
        M2.html(thousand_separator(parseFloat(result02.toFixed())));
    }
    function thousand_separator(nStr) {
        x = (nStr += "").split("."), x1 = x[0], x2 = 1 < x.length ? "." + x[1] : "";
        for (var rgx = /(\d+)(\d{3})/, z = 0, len = String(x1).length, num = parseInt(len / 2 - 1); rgx.test(x1) && (0 < z ? x1 = x1.replace(rgx, "$1,$2") : (x1 = x1.replace(rgx, "$1,$2"), 
        rgx = /(\d+)(\d{2})/), z++, 0 != --num); ) ;
        return x1 + x2;
    }
    function remove_comma(v) {
        return v.replace(/,/g, "");
    }
    function investAmt() {
        investamt = parseFloat(remove_comma(amt1.val())), $(".inputValue").html(emiAmt), 
        finalamt = investamt * dur, console.log("finalamt"), $(".inputValue").html(thousand_separator(parseFloat(finalamt.toFixed())));
    }
    amt1.keyup(function(evt) {
        var charCode = evt.which ? evt.which : event.keyCode;
        if (31 < charCode && (charCode < 48 || 57 < charCode) && (charCode < 96 || 105 < charCode)) return !1;
        calculateResult2();
    }), amt1.blur(function(evt) {
        amt1.val(thousand_separator(amt1.val()));
    }), $(".Mamount1").keyup(function(evt) {
        amt1.val(), calculateResult2(), investAmt();
    }), $(".Mamount2").change(function(evt) {
        amt2.val(), calculateResult2(), investAmt();
    }), $(".Mamount3").change(function(evt) {
        amt3.val(), calculateResult2();
    }), calculateResult2();
}

$(document).ready(function() {
    calCTab(), investAmount(), sipEmi(), sipMaturity();
}), $(document).on("load", function() {
    investAmount();
});