const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}


for (const key in myObject) {
//    console.log(key); // prints  the keys
    // console.log(myObject[key]); // accessing values 

}

// iterating over objects 

const myArray  = ["js" , "cpp" , "rb" , "py"]

// for (const key in myArray) {
//     // returns indices as the keys therefore to overcome this problem objects were introduced 
//     console.log(key); 
// }


const map = new Map()

map.set('IN' , "India")
map.set('USA' , "United States Of America")
map.set('Fr' , "France")
map.set('IN' , "India")

// the map object can not be iterated using a for in loop 

for (const key in map) {
   console.log(key);
}
