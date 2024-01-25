function datepicker() {
    $("#to").datepicker({
        dateFormat: "dd/mm/yy",
        defaultDate: "+1w",
        changeMonth: !0,
        changeYear: !0,
        numberOfMonths: 1,
        ignoreReadonly: !0,
        maxDate: 0,
        yearRange: "-80:+0"
    }), $("#from").datepicker({
        dateFormat: "dd/mm/yy",
        defaultDate: "+1w",
        changeMonth: !0,
        changeYear: !0,
        numberOfMonths: 1,
        ignoreReadonly: !0,
        maxDate: 0,
        yearRange: "-80:+0"
    }).bind("change", function() {
        var minValue = $(this).val();
        (minValue = $.datepicker.parseDate("dd/mm/yy", minValue)).setDate(minValue.getDate()), 
        $("#to").datepicker("option", "minDate", minValue);
    });
}

$(window).on("load", function() {
    $(".communiqueCont").length && ($(".content").mCustomScrollbar({}).on("mouseenter", function() {
        $(this).find("iframe").css("pointer-events", "none");
    }).on("mouseup", function() {
        $(this).find(".mCSB_scrollTools_onDrag").length && setTimeout(function() {
            $(".content").trigger("mouseenter");
        }, 1);
    }), $(window).on("blur", function() {
        $(".content iframe").css("pointer-events", "auto");
    }).on("focus", function() {
        $(".content").trigger("mouseenter");
    }));
});