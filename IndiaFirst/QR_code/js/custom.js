
$(document).ready(function() {
    $(".portlet-title-text").hide();
    formValidation()
});
function validateForm() {
     var nameRegExp = "^[a-zA-Zs]+$";
    var mobileRegExp = "^[6-9][0-9]{0,9}$";
    var emailRegExp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z]{3}$";
    var ifscRegExp = "^[A-Z]{4}0[A-Z0-9]{6}$";
    var count = 0;
    const cb = document.querySelector("#authorize");
    if (cb.checked == false || cb.checked == "false") document.getElementById("autherror").style.display = "block";
    else {
        document.getElementById("autherror").style.display = "none";
        count++
    }
    if ($("#FirstName").val() ==
        "") $("#FirstName").next(".ifl-error").show().text("This is a mandatory field");
    else if (!$("#FirstName").val().match(nameRegExp)) $("#FirstName").next(".ifl-error").show().text("Only alphabets allowed");
    else if ($("#FirstName").val().length < 3) $("#FirstName").next(".ifl-error").show().text("Please enter minimum 3 alphabets");
    else if ($("#FirstName").val() != "" && $("#FirstName").val().match(nameRegExp)) {
        $("#FirstName").next(".ifl-error").hide().text("");
        count++
    }
    if ($("#SalutationName").val() == "") $("#SalutationName").next(".ifl-error").show().text("Mandatory field");
    else if ($("#SalutationName").val() != "") {
        $("#SalutationName").next(".ifl-error").hide().text("");
        count++
    }
    if ($("#LastName").val() == "") $("#LastName").next(".ifl-error").show().text("This is a mandatory field");
    else if (!$("#LastName").val().match(nameRegExp)) $("#LastName").next(".ifl-error").show().text("Only alphabets allowed");
    else if ($("#LastName").val().length < 3) $("#LastName").next(".ifl-error").show().text("Please enter minimum 3 alphabets");
    else if ($("#LastName").val() != "" && $("#LastName").val().match(nameRegExp)) {
        $("#LastName").next(".ifl-error").hide().text("");
        count++
    }
    if ($("#MobileNo").val() == "") $("#MobileNo").next(".ifl-error").show().text("This is a mandatory field");
    else if (isNaN($("#MobileNo").val())) $("#MobileNo").next(".ifl-error").show().text("Only numbers allowed");
    else if (!$("#MobileNo").val().match(mobileRegExp)) $("#MobileNo").next(".ifl-error").show().text("Enter valid number");
    else if ($("#MobileNo").val().length < 10) $("#MobileNo").next(".ifl-error").show().text("Please enter minimum 10 digits");
    else if ($("#MobileNo").val() != "" && !isNaN($("#MobileNo").val()) &&
        $("#MobileNo").val().match(mobileRegExp)) {
        $("#MobileNo").next(".ifl-error").hide().text("");
        count++
    }
    if ($("#Email").val() == "") $("#Email").next(".ifl-error").show().text("This is a mandatory field");
    else if (!$("#Email").val().match(emailRegExp)) $("#Email").next(".ifl-error").show().text("Valid email required");
    else if ($("#Email").val() != "" && $("#Email").val().match(emailRegExp)) {
        $("#Email").next(".ifl-error").hide().text("");
        count++
    }
    if ($("#gpp").val() == "") $("#gpp").next(".ifl-error").show().text("This is a mandatory field");
    else if ($("#gpp").val() != "") {
        $("#gpp").next(".ifl-error").hide().text("");
        count++
    }
    if ($("#ProductName").val() == "") {
        count++;
        if ($("#gpp").val() == "Plan Your Childs Future") $("#ProductName").val("IndiaFirst Life Little Champ Plan");
        else if ($("#gpp").val() == "Plan Your Retirement") $("#ProductName").val("IndiaFirst Life Guaranteed Pension Plan");
        else if ($("#gpp").val() == "Plan For Protection") $("#ProductName").val("IndiaFirst Life Guaranteed Protection Plan");
        else if ($("#gpp").val() == "Plan To Save Tax") $("#ProductName").val("IndiaFirst Money Balance Plan");
        else if ($("#gpp").val() == "Plan For Savings") $("#ProductName").val("IndiaFirst Life Guaranteed Benefit Plan")
    }
    if ($("#LGName").val() == "") $("#LGName").next(".ifl-error").show().text("This is a mandatory field");
    else if ($("#LGName").val() != "") {
        $("#LGName").next(".ifl-error").hide().text("");
        count++
    }
    if ($("#BranchCode").val() == "" && false) {
        console.log("branch code compulsory");
        $("#BranchCode").next(".ifl-error").show().text("This is a mandatory field")
    } else if ($("#BranchCode").val() != "" && false) {
        $("#BranchCode").next(".ifl-error").hide().text("");
        console.log("branch code entered");
        count++
    }
    if ($("#IFSC").val() == "" && true) {
        console.log("ifsc code compulsory");
        $(".ifsc-error").show().text("This is a mandatory field")
    } else if ($("#IFSC").val() != "" && true) {
        $(".ifsc-error").hide().text("");
        console.log("ifsc code entered");
        count++
    }
    return count
}

