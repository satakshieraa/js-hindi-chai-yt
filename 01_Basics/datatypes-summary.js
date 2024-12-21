// primitive

// 7 types : Strings, numbers, boolean, null (khali), undefined , symbol, BigInt (like big values which cannnot be handled)

const score3 = 100;
const scorevalue = 100.3;
const isloggedin1 = false;
const outsidetem = null;
let userEmail;
const id = Symbol('123');
const anotherid = Symbol('123')
console.log(id === anotherid); // false

const bigNumber = 595544201122222896n
console.log( typeof bigNumber); // bigint

//symbol work is that only that even if you pass the same value wether string or number the
//  result will not be the same it will identify them as unique value


//js is a dynamically types language

// Refrence types also known as non primitive ( these are those values jinka memory mai inka refrence directly allocate kiya ja skta hai )


// Array, Objects, Functions
// non-primitive ka datatype actually mai function he bola jata hai
// function kai return kai specifically object function bola jata hai

const heros = ["shaktiman", "naagraj", "doga"] //array hai datatype object hai


let myobj = {
    name: "satakshi",
    Age: 22,
} // inside {} is a object

// to declare a function there a lot of types

const myfunction = function () {
    console.log("Hello world");
}

// to know the data type there is as simpler way

console.log( typeof outsidetem);

//go on ecmascript table of content and search for type of operator then print the table of type here for refrence


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// To understand memory and how they work

//two type of memory Stack and Heap
// stack is used at primitive types ,,, whenever stack memory is used toh jo bhi variable apnai declare kiya hai uska appko ek copy milta hai
// Heap is used at non-primitive type,,, and whenever memory or object is defined under heap toh waha sai milta hai refrence original value ka

let myytname = "hiteshchoudary.com" //jo jitni bhi primitve values hai wo jayaigie stack kai andar

let anothername = myytname;
anothername = "chaiaurcode";

console.log(myytname);// hiteshchoudary
console.log(anothername);// chaiaurcode
// so here in stack primitive type both of them will have another value


let userone = {
    email : "satakshi@google.com",
    Upi : "paisamoney@upi"
}

usertwo = userone;
usertwo.email = "era@gmail.com"

console.log(userone.email);
console.log(usertwo.email);
//but in heap non primitive type both of them will have 
//same value as they get the original copy

// stack mai copy milta hai
// heap mai refrence milta hai acutually jo bhi changes and update kartai hai wo original value kai andar he krtai hai