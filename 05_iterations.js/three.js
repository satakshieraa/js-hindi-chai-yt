// these are kind of array specific loop

// for of

// ["", "", ""] ........... yeh simple array
// [{}, {}, {}] .......... yeh hogaya array kai andar objects bananana 
//toh yeh bhut common scenario hai kie array kai andar aapko bhut sarai objects milaigai and
// aur har iterator mai apko objects mai sai value nikalni hai

// toh pehlai loop lagayeai fir object kai andar jayeai aur .notation sai [] notation sai ek value nikal kai layeai


//..........................................................................................................................

// for (cosnt iterator of object ) mtlb kis object pai lagana chatai ho, toh iterator wahi hai jo i hoti thi i++ wali i samjhi 
// toh koe bhi variable jaisa nam daido const kai bad toh variable ka he nam ata hai

// yaha ka object js walai object jaisa nhi hai yaha pai language same honai ka confusion ho skta hai
// yaha pai object sai tatpareyai ya hai kie meaning kis chiz kai upar loop laga hai

// toh yaha pai sirf variable declare kijiye batayeai kiskai upar loop lagana hai abs yeh sara kam fir khud kar laigai kitna accha pyara sai simple hai na

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // yaha pai arr (object place) mtlb arr kai upar loop lagana hai
    //console.log(num);
}

const greetings = "Hello world!" // jarurie nhi hai kie array he ho hum string bhi print karwa saktai hai
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps


//the map object holds key-value pairs and remembers the original insertion order of the keys.
//any value ( both object and primitive values ) may be used as either a key or a value

// map kai andar koe duplicate vlue nhi milti hai sari unique value he milti hai

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) { // jasai he hum [] iskai andar key value likhtai hai toh array ka destructure hojata hai yaha pai
    // console.log(key, ':-', value);
}

//...............................................................................................................................................


// object pai for of loop laga sktai hai ? nhi why why whyso 
// Because bacha myobject is not iterable maps are but myobject is not
// there are different ways of iterating objects


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
