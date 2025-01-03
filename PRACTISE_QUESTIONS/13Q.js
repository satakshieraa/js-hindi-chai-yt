
// Loop an array of objects and remove all objects which dont
// have gender's value male

let arr = [
    {name: 'harsh' , gender: 'male'},
    {name: 'harshita' , gender: 'female'},
    {name: 'harshu' , gender: 'male'},
    {name: 'harshi' , gender: 'female'},
    {name: 'goku' , gender: 'notspecified'},
]

// filter apkai array mai foreach kie tarah loop karta hai
// aur filter kuch specified condition kie basis pai 
// kuch elements ko new array mai rakhta hai and
// kuch elements ko nahi rakhta hai

// map bhi kya karta hai kie naya array banata hai and array
// kai members ko uss nayai array mai rakhta 

// filter map and reduce mai return karna aniwarya hai 

// yeh hai ek tarika solve karnai ka filter sai
// but ismai ek dikat hai kie yeh ek naya array bana rha hai

/*

var newarr = arr.filter(function (elem) {
    return elem.gender === 'male' 
})

console.log(newarr);

*/

/*

dura tarika

- sabsai pehle total non-male count lo
- ek non male bande ko hataane ka code likjo
- fir us code ko total non-male chala do
*/

var count = 0;
arr.forEach(function (elem) {
    if (elem.gender !== "male") count++ ;
})     // yaha pai humnai total count liye kie kitnai non male hai

for (let i = 1 ; i <= count; i++) { // line no 54 sai humne ussai kitni var chala diya hai count times count matlb jitne bhi total non-males thai
    for (let j = 0; j < arr.length; i++) {
        if (arr[j].gender !== "male") {
            arr.splice(j, 1)
        }     // line no 51 sai 53 mai humne ek non-male ko hataya hai
    } 
}

 