function sendData() {
    var count = validateForm();
    if (count == 10 || count == 9) {
        var selected = $("#selected").val();
        var FirstName = $("#FirstName").val();
        var LastName = $("#LastName").val();
        var Email = $("#Email").val();
        var MobileNo = $("#MobileNo").val();
        var SalutationName = $("#SalutationName").val();
        var ProductName = $("#ProductName").val();
        var gpp = $("#gpp").val();
        var IFSC = $("#IFSC").val();
        var LGName = $("#LGName").val();
        var BranchCode = $("#BranchCode").val();
        var SPName = $("#SPName").val();
        var LGCode = $("#LGCode").val();
        var SPCode =
            $("#SPCode").val();
        var ChannelCode = $("#ChannelCode").val();
        var CreatedBy = $("#CreatedBy").val();
        var LGCode = $("#LGCode").val();
        var LGNameOnly = $("#LGNameOnly").val();
        var SPCode = $("#SPCode").val();
        var SPName = $("#SPName").val();
        if (false && BranchCode != "") {
            var session = "RRB";
            var iv = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
            var salt = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
            var aesUtil = new AesUtil(128, 1E3);
            var ciphertext = aesUtil.encrypt(salt, iv, "SampleKey", BranchCode);
            var aesPassword = iv + "::" + salt + "::" + ciphertext;
            BranchCode = btoa(aesPassword)
        }
        if (true) var session = "not_RRB";
        if (count == 8) selected = "0";
        else selected = "1";
        if ($("#ProductName").val() == "")
            if ($("#gpp").val() == "Plan Your Childs Future") ProductName = "IndiaFirst Life Little Champ Plan";
            else if ($("#gpp").val() == "Plan Your Retirement") ProductName = "IndiaFirst Life Guaranteed Pension Plan";
        else if ($("#gpp").val() == "Plan For Protection") ProductName = "IndiaFirst Life Guaranteed Protection Plan";
        else if ($("#gpp").val() ==
            "Plan To Save Tax") ProductName = "IndiaFirst Money Balance Plan";
        else if ($("#gpp").val() == "Plan For Savings") ProductName = "IndiaFirst Life Guaranteed Benefit Plan";
        if (BranchCode == "DM001") var ProductName = "IndiaFirst Life e-Term Plus Plan";
        else var ProductName = $("#ProductName").val();
        if (FirstName != "" && LastName != "" && Email != "" && MobileNo != "" && SalutationName != "" && ProductName != "" && gpp != "" && IFSC != "") {
            dialog.showModal();
            var plaintext = FirstName + "::" + LastName + "::" + Email + "::" + IFSC + "::" + MobileNo;
            var iv = CryptoJS.lib.WordArray.random(128 /
                8).toString(CryptoJS.enc.Hex);
            var salt = CryptoJS.lib.WordArray.random(128 / 8).toString(CryptoJS.enc.Hex);
            var aesUtil = new AesUtil(128, 1E3);
            var ciphertext = aesUtil.encrypt(salt, iv, "SampleKey", plaintext);
            var aesPassword = iv + "::" + salt + "::" + ciphertext;
            var encryptedData = btoa(aesPassword);
            $.ajax({
                url: "https://www.indiafirstlife.com/qr-code?p_p_id\x3dcom_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4\x26p_p_lifecycle\x3d2\x26p_p_state\x3dnormal\x26p_p_mode\x3dview\x26p_p_resource_id\x3dformDataURL\x26p_p_cacheability\x3dcacheLevelPage\x26_com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_BOBformName\x3dBOBformValue",
                type: "POST",
                data: {
                    _com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_encryptedData: encryptedData,
                    _com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_SalutationName: SalutationName,
                    _com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_gpp: gpp,
                    _com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_ProductName: ProductName,
                    _com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_BranchCode: BranchCode,
                    _com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_ChannelCode: ChannelCode,
                    _com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_CreatedBy: CreatedBy,
                    _com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_LGNameOnly: LGNameOnly,
                    _com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_LGCode: LGCode,
                    _com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_SPCode: SPCode,
                    _com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_SPName: SPName,
                    _com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_selected: selected,
                    _com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_session: session
                },
                success: function(resultData) {
                    var jsondata = JSON.stringify(resultData);
                    var data =
                        JSON.parse(jsondata)
                }
            })
        } else formValidation()
    } else formValidation()
}

