function multiplyby5(num){
    return num*5
}

multiplyby5.power = 2
console.log(multiplyby5(5));
console.log(multiplyby5.power); //output 10
console.log(multiplyby5.prototype); // output = {} _______ empty paranthesis mila hai yeh actually mai by default kuch context set hota hai
//yeh jo prototpye hota hai yeh kuch methods nhi uskai sath sath kuch internal properties bhi deta hai 
// toh iss upar walai fn kie bhi toh kuch properties hogi
// aur bhi jo prototype kie properties hoti hai + .this ka context hota hai wo bhi available hota hai


//upar yeh sab karnai sai humnai yeh samjha kie function fn bhi hai and fn
// object bhi hai

// lekin agar hum chahai toh kisi ko bhi ek object kie tarah behave karwa saktai hai
// kyu aur kaisai

// kyukie at the end of the day har ek chiz ja ke milti hai ek object sai
// technically hum keh saktai hai kie yeh refrence object ko bhi kar sakta hai

// object ka jo prototype hai wo actually mai null he jata hai
//wasai getters and setters bhi available chahai toh aur bhi refrence bhi dal saktai hai but nhi daltai hai hum usually


//______________________________________________________________________________________________________________________________________________________________

//wasai toh already injected functionalities milti hai prototype kai andar but  possible hai kya kie
// hum khud kie kuch functionalities define kar saktai hai , object he toh akhir kar , object mai properties hoti hai aur ek koe property humara fn hold kar laigie
//toh yeh i can declare my own function

// THIS KA MATLAB JISNAI BHI BULAYA HAI USKAI PASS JAO

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++   //this.score ka mtlb kie jisnai bhi score ko bulaya hai uska score increase kardo
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`); // kiska score print karo jisnai nai bhi bulaya hai uska score print karwa do
}

const chai = new createUser("chai", 25) //jab yeh fn createUser sai humne chai kai andar value inject kari tab apne usko bataya na kie mere pass yeh additional properties ayie hai (.increment wali ya .printme wali) toh yeh batanai ka sara kam karta hai new keyword
const tea =  new createUser("tea", 250)

chai.printMe()

// js new keyword kai through constructor fn daiti hai

// INTERVIEW QUESTION 
// yeh upar wala code new keyword likhnai sai pehlai nhi chal rha tha
// and agar hum isko interview mai new keyword likhne sai pehlai explain karte
// hai kie code kyu nhi chala new keyword inject kiya fir chala 
// toh yeh explain karaigai toh interview pass yessssssss!
// altogether pata hona chaheyai kie code kyu nhi chal rha hai 
// fir usko explain kar kai chalana jyada acha rehta hai

// NOTE BY HITESH SIR
// ABOUT NEW KEYWORD FUNCTIONALITY

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.
// simple bhasa mai constructor kai andar prototype link hota hai


The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
// aur uskai bad constructor ko call kar diya jata hai toh jo sarai apkai this walai context hai na wo uske sath inject kar diye jatai hai


The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value
(object, array, function, etc.), the newly created object is returned.
// and finally humai ek naya object wapas dai diya jata hai

*/




