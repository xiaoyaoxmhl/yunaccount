/**
 * Created by xiaoyaoxmhl on 17/2/4.
 */

$(function () {

    window.setInterval(function () {
        var winHeigh=$(window).height();
        var $footerWarpBottom= $(".footerWarpBottom");
        var $footerWarpBottomHeight=parseInt($footerWarpBottom.height());

        if(winHeigh<800){
            if($footerWarpBottomHeight>228){
                $footerWarpBottom.css("height","228px");
                $(".homepage .ulWarp-item4").css("top","14%");
                $(".footerWarpBottom .footer5").css("bottom","0px");
            }
        }
    },500);


});