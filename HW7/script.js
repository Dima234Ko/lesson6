const button = document.querySelector(".button");
button.addEventListener("click", buttonClick);
document.querySelector(".button").style.display="none";

let input = document.querySelector(".text-field");

let n = 0;

input.addEventListener("input", function(){
if (!input.value.length == 0){
  document.querySelector(".button").style.display="inline-block";
}
})

//Функция нажатия на кнопку
function buttonClick() {
  addElement(input.value);
  console.log(event.target['.text-field'].value);
}

//Функция добавления элемента
function addElement(text) {
  const listItem = document.createElement("li");
  n = n + 1;
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

//Функция очистки поля ввода
function clearInput(){
  input.value = "";
}