function formValidation() {
    var nameRegExp = "^[a-zA-Zs]+$";
    var mobileRegExp = "^[6-9][0-9]{0,9}$";
    var emailRegExp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-z]{3}$";
    var ifscRegExp = "^[A-Z]{4}0[A-Z0-9]{6}$";
    var isValid = false;
    $("select.suffix").on("blur change", function() {
        if ($(this).val() == "") $(this).next(".ifl-error").show().text("Mandatory field");
        else $(this).next(".ifl-error").hide().text("")
    });
    $(".firstname").on("blur", function() {
        if ($(this).val() == "") $(this).next(".ifl-error").show().text("This is a mandatory field");
        else if (!$(this).val().match(nameRegExp)) $(this).next(".ifl-error").show().text("Only alphabets allowed");
        else if ($(this).val().length < 3) $(this).next(".ifl-error").show().text("Please enter minimum 3 alphabets");
        else $(this).next(".ifl-error").hide().text("")
    });
    $(".lastname").on("blur", function() {
        if ($(this).val() == "") $(this).next(".ifl-error").show().text("This is a mandatory field");
        else if (!$(this).val().match(nameRegExp)) $(this).next(".ifl-error").show().text("Only alphabets allowed");
        else if ($(this).val().length <
            3) $(this).next(".ifl-error").show().text("Please enter minimum 3 alphabets");
        else $(this).next(".ifl-error").hide().text("")
    });
    $(".mobile").on("blur", function() {
        if ($(this).val() == "") $(this).next(".ifl-error").show().text("This is a mandatory field");
        else if (isNaN($(this).val())) $(this).next(".ifl-error").show().text("Only numbers allowed");
        else if (!$(this).val().match(mobileRegExp)) $(this).next(".ifl-error").show().text("Enter valid number");
        else if ($(this).val().length < 10) $(this).next(".ifl-error").show().text("Please enter minimum 10 digits");
        else $(this).next(".ifl-error").hide().text("")
    });
    $(".email").on("blur", function() {
        if ($(this).val() == "") $(this).next(".ifl-error").show().text("This is a mandatory field");
        else if (!$(this).val().match(emailRegExp)) $(this).next(".ifl-error").show().text("Valid email required");
        else $(this).next(".ifl-error").hide().text("")
    });
    $("select.gpp").on("blur change", function() {
        if ($(this).val() == "") $(this).next(".ifl-error").show().text("This is a mandatory field");
        else $(this).next(".ifl-error").hide().text("")
    });
    $(".ifsc").on("keyup", function() {
        $(this).val($(this).val().toUpperCase())
    });
    $(".ifsc").on("blur", function() {
        if ($(this).val() == "") $(".ifsc-error").show().text("This is a mandatory field");
        else if (!$(this).val().match(ifscRegExp)) $(".ifsc-error").show().text("Valid ifsc code required");
        else $(".ifsc-error").hide().text("")
    });
    $(".branch").on("blur", function() {
        if ($(this).val() == "") $(this).next(".ifl-error").show().text("This is a mandatory field");
        else $(this).next(".ifl-error").hide().text("")
    });
    $("select.lg").on("blur change",
        function() {
            if ($(this).val() == "") $(this).next(".ifl-error").show().text("This is a mandatory field");
            else $(this).next(".ifl-error").hide().text("")
        });
    $("select.p").on("blur change", function() {
        if ($(this).val() == "") $(this).next(".ifl-error").show().text("This is a mandatory field");
        else $(this).next(".ifl-error").hide().text("")
    });
    $("select.lgname").on("blur change", function() {
        if ($(this).val() == "") $(this).next(".ifl-error").show().text("This is a mandatory field");
        else $(this).next(".ifl-error").hide().text("")
    });
    $('input [type\x3d"checkbox"]').on("click", function() {
        if (!$(this).is(":checked")) $(this).next(".ifl-error").show().text("This is a mandatory field");
        else $(this).next(".ifl-error").hide().text("")
    })
}

function removeOptions() {
    var select = document.getElementById("ProductName");
    var i, L = ProductName.options.length - 1;
    for (i = L; i >= 0; i--) ProductName.remove(i);
    $("#ProductName").html("\x3coption value\x3d'0'\x3eSelect Product(Optional)*\x3c/option\x3e")
}

