//ローディング画面との切替
$(function() {
  var h = $(window).height();
 
  $('#wrapper').css('display','none');
  $('#loader_wrapper ,#loader_inner').height(h).css('display','block');
});
 
$(window).load(function () { //全ての読み込みが完了したら実行
  $('#loader_wrapper').delay(900).fadeOut(800);
  $('#loader_inner').delay(600).fadeOut(300);
  $('#wrapper').css('display', 'block');
});
 
//10秒たったら強制的にロード画面を非表示
$(function(){
  setTimeout('stopload()',10000);
});
 
function stopload() {
  $('#wrapper').css('display','block');
  $('#loader_wrapper').delay(900).fadeOut(800);
  $('#loader_inner').delay(600).fadeOut(300);
}

//ローディング画面
var full=false;

function fill(){
  full=!full;
  document.getElementById("logocontainer").style.backgroundColor=full?"#3ebffa":"transparent";
}