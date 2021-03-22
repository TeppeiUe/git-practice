$(function() {
  $('.menu-trigger').on('click', function(event) {
    // activeクラスを追加することにより、≡ → ×に変換する
    $(this).toggleClass('active');
    // 要素のフェードアウトとフェードインを切り替えるメソッド
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});