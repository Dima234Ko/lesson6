//-------------------------Task 1--------------------------//
const a = 10;
const b = 11;

console.log(multiplication(a, b));

function multiplication(a, b) {
  let c = a * b;
  return c;
}

//-------------------------Task 2--------------------------//
const first = "Next";
const second = "Lvl";

console.log(calculatingTheLength(first, second));

function calculatingTheLength(first, second) {
  let totalLength = first.length + second.length;
  return totalLength;
}

//-------------------------Task 3--------------------------//
const num = prompt("Enter number: ");
const numberNum = Number(num);

if (!isNaN(numberNum)) {
  console.log(sumFigure(num));
} else alert("Введите число");

function sumFigure(num) {
  let number3 = num % 10;
  let number1 = (num - (num % 100)) / 100;
  let number2 = (num - number1 * 100 - number3) / 10;
  return number1 + number2 + number3;
}
