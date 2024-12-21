//JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects 
// encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).


// Dates // like while making airbnb or ola clone 

let myDate = new Date() //date a object ek instict
console.log(myDate.toString()); //wed mar 01 2023 and time
console.log(myDate.toDateString());// wed mar 01 2023
console.log(myDate.toLocaleString());// 3/1/2023, 12:04:46 PM
console.log(typeof myDate); //Object

let myCreatedDate1 = new Date(2023, 0, 23) // mon jan 23 2023 and month start with 0 in coding so at 0 place is january  // console.log(myCreatedDate1.toDateString())
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)// 1/23/2023, 5:03:00 AM log mai .toLocaleString()
let myCreatedDate3 = new Date("2023-01-14")// 1/14/2023, 12:00:00 AM same sa localestring in log yeh hogaya yy/mm/dd wala syntax
let myCreatedDate4 = new Date("01-14-2023")//mm/dd/yy syntax is followed in india ans 1/4/2023, 12:00:00 AM
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //whend desinging quizes and polls it is mostly used

console.log(myTimeStamp); //16585125562222 a mili second value
console.log(myCreatedDate.getTime()); // 1558545451 and 555441008946 now we will get 2 values in mili seconds
console.log(Math.floor(Date.now()/1000)); // its is an interview question that date.now() will giveoutput 
//in miliseconds so to convert it in seconds we will divide it by /1000 but still the ouput will be in decimal
// so remove thst we will add math.floor to a non decimal value

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // month 2 we add +1 for end user so that they can understand that it is month march and not feb hehehehe 
console.log(newDate.getDay()); //3rd day

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', { // hum iskai andar ek object define kartai and bhut sari parameters yaha pai define kar sktai hai 
    weekday: "long",            
    
})
