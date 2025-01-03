
// in an array of numbers and strings, only add those memebers
// which are not strings

let arr = ['asd' , 123 , 'dede' , 3 , 4];
let sum = 0 ;

arr.forEach(function (elem) {
    if (typeof elem === 'number' ) {;
    sum = sum + elem ;
    }
    return sum ;
})

console.log(sum);
