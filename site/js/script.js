$(function (){
  $('#sing_up_button').click(function (){
    $('#sing_up_back_show').show();
  })
  $('#close_sing_up').click(function(){
    $('#sing_up_back_show').hide();
  })
});


$(function () {
  $('#options_frame_').click(function () {
    $('#options_frame').show();
  })
  $('#close').click(function () {
    $('#options_frame').hide();
  })
  $('#h2_button').click(function () {
    $('#list').show();
  });
});

$(document).ready(function(){
  $('.menu-mobile').on('click',function(){
    if($(this).next().hasClass('active')){
      $(this).next().removeClass('active');
    }
    else{
      $('.menu_item').removeClass('active');
      $(this).next().addClass('active');
    }
  });
});



