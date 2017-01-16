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
      <a href="#one">一月份<span>495</span></a>
      <ul class="sub-menu">
        <li><a href="#"><em>01</em>1月1周<span>42</span></a></li>
        <li><a href="#"><em>02</em>1月2周<span>87</span></a></li>
        <li><a href="#"><em>03</em>1月3周<span>366</span></a></li>
        <li><a href="#"><em>04</em>1月4周<span>1</span></a></li>
        <li><a href="#"><em>05</em>1月5周<span>10</span></a></li>
      </ul>
    </li>
    <li id="two" class="mail"> 
      <a href="#two">二月份<span>495</span></a>
      <ul class="sub-menu">
        <li><a href="#"><em>01</em>2月1周<span>42</span></a></li>
        <li><a href="#"><em>02</em>2月2周<span>87</span></a></li>
        <li><a href="#"><em>03</em>2月3周<span>366</span></a></li>
        <li><a href="#"><em>04</em>2月4周<span>1</span></a></li>
        <li><a href="#"><em>05</em>2月5周<span>10</span></a></li>
      </ul>
    </li>
    <li id="three" class="cloud"> 
      <a href="#three">三月份<span>495</span></a>
      <ul class="sub-menu">
        <li><a href="#"><em>01</em>3月1周<span>42</span></a></li>
        <li><a href="#"><em>02</em>3月2周<span>87</span></a></li>
        <li><a href="#"><em>03</em>3月3周<span>366</span></a></li>
        <li><a href="#"><em>04</em>3月4周<span>1</span></a></li>
        <li><a href="#"><em>05</em>3月5周<span>10</span></a></li>
      </ul>
    </li>
    <li id="four" class="sign"> 
      <a href="#four">四月份<span>495</span></a>
      <ul class="sub-menu">
        <li><a href="#"><em>01</em>4月1周<span>42</span></a></li>
        <li><a href="#"><em>02</em>4月2周<span>87</span></a></li>
        <li><a href="#"><em>03</em>4月3周<span>366</span></a></li>
        <li><a href="#"><em>04</em>4月4周<span>1</span></a></li>
        <li><a href="#"><em>05</em>4月5周<span>10</span></a></li>
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
</script>
<div class="alert alert-warning" role="alert">
<h3>2016</h3>
<h4>1月1周</h4>
<h4>1月2周</h4>
<h4>1月3周</h4>
<h4>1月4周</h4>
</div>
