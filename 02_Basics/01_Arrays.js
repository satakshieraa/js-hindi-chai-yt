// array enables storign a collection of multiple items undera single variable name and they a re resizable can add other items and other datatypes

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);
// js array-copy ooperations ctreate shallow copies
/* a shallow copy of an object is a copy whose properties share th same refrence (point to the same underlying values) 
as those object from which the copy was made.like heap original change and deep copies like stack share copy*/

// Array methods

myArr.push(6) // add values is arrray [0,1,2,3,4,5,6]
myArr.push(7) // delete or remove the last value in array
myArr.pop() // yahi sab aur kya bhut sarai methods hotai hai read mdn 

myArr.unshift(9) //[9,0,1,2,3,4,5] adds at the start
myArr.shift() //delets from the start [1,2,3,4,5]

console.log(myArr.includes(9)); // like boolean type//like ask questions true or false whether it includes 9 or not so false

console.log(myArr.indexOf(3)); // like if ask 9 then output will be -1 as it dont know the value

const newArr = myArr.join() // add all the element of an array into a string

// console.log(myArr); [0,1,2,3,4,5]
// console.log( newArr); 0,1,2,3,4,5 so type has changed it into  a string


// slice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //gives part of the array [1,2]

console.log(myn1);
console.log("B ", myArr);

//splice

const myn2 = myArr.splice(1, 3) // splice cuts that part of the portion of thr array and return the reaminig string
console.log("C ", myArr);
console.log(myn2);

/*difference between slice and splice is that 
slice operation dosen't manipulate the original array
and splice does manipulate the original array*/

