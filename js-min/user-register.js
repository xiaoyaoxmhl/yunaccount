$(function(){function i(i){var s=/^1[34578]\d{9}$/;return s.test(i)}function s(i){return i.replace(/[^\x00-xff]/g,"xx").length}var t=$(".register-phone input"),l=$(".tip-phone-panel"),e=$(".tip-phone-panel span"),n=$(".tip-phone-ok"),v=($(".register-message input"),$(".tip-msg-panel"),$(".tip-msg-panel span"),$(".tip-msg-ok"),$(".register-password input")),a=$(".tip-pass-panel"),b=$(".tip-pass-panel span"),p=$(".tip-pass-ok"),c=$(".valid-messagetip"),g=$(".register-again input"),h=$(".tip-again-panel"),d=$(".tip-again-panel span"),o=$(".tip-again-ok"),y=$(".register-bgc");y.on("focus","input",function(){$(this).siblings("img").css("visibility","hidden"),$(this).siblings(".dialog-tip-warm").css("visibility","visible"),$(this).siblings(".valid-messagetip")&&$(this).siblings(".valid-messagetip").css("visibility","visible")}),y.on("keyup","input",function(){0==$(this).val().length&&$(this).siblings(".dialog-tip-warm").css("visibility","hidden"),$(this).siblings(".valid-messagetip")&&$(this).siblings(".valid-messagetip").css("visibility","hidden")}),t.on("blur",function(){""==$(this).val()?(l.css("visibility","visible"),e.text("不能为空")):i($(this).val())?(l.css("visibility","hidden"),n.css("visibility","visible")):(l.css("visibility","visible"),e.text("请输入正确的手机号码"))}),v.on("blur",function(){p.css("visibility","hidden"),""==$(this).val()?(a.css("visibility","visible"),c.css("visibility","visible"),b.text("不能为空")):s($(this).val())<6?(a.css("visibility","visible"),c.css("visibility","visible"),b.text("不能少于6位")):s($(this).val())>16?(a.css("visibility","visible"),c.css("visibility","visible"),b.text("请输入6-16位密码")):(c.css("visibility","hidden"),a.css("visibility","hidden"),p.css("visibility","visible"))}),g.on("blur",function(){""!=$(this).val()&&($(this).val()==v.val()?(h.css("visibility","hidden"),o.css("visibility","visible"),d.text("请再次输入密码")):(h.css("visibility","visible"),o.css("visibility","hidden"),d.text("两个密码不一致")))})});