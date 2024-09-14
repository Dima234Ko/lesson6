const button = document.querySelector(".button");
button.addEventListener("click", buttonClick);
document.querySelector(".button").style.display="none";
var input = document.querySelector(".text-field");

let n = 0;

input.addEventListener("input", function(){
if (!input.value.length == 0){
  document.querySelector(".button").style.display="inline-block";
}
})

//Функция нажатия на кнопку
function buttonClick() {
  addElement(input.value);
}

//Функция добавления элемента
function addElement(text) {
  const listItem = document.createElement("li");
  n = getN(n);
  listItem.id = n;
  listItem.innerText = text;
  const list = document.querySelector(".list");
  list.append(listItem);
  clearInput();
 
  if (listItem.id > 4){
    let el = document.getElementById(n-4);
    el.remove();
  }

} 

function getN(n){
  return (n + 1);
}

//Функция очистки поля ввода
function clearInput(){
  input.value = "";
}

