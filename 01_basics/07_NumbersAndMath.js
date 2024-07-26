const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance.toPrecision(4));
// console.log( typeof balance.toString());

// In many banking applications where we want to represent amount or number upto a fixed decimal place for that we use toFixed method 

console.log(balance.toFixed(4)); // upto 4 decimal places (depends on the use case )

const anotherNumber = 123.8966

// Finding the precision value of the number 

// console.log(anotherNumber.toPrecision(3));
// console.log(anotherNumber.toPrecision(4));

const hundreds = 1000000


/* when the numbercontains many zeros then the readablity 
reduces to solve this issue we use localString which by 
defsult palces commas according to us standards but if we 
pass en-In as parameter it will place the commas according to 
the indian standards*/ 
console.log(hundreds.toLocaleString('en-In'));

//+++++++++++++++++++Maths+++++++++++++++++++

// Math is a default library available in javascript that provides methods to operations on the Numbers 

console.log(Math);

console.log(Math.round(43.33434));


// to know about all the methods available for any object use inspect option in the dev tools 


console.log(Math.floor((Math.random()*10)) + 1 ); // always returns value in between 0 and 1 so can acquire values in desired range by performing arithmetic operations )



// trick to get values in the desired range

const max = 100
const min = 60

console.log((Math.floor(Math.random())*(max - min +1 ))  + min);