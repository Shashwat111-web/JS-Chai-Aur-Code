/** Object destructure is a feature in javascript that allows you to 
 * extract properties from an Object and bind them to varibles
 * This can make our code more concide and readable . 
 */



const course = {
    coursename : "js in hindi",
    price:"999",
    courseInstructor : "hitesh"
}

// course Instructor 

console.log(course.courseInstructor);

//agar bar bar access karna hai to object destructure kar sakte hain 


const {courseInstructor } = course

// object destructure karne se bar bar course. karne access nahi karna padega 
// aur keys ka naam change karke bhi access kar sakte hain 

console.log(courseInstructor);

const {courseInstructor : CI, property1, property2 } = course

console.log(CI);


// Syntax
// The basic syntax for object destructuring is:

// const { property1, property2 } = object;


/**
 * 
Example
Consider the following object:

const user = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};

You can destructure this object as follows:

const { name, age, email } = user;

console.log(name);  // Output: John Doe
console.log(age);   // Output: 30
console.log(email); // Output: john.doe@example.com

 */


/**
 * 
 * 
 * Nested Destructuring
You can also destructure nested objects:

const user = {
    name: 'John Doe',
    address: {
        city: 'New York',
        zip: '10001'
    }
};

const { name, address: { city, zip } } = user;

console.log(name);  // Output: John Doe
console.log(city);  // Output: New York
console.log(zip);   // Output: 10001

Default Values
You can provide default values in case the property does not exist in the object:

const user = {
    name: 'John Doe'
};

const { name, age = 25 } = user;

console.log(name); // Output: John Doe
console.log(age);  // Output: 25

Renaming Variables
You can also rename the variables while destructuring:


const user = {
    name: 'John Doe',
    age: 30
};

const { name: userName, age: userAge } = user;

console.log(userName); // Output: John Doe
console.log(userAge);  // Output: 30

Function Parameters
Object destructuring can be used in function parameters to extract values directly from an object argument:

function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const user = {
    name: 'John Doe',
    age: 30
};

displayUser(user); // Output: Name: John Doe, Age: 30


Object destructuring is a powerful feature that can help you write cleaner and more maintainable code by reducing the need for repetitive property access.


 * 
 * 
 */
