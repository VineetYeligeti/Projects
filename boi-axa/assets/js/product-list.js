function productHeight() {
    if (767 < windowWidth) {
        var maxHeight = 0;
        $(".productList").each(function() {
            $(this).height() > maxHeight && (maxHeight = $(this).height());
        }), $(".productList .productInner").height(maxHeight - 80);
    }
}

function mobFilter() {
    $(".mobFilter").click(function(event) {
        event.preventDefault(), $(".overlay2").show(), $(".filterMob").animate({
            right: 0
        }, 300);
    }), $(".overlay2").click(function(event) {
        $(".overlay2").fadeOut(), $(".filterMob").animate({
            right: -300
        }, 300);
    }), $(".productExpand").click(function(event) {
        event.stopPropagation(), $(this).toggleClass("open").parents(".productInner").toggleClass("openProduct").find(".productMob").slideToggle();
    }), $(".productInner").click(function(event) {
        windowWidth < 768 && ($(this).hasClass("openProduct") || $(this).find(".productExpand").trigger("click"));
    }), $(".clearFilter").click(function(event) {
        event.preventDefault(), $(".filterCont input:radio,.filterCont input:checkbox").attr("checked", !1);
    }), $(".productMob li a").click(function(event) {
        event.preventDefault(), $(".listToolTip").hide(), $(this).parent().find(".listToolTip").show(0, function() {
            $(this).addClass("open");
        });
    }), $(document).mouseup(function(e) {
        var container = $(".listToolTip");
        container.is(e.target) || 0 !== container.has(e.target).length || container.hide().removeClass("open");
    }), filterHeight();
}

function filterHeight() {
    $(".filterMob").css("max-height", windowHeight - 20);
}