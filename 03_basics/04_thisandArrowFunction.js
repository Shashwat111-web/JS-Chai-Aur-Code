
// this keyword 


const user = {
    username : "hitesh" , 
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        /**
         * this keyword refers to the present context 
         * for example inside this object the present context is the object for the 
         * below this 
         */
        // console.log(this);
    }
}


// user.welcomeMessage()

/**
 * 
 * This keyword's display scope but when accessing the present context
 * outside any function then the scope depends on the environment 
 * here in the node environment the this returns an empty object '{}' as a 
 * scope however if we try to access the context in a browser's console 
 * then the context returned is windows 
 * 
 */

user.username = "sam"
// console.log(this);
// user.welcomeMessage()


//+++++++++++++++++++++++++ this keyword +++++++++++++++++++++++++++


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);// underfined  because cannot access function //
//     //properties this way

// }

// chai()


// const addTwo = function(num1 , num2) => {
//     return num1 + num2
// }


// ++++++++++++++++++++++1st notation of arrow function +++++++++++++++++++++++++


/**
 * 
 * If using curly braces then the return statement is mandatory
 * 
 */


// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addTwo(4 , 5));


// +++++++++++++++++2nd notation of arrow function ++++++++++++++++++++++

// if not using curly brackets then the return statement is not required 


// const addTwo = (num1 , num2) => num1 + num2
    
//    or

// const addTwo = (num1 + num2) => (num1 + num2)

    // or 

    // when returning an object then parenthesis is required and is must 


    // +++++++++++++++++++ this syntax is widely used in reactjs 
const addTwo = (num1 , num2) => ({username : "hitesh" ,price: 399 })

console.log(addTwo(3 ,4));