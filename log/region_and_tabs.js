let Kostroma = document.getElementById('Kostroma');
examinationRegion(Kostroma);
let Mirnii = document.getElementById('Mirnii');
examinationRegion(Mirnii);
let Nerungri = document.getElementById('Nerungri');
examinationRegion(Nerungri);


//Проверка доступности сервиса
function examinationRegion(element){
    element.setAttribute('style', 'background-color: green;');
}





//Проверка открытой вкладки
if (!(document.location.href.indexOf('log.html') === -1)){
    let log = document.getElementById('log');
    examinationTabs(log);
} else if (!(document.location.href.indexOf('user.html') === -1)){
    let user = document.getElementById('user');
    examinationTabs(user);
}


//Выбор элемента
function examinationTabs(element){
    element.setAttribute('style', 'background-color: #0d6efd; color: #fff; cursor: default;');
}

