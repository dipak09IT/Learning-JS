// let score = "33"

// console.log(typeof score);    // string
// console.log(typeof(score));   // knowing typeof by declaaring method

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// let boom = "33abc"
// let valueInboom = Number(boom)
// console.log(typeof valueInboom);  // number
// console.log(valueInboom);  //nan (not a number)

// let boom = null
// let valueInboom = Number(boom)
//console.log(typeof valueInboom);  // number
// console.log(valueInboom); // 0

let boom = undefined
let valueInboom = Number(boom)
console.log(typeof valueInboom);  // number
console.log(valueInboom); // Nan(not a number)

//  Notes:-
//  "33" => 33
//  "33abc" => NaN
// True => 1 ; False => 0



let isLoggeddIn = "Dipak"

let booleanIsLoggedIn =  Boolean(isLoggeddIn)
console.log(booleanIsLoggedIn);
