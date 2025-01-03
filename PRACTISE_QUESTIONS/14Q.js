
// write a js fn to clone an array

// one way of doing it

/*
function clonearr(arr){
    return [...arr];
}
console.log(clonearr([1, 2, 3, 4]));
*/

// second way of doing it 

function clonearr (arr) {
    let newarr = [];
    arr.forEach(function (e){
        newarr.push(e);
    })
    return newarr;
}

//console.log(clonearr([1,2,3,4]));
// [ 1, 2, 3, 4 ] output
 

let abcd = [1,2,3]
let newarr = clonearr(abcd)
newarr.pop()
console.log(newarr); // [ 1, 2 ]
console.log(abcd)  // [ 1, 2, 3 ]



// another way using MAP

function clonear(arrr){
    return arrr.map(function(e){
        return e;
    })
}

console.log(clonear([1,2,3,4,5,6]));  // [ 1, 2, 3, 4, 5, 6 ] output


