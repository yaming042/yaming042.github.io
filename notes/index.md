---
layout: page
title: 工作日记
author: Tim
date:   2017-01-16 15:30:00
permalink: /notes/
---
<div id="wrapper-250">
  <ul class="accordion">
    <li id="one" class="files"> 
      <a href="#one">五月份<span>495</span></a>
      <ul class="sub-menu">
        <li><a href="#pos51"><em>01</em>5月1周<span>42</span></a></li>
        <li><a href="#pos52"><em>02</em>5月2周<span>87</span></a></li>
        <li><a href="#pos53"><em>03</em>5月3周<span>366</span></a></li>
        <li><a href="#pos54"><em>04</em>5月4周<span>1</span></a></li>
      </ul>
    </li>
    <li id="two" class="mail"> 
      <a href="#two">六月份<span>495</span></a>
      <ul class="sub-menu">
        <li><a href="#pos61"><em>01</em>6月1周<span>42</span></a></li>
        <li><a href="#pos62"><em>02</em>6月2周<span>87</span></a></li>
        <li><a href="#pos63"><em>03</em>6月3周<span>366</span></a></li>
        <li><a href="#pos64"><em>04</em>6月4周<span>1</span></a></li>
      </ul>
    </li>
    <li id="three" class="cloud"> 
      <a href="#three">七月份<span>495</span></a>
      <ul class="sub-menu">
        <li><a href="#pos71"><em>01</em>7月1周<span>42</span></a></li>
        <li><a href="#pos72"><em>02</em>7月2周<span>87</span></a></li>
        <li><a href="#pos73"><em>03</em>7月3周<span>366</span></a></li>
        <li><a href="#pos74"><em>04</em>7月4周<span>1</span></a></li>
      </ul>
    </li>
    <li id="four" class=""> 
      <a href="#four">八月份<span>495</span></a>
      <ul class="sub-menu">
        <li><a href="#pos81"><em>01</em>8月1周<span>42</span></a></li>
        <li><a href="#pos82"><em>02</em>8月2周<span>87</span></a></li>
        <li><a href="#pos83"><em>03</em>8月3周<span>366</span></a></li>
        <li><a href="#pos84"><em>04</em>8月4周<span>1</span></a></li>
      </ul>
    </li>

    <li id="" class=""> 
      <a href="#">九月份<span>495</span></a>
      <ul class="sub-menu">
        <li><a href="#pos91"><em>01</em>9月1周<span>42</span></a></li>
        <li><a href="#pos92"><em>02</em>9月2周<span>87</span></a></li>
        <li><a href="#pos93"><em>03</em>9月3周<span>366</span></a></li>
        <li><a href="#pos94"><em>04</em>9月4周<span>1</span></a></li>
      </ul>
    </li>
    <li id="" class=""> 
      <a href="#">十月份<span>495</span></a>
      <ul class="sub-menu">
        <li><a href="#pos101"><em>01</em>10月1周<span>42</span></a></li>
        <li><a href="#pos102"><em>02</em>10月2周<span>87</span></a></li>
        <li><a href="#pos103"><em>03</em>10月3周<span>366</span></a></li>
        <li><a href="#pos104"><em>04</em>10月4周<span>1</span></a></li>
      </ul>
    </li>
    <li id="" class=""> 
      <a href="#">十一月份<span>495</span></a>
      <ul class="sub-menu">
        <li><a href="#pos111"><em>01</em>11月1周<span>42</span></a></li>
        <li><a href="#pos112"><em>02</em>11月2周<span>87</span></a></li>
        <li><a href="#pos113"><em>03</em>11月3周<span>366</span></a></li>
        <li><a href="#pos114"><em>04</em>11月4周<span>1</span></a></li>
      </ul>
    </li>
    <li id="" class=""> 
      <a href="#">十二月份<span>495</span></a>
      <ul class="sub-menu">
        <li><a href="#pos121"><em>01</em>12月1周<span>42</span></a></li>
        <li><a href="#pos122"><em>02</em>12月2周<span>87</span></a></li>
        <li><a href="#pos123"><em>03</em>12月3周<span>366</span></a></li>
        <li><a href="#pos124"><em>04</em>12月4周<span>1</span></a></li>
      </ul>
    </li>
  </ul>
