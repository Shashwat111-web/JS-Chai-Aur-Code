// console.log(2 > 1);
// console.log(2 >=1);
// console.log(2 <1);
// console.log(2 == 1);

// converts string to number for comparison 
// console.log("2" > 1);
// console.log("02" > 1);


// the output prediction of comparison with different datatypes is uncertain as the null is sometimes conveerted to nan and soetimes to 0


/** The reason is that an equality  == check and conversion > < >= <= works differently .
 * Comparison converts null to number , treating it as 0. 
 * That is why null >=0 is true while others are false .
  */
console.log(null > 0);
console.log(null == 0);
console.log(null >=0);

// undefined is always converted to not a number
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

