//-------------------------Task 1--------------------------//
sumNumbers();
function sumNumbers() {
  let B = 0;
  for (let A = 51; A < 100; A++) {
    B = B + A;
  }
  return B;
}

console.log(sumNumbers());

//-------------------------Task 2--------------------------//

function createArr(n) {
  let table = "";

  for (let a = 1; a < 10; a++) {
    table = table + n + " * " + a + " = " + n * a + "\n";
  }
  return table;
}

console.log(createArr(7));

//-------------------------Task 3--------------------------//

let int1 = Number(prompt("Enter int: "));

console.log(arithmeticMean(int1));

function arithmeticMean(int1) {
  let b = 0;
  let n = 0;
  for (let a = 1; a <= int1; a += 2) {
    if (!(a % 2 == 0)) {
      b = b + a;
      n++;
    }
  }
  return b / n;
}

console.log(arithmeticMean(int1));
