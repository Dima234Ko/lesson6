//-------------------------Task 1--------------------------//
let a = 10;
let b = 12;

console.log(Math.max(a, b));

//-------------------------Task 2--------------------------//
let int1 = Number(prompt("Enter int: "));

alert(selectionMonth(int1));

function selectionMonth(int1) {
  switch (int1) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Enter the month number";
  }
}

//-------------------------Task 3--------------------------//
let circle = Number(prompt("Ener S circle"));
let square = Number(prompt("Ener S square"));

alert(willFit(circle, square));

function willFit(circle, square) {
  let side = Math.sqrt(square);
  let diametr = 2 * Math.sqrt(circle / 3.14);

  if (side > diametr) {
    return "True";
  } else {
    return "False";
  }
}
