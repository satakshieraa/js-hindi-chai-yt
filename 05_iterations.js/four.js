
//object pai loop for in sai laga sktai hai
//yaha pai variable name kie jaisai for of mai var name tha yaha pai humaisa keys he likhtai hai

// Array kie keys hoti hai - array kie bhi keys hoti hai
//actual mai object ka design he isilye hua tha kyukie array kie jo keys hai wo
// 0 sai start hoti hai aur by default number he hoti hai aur object mai jo marji ayai aap wo keywords dal sktai hai

// toh for of and for in mai major differnce yahi hota hai kie aapkai pas kiskai andar value use ati hai
// kiskai andar keys aati hai



// for in


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}   // aaayyyy balai balai print ho gaya


//.............................................................................


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}


//..............................................................................

// map kai upar iteration nhi kiya ja sakta hai


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }


// object kai upar for in loop use kar laigai
// array kai andar for of loop laga laigai