function get_product() {
    var count = 0;
    var gpp = $("#gpp").val();
    var select = document.getElementById("ProductName");
    var lengthOfListOptions = select.options.length;
    if ($("#gpp").val() != "")
        if ($("#gpp").val() == "Plan Your Childs Future") {
            if (lengthOfListOptions > 2) count++
        } else if ($("#gpp").val() == "Plan Your Retirement") {
        if (select.options.length > 3) count++
    } else if ($("#gpp").val() == "Plan For Protection") {
        if (select.options.length > 4) count++
    } else if ($("#gpp").val() == "Plan To Save Tax") {
        if (select.options.length > 6) count++
    } else if ($("#gpp").val() ==
        "Plan For Savings")
        if (select.options.length > 4) count++;
    if ($("#BranchCode").val() == "DM001") $("#ProductName").val("IndiaFirst Life e-Term Plus Plan");
    else if (count == 0) $.ajax({
        url: "https://www.indiafirstlife.com/qr-code?p_p_id\x3dcom_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4\x26p_p_lifecycle\x3d2\x26p_p_state\x3dnormal\x26p_p_mode\x3dview\x26p_p_resource_id\x3dproductDataURL\x26p_p_cacheability\x3dcacheLevelPage\x26_com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_BOBformName\x3dBOBformValue",
        type: "POST",
        data: {
            "_com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_gpp": gpp
        },
        dataType: "json",
        success: function(response) {
            console.log("677");
            for (var i = 0; i < response.length; i++) {
                var optn = response[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                select.appendChild(el)
            }
        },
        failure: function(response) {},
        error: function(response) {}
    })
}


function update_lgsp() {
    if ($("#BranchCode").val() == "DM001") console.log("dummy data");
    else {
        var LGName = $("#LGName").val();
        if (LGName != 0) {
            var arr = LGName.split(",");
            $("#LGCode").val(arr[0]);
            $("#SPCode").val(arr[1]);
            $("#SPName").val(arr[2]);
            $("#ChannelCode").val(arr[3]);
            $("#CreatedBy").val(arr[4]);
            $("#LGNameOnly").val(arr[5])
        } else console.log("please select branch code or ")
    }
}

function clearProduct() {
    $("#ProductName").val()
}

function getBranchCode() {
    loaderToggle(true);
    var IFSC = $("#IFSC").val();
    var ifscRegExp = "^[A-Z]{4}0[A-Z0-9]{6}$";
    if ($("#IFSC").val() == "") {
        $(".ifsc-error").show().text("This is a mandatory field");
        loaderToggle(false)
    } else if (!$("#IFSC").val().match(ifscRegExp)) {
        $(".ifsc-error").show().text("Valid ifsc code required");
        loaderToggle(false)
    } else if ($("#IFSC").val() != "" && $("#IFSC").val().match(ifscRegExp)) {
        $(".ifsc-error").hide().text("");
        $("#IFSC").val($("#IFSC").val().toUpperCase());
        $.ajax({
            url: "https://www.indiafirstlife.com/qr-code?p_p_id\x3dcom_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4\x26p_p_lifecycle\x3d2\x26p_p_state\x3dnormal\x26p_p_mode\x3dview\x26p_p_resource_id\x3dIFSCURL\x26p_p_cacheability\x3dcacheLevelPage\x26_com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_BOBformName\x3dBOBformValue",
            type: "POST",
            data: {
                "_com_ifl_qrcode_iflQrCodePortlet_INSTANCE_DdzkPK8chYn4_IFSC": IFSC
            },
            success: function(response) {
                var arr = JSON.parse(response);
                if (arr[0].includes("errormsg")) console.log("errormsg branch code");
                else {
                    document.getElementById("BranchCode").value = arr[0];
                    if ($("#BranchCode").val() == "DM001" || $("#BranchCode").val() == "jaiRnCdCsDDnivwNToEPvQDkbKkY") {
                        $("#ProductName").val("IndiaFirst Life e-Term Plus Plan");
                        document.getElementById("dummyHide").style.display = "none"
                    } else get_lgName()
                }
                loaderToggle(false)
            },
            error: function(error){
                
                loaderToggle(false);
                document.getElementById("dummyHide").style.display = "none";
            }
        })
    }
}


function loaderToggle(status) {
    if ($(".ifl-universal-loader-master").length == 0) { var imgPath_new = "https://www.indiafirstlife.com/o/ifl-portal-theme/images";
    var loaderImgPath = imgPath_new + "/loader.svg";
    $("body").append("\x3cdiv class\x3d'ifl-universal-loader-master'\x3e\x3cdiv class\x3d'ifl-universal-loader'\x3e\x3cimg src\x3d'" + loaderImgPath + "' alt\x3d'Loading'\x3e\x3cspan\x3eLoading...\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e") } if (status == true) $(".ifl-universal-loader-master").fadeIn(300);
    else $(".ifl-universal-loader-master").fadeOut(4E3,
      function () { $(".ifl-universal-loader-master").remove() })
  }