let score = 33;
console.log(typeof score);
/*now somtimes we dont know that wether the value assigned to us 
is a string or number for Eg*/

let score2 = "33" //will print a string
//now to convert it in a vlaue

let valueinnumber = Number(score2);
console.log(typeof valueinnumber);
//output types is a number

//now if score is like 33ab ,undefined , null or a boolean the 1 for true and 0 for false then the above
//feature will convert it into a number 


//"33" => 33
//"33abc" => NaN (NOT A NUMBER)

let isloggedin = "hitesh"
let booleanisloggedin = Boolean(isloggedin)
console.log(booleanisloggedin);

let somenumber = 33;
let stringnumber = String(somenumber);
console.log(stringnumber);
console.log(typeof stringnumber);
 //it was a number i converted it in a string hahaha
 //How ? who cares :)

