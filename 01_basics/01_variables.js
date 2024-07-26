// variables 

const accountId =144553 //cannot be changed 
let accountEmail = "hitesh@gmail.com"
var accountPassword = "12345"
accountCity ="Jaipur" //variable name not defined  and hence not recommended


// accountId = 2 //error



console.log(accountId);
console.log(accountCity);
console.table([accountId ,accountPassword, accountEmail  , accountCity]);

/* 
Prefer not to use var because 
of issue in block scope and 
functional scope 
*/

let accountState; 

// The variable whose value is
//  not assigned at the time of declaration is 
// by default allocated the value as 'undefined'.

console.table([accountId , accountPassword , accountEmail , accountCity , accountState])