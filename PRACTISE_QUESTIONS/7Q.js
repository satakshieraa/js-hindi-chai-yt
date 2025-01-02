// writea a js fn that checks whether a passed
// string is palindrome or not

// palindrome matlb ulta sidha ek barabar 
// lool padho sidha ya ulta lool he hai
// poop padhao sidha ya ulta ek he hai toh isai kehtai hai palindrome
// abhi loop sidha toh loop hai but ulta pool hai toh yeh palindrome nhi hai

// toh yaha pai pehlai question ka same he logic lagana hai
//split reverse join wala

function stringpalchecker (str){
    let reversed = str.split("").reverse().join("");
    if ( reversed === str ) return true ;
    else return false ;

    // return reversed === str
    // terniary operator bhi return saktai hai line no.17 wala

}

console.log(stringpalchecker("poop")); // true
console.log(stringpalchecker("loop")); // false 

