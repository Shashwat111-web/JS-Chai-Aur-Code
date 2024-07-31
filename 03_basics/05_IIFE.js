// IIFE stands for Immediately Invoked Function Expression

/**
 * 
 * An immediately Invoked Function Expression(IIFE)is 
 * a function that is executed immediately after it is 
 * defined .
 * 
 * The primary purpose of an IIFE is to create a new
 * scope ,which helps in avoiding polluting the global 
 * scope and can be useful for encapsulatiing code.
 * 
 */

// Syntax
(function (){
    // code to be executed
})();

//++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++
// Explanation
// Function Definition:

// The function is defined within parentheses: (function() { ... }).
// Immediate Invocation:

// The function is immediately invoked by the trailing parentheses: ().
// Scope:

// Variables defined inside the IIFE, like message, are not accessible outside the function, thus avoiding global scope pollution.


// Use Cases
// Encapsulation: Encapsulate code to avoid polluting the global namespace.

// Module Pattern: Used in the module pattern to create private and public variables and methods.
// Initialization: Execute initialization code that only needs to run once.

// Initialization: Execute initialization code that only needs to run once.

//++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++



/**
 * ++++++++++++++++++++++++++++++++++++++++++++++
 * One major use case of an IIFE is when we want
 * to start our backend immediately after the page
 * is loaded
 * ++++++++++++++++++++++++++++++++++++++++++++++
 * 
 */

// types of IIFE : - IIFE (in which function used is arrrow function) , Named IIFE (in which instead of arrow function named function is used )


(()=> {
    console.log("DB Connected");
})();

// in case of IIFE use of semilon is must in order to
// indicate that the scope of the IIFE function is over.


// Example with Parameters
// IIFEs can also accept parameters:
(function(name) {
    console.log(`Hello, ${name}!`);
})('Alice'); // Outputs: Hello, Alice!

// In this example, the IIFE takes a parameter name and immediately logs a greeting message.