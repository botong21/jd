/*
* @Author: Marte
* @Date:   2017-10-24 12:40:13
* @Last Modified by:   Marte
* @Last Modified time: 2017-10-24 14:36:08
*/
'use strict';
$(document).ready(function() {
  var n=0;
  $(".arrow-r").click(function(event) {
    /* Act on the event */
    n++;
    if(n==8)
      n=0;
    $(".in img").eq(n).fadeIn(200).siblings().fadeOut(200);
    $(".circle li").eq(n).addClass('current').siblings().removeClass("current");
    return false;
  });
  $(".arrow-l").click(function(event) {
    /* Act on the event */
    n--;
    if(n==-1)
      n=7;
    $(".in img").eq(n).fadeIn(200).siblings().fadeOut(200);
    $(".circle li").eq(n).addClass('current').siblings().removeClass("current");
    return false;
  });
  $(".circle li").click(function(event) {
    /* Act on the event */
    $(this).addClass('current').siblings().removeClass("current");
    n=$(this).index();
    $(".in img").eq(n).fadeIn(200).siblings().fadeOut(200);
  });
});