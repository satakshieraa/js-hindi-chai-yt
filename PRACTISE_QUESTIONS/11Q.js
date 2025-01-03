
// loop an array and add all members of it 

let array = [1, 2, 3, 4, 5, 6, 7]

let sum = 0;

array.forEach(function (elem) {
    sum = sum + elem;
    return sum
})

console.log(sum);

