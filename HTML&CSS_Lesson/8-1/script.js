var $spMenu=$('#sp-menu')
var $spMenuLi=$("#sp-menu li")
var $navHamburger=$('.nav-hamburger')
var $ignitionLink=$('.nav-hamburger, #sp-menu a')

$(function(){
  $ignitionLink.on('click',switching);
  $(window).resize(function(){
    var win = $(window).width();
    var p = 768;
    // 単岐選択処理の記述でも可能であるが、switchingの処理速度が遅く、
    // 画面表示が遅れるため、hide・showメソッドを用いた双岐選択処理とした。
    if(win > p){
      $spMenuLi.hide();
      if($navHamburger.hasClass('active')){
        switching();
      };
    } else {
      $spMenuLi.show();
    };
  });
});

function switching(){
  $navHamburger.toggleClass('active');
  $spMenu.fadeToggle();
};