</div>
<script type="text/javascript">
  var accordion_head = $('.accordion > li > a'),
      accordion_body = $('.accordion li > .sub-menu');
      // Open the first tab on load
  accordion_head.first().addClass('active').next().slideDown('normal');
  // Click function
  accordion_head.on('click', function(event) {
      // Disable header links
      event.preventDefault();
      // Show and hide the tabs on click
      if ($(this).attr('class') != 'active'){
          accordion_body.slideUp('normal');
          $(this).next().stop(true,true).slideToggle('normal');
          accordion_head.removeClass('active');
          $(this).addClass('active');
      }
  });
  $(".sub-menu li a").on("click",function(event){
    event.preventDefault();
    var href = $(this).attr("href").slice(1);
    var pos = $("#"+href).offset().top - 72;
    $(document.body).animate({scrollTop:pos+'px'},500);
  });

  var ua = navigator.userAgent;
  function isMobile(){
    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
        isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
        isAndroid = ua.match(/(Android)\s+([\d.]+)/),
        isMobile = isIphone || isAndroid;
      return isMobile;
  }

  var direction;//1:上到下,2:下到上,3:左到右,4:右到左
  var startX,startY;
  $("#wrapper-250").on("touchstart", function(e) {
    // e.preventDefault();
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
  });
  $("#wrapper-250").on("touchmove", function(e) {
      // e.preventDefault();
      var moveEndX = e.originalEvent.changedTouches[0].pageX,
      moveEndY = e.originalEvent.changedTouches[0].pageY,
      X = moveEndX - startX,
      Y = moveEndY - startY;
   
      var w = X < 0 ? X*-1 : X;     //x轴的滑动值
      var h = Y < 0 ? Y*-1 : Y;     //y轴的滑动值
      if(w < h){                //如果是在x轴中滑动
         event.preventDefault();
         console.log("preventDefault");
      }else{
        if ( X > 0 && isMobile()) {
            direction = 3;
             $("#wrapper-250").css("width","15px");
        }else if ( X < 0 && isMobile()) {
            direction = 4;
             $("#wrapper-250").css("width","250px");
        }else if ( Y > 0 && isMobile()) {
            direction = 1;
        }else if ( Y < 0 && isMobile()) {
            direction = 2;
        }else{
            console.log("just touch");
        }
      }
  });

