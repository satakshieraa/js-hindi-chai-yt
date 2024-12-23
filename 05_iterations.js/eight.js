
// reduce method , interesting functionality  example jab shopping card wagarh use kartai hai toh waha pai kam ata hai

//explaination from mdn -

/*The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order,
 passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place.
 Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).*/


// currentvalue id the value given in the const like below
// accumulater kya hai - ek khali empty variable apko diya jata hai ab iskai andar value konsi dalni hai intialvalue wo jo humsai as 0 nichai declare kie hue hai, jo bhi initial value ap daitai hai wo first time toh accumulator kai andar chal jati hai jo hai 0 ,
// toh jab loop chalaiga toh accumulater kai andar kiya jata hai 0 , toh firt time accumulator ko pata he nhi tha kie merai andar value kay hai isiliye intialvalue 0 diya gaya hai uskai liye
// jo bhi value apka final sum a rha hota hai usko ekatha karkai accumulator kai andar dal diya jata hai


const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)   ............... this 0 is initialvalue

//console.log(myTotal);


//...........................................................................................................................................................................................................................................................................................

//arrow function mai bhi dekhtai hai

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


//..........................................................................................................................................................................................................................................................................................


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);  //22996

// currentvalue ko kuch bhi nam dai saktai hai jaisai yaha pai upar pai humnai item diya and .price sai price ko access kar liya hai
