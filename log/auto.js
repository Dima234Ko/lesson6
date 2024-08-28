try {
    document.getElementById('click').onclick = openPage;
} catch {
    console.log ('Добро пожаловать!');
}

// keyCheck();

//Переход на страницу
function openPage(){
    getKey();
    keyCheck();
}

//API запрос получения ключа
async function getKey() {
    let key = '1111';
    saveKey(key);
}

//Сохранение ключа в localStorage
function saveKey(key) {
    localStorage.setItem('key', key);
}

//API запрос с проверкой прав ключа на сервере
async function rightsСheck(){
   if (localStorage.getItem('key') === '1111'){
        return true;
   } else {
        return false;
   }
}

//Проверка прав
function keyCheck(){
    if (rightsСheck()){
        window.location.replace("user.html")
    } else {
        window.location.replace("index.html")  
    }
}

