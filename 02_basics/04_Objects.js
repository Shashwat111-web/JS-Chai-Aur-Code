// singelton object 
// const tinderUser  = new Object()

// the output of both the syntax will be same 

const tinderuser = {}

// console.log(tinderUser);
// console.log(tinderuser);


tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false


// console.log(tinderuser);


// nested objects(objects inside object)

const regularUser = {
    email:"some@gmail.com",
    fullName: {
        userfullName: {
            firstname :"hitesh",
            lastname : "choudhary"
        }
    }
}

//  when objects are received from browser they have mutliple 
// objects within them so the level of nesting is unknown 
// therefore the ? is used so to prevent any error and the use of 
// multiple if else statements 
console.log(regularUser.fullName?.userfullName.firstname);


// merging multiple objects

const obj1 ={1:"a" , 2:"b"}
const obj2 = {3:"c" , 4:"d"}
const obj3 = {5:"e", 1 :"f"}



// 1. adding multiple objects inside another object 
// const obj4 = {obj1 , obj2 , obj3}
// console.log(obj4);


// 2. combining multiple objects to form a single object 

// const obj4 = Object.assign(obj1 , obj2 , obj3)
// console.log(obj4);
// the above method modifies the first object passed as a parameter to prevent this we pass an empty object as the first parameter  
// console.log(obj1 === obj4);

            // or
// const obj4 = Object.assign({} , obj1 , obj2 , obj3)
// console.log(obj4);

// console.log(obj1 === obj4);


// 3. using spread operator 

const obj4 = {...obj1 , ...obj2 , ...obj3}
// console.log(obj4);


// accessing elements from an object  array

const user = [
{
        id :1,
        email : "h@gmail.com"
    },
{
        id :1,
        email : "h@gmail.com"
    },
{
        id :1,
        email : "h@gmail.com"
    },


]
    console.log(user[1].email);


    // returns the array of keys 
    // console.log(Object.keys(tinderuser));

    // returns the array of values 
    // console.log(Object.values(tinderuser));


    // returns an array of array have each key value pair as an array

    // console.log(Object.entries(tinderuser));

    

