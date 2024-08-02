// const coding = ["js" , "ruby" , "java" , "python" , "cpp"]


// the forEach loop does not return any value for that purpose we 
//  we need to use callback functions in order to perform certain operations that returns certain values 


// const values = coding.forEach((item) => {
//     console.log(item);
//   return item  
// })

// console.log(values);


/**
 * 
 * To  solve this issue callback functions are used inside the special operations like  filter , map , reduce 
 * 
 * 
 */


const myNums = [1,2,3,4,5,6,7,8,9,10]


// const newNum = myNums.filter(function(num){
//     return num > 4
// })

/**
 * using arrow function 
 */

// returns numbers as per condition specified
const newNum = myNums.filter((item) => item > 4)
            //or
// const newNum = myNums.filter((item) => (item > 4))


// console.log(newNum);


const books = [
    {title: 'Book One' , genre: 'Fiction' , publish:1981, edition:2004},
    {title: 'Book Two' , genre: 'Non-fiction' , publish:1992, edition:2008},
    {title: 'Book Three' , genre: 'History' , publish:1999, edition:2007},
    {title: 'Book Four' , genre:'Non-Fiction', publish:1989, edition:2010},
    {title: 'Book Five' , genre:'Science' , publish:2009, edition:2014},
    {title:'Book Seven' , genre:'History',publish:1986, edition: 1996},
    {title:'Book six' , genre:'Fiction' , publish:1987, edition:2010},
    {title:'Book Eight' , genre:'Science' , publish:2011, edition:2016},
    {title:'Book Nine' , genre:'Non-Fiction' , publish:1981, edition:1989}
]

let userBook = books.filter((bk) => bk.genre ==='History')


userBook = books.filter((bk) => bk.genre==='History' && bk.publish>=1995)

console.log(userBook);


