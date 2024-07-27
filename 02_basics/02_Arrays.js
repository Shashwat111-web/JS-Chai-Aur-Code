const marvelHeros = ["thor"  ,"IronMan" , "spiderman"]
const dcHeros = ["superman" , "flash" , "batman"]


// marvelHeros.push(dcHeros) // adds the second array as an elements 
// console.log(marvelHeros);


// concat methods adds the elements of both the arrays and return a new array as a result 
const AllHeros = marvelHeros.concat(dcHeros)
// console.log(AllHeros);


// when there are multiple arrays and if we want to perform the concatenation operation then in that case we can use the spread operator 

/*
Spread operator extracts all the elements present in the individual array (jaise jab eak kaanch ka glass girta hai toh spread ho jaata hai )
symbol :- '...'*/

const AllNewHeros = [...marvelHeros , ...dcHeros]
// console.log(AllNewHeros)


// where there are multiple sub arrays present within the given array then we use a flat method  to get all  elements from the array and its sub arrays into a single linear dimension array

const myArr2 = [1 ,2 ,[3,4,5] , 6 ,7 ,[6,7 ,[8 ,9]] , 8]

const myArr3 = myArr2.flat(Infinity) // it accepts a number as a parameter to know upto which level it has to flat the array generally when the number of nesting is unknown then we use Infinity as a parameter  otherwise an interger is passed as an argument 

console.log(myArr3);


// method of creating an array of multiple variables 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2  , score3));


// checking whether an object passed is array or not 

console.log(Array.isArray("Hitesh")); 

// from method is used to create an array from an object 

console.log(Array.from("Hitesh"))
console.log(Array.from({ name : "Harkirat"})) // does not return anything as it is not specified that whether is array will be fromed from keys or from the values 


