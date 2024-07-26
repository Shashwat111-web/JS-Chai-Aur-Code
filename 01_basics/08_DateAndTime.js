let myDate = new Date()

// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toDateString());


let myCreatedDate = new Date(2023 , 0, 26)
console.log(myCreatedDate.toLocaleDateString());

// IN JAVASCRIPT YEAR STARTS FROM 0 when specified in above format  

// specifying hours and minutes 
myCreatedDate  = new Date( 2023 , 0 , 26 , 5 , 3)
// console.log(myCreatedDate.toLocaleString());


//  YYYY-MM-DD format where month starts from 1 
// myCreatedDate = new Date("2023-01-24")

// console.log(myCreatedDate.toLocaleString());

// myCreatedDate = new Date("01-04-2024")
// console.log(myCreatedDate.toLocaleString());

// creating timeStamp 

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())

// now the above two dates in milliseconds  can be easily compared 


let myNewDate = new Date()

// console.log(myNewDate.getFullYear());

// console.log(myNewDate.getMonth());


// the locale string method can accept various methods to manipulate  the current date 

// press  control + space to get vs code suggestions and ctrl + enter  to github copilot suggestion



myDate = myNewDate.toLocaleString('default' , {
    weekday: "long" ,
    year:"numeric"
} )

console.log(myDate);

