$(document).ready(function () {
    bannerSlider();
})
function bannerSlider() {
    $("#banner-slider").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots:true,
        autoplay:true,
        slideTransition: 'linear',
        // autoplayTimeout: 0,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1,
            
            },
            600: {
                items: 1,
                
            },
            1000: {
                items: 1,
            
            }
        }
    })
}
function fillForm() {
    var url = "inner_new_form_unionbank.html?p_p_id\x3dcom_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4\x26p_p_lifecycle\x3d0\x26p_p_state\x3dnormal\x26p_p_mode\x3dview\x26_com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_BOBformName\x3dBOBformValue";
    window.location.href = url
}
