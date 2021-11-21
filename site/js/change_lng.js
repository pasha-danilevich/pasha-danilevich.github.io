const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua'];

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    $(function () {
      $('#save').click(function () {
        location.reload();
      })
    });
}

function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    document.querySelector('title').innerHTML = langArr['unit'][hash];
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        let elem_input = document.querySelector('.lng-input-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
        if (elem_input) {
            elem_input.placeholder = langArr[key][hash];
        }

    }
    
}

changeLanguage();