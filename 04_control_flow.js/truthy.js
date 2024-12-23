

 const userEmail = [] // jaisai empty array hai toh apnI USKO  true man liya and agar empty "" (string) hai usko false man liye mtlb kuch bhi man laitai ho kye pagal ho kya
// toh uska ek rule hai

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//......................................................................................


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){} ........... string kai andar kuch bhi value ass hogayie ek vae chahai space ho ya zero 0 wo truthy value hogi


//......................................................................................


// const userEmail = []

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

//......................................................................................

//Object.key(your variable) returns an array o should be captial here while writing Object

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//.......................................................................................

// just for interview perspective remember that

false == 0  //true
false == '' //true
0 == '' //true

//.......................................................................................


// Nullish Coalescing Operator (??): null undefined ........ this operator deals with only null and undefined



let val1;
// val1 = 5 ?? 10 


/* isko ?? laganai ka mtlb he kya tha agar yeh first value he laigie toh kaye bar kiya hota hai kie
jab aap data base sai call kartai hai fir base wagarh ka use karaigai toh humai directly response nhi milta hai apko 2 values milti hai
and chances hai kie apkai pass null respose a jayai ya response ayai he na undefined a jayai toh us case humara
pura ka pura code structure paraisan ho sakta hai so for that cases specially this is made kie
agar null ho toh null he asign karlo kie usi hisab sai mai case adjust karlu ya undefined ya kioe value ho toh usai assign karlo*/



// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20 //ismai pehla value jo isko mila hai 10 wahi assogn ho jati hai

console.log(val1);


//..............................................................................................................................................


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

