$(function(){var e=$(".self-banner-btn-l"),n=$(".self-banner-btn-r");e.on("click",function(){e.addClass("self-banner-check"),n.removeClass("self-banner-check"),$(".self-banner-querypannle-title").html("已有<span>2000+</span>企业在云会计进行商标查询"),$(".self-banner-querypannle-search > input").attr("placeholder","请输入您想要查询的商标名称")}),n.on("click",function(){n.addClass("self-banner-check"),e.removeClass("self-banner-check"),$(".self-banner-querypannle-title").html("已有<span>2000+</span>企业在云会计进行免费核名"),$(".self-banner-querypannle-search > input").attr("placeholder","请输入您想要查询的公司名称")});var a=0,l=$("body").height(),s=$(".self-banner-querypannle-search > div");s.on("click",function(){if(a++,1==a)window.location.href="../html/selfHelpResult.html";else if(a>1){var e=$("body").scrollTop();e=80+e+"px",$(".js_dialogWarp").removeClass("display-none"),$(".js_dialogWarp").css("height",l),$(".dialog-contact").css("margin-top",e)}})});