</script>
<div class="alert alert-warning" role="alert">
<h2>2016</h2>
<h4 id="pos51">5月1周(浏览器兼容)</h4>
<p>1.不同浏览器的标签默认margin和padding值是不同的，所以可以先重置浏览器默认样式再写自己的当时，可以借用一些现成的reset.css，不过要选合适点的。</p>
<p class="red">2.块元素float后有横向margin时，IE6下的双边距问题。</p>
<p class="indent2">样式中加入display:inline，转为行内元素</p>
<p class="red">3.行内元素设置display:block后采用float布局，有横向margin是IE6双边距问题。</p>
<p class="indent2">在display:block后面再加上display:inline;display:table</p>
<p class="red">4.设置最小高度标签(一般小于10px)IE6，IE7等高度超出设置高度</p>
<p class="indent2">给超出高度的标签设置overflow:hidden或设置行高小于自己设置的高度</p>
<p class="red">5.图片默认的间距</p>
<p class="indent2">使用float可以去除间距</p>
<p class="red">6.透明度属性</p>
<p class="indent2">IE下使用filter：alpha(opacity:50)滤镜，其他浏览器opacity:0.5</p>
<p class="red">7.谷歌下字体小于12px，则按12px显示</p>
<p class="indent2">-webkit-text-size-adjust:none;或用css属性-webkit-transform:scale(0.8);</p>
<p class="red">8.对button设置红色背景色，在苹果手机端会变成粉色</p>
<p class="indent2">在样式中加上<br >input[type="button"],input[type="submit"],input[type="reset"]{-webkit-appearance:none;}<br>textarea{-webkit-appearance；none;}</p>
<p class="red">9.background兼容性问题</p>
<p class="indent2">IE8下这种写法不支持<br>background:url(xxx) no-repeat center \cover;应该分开写，background:url(xx) no-repeat;background-size:cover;</p>
<p class="red">10.word-spacing对中文无效</p>
<p class="indent2">文字中间加空格就可以了</p>
<p>&nbsp;</p>
<h4 id="pos52">5月2周(性能优化)</h4>
<p class="red">减少HTTP请求</p>
<p class="indent2">比如合并图片，合并css样式和js文件，图片较多的页面可以使用图片懒加载等技术</p>
<p class="red">正确理解Repaint(重绘)和Reflow(重排)</p>
<p class="indent2">设置元素的宽高等属性会导致Repaint，所以最好通过class改变样式，有动画效果position属性应设置为fixed或absolute，这样不会影响其他布局，若不能则权衡速度与平滑性</p>
<p class="red">减少对DOM的操作</p>
<p class="indent2">修改和访问DOM元素会造成页面的Repaint和Reflow，减少对DOM元素的查询和修改，查询时可将其赋给局部变量</p>
<p class="red">使用json格式来进行数据交换</p>
<p class="indent2">json是一种轻量级的数据交换格式，同时json是JavaScript原生格式，JavaScript中处理json数据不需要任何特殊的API或工具包</p>
<p>推荐使用CDN加速(内容分发网络)</p>
<p>将css和js代码放到外部文件中应用，css放头，js放尾，<span>&lt;/script&gt;</span>会让页面等待脚本的解析和执行，执行完成后才能继续渲染页面，建议把js代码放到<span>&lt;/body&gt;</span>之前，既能有效阻止js的阻塞，又能使HTML结构更快的释放</p>
<p class="red">控制cookie大小和污染</p>
<p class="indent2">cookie是本地磁盘文件，每次浏览器都会去响应的读取，所以建议去除不必要的cookie，合理的设置cookie的过期时间</p>
<h4 id="pos53">5月3周</h4>
<p class="grey">暂无</p>
<h4 id="pos54">5月4周</h4>
<p class="grey">暂无</p>
<p>&nbsp;<br>&nbsp;</p>

<h4 id="pos61">6月1周</h4>
<p class="red">两列等高</p>
<p>1.正内补丁和负外补丁(padding-bottom:1000px;margin-bottom:-1000px;),父元素overflow:hidden;</p>
<p>2.利用JavaScript动态修正</p>
<p>3.可以用表单table来等高</p>
<p>&nbsp;</p>
<h4 id="pos62">6月2周</h4>
<p class="red">垂直居中问题</p>
<p>定宽高的垂直居中</p>
<p class="red">居中1</p>
{% highlight ruby %}
div{
  width:100px;
  height:100px;
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  top:0;
  margin:auto;
}
{% endhighlight %}
<p>一般用于弹出框</p>
<p class="red">居中2</p>
{% highlight ruby %}
div{
  position:relative;
  width:100px;
  height:100px;
  left:50%;
  top:50%；
  margin-left:-50px;
  margin-top:-50px;
}
{% endhighlight %}
<p class="red">居中3(可以不定宽高的)</p>
{% highlight ruby %}
div1{
  width:100px;
  height:100px;
  display:table;
}
div2{
  display:table-cell;
  vertical-align:middle;
}
{% endhighlight %}

<p>&nbsp;</p>
<h4 id="pos63">6月3周</h4>
<p>div下select宽度100%，input宽度100%，不对齐，原因是input的border导致的，可以修改border就可以了</p>

