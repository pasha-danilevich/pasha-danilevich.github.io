const select = document.querySelector('select');



    
select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    
    $(function () {
      $('#save').click(function () {
        location.href = 'index-' + lang + '.html';
      })
    });
}

// function changeLanguage() {
//     let hash = window.location.hash;
//     hash = hash.substr(1);
//     console.log(hash);
//     // if (!allLang.includes(hash)) {
//     //     location.href = window.location.pathname + '#en';
//     //     location.reload();
//     // }
//     select.value = hash;
//     document.querySelector('title').innerHTML = langArr['unit'][hash];
//     let foo = document.querySelector('.country-flag').src = "../img/country/" + [hash] + ".svg" ;
//     console.log(foo);
//     for (let key in langArr) {
//         let elem = document.querySelector('.lng-' + key);
//         let elem_input = document.querySelector('.lng-input-' + key);
//         if (elem) {
//             elem.innerHTML = langArr[key][hash];
//         }
//         if (elem_input) {
//             elem_input.placeholder = langArr[key][hash];
//         }

//     }
    
// }

// changeLanguage();
