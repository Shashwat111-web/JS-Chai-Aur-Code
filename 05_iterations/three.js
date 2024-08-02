
// for of

// ["" , "" , ""]
// [{} ,{} , {}]

const arr  =[1,2,3,4,5]

// appliciable on objects , strings , any iterable object 


// for(const num of arr){
//     console.log(`Value of num is ${num}`);
// }


// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }


// Maps


/**
 * The Map Object holds key-value pairs and remembers the 
 * original insertion order of the keys. Any value (both objects and primitive values)
 * may be used as either a key or value 
 * 
 */

const map = new Map()

// map.set('a' , 1)
// map.set('b' , 2)
// map.set('c' , 3)

// console.log(map);

// console.log(map.get('c'));


map.set('IN' , "India")
map.set('USA' , "United States Of America")
map.set('Fr' , "France")
map.set('IN' , "India")


// console.log(map);


// iterating a map object 

for (const key of map) {
    // returns array of key value pairs 
    // console.log(key)
}


// iterating over keys and values 

for (const [key , value] of map) {
    // console.log(key ,":-"  ,value );
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }