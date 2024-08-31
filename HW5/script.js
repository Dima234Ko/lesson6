//-------------------------Task 1--------------------------//

let Array = [1, 2, 3, 4, 5, 10, 7, 8, 9, 6];
let NewEl = 0;

Array.forEach(function(el) {
    NewEl = NewEl + el;
})
console.log(NewEl);

//-------------------------Task 2--------------------------//

let NewArray = Array.map(function(el) {
    let modified = 2 * el;
    return modified;
})
console.log(NewArray);


//-------------------------Task 3--------------------------//
let numberMax;
let numberMin;

Array.forEach(function(el, index) {
    
    if (index === 0) {
        numberMax = el;
        numberMin = el;
    };
    
    if (numberMax < el){
        numberMax = el;
    } 
    
    if (numberMin > el) {
        numberMin = el;
    }
})
console.log('Max: ' + numberMax + '\n' + 'Min: ' + numberMin);