//-------------------------Task 1--------------------------//

let B = 0;
for (let A = 51; A > 50 && A < 100; A++){
B = B + A;
}
console.log(B);

//-------------------------Task 2--------------------------//

for (let A = 1; A < 10; A++){
  console.log("7 * " +  A + " = " + 7 * A);
  }

//-------------------------Task 3--------------------------//

let int1 = Number(prompt('Enter int: '));
B = 0;
N = 0;
for (let A = 1; A < int1; A++){
if(!(A % 2 == 0)) {
B = B + A;
N++;
}
}
console.log(B/N);