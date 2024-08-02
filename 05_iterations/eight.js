// reduce method 


// reduce method is extensively used when building a shopping cart application

/**
 * The reduce() method of Array instances executes 
 * a user-supplied "reducer" callback function on 
 * each element of the array, in order, passing in 
 * the return value from the calculation on the 
 * preceding element. The final result of running 
 * the reducer across all elements of the array is 
 * a single value.


The first time that the callback is run there 
is no "return value of the previous calculation". 
If supplied, an initial value may be used in its 
place. Otherwise the array element at index 0 is 
used as the initial value and iteration starts from 
the next element (index 1 instead of index 0).
 */

const nums = [1,2,3,4]


// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
const sum = nums.reduce((accumulator , currentValue) => ( accumulator + currentValue), 0)

console.log(sum);

// reduce functions are widely used in shopping cart for example for totalling the bill 

const shoppingCart = [
    {item:'js course',
        price:299
    },
    {item:'py course',
        price:399
    },
    {item:'mobile dev course',
        price:5999
    },
    {item:'data science course',
        price:12999
    },
]

const total = shoppingCart.reduce((acculator , item) => (acculator + item.price) , 0 )
console.log(total);

