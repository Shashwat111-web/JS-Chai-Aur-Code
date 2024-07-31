// handling objects and arrays inside the function 

// the denotion of rest operation and spread operation in javascript is same but are used in different use cases 


/*
for example here when the coustomer wants to add multiple items to the cart then  in that case the size of items added are not fixed so in that case rest operator can be used to calculate the price
*/ 
function caclulateprice(val1 , val2 , ...num1){
    // returns array of values passed after val2 
    return num1 
}



// console.log(caclulateprice(200 , 400, 100 ,500 , 1000)); 

// handeling objects inside the function in js 

const user = {
    username : "hitesh",
    price:199
}


/**
 * 
 *here anyObject is a generic name given to the parameter 
 unlike the typescript here we have to explicitly manage the techCheck ie wheteger the key name and accessed name are same or not 
 */
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}` );
}

handleObject(user)
// objects can directly be passed inside the function 

handleObject({
    username : "Priyanka",
    price: 300
})


// passing array as an argument 

const myNewArray = [200 , 400, 100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
