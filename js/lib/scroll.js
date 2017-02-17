/**
 * Created by xiaoyaoxmhl on 16/12/28.
 */
$(document).ready(function () {

    // 初始化
    var windowsHeight = $(window).height();
    var windowWidth = $(window).width();

    var ind=0;
    // ind = parseInt(localStorage.getItem("pos")) || 0; //屏幕第几页， 默认第一页

    $(".container").height(windowsHeight);

    <!--初始化 banner 轮播-->
    $("#luobo-container").css({"width": windowWidth, "height": windowsHeight});
    $(".htmleaf-container #luobo-container").PageSwitch({
        direction: 'horizontal',
        easing: 'ease-in',
        duration: 1500,
        autoPlay: true,
        loop: 'false'
    });


    var anchor = new Anchor({
        fluid: false,
        anchorBox: '.pageItem',
        anchorBtn: '.dotItem',
        activeClass: 'active',
        wrap: '.page',
        arrived: function (id) {
            ind = id;
            scrollFlag = true;
        }
    });


    // 到达指定位置   5个 div 分别对应0-4
    anchor.goTo(ind);


    // 设置侧边栏监听
    var count = 0;

    $(".sideBarSpan").on("click", function () {
        var datanum = this.getAttribute("data-num");
        datanum = parseInt(datanum);
        anchor.goTo(datanum);
        localStorage.setItem("pos", datanum);
        });

    /*设置底部导航栏事件*/
    $(".bottomBarImg").on("click", function (e) {
        move(e);
    });


    // 设置鼠标滚动监听
    $(document).on("mousewheel", function (e) {
        move(e);
    });

    //设置方向键监听
    $(document).keydown(function(event){
        var itemLen = $(".page").children().length;
        if(event.keyCode==40){
            var pos=parseInt(localStorage.getItem("pos"));
            if(pos==itemLen-1){
                pos=itemLen;
            }else{
                pos=pos+1;
                anchor.goTo( pos );
                localStorage.setItem("pos", pos);
            }

        }
        if(event.keyCode==38){
            var pos=parseInt(localStorage.getItem("pos"));
            if(pos==0){
                pos=0;
            }else{
                 pos=pos-1;
                 anchor.goTo( pos );
                localStorage.setItem("pos", pos);
            }

        }

    });



    //设置 屏幕尺寸监听
    $(window).resize(function () {
        // window.location.reload();
        var $doms=$(".homepage").detach();
        var resizeHeight = $(window).height();
        $doms.appendTo("body");
        $(".container").height(resizeHeight);
        var pos = localStorage.getItem("pos");

        // 重置第一板块轮播图
        var windowWidth = $(window).width();
        $("#luobo-container").css({"width": windowWidth, "height": resizeHeight});

        anchor = new Anchor({
            fluid: false,
            anchorBox: '.pageItem',
            anchorBtn: '.dotItem',
            activeClass: 'active',
            wrap: '.page',
            winHeight:resizeHeight,
            arrived: function (id) {
                ind = id;
                scrollFlag = true;
            }
        });

        pos = parseInt(pos);
        anchor.goTo(pos);

    });
    /*移动事件*/
    function move(e) {
        var itemLen = $(".page").children().length;
        if (scrollFlag) {
            if (e.deltaY == 1) {
                --ind;
                // 到达底部
                if (ind < 0) {
                    // ind = itemLen - 1;
                    ind=0;
                }
                localStorage.setItem("pos", ind);
                anchor.goTo(ind);

            } else {
                ++ind;
                // 返回顶部
                if (ind > itemLen - 1) {
                    // ind = 0;
                    ind = itemLen - 1;
                }
                localStorage.setItem("pos", ind);
                anchor.goTo(ind);

            }
        }

        scrollFlag = false;
    }


});


function Anchor(opt) {
    this.init(opt);
}


// 顶部栏样式变化
function cssTop(id) {
    switch (id) {

        case 0:
        case 2:
            $(".boder-img").addClass("display-none");
            $(".headerNavUl > li").css("color", "#ffffff");
            break;
        case 1:
        case 3:
        case 3:
        case 4:

        default:
            window.setTimeout(function () {
                $(".boder-img").removeClass("display-none");
                $(".headerNavUl > li").css("color", "#333333");
            }, 1000);
            break;
    }
}
/*侧边脸样式变化*/
function cssSide(id) {
    switch (id) {
        case 0:
            $(".sideBarSpan:nth-child(1)").addClass("sildCheck");
            $(".sideBarSpan:nth-child(1)").siblings().removeClass("sildCheck");
            break;
        case 1:
            $(".sideBarSpan:nth-child(2)").addClass("sildCheck");
            $(".sideBarSpan:nth-child(2)").siblings().removeClass("sildCheck");
            break;
        case 2:
            $(".sideBarSpan:nth-child(3)").addClass("sildCheck");
            $(".sideBarSpan:nth-child(3)").siblings().removeClass("sildCheck");
            break;
        case 3:
            $(".sideBarSpan:nth-child(4)").addClass("sildCheck");
            $(".sideBarSpan:nth-child(4)").siblings().removeClass("sildCheck");
            break;
        case 4:
            $(".sideBarSpan:nth-child(5)").addClass("sildCheck");
            $(".sideBarSpan:nth-child(5)").siblings().removeClass("sildCheck");
            break;
        default:
            break;
    }
}

/*底部栏变化*/
function cssBottom(id) {
    id=id+"";
    id=$.trim(id);
    switch (id) {
        case "4":
            $(".bottomBarImg").css("display","none");
            break;
        case "0":
        case "1":
        case "2":
        case "3":
        default:
            $(".bottomBarImg").css("display","block");
            break;
    }
}


// 动画
 function animation(id) {
     // debugger

     id=id+"";
     id=$.trim(id);
     switch (id){
         case "1":
             $(".item2 > .ulWarp").removeClass("animation-up");
             window.setTimeout(function () {
                 $(".item2 > .ulWarp").addClass("animation-up");
             },200);

             $(".item2 > .containerTitle").removeClass("animated-zoomInRight");
             window.setTimeout(function () {
                 $(".item2 > .containerTitle").addClass("animated-zoomInRight");
             },200);
             break;
         case "2":
             $(".item3 > .ulWarp").removeClass("animationClass2");
             window.setTimeout(function () {
                 $(".item3 > .ulWarp").addClass("animationClass2");
             },300);
             break;
         default:
             break;
     }
 }
Anchor.prototype = {
    /*
     *anchorBox: '#aboutNav', //锚按钮容器
     *anchorBtn: '.anchorBtn', //锚按钮
     *activeClass: 'active', //锚激活样式
     *wrap: '#aboutCont' //内容容器
     *arrived:callback //到达后的回调函数
     */
    init: function (opt) {

        this.opt = opt;
        var $wrap = $(this.opt.wrap);
        var _this = this;
        var $anchorBtns = $(this.opt.anchorBtn);
        var winHeight = $(window).height();
        var winHeight =this.opt.winHeight||winHeight;

        this.itemTop = [];


        //初始化
        $wrap.children().each(function (index) {
            var that = $(this);
            $(this).addClass("anchorItem" + index);

            _this.itemTop.push(winHeight * index);

        });
        $(this.opt.anchorBtn).each(function (index) {
            $(this).data("anchorId", index);
        });

        //锚事件
        $anchorBtns.on("click", function () {
            var ind = $(this).data("anchorId");
            _this.goTo(ind);
        });

        return this;

    },
    goTo: function (id) {
        parseInt(id);
        var $anchorBtns = $(this.opt.anchorBtn);
        var _this = this;
        var $btn = $anchorBtns.eq(id);
        var top = this.itemTop[id];
        var padTop = parseInt($(".anchorItem" + id).css("paddingTop"));
        var boxHeight = $(this.opt.anchorBox).outerHeight(true);
        var offsetTop = top - padTop;
        if (this.opt.fluid) {
            offsetTop = top - padTop - $(this.opt.anchorBox).outerHeight(true);
        }


        // if(! $("html, body").is(':animated')){
            $("html, body").stop().animate({'scrollTop': offsetTop + 'px'}, 1000, function () {
                if (_this.opt.activeClass) {
                    $anchorBtns.removeClass(_this.opt.activeClass);
                    $btn.addClass(_this.opt.activeClass);
                }
                if (_this.opt.arrived) {
                    _this.opt.arrived(id);
                }
            });
        // }





        cssTop(id);
        cssSide(id);
        cssBottom(id);
        animation(id);
    }

}