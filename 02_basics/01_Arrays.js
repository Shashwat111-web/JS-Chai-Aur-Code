// Array 
/*
JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).*/


// Arrays in javascript can have objects of different data types and are resizable 

// Methods of creation 

let myArr = [0,1 ,2 ,3 ,4, 5]
// console.log(myArr);

const myHeros = ["shaktiman" , "naagraj"]
// console.log(myHeros);


const myArr3 = [0,1 ,"Hitesh " , "Ravi " , 5.5 , 3 ,4 ]
//  console.log(myArr3);


 const myArr2 = new Array(0,1,2,3,4)
//  console.log(myArr2);


// Array Methods

// myArr.push(9)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);


// myArr.unshift(4) // Adding elements at the beginning of the array
// console.log(myArr);

// myArr.shift()
// console.log(myArr) // removing the first element from the array

// slice , splice (Important interview question)

// slice methods does not modifies the original array whereas the splice method modifies the original array

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B" , myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("c" , myArr);



