/* write a js fn that accepts a string as a parameter
and converts the first letter of each word of the string 
in upper case */
/*

 function capitalizefirstword (str) {
    return str.charAt(0).toUpperCase()+str.substring(1)
 }

 console.log(capitalizefirstword("hello")); // Hello
 

 // but this only did 1st charater of 1st word of the sentence */

 // another approach 

function capitalizefirstword (str) {
    let value = str.split(" ").map(function (word) {
   return word.charAt(0).toUpperCase() + word.substring(1)
    })
 return value.join(" ");
}

console.log(capitalizefirstword("hello world"));
