const coding = ["js" , "ruby" , "java" , "cpp", "py"] 

// coding.forEach(element => {
//     console.log(element);
// });

// or 
// coding.forEach( function (item){
//     console.log(item);
// });

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// the for each function is present in the properties of the array 
// it can access element , its index , or the whole array


// coding.forEach((item , index , arr)=>{
//     console.log(item , index , arr);
// });


// [{} , {} , {}]for  this kind of format we generally use 
// for each loop because for database in we get data in the form of API
// which is in this format so it makes it easy to access the data 
const myCoding = [
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})