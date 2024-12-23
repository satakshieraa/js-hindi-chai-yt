


// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {   .............. foreach value return nhi karta hai so saddddddd !
//     console.log(item); 
//      //     return item
// } ) 

// console.log(values);  ........ yeh koe kam ka nhi hai 



//  ........... toh kae bar hum uss each value pai kuch operation karna chahtai hai
// but kae bar hum uss value ko sirf return karna chahtai hai ya fir conditionaly check karna chatai hai
//toh yeh sab kai liye hum kya karna chatai hai

// toh hum yeh kartai hai

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {  ............. filter bhi apnai andar callback laita hai, and yeh humai value return karta hai
//     return num > 4
// } )

// console.log(newNums);


//.......................................................................................................................................................


// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

// ab dekho upar filter walai sai and yeh if walai sai kam same he ho rha hai
//bas if walai mai thoda logic jyada kag lag hai and usmai filter use karkai he kam ho ja rha hai

//.........................................................................................................................................................



// yeh books kie jo example hai asae he values humai database sai milaigie
// toh ab user jo jo bol rha hai waisai usko print karkai djiye


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History') // user books kai andar value konsi gayie automatically jo bhi isko true manti hai
  //yani kie wo sarai objects jinkai andar jo genre hai jo history hai wahi sai books user ko dikhae dai

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);