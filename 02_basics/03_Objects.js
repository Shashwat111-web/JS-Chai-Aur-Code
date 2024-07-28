/* There are two types of objects creted in javascript 
    
    1) singelton - when object is created using constructor -Object.create
    2) object literal - when the object is created using literals
*/


// Object literals 


/** SYTAX : 
 * const obj_name = {
 *      key : value }
 */

/* the keys in objects are considered as strings in js therefore when adding a symbol to the objects make sure to enclose it inside the brackets [] 


Values can be of any datatype be it primitive or non primitive

*/

const mySym = Symbol("key1")

const jsUser = {
    name : "Hitesh",
    "Full Name" : "Hitesh Choudhry",
    [mySym] : "myKey1",
    age : 22 , 
    location : "Jaipur",
    email : "xyz@abc.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday" , "Tuesday"]
}

// Accessing  elements from the objects 
 //1. not notation - obj_name.key (does not supports for keys) and is generallly not recommended for accessing 


console.log(jsUser.email);


// 2. Bracket[] notation (in which keys are passed as strings )

// console.log(jsUser[mySym]);
// console.log(jsUser["isLoggedIn"]);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser["mySym"]);


// modifying the values 

// jsUser["email"] = "hitesh@abc.com"
jsUser.email = "hitesh@abc.com"
// console.log(jsUser);


// Inorder to prevent changes insode an object we use freeze method of the Object 

// Object.freeze(jsUser)

// the object properties will not be modified and no error will be thrown 
// jsUser["Full Name"] = "Rammana Taneja "
// console.log(jsUser);


// adding functions to the object 


jsUser.greetings  = function(){
    console.log("Hello Js User ");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this["Full Name"]}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetingTwo());