<p>&nbsp;</p>
<h4 id="pos64">6月4周</h4>
<p class="red">清除浮动</p>
<p class="indent2">1.增加空标签，如</p>
{% highlight ruby %}
<div style="clear:both;"></div>
{% endhighlight %}
<p class="indent2">2.利用伪类，如</p>
{% highlight ruby %}
clear:after{
  content:"";
  clear:both;
  height:0;
  display:block;
  visibility:hidden;
}
{% endhighlight %}
<p class="indent2">3.父容器设置overflow:hidden;属性</p>
<p class="red">注：元素同时用float和position:absolute时，清除浮动会有兼容问题，此时可以用1,3的办法</p>
<p>&nbsp;<br>&nbsp;</p>
<h4 id="pos71">7月1周</h4>
<p class="red">placeholder用js统一兼容问题</p>
{% highlight ruby %}
<input type="text" onfocus="if(this.value == 'xxx'){this.value = 'sss';}" onblur="if(this.value == 'xxxx'){this.value = 'aaaa';}" />
控制其样式：
input{color:#777;} => input:focus{display:block;color:#000;}
{% endhighlight %}
<p>&nbsp;</p>
<h4 id="pos72">7月2周</h4>
<p class="red">一般div错位：</p>
<p class="indent2">1.检查是否position:absolute后是否没设置高度</p>
<p class="indent2">2.检查float后是否没有清除浮动</p>
<p class="indent2">3.检查元素的z-index值，是否被覆盖</p>
<p class="indent2">4.检查是否用了iframe，iframe默认是撑不开父容器的</p>
<p class="indent2">5.检查div标签是否正确闭合</p>
<p class="indent2">6.absolute后top:20%无效，确认各父容器的height存在且正确</p>
<p class="indent2">7.float后位置不对也可能是各容器高度不一样导致的</p>
<p class="indent2">8.检查盒模型是否一致</p>

<p>&nbsp;</p>
<h4 id="pos73">2017-3月1周</h4>
<p class="red">image加载错误时加载默认图片</p>
{% highlight ruby %}
<img src="应该加载的图片地址" onerror="this.src='默认的图片加载地址'">
{% endhighlight %}
<p>&nbsp;</p>
<h4 id="pos74">2017-3月1周</h4>
<p class="red">一种左右结构的HTML</p>
<p>两个标签均为块元素，然后浮动第一个，第二个overflow:hidden;这样就能左右排列，然后清除浮动，在父元素上overflow:hidden; 这样的结构主要避免后面元素内内容过多导致包裹的现象。例如</p>
<img src="{{ site.baseurl }}/public/img/170303-1.png" alt="" style="width:250px;">
{% highlight ruby %}
<style type="text/css">
  .main{overflow: hidden;}
  .img{float: left;}
  .main p{overflow: hidden;}
</style>
<div class="main">
  <img src="xxx.jpg" alt="" class="img">
  <p>dffdfsdfsdfasfdsfsdfasfasdfsdfsdfddfffaff</p>
</div>
{% endhighlight %}
<p>之后就是这样</p>
<img src="{{ site.baseurl }}/public/img/170303-2.png" alt="" style="width:250px;">
<p>&nbsp;</p>
<p>&nbsp;<br>&nbsp;</p>
<h4 id="pos81"></h4>
<p class="grey">暂无</p>
<h4 id="pos82"></h4>
<p class="grey">暂无</p>
<h4 id="pos83"></h4>
<p class="grey">暂无</p>
<h4 id="pos84"></h4>
<p class="grey">暂无</p>
<p>&nbsp;<br>&nbsp;</p>
<h4 id="pos91"></h4>
<p class="grey">暂无</p>
<h4 id="pos92"></h4>
<p class="grey">暂无</p>
<h4 id="pos93"></h4>
<p class="grey">暂无</p>
<h4 id="pos94"></h4>
<p class="grey">暂无</p>
<p>&nbsp;<br>&nbsp;</p>
<h4 id="pos101"></h4>
<p class="grey">暂无</p>
<h4 id="pos102"></h4>
<p class="grey">暂无</p>
<h4 id="pos103"></h4>
<p class="grey">暂无</p>
<h4 id="pos104"></h4>
<p class="grey">暂无</p>
<p>&nbsp;<br>&nbsp;</p>
<h4 id="pos111"></h4>
<p class="grey">暂无</p>
<h4 id="pos112"></h4>
<p class="grey">暂无</p>
<h4 id="pos113"></h4>
<p class="grey">暂无</p>
<h4 id="pos114"></h4>
<p class="grey">暂无</p>
<p>&nbsp;<br>&nbsp;</p>
<h4 id="pos121"></h4>
<p class="grey">暂无</p>
<h4 id="pos122"></h4>
<p class="grey">暂无</p>
<h4 id="pos123"></h4>
<p class="grey">暂无</p>
<h4 id="pos124"></h4>
<p class="grey">暂无</p>

</div>
