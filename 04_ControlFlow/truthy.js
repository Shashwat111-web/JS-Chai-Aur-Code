const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values (these are the values which are by default set as false )

// false, 0, -0, BigInt 0n, "", null, undefined, NaN (except these value all the other values are truth)

//truthy values (these are the values which are by default set as true )
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


// empty object is also considered as truthy value to check we can compare  key array
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
val2 = null ?? 10 ?? 20



console.log(val2);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")