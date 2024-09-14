//-------------------------Task 1--------------------------//

function diff(a, b) {
  if (a >= b) {
    return a - b;
  } else return b - a;
}

let a = +prompt("Enter number A");
let b = +prompt("Enter number B");
const res1 = diff(a, b);
console.log(res1);

//-------------------------Task 2--------------------------//

function isWord(str) {
  let mas = str.split(" ");
  if (mas.length > 1) {
    return false;
  } else return true;
}

let str = prompt("Enter string");
const res2 = isWord(str);
console.log(res2);

//-------------------------Task 3--------------------------//

function pow(a1, x) {
  let res = a1;

  for (let i = 1; i < x; i++) {
    res = res * a1;
  }

  return res;
}

let a1 = prompt("Enter number A");
let x = prompt("Enter number x");

const res = pow(a1, x);
console.log(res);
