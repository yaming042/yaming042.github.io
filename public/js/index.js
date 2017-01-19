var percent = 0,
    time;
function getRandom(n,m){
    var c = m - n + 1;  
    return Math.floor(Math.random() * c + n);
}
function loadPer(){
    time = setInterval(function(){
        percent += getRandom(1,20);
        var str;
        if(percent > 100){
            str = 100;
            stopTime(time);
            window.location.href = "https://yaming042.github.io/notes/";
        }else{
            str = percent;
        }
        $("#load_bar").css({"width":str+"%","transition":"all .2s"}).html(str+"%");
    },300);
}
function stopTime(timeid){
    clearInterval(timeid);
}

function notesFun(){
    $(".notes").hover(function(){
        $(".process-bar").slideDown("fast",function(){
            loadPer();
        });        
    },function(){
        stopTime(time);
        $(".process-bar").slideUp("slow",function(){
            percent = 0;
            $("#load_bar").css("width",0).html("");
        });        
    });
}

/*homepage gundong js*/
function scrollTxt(){
    var controls={}, 
        values={},
        t1=500, /*播放动画的时间*/
        t2=3000, /*播放时间间隔*/
        si;
    controls.rollWrap=$("#roll-wrap");/*滚动容器*/
    controls.rollWrapUl=controls.rollWrap.children();/*ul容器*/
    controls.rollWrapLIs=controls.rollWrapUl.children();/*li标签*/

    values.liNums=controls.rollWrapLIs.length;
    values.liHeight=controls.rollWrapLIs.eq(0).height();
    values.ulHeight=controls.rollWrap.height();

    this.init=function(){
        autoPlay();
        pausePlay();
    }
    /*滚动*/
    function play(){
        controls.rollWrapUl.animate({"margin-top" : "-"+values.liHeight}, t1, function(){
            $(this).css("margin-top" , "0").children().eq(0).appendTo($(this));
        });
    }
    /*自动滚动*/
    function autoPlay(){
        /*如果所有li标签的高度和大于.roll-wrap的高度则滚动*/
        if(values.liHeight*values.liNums > values.ulHeight){
            si=setInterval(function(){
                play();
            },t2);
        }
    }
    /*鼠标经过ul时暂停滚动*/
    function pausePlay(){
        controls.rollWrapUl.on({
            "mouseenter":function(){
                clearInterval(si);
            },
            "mouseleave":function(){
                autoPlay();
            }
        });
    }
}
function beginList(){
	var list = new scrollTxt().init();
}
/*homepage gundong end js*/

$(window).ready(function(){
    // $(".slider-zone").Carousel({
    //     list:'.list',
    //     duration: 500,
    //     listitem:'.slider-item'
    // });
    notesFun();
    beginList();
}); 