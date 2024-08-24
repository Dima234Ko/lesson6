//-------------------------Task 1--------------------------//

let a = 3;
let b = 4;
let c = 5;

//Проверка, что треугольник прямоугольный
if (Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2)){
  console.log('right triangle');
}

//-------------------------Task 2--------------------------//

//Расчет длины окружности
let r = +prompt('Enter R');
let l = 2 * Math.PI * r;
alert('L = ' + l);

//Расчет площади круга
let s = Math.PI * Math.pow(r, 2);
alert('S = ' + s);

//-------------------------Task 3--------------------------//


a = prompt('Enter A');
b = prompt('Enter B');
c = prompt('Enter C');

let x = Math.pow(b, 2);

//Расчет дискриминанта
let discr = x - 4 * a * c;

//Поиск корней
if (discr > 0) {
  x1 = (-b + Math.sqrt(discr)) / (2 * a);
  x2 = (-b - Math.sqrt(discr)) / (2 * a);
  console.log('x1 = ' + x1, 'x2 = ' + x2);
  }
else if (discr == 0) {
  x = -b / (2 * a);
  console.log('x = ' + x);
  }
else
  console.log("No roots");
  
  
  