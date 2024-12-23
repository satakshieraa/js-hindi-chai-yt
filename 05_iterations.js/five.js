

// For each loop

//callbackfn ka mtlb kie mujhe ek function daido kie mujhe kya karna hai
//callback kai nadar function aisai likha jata hai

/*original -- function name() {}
            function () {}
            function (item) {} //item hai baki aap jo bhi bolna chatai hai wahai likh saktai hai jaisai val ya kuch bhi and hogaya bas wahi hai normal F */

// coding.forEach ( () => {
    //}) arrow f mai aisia likhata hai ji for each

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){  .......... simple function
//     console.log(val);
// } )

// coding.forEach( (item) => { .............. arrow function
//     console.log(item);
// } )

// function printMe(item){  ........ 1
//     console.log(item);
// }

// coding.forEach(printMe)  ........ 2 ...... yaha pai printme kai bad () yeh nhi lagaya hai kyukie
                                              // refrence daina hai sidha execute nhi karna hai refrence daido printing ka kam wo khud kar laiga



// coding.forEach( (item, index, arr)=> {     ...... iskai andar () parameter ata hai but sirf yahi nahi ata hai iskai andar index and pura array kai list bhi aati hai
//     console.log(item, index, arr);
// } ) ................... output kaisai aya ...... ek example..... js 0 ["js", "ruby", "java", "python", "cpp"]

// yeh example hai kie array hai and uskai andar object hai [ {}, {}, {}] yeh wala
// and yeh foreach kai andar bhut use kiya jata hai

// yeh bhut common iteration hai , data bases jo value aati hai wo array kie format mai aati hai aur har ek value ek object he hoti hai


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

