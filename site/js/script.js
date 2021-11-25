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


var checkbox =  $('#menu-checkbox');
function checkboxClose() {
  document.querySelector('#menu-checkbox').checked = false;
  $('#menuToggle').css({'top': + -32 + 'px'});
  menuVoidBack.css({"width": 0 + 'px'})
  menuVoidBack.css({"height": 0 + 'px'})
}

const pageWidth = document.documentElement.scrollWidth
const windowInnerHeight = window.innerHeight
var menuVoidBack = $('.menu-void-back')


$(function () {
  checkbox.click(function () {
    if (this.checked) {
      $('#menuToggle').css({'top': + -30 + 'px'});
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

// window.addEventListener('resize', function(event) {
//   menuVoidBack.css({"width": pageWidth})
//   menuVoidBack.css({"height": windowInnerHeight})
//   console.log('fff')
// }, true);

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });
});


window.onload = function(event) {
  console.log("load");
}

