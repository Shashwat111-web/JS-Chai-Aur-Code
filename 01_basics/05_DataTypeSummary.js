// Primitives 

//  7 types : String , Number , Boolean , null , undefined , BigInt, Symbol


// Reference type or  Non primitive -
// Arrays ,  objects , functions  

//Array
const heros = ["shaktiman" , "doga" , "nagraj"] // datatype :object

// Object represented with curly braces 
let myObj = {
    name:"hitesh",
    age:22,
} // datatype : object 

// function 
const myFunction = function(){
    console.log("Hello World");
} //data type : function object 

// Javascript two most important topics browser events and objects 


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive Datatypes ) , Heap(Non Primitive Datatypes )

let myYoutubeName = "hiteshchoudhry"
// primitives are created in stack hence a copy of variable is passed in the below step
let anotherName = myYoutubeName

console.log(myYoutubeName);
console.log(anotherName);


myYoutubeName = "hitesh"

console.log(myYoutubeName);
console.log(anotherName);

//  different objects name referr to the same memory space for same object as objects are generated in heap which gives reference

let userOne = {
    email:"user@google.com",
    upi :"user@ybl"
}


let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne);
console.log(userTwo);