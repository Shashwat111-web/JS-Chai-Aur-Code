// map

const mynumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNum = mynumbers.map((item) => item*10)

// console.log(newNum);


// chaning -> using multiple higher orfer functions together 
/**
 * the operation performed by the second map is on the result of first map 
 * in the below example 
 */

const newNum = mynumbers
                .map((item) => item*10)
                .map((item) => item+1)
                .filter((item) => item>=40)

console.log(newNum);
