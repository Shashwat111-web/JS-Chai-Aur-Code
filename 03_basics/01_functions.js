function addTwoNumbers(number1 , number2){
    console.log(number1 + number2);
}


// addTwoNumbers  // this is the reference to the function 
// addTwoNumbers() // function call  returns Nan

addTwoNumbers(3 , 4)


// when a function  does not return a value then the default return value is undefined 

// if a parameterized function goes not gets arguments then the default value of the parameters if not specified becomes undefined  

const result = addTwoNumbers(5 , 9)
console.log(result);

function loginUserMessage(username = "Sam"){
    if(!username){ // equivalent to username === undefined
        console.log("Please enter a valid user name");
        return
    }
    return `${username} just logged in!`
}


loginUserMessage("Manish")
loginUserMessage()