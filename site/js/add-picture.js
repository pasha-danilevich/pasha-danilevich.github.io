$('#add_picture').on('click',function(){
  var list = document.getElementById("hashtag");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
  $('#hat').addClass('hat-active');
  $('body').css('overflow', 'hidden')
  render(result_picture_name, picture_name.value)
  priceCalculation(picture_price.value)
  sizeRender()
  catalogRander(listName)
})
$('#close_hat_button').on('click',function(){
  $('#hat').removeClass('hat-active')
  $('body').css('overflow', 'scroll')
  $('body,html').animate({scrollTop: 0}, 400); 
})

// --------------------------------------------------


function render(name, value) {
    name.innerHTML = value;
    let liLast = document.createElement('li');
    liLast.innerHTML = value;
    $('#hashtag').append(liLast);
}
function sizeRender() {
  let size = [0,0]
  
  size[0] = picture_height.value
  size[1] = picture_width.value
  sizeСalculation(size[0],size[1])
  result_picture_size.innerHTML = size[0] + ' х ' + size[1] + ' см'
}
function sizeСalculation(height, width) {
  let all_size = Number(height) + Number(width)
  
  if (all_size <= 80){
    render(result_picture_size, "Маленькая")
  }
  if (all_size > 80 && all_size < 180){
    render(result_picture_size, "Средняя")
  }
  if (all_size >= 180){
    render(result_picture_size, "Большая")
  }
}
function priceCalculation(argument) {
  let loc_price = Number(argument).toLocaleString()
  let price = Number(argument)
  
  if (price < 10000){
    render(result_picture_price, 'До 10 000₽')
  }else if(price < 100000){
    render(result_picture_price, '10 000₽ - 100 000₽')
  }
  if(price > 100000){
    render(result_picture_price, 'Более 100 000₽')
  }
  result_picture_price.innerHTML = loc_price + " ₽";
}
function catalogRander(list) {
  var lenList = list.length
  console.log(lenList)
  for (let i = 0; i < lenList; i++){
    let liLast = document.createElement('li');
    console.log(list[i])
    liLast.innerHTML = list[i];
    $('#hashtag').append(liLast);
  }
    
}


// -----------Catalog---------------------------------------

var listName = [];

Array.prototype.remove = function(value) {
  var idx = this.indexOf(value);
  if (idx != -1) {
    return this.splice(idx, 1);
  }
  return false;
}

$('.form-item_checkbox input').change(function(e) {
  if (e.target.checked) {
    listName.push(e.target.name);
    console.log('PUSH NAME =>', listName);
  } else {
    listName.remove(e.target.name);
    console.log('REMOVE NAME =>', listName);
  }
});






// -----------------Scroll---------------------------------

var 
    bar = $('#bar'),
    $window = $(window),
    docHeight = $(document).height(),
    winHeight = $window.height(),
    baseX = docHeight - winHeight;

$window.scroll(function(e) {      
    var x = ($window.scrollTop() / baseX) * 110;
    bar.css({'width': + x + '%'});
});