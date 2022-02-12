function sizeСalculation(height, width) {
  let all_size = Number(height) + Number(width)
  
  if (all_size < 80){
    console.log(all_size)
    result_picture_size_tag.innerHTML = "Маленькая"
  }
  if (all_size > 80 && all_size < 180){
    result_picture_size_tag.innerHTML = "Средняя"
  }
  if (all_size > 180){
    result_picture_size_tag.innerHTML = "Большая"
  }
  if (all_size <= 0){
    result_picture_size_tag.style.display = 'none'
  }else {
    result_picture_size_tag.style.display = 'block'
  }
}
function priceCalculation(argument) {
  let loc_price = Number(argument).toLocaleString()
  let price = Number(argument)
  console.log(price)
  if (price < 10000){
    result_picture_price_tag.innerHTML = 'До 10 000₽'
  }else if(price < 100000){
    result_picture_price_tag.innerHTML = '10 000₽ - 100 000₽'
    
  }
  if(price > 100000){
    result_picture_price_tag.innerHTML = 'Более 100 000₽'
  }
  if(price <= 0) {
    result_picture_price_tag.style.display = 'none'
  }else {
    result_picture_price_tag.style.display = 'block'
  }

  
  result_picture_price.innerHTML = loc_price + " ₽";
  
  
}

function render(name, name_tag, value) {
    name.innerHTML = value;
     let liLast = document.createElement('li');
    liLast.innerHTML = value;
    $('#hashtag').append(liLast);
    // name_tag.innerHTML = value;
    // name_tag.style.display = 'block'
}
// --------------------------------------------------

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

// --------------------------------------------------

picture_name.oninput = function() {
    render(result_picture_name,result_picture_tag, picture_name.value)
}

picture_price.oninput = function() {
  priceCalculation(picture_price.value)
}

let size = [0,0]
picture_height.oninput = function() {
    size[0] = picture_height.value
    result_picture_size.innerHTML = size[0] + ' х ' + size[1] + ' см'
    sizeСalculation(size[0],size[1])
} 
picture_width.oninput = function() {
    size[1] = picture_width.value
    result_picture_size.innerHTML = size[0] + ' х ' + size[1] + ' см'
    sizeСalculation(size[0],size[1])
} 

