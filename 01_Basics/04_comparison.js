//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2< 1);
//console.log(2 == 1);
//console.log(2 != 1); 

console.log( null > 0 ); // false
console.log( null == 0 ); //false
console.log( null >= 0 ); //true

//the reason is that an eqality check == and comparison >,
// < , >= , <= works differently.

//comaprisons convert null to a Number, treating it is as 0.
//thats why (line 9 ) null >= 0 is true and (line 7) null > 0 is false

// === stirct check 
