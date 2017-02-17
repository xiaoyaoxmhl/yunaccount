/**
 * Created by xiaoyaoxmhl on 17/2/4.
 */
$(function () {
    var $btnExperice=$(".btn-experice");
    var winHeight = $("body").height();
    var windowsHeight = $(window).height();
    var $js_dialogWarp=$(".js_dialogWarp");
    $js_dialogWarp.height(winHeight);

    /* 联系我们-对话框*/
    $btnExperice.on('click',function () {

        $js_dialogWarp.removeClass("display-none");
        $js_dialogWarp.css("height",winHeight);

        var dialogContactHeight=$(".dialog-contact").height();

        var dialogContactMargin=(windowsHeight-dialogContactHeight)/2+"px";
        $(".dialog-contact").css("margin-top",dialogContactMargin);
        $("body").css("overflow","hidden");


    });

});