//my function ---------------------------
function splitClass(argument) {
  let str = argument;
  let arr = str.split('-');
  return arr
}
function removeActiveClass(father, class_activator) {
  //let father = "'" + father + "'"
  $(father).removeClass(class_activator)
}
//----------------------------------------
$(function (){
  $('#sign_up_button').click(function (){
    $('#sign_up_back_show').show();
  })
  $('#close_sign_up').click(function(){
    $('#sign_up_back_show').hide();
  })
});

$(function (){
  $('#log_in_button').click(function (){
    $('#log_in_back_show').show();
  })
  $('#close_log_in').click(function(){
    $('#log_in_back_show').hide();
  })
});

$(function () {
  $('#options_frame_').click(function () {
    $('#options_frame').show();
  })
  $('#close').click(function () {
    $('#options_frame').hide();
  })
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




$(document).ready(function(){
  $('#bars_button').on('click',function(){
    if($('#menu_bar').hasClass('menu-bar-active')){
      removeActiveClass('#menu_bar','menu-bar-active')
      document.getElementById('bars_button_i').style.display = 'block';
      document.getElementById('times_button_i').style.display = 'none';
    }
    else{
      $('#menu_bar').addClass('menu-bar-active');
      document.getElementById('bars_button_i').style.display = 'none';
      document.getElementById('times_button_i').style.display = 'block';
    }
  });
});

$(document).click(function (e) {
  if($('#menu_bar').hasClass('menu-bar-active')){
    if (splitClass(event.target.className)[0] != 'menu'){
      removeActiveClass('#menu_bar','menu-bar-active')
      document.getElementById('bars_button_i').style.display = 'block';
      document.getElementById('times_button_i').style.display = 'none';

    }
  } 
});

$(window).scroll(function(e) {      
    if (window.pageYOffset > 200){
      removeActiveClass('#menu_bar','menu-bar-active')
    }
});




$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });
});


window.onload = function(event) {
  console.log("web-load");
}

user_name.oninput = function() {
    result_user_name.innerHTML = user_name.value;
    console.log(result_user_name.innerHTML.length)
    switch (result_user_name.innerHTML.length) {
      case 0:
        result_user_name.innerHTML ='Передумал?';
        break;
      case 1:
      case 2:
      case 3:
        result_user_name.innerHTML = user_name.value + ', такое короткое имя)))';
        break;
      case 4:
      case 5:
      case 6:
        result_user_name.innerHTML = user_name.value + ', довольно строго.';
        break;
      case 7:
      case 8:
      case 9:
        result_user_name.innerHTML = user_name.value + ', что надо, хотя...';
        break;
      default:
        result_user_name.innerHTML = user_name.value + ', ого o_O';
    }
  };



