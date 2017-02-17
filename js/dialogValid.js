/**
 * Created by xiaoyaoxmhl on 17/1/12.
 */

$(function () {
        var stopScroll;
    /**
     * Created by xiaoyaoxmhl on 17/1/10.
     */

    /***********************************表单验证***********************************/

    $(".dialog-contact-closed").on('click',function () {
        $(".js_dialogWarp").addClass("display-none");
        $("body").css("overflow","auto");
    });

    // 默认隐藏提示栏
    $(".dialog-tip-warm").addClass("visibility-hidden");
    $(".valid-ok").addClass("visibility-hidden");

    var $vTip=$(".dialog-tip-warm");
    var $aInput = $(".dialog-contact input");
    var $okImg=$(".valid-ok");


    // 姓名输入框
    var oName = $aInput.get(0);
    var vName=$vTip.get(0);
    var name_length = 0;
    var validName=false;
    var nameOk=$okImg.get(0);
    // 电话输入框
    var oPhone = $aInput.get(1);
    var vPhone=$vTip.get(1);
    var phone_length = 0;
    var validPhone=false;
    var phoneOk=$okImg.get(1);


    // 信息提示
    var nameMsg = $(".dialog-contact .dialog-tip-warm > span").get(0);
    var phoneMsg = $(".dialog-contact .dialog-tip-warm > span").get(1);
    // 用户名验证
    oName.onfocus = function () {
        if(!validName){
            vName.style.visibility="visible";
            nameMsg.style.display = "inline";
            nameMsg.innerHTML = "请输入正确的中文名或英文名";
            nameOk.style.visibility="hidden";
        }
    }

    oName.onkeyup = function () {
        name_length = getLength(this.value);
        if (name_length == 0) {
            vName.style.visibility = "hidden";
        }
    }


    oName.onblur = function () {

        if (this.value == "") {
            vName.style.visibility="visible";
            nameMsg.innerHTML = "不能为空";
            nameOk.style.visibility="hidden";
            validName=false;
        }
        else if (name_length > 25) {
            vName.style.visibility="visible";
            nameMsg.innerHTML = "长度超出25个字符";
            nameOk.style.visibility="hidden";
            validName=false;
        }
        else {
            vName.style.visibility = "hidden";
            nameOk.style.visibility="visible";
            validName=true;
        }
    }




    //手机验证
    oPhone.onfocus = function () {
        if(!validPhone){
            vPhone.style.visibility="visible";
            phoneMsg.style.display = "inline";
            phoneMsg.innerHTML = "请输入11位手机号码";
            phoneOk.style.visibility="hidden";
        }
    }
    oPhone.onkeyup = function () {
        name_length = getLength(this.value);
        if (name_length == 0) {
            vPhone.style.visibility = "hidden";
        }
    }
    oPhone.onblur = function () {
        console.log(this.value);
        console.log(isPhoneNo(this.value));
        if (this.value == "") {

            vPhone.style.visibility="visible";
            phoneMsg.innerHTML = "不能为空";
            phoneOk.style.visibility="hidden";
            validPhone=false;
        }
        else if (  !(isPhoneNo(this.value)) ) {
            vPhone.style.visibility="visible";
            phoneMsg.innerHTML = "请输入正确的手机号码";
            phoneOk.style.visibility="hidden";
            validPhone=false;
        }
        else {
            vPhone.style.visibility = "hidden";
            phoneOk.style.visibility="visible";
            validPhone=true;
        }
    }



    // 验证手机号
    function isPhoneNo(phone) {
        var pattern = /^1[34578]\d{9}$/;
        return pattern.test(phone);
    }
    //验证英文名
    function isEnglishName(english) {
        var pattern = /[^a-zA-Z]/g;
        return pattern.test(english);
    }

    // 获取字符长度(含中文检测)
    function getLength(str) {
        return str.replace(/[^\x00-xff]/g, "xx").length;
    }



});