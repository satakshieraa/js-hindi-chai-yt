

// if

//..............................................................
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// opeators = <, >, <=, >=, ==, !=, === (to search the data type also), !==

//.........................................................



// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

//.......................................................................


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // see aisai bhi code likh skatai hai 1 he line mai but mat kareyaiga
//aachi practise nhi hai


// the curly {} <- this is not used still it executed why cause this is called a implicit scope


//...........................................................................



// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// 
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");

// }

//..........................................................................................


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { // && iska matlab sarai statements mai conditions true honi chaheyai
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { // || any satements is true 
    console.log("User logged in");
}

/* agar jakai conditional rendering bhi kar sktai hai
ismai ap simple sa bolaigai kie kya user logged hai and agar logged in hai aur sath uskai alawa uskai
pass token bhi hai jo humnai usko server sai diya hai toh usko log in button mat dikhao
uss login button kie jaga uska text change kar do aur usko logout button dikhao */
