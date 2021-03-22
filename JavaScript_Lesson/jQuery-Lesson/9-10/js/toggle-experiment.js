var $box1=$('.box1');
var $box2=$('.box2');
var $box3=$('.box3');
var $box4=$('.box4');

$(function(){
  $box1.mouseover(function(){
    $box1.addClass('box1-add');
  }).mouseout(function(){
    $box1.removeClass('box1-add');
  });

  $box2.hover(function(){
    $box2.addClass('box2-add');
  }, function(){
    $box2.removeClass('box2-add');
  });

  $box3.on('click',function(){
    if($box3.hasClass('box1-add')){
      $box3.removeClass('box1-add');
    }else{
      $box3.addClass('box1-add');
    }
  });

  $box4.on('click',function(){
    $box4.toggleClass('box2-add');
  });
});