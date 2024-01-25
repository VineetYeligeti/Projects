$(document).ready(function () {
    addRemovaleTag();
    leadershipModal();
    removableTag();

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
function leadershipModal() {
    // open modal
    $(document).on("click", ".artic-card a", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var item = $(this).attr("data-modal");
      $("#approvedmodal").fadeIn(300);
      $("body").addClass("no-scroll");
    //   $("div.modalContWrap").addClass("d-none");
    //   $("div.modalContWrap#" + item).removeClass("d-none");
    });
    
    

    // close modal
    $(document).on("click", ".close, .modal_backdrop", function () {
      $("body").removeClass("no-scroll");
      $("#approvedmodal").fadeOut(500);
      $(".successmodal").fadeOut(500);
      $(".failedmodal").fadeOut(500);
    });

    $(document).on("click", "#authenticate", function () {
        $("#approvedmodal").hide();
        $(".failedmodal").hide();
        $(".successmodal").fadeIn(500);
    });
  
    $(document).keydown(function(event) {
      if (event.keyCode == 27) {
          $('.close').trigger('click');
      }
    })
      //set button id on click to hide first modal
    
};


  function addRemovaleTag() {
    document.getElementById("addRTag").addEventListener('keydown', function(e){
      if (e.keydown == 13) {
        alert();
      }
    })
  }



  function removableTag(){
    $(".tag").on("click", ".remove-tag", function () {
        $(this).parent().remove();
    })
  }

