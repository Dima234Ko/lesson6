//-------------------------Task 1--------------------------//

let array = [1, 2, 3, 4, 5, 10, 7, 8, 9, 6];
let newEl = 0;

array.forEach(function (el) {
  newEl = newEl + el;
});
console.log(newEl);

//-------------------------Task 2--------------------------//

let newArray = array.map(function (el) {
  let modified = 2 * el;
  return modified;
});
console.log(newArray);

//-------------------------Task 3--------------------------//
let numberMax;
let numberMin;

array.forEach(function (el, index) {
  if (index === 0) {
    numberMax = el;
    numberMin = el;
  }

  if (numberMax < el) {
    numberMax = el;
  }

  if (numberMin > el) {
    numberMin = el;
  }
});
console.log("Max: " + numberMax + "\n" + "Min: " + numberMin);
