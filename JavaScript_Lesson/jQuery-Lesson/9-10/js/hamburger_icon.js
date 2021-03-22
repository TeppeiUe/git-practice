var $menuTrigger=$('.menu-trigger');

$(function(){
  $menuTrigger.on('click',function(){
    $(this).toggleClass('active');
  });
});