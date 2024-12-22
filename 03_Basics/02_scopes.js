//let vara and const
// scope is diff in browser console and in code editor terminal log


//var c = 300 //{} iskai bahar wali value iskai andar accessiable hoti hai know as global scope but iskai wali value iskai andar accessiable nhi hoti hai known as global scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);.....ans = inner mai 30 but bahar mai 300 output
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); this part will give error as its scope is blocked tll only function two so it wont be able to give any output

     two()
//jab bhi hum tarah sai f call kartai hai toh uskai liye alag sai call stack banta hai 
//alag sai scope banta hain jitni bar aap f aya utni bar wo scope banaiga unti vat stack mai rakha jata hai
// jab bhi nested f hotai hai toh jo chaild variable hai jaisai two wo parent one kai f ko access kar pata hai

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); it will not be accessed as its scope is defined till only second if statement 
}

// console.log(username); it will not be accessed as its scope is defined till only first if statement


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(300)) 

function addone(num){ // THIS IS just a f declaration
    return num + 1
}



addTwo(5)
const addTwo = function(num){ // but this is a f declaration hold in a variable know as hosting 
    return num + 2
} // mtlb addtwo(5) ko jo humnai variable sai pehlai declare kiya hai wo nhi karna hai f declare honai kai bad karna hai addtwo(5) ko write