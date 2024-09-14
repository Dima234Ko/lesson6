//-------------------------Task 1--------------------------//

let data = prompt('Enter data');

console.log(verificationData (data));

function verificationData (data){

  const regEmail = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;
  const regData1 = /([1-2]+[0-9]|[3]+[0-1])+\.([0]+[1-9]|[1]+[0-2])+\.([1]+[9]+[0-9]+[0-9]|[2]+[0]+[0-9]+[0-9])/;
  const regData2 = /([1-2]+[0-9]|[3]+[0-1])+\.([0]+[1-9]|[1]+[0-2])+\.[0-9]{2}/;
  const regNumber = /(\+79|89)+[0-9]{9}/;

  if (regEmail.test(data)) {
    return 'valid email';

  //-------------------------Task 2--------------------------//
    
  } else if (regData2.test(data) && data.length === 8) {
    return 'valid data';

  } else if (regData1.test(data) && data.length === 10) {
    return 'valid data';

  //-------------------------Task 3--------------------------//
    
  } else if (regNumber.test(data)) {
    return 'valid number';
  } else {
    alert ('Invalid data');
    return 'Invalid data';
  }
}

  
  
  