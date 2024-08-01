
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }




const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
// if break is removed then the next statement is printed without checking the case 
    default:
        console.log("default case match");
        break;
}
