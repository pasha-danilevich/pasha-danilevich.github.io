$(function (){
  $('#sing_up_button').click(function (){
    $('#sing_up_back_show').show();
  })
  $('#close_sing_up').click(function(){
    $('#sing_up_back_show').hide();
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


var checkbox =  $('#menu-checkbox');
function checkboxClose() {
  document.querySelector('#menu-checkbox').checked = false;
  menuVoidBack.css({"width": 0 + 'px'})
  menuVoidBack.css({"height": 0 + 'px'})
}

const pageWidth = document.documentElement.scrollWidth
const windowInnerHeight = window.innerHeight
var menuVoidBack = $('.menu-void-back')


$(function () {
  checkbox.click(function () {
    if (this.checked) {
      
      menuVoidBack.css({"width": pageWidth})
      menuVoidBack.css({"height": windowInnerHeight})
      
      $(function () {
        menuVoidBack.click(function () {
          checkboxClose()
        })
      });

    }
    else {
      checkboxClose()
    }
  })
});
if(pageWidth < 500){
  $('#menu').css({"width": pageWidth + 70})
}
$(window).scroll(function(e) {      
    if (window.pageYOffset > 200){
  checkboxClose()
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

$(document).ready (function() {
    var ishod = $('#view_ing_width').width();
    console.log(ishod);
});