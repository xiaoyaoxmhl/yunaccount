/**
 * Created by xiaoyaoxmhl on 17/2/14.
 */
$(function () {
    var $registerPhone=$(".register-phone input"),  //手机
        $tipPanelPhone=$(".tip-phone-panel"),
        $tipPhone=$(".tip-phone-panel span"),
        $tipPhoneOk=$(".tip-phone-ok"),

        $registerMessage=$(".register-message input"),  //短信
        $tipMsgPanel=$(".tip-msg-panel"),
        $tipMsg=$(".tip-msg-panel span"),
        $tipMsgOk=$(".tip-msg-ok"),

        $registerPass=$(".register-password input"),//密码
        $tipPassPanel=$(".tip-pass-panel"),
        $tipPass=$(".tip-pass-panel span"),
        $tipPassOk=$(".tip-pass-ok"),
        $validMessagetip=$(".valid-messagetip"),

        $registerAgain=$(".register-again input"),//再次
        $tipAgainPanel=$(".tip-again-panel"),
        $tipAgain=$(".tip-again-panel span"),
        $tipAgainOk=$(".tip-again-ok");



        var $register=$(".register-bgc");

        // 整体设置
        $register.on("focus","input",function () {
            $(this).siblings("img").css("visibility","hidden");
            $(this).siblings(".dialog-tip-warm").css("visibility","visible");
            if($(this).siblings(".valid-messagetip")){
                $(this).siblings(".valid-messagetip").css("visibility","visible");
            }
        });
        $register.on("keyup","input",function () {
            if($(this).val().length==0){
                $(this).siblings(".dialog-tip-warm").css("visibility","hidden");
            }
            if($(this).siblings(".valid-messagetip")){
                $(this).siblings(".valid-messagetip").css("visibility","hidden");
            }
        });

        // 手机
        $registerPhone.on("blur",function () {
            if($(this).val()==""){
                $tipPanelPhone.css("visibility","visible");
                $tipPhone.text("不能为空");
            }
            else if (  !(isPhoneNo( $(this).val()  )) ) {
                $tipPanelPhone.css("visibility","visible");
                $tipPhone.text("请输入正确的手机号码");
            }
            else {
                $tipPanelPhone.css("visibility","hidden");
                $tipPhoneOk.css("visibility","visible");
            }
        });

        // 短信验证码


        //密码
        $registerPass.on("blur",function () {
            $tipPassOk.css("visibility","hidden");
            if($(this).val()==""){
                $tipPassPanel.css("visibility","visible");
                $validMessagetip.css("visibility","visible");
                $tipPass.text("不能为空");
            }
            else if (  getLength($(this).val())<6  ) {
                $tipPassPanel.css("visibility","visible");
                $validMessagetip.css("visibility","visible");
                $tipPass.text("不能少于6位");
            }
            else if (  getLength($(this).val())>16  ) {
                $tipPassPanel.css("visibility","visible");
                $validMessagetip.css("visibility","visible");
                $tipPass.text("请输入6-16位密码");
            }
            else {
                $validMessagetip.css("visibility","hidden");
                $tipPassPanel.css("visibility","hidden");
                $tipPassOk.css("visibility","visible");
            }
        });

        // 检查密码

      $registerAgain.on("blur",function () {
          if($(this).val()==""){
              return;
          }
          if($(this).val()== $registerPass.val()){
              $tipAgainPanel.css("visibility","hidden");
              $tipAgainOk.css("visibility","visible");
              $tipAgain.text("请再次输入密码");
          }else{
              $tipAgainPanel.css("visibility","visible");
              $tipAgainOk.css("visibility","hidden");
              $tipAgain.text("两个密码不一致");
          }

      });

    return;

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