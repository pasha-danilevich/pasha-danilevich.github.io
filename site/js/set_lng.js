const allLang = ['en', 'ru'];

let hash = window.location.hash;
    hash = hash.substr(1);
    console.log(hash);

if (!allLang.includes(hash)) {
        location.href = window.location.pathname + '#en';
    }