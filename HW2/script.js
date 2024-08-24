//-------------------------Task 1--------------------------//
let a = 10;
let b = 12;

console.log(Math.max(a,b));


//-------------------------Task 2--------------------------//
let int1 = Number(prompt('Enter int: '));

switch (int1) {
  case 1:
    alert('January')
    break;
  case 2:
    alert('February')
    break;
  case 3:
    alert('March')
    break;
  case 4:
    alert('April')
    break;
  case 5:
    alert('May')
    break;
  case 6:
    alert('June')
    break;
  case 7:
    alert('July')
    break;
  case 8:
    alert('August')
    break;
  case 9:
    alert('September')
    break;
  case 10:
    alert('October')
    break;
  case 11:
    alert('November')
    break;
  case 12:
    alert('December')
    break;
  default:
    alert('Enter the month number')

}


//-------------------------Task 3--------------------------//
let circle = Number (prompt('Ener S circle'));
let square = Number (prompt('Ener S square'));

let diametr = 2*(Math.sqrt ((circle / 3.14)))
let storona = Math.sqrt (square);

if (storona>diametr){
  alert('True');
} else {
  alert('False');
}
