// write a js fn that return a passed string with letters 
// in alphabetical order

function alphabeticalordercheck (str){
    return str.split("").sort().join("")
}

console.log(alphabeticalordercheck("apple"));  // aelpp
console.log(alphabeticalordercheck("mango"));  // agmno

// sort() directly puts in alphabetical order 

// sort