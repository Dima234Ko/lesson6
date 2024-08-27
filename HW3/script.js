//-------------------------Task 1--------------------------//
sumNumbers();
function sumNumbers(){
  let B = 0;
  for (let A = 51; A > 50 && A < 100; A++){
  B = B + A;
  } return B;
}

console.log(sumNumbers());

//-------------------------Task 2--------------------------//

function createArr (){
  let arr = new Array;
  for (let a = 1; a < 10; a++){
    arr.push(7 * a);
  }
  return arr;
}


createArr().forEach(function(el){console.log("7 * " +  el/7 + " = " + el)});



//-------------------------Task 3--------------------------//

let int1 = Number(prompt('Enter int: '));

console.log(arithmeticMean(int1));

function arithmeticMean(int1){

  let b = 0;
  let n = 0;
  for (let a = 1; a < int1; a++){
  if(!(a % 2 == 0)) {
    b = b + a;
    n++;
  }
  }
  return(b/n);
}

console.log(arithmeticMean(int1));