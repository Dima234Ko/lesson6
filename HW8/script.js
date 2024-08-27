//-------------------------Task 1--------------------------//

let input = prompt("DD.MM.YYYY");
const [day, month, year] = input.split(".");

const inputDate = new Date(`${year}-${month}-${day}`);
console.log(DayWeekend(inputDate));

function DayWeekend(inputDate){
 
  switch(inputDate.getDay()){
    case 0:
      return "sun";
    case 1:
      return "mon";
    case 2:
        return "tue";
    case 3:
      return "wed";
    case 4:
      return "thu";
    case 5:
      return "fri";
    default:
      return "sat";
  }
}


//-------------------------Task 2--------------------------//

let date = new Date();

//Расчет количества минут с начала дня

function calculationMin (date){
  let min = (date.getHours()*60) + date.getMinutes();
  return min;
}

console.log(calculationMin (date));


//-------------------------Task 3--------------------------//

//Ввод возраста пользователей и запись в переменную
let ageUser1 = prompt("Enter age 1st user" + "\n" + "DD.MM.YYYY");
let ageUser2 = prompt("Enter age 2st user" + "\n" + "DD.MM.YYYY");

//Запись переменной в виде даты
let date1 = CreateDate(ageUser1);
let date2 = CreateDate(ageUser2);

console.log (comparisonData(date1, date2));

//Сравнение дат и вывод результата в консоль
function comparisonData(date1, date2){
  if (date1 > date2) {
    return "1st user younger";
  } else
    return "2st user younger";
}

//Функция преобразования строки в дату
function CreateDate(input){
    const [day, month, year] = input.split(".");
    const inputDate = new Date(`${year}-${month}-${day}`);
    return inputDate;
}

  
  
  