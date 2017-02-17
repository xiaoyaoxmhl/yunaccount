/**
 * Created by xiaoyaoxmhl on 17/1/12.
 */
$(function () {
    <!--初始化 页面效果-->
    var $bannerBtn_l=$(".self-banner-btn-l");
    var $bannerBtn_r=$(".self-banner-btn-r");

    $bannerBtn_l.on("click",function () {
        $bannerBtn_l.addClass("self-banner-check");
        $bannerBtn_r.removeClass("self-banner-check");
        $(".self-banner-querypannle-title").html("已有<span>2000+</span>企业在云会计进行商标查询");
        $(".self-banner-querypannle-search > input").attr("placeholder","请输入您想要查询的商标名称");
    });
    $bannerBtn_r.on("click",function () {
        $bannerBtn_r.addClass("self-banner-check");
        $bannerBtn_l.removeClass("self-banner-check");
        $(".self-banner-querypannle-title").html("已有<span>2000+</span>企业在云会计进行免费核名");
        $(".self-banner-querypannle-search > input").attr("placeholder","请输入您想要查询的公司名称");
    });

    var queryCount=0;
    var winHeight = $("body").height();
    var $queryBtn=$(".self-banner-querypannle-search > div");

    $queryBtn.on("click",function () {
        queryCount++;
        if(queryCount==1){
            window.location.href="../html/selfHelpResult.html";
        }else if(queryCount>1){
            var windowPos=$("body").scrollTop();
            windowPos=80+windowPos+"px";
            $(".js_dialogWarp").removeClass("display-none");
            $(".js_dialogWarp").css("height",winHeight);
            $(".dialog-contact").css("margin-top",windowPos);
        }

    });



});