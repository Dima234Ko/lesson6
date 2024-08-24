//-------------------------Task 1--------------------------//
const a = 10;
const b = 11;
const c = a * b;
console.log(c);


//-------------------------Task 2--------------------------//
const first = 'Next';
const second = 'Lvl';
const totalLength = first.length + second.length;
console.log(totalLength);


//-------------------------Task 3--------------------------//
const num = prompt('Enter number: ');
const number3 = num % 10;
const number1 = (num - num % 100)/100;
const number2 = (num - number1 * 100 - number3)/10;
console.log(number1 + number2 + number3);