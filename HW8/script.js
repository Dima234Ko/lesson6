//-------------------------Task 1--------------------------//

let input = prompt("DD.MM.YYYY");
const [day, month, year] = input.split(".");

const inputDate = new Date(`${year}-${month}-${day}`);
console.log(DayWeekend(inputDate));

function DayWeekend(inputDate){
 
  switch(inputDate.getDay()){
    case 0:
      return "sun";
      break;
    case 1:
      return "mon";
      break;
    case 2:
        return "tue";
        break;
    case 3:
      return "wed";
      break;
    case 4:
      return "thu";
      break;
    case 5:
      return "fri";
      break;
    default:
      return "sat";
  }
}


//-------------------------Task 2--------------------------//

let date = new Date();

//Расчет количества минут с начала дня
let min = (date.getHours()*60) + date.getMinutes();

console.log(min);


//-------------------------Task 3--------------------------//

//Ввод возраста пользователей и запись в переменную
let ageUser1 = prompt("Enter age 1st user" + "\n" + "DD.MM.YYYY");
let ageUser2 = prompt("Enter age 2st user" + "\n" + "DD.MM.YYYY");

//Запись переменной в виде даты
let date1 = CreateDate(ageUser1);
let date2 = CreateDate(ageUser2);

//Сравнение дат и вывод результата в консоль
if (date1 > date2) {
    console.log("1st user younger");
} else
    console.log("2st user younger");

//Функция преобразования строки в дату
function CreateDate(input){
    const [day, month, year] = input.split(".");
    const inputDate = new Date(`${year}-${month}-${day}`);
    return inputDate;
}

  
  
  