// $(function(){
//   $('.box').mouseover(function(){
//     $('.box').css('background-color','#00f');
//   });
// });
// $(function(){
//   $('.box').mouseout(function(){
//     $('.box').css('background-color','#f00')
//   });
// });

$(function(){
  $('.box').mouseover(function(){
    $('.box').addClass('box-ext');
  });
});
$(function(){
  $('.box').mouseout(function(){
    $('.box').removeClass('box-ext');
  });
});

$(function(){
  $('.box').on('click',function(){
    alert('clickしました');
  });
});