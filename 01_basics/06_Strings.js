const name = "hitesh"
const repocount = 50

// console.log(name + repocount); not recommended 


// prefereed syntax is using backticks thus is a modern way and is generally reffered to as string interpolation
// console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('hitesh')

// console.log(gameName[0]);
// console.log(gameName.__proto__); // methods can be accessed using console on crome 
// console.log(gameName.toUpperCase());

console.log(gameName.length);
console.log(gameName.charAt(4));

// for accessing a substring of the given string from the start 
console.log(gameName.substring(0 ,4));
// for accessing the substring of the give n strign from the last 
console.log(gameName.slice(-6 , 4));


const newStringOne = "   hitesh   "
let newString = newStringOne.trim();
console.log(newString  , '0' , newStringOne);

console.log(newStringOne.replace('hi','Pri'));
console.log(newStringOne.replaceAll(' ' , '-'));

console.log(newStringOne.includes('to'));

console.log(newStringOne.split(' '));