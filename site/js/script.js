//my function ---------------------------
function splitClass(argument) {
  let str = argument;
  let arr = str.split('-');
  return arr
}
function removeActiveClass(father, class_activator) {
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
      $('#filter_button').addClass('filter-button-active');
      document.getElementById('bars_button_i').style.display = 'block';
      document.getElementById('times_button_i').style.display = 'none';
    }
    else{
      $('#menu_bar').addClass('menu-bar-active');
      removeActiveClass('#filter_button','filter-button-active')
      document.getElementById('bars_button_i').style.display = 'none';
      document.getElementById('times_button_i').style.display = 'block';
    }
  });

  $('#search_button').on('click',function(){
    if($('#search_bar').hasClass('search-bar-active')){
      removeActiveClass('#search_bar','search-bar-active')
      removeActiveClass('#search','search-active')
    }
    else{
      $('#search_bar').addClass('search-bar-active');
      $('#search').addClass('search-active');
    }
  });

  $('#profile_icon').on('click',function(){
    if($('#dropdown_menu').hasClass('dropdown-menu-active')){
      removeActiveClass('#dropdown_menu','dropdown-menu-active')
      $('#filter_button').addClass('filter-button-active');
    }
    else{
      removeActiveClass('#filter_button','filter-button-active')
      $('#dropdown_menu').addClass('dropdown-menu-active');
    }
  });
  $('#filter_button').on('click',function(){
    $('#filter').addClass('filter-active');
    document.getElementById('body').style.overflow = 'hidden';
  });
  $('#close_filter_button').on('click',function(){
    removeActiveClass('#filter','filter-active')
    document.getElementById('body').style.overflow = 'auto';
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
$(document).click(function (e) {
  if($('#search_bar').hasClass('search-bar-active')){
    if (splitClass(event.target.className)[0] != 'search'){
      removeActiveClass('#search_bar','search-bar-active')
      removeActiveClass('#search','search-active')
    }
  } 
});
$(document).click(function (e) {
  if($('#dropdown_menu').hasClass('dropdown-menu-active')){
    if (splitClass(event.target.className)[0] != 'dropdown'){
      console.log(splitClass(event.target.className)[0])
      removeActiveClass('#dropdown_menu','dropdown-menu-active')
    }
  } 
});

$(window).scroll(function(e) {      
    if (window.pageYOffset > 50){
      removeActiveClass('#menu_bar','menu-bar-active')
      removeActiveClass('#dropdown_menu','dropdown-menu-active')
      removeActiveClass('#search_bar','search-bar-active')
      removeActiveClass('#search','search-active')
      document.getElementById('bars_button_i').style.display = 'block';
      document.getElementById('times_button_i').style.display = 'none';
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
    switch (result_user_name.innerHTML.length) {
      case 0:
        result_user_name.innerHTML ='Передумал?';
        break;
      case 1:
      case 2:
      case 3:
        result_user_name.innerHTML = user_name.value + ', такое ккутое имя)))';
        break;
      case 4:
      case 5:
      case 6:
        result_user_name.innerHTML = user_name.value + ', довольно строго.';
        break;
      case 7:
      case 8:
      case 9:
        result_user_name.innerHTML = user_name.value + ', супер!!!';
        break;
      default:
        result_user_name.innerHTML = user_name.value + ', ого o_O';
    }
  };


// Получаем нужный элемент
var conteinerOfPic = document.querySelector('.conteiner-of-pic');
const halfScreenHeight = window.screen.height/2
var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top + halfScreenHeight,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom - halfScreenHeight
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    $('#filter_button').addClass('filter-button-active');
  } else {
    // Если элемент не видно, то запускаем этот код
    removeActiveClass('#filter','filter-active')
    $('#filter_button').removeClass('filter-button-active')
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  if (conteinerOfPic){
    Visible (conteinerOfPic);
  }
  
});



