var c = 300 // global scope 

if(true){
    let a = 10 //block scope 
    const b = 20 // block scope 
    var c = 30
}
/** a and b are not accessible because of block scope 
 * 
 */
// console.log(a); 
// console.log(b);

/** variable declared with var keyword share a global scope and hence npt 
 * recommended to use 
  */
// console.log(c);



// +++++++++++++++++++recap  scope++++++++++++++++++++++++++++++++


function one(){
    const username = "hitesh"

    function two(){
        const website = " youtube"
        console.log(username + website);

    }

    // console.log(website); // throws Referenceerror 
}


// console.log(username); // throws error 


// one()


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);


}

// console.log(username);



//++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++

// mini hoisting  (just a precap)


//  there are two ways to declare a function 

// 1. function 

// console.log(addOne(5)); // the functions with below syntax can be called before the declaration 

function addOne(num){
    return num+1
}



// 2. expression 
/** 
 * When the function is assigned to a variable then it is called as an expression 
 * and the the function calls for these functions cannot be made before the function declaration 
 */

// console.log(addTwo(3)); //error 

const addTwo = function(num){
    return num +2
}


