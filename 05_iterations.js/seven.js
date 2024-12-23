
//map use kiye hai


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
// console.log(newNums);

//output - [11, 12, 13, 14, 15, 16, 17, 18, 19, 10]


//.......................................................................................


// ek var mai do .map laga saktai hai hnnn and .map laganai kai bad .filter bhi use kar sktai hai ji han
// toh isko kehtai hai chaining jismai 2 , 3 methods aap directly laga sktai hai and hotai bhi hai

//this is chaining
// jab bhi chaining hoti hai jo line no 23 ka result hota hai 
// wo second chain ( line no. 25) mai pass ho jata hai

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
// output  -  [41, 51, 61, 71, 81, 91, 101]


/* map bara he easy aur pyara callback function hai foreach sai better lag hai*/

