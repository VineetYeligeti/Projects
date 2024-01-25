$(document).ready(function () {
  subsPopup();
});

function subsPopup() {
  // open modal

  $(document).on("click", "#subscribed", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var item = $(this).attr("data-modal");
    $(".subs-modal").fadeIn(300);
    $("body").addClass("no-scroll");
  });

  // close modal
  $(document).on("click", ".close, .modal_backdrop", function () {
    $("body").removeClass("no-scroll");
    $(".subs-modal").fadeOut(500);
  });

  $(document).keydown(function (event) {
    if (event.keyCode == 27) {
      $(".close").trigger("click");
    }
  });
}
