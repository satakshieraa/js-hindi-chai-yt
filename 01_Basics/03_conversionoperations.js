let score = 33;
//console.log(typeof score);
/*now somtimes we dont know that wether the value assigned to us 
is a string or number for Eg*/

let score2 = "33" //will print a string
//now to convert it in a vlaue

let valueinnumber = Number(score2);
//console.log(typeof valueinnumber);
//output types is a number

//now if score is like 33ab ,undefined , null or a boolean the 1 for true and 0 for false then the above
//feature will convert it into a number 


//"33" => 33
//"33abc" => NaN (NOT A NUMBER)

let isloggedin = "hitesh"
let booleanisloggedin = Boolean(isloggedin)
//console.log(booleanisloggedin);

let somenumber = 33;
let stringnumber = String(somenumber);
//console.log(stringnumber);
//console.log(typeof stringnumber);
 //it was a number i converted it in a string hahaha
 //How ? who cares :)

 // *********** Operations *********** //
 
 let value = 3;
 let negvalue = -value;
 //console.log(negvalue);
 
 //console.log(2+2);
 //console.log(2-2);
 //console.log(2*2);  
 //console.log(2/2);
 //console.log(2**2);
 ///console.log(2%2);

 let str1 = "Hello";
 let str2 = "satakshi"

 let str3 = str1+str2;
 console.log(str3)

 //console.log("1" + 2);//12
 //console.log(1 + "2");//12
 //console.log("1" + 2 + 2);//122
 //console.log(1 + 2 + "2");//32

 //operator prercedence useless why is there no emoji

 // prefix operator +1 and postfixoperator 1+
 // read on mdn about prefix & postfix 