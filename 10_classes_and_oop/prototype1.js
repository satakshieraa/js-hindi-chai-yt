// 7:38 sai prototype wala section start ho rha hai usai pehlai humara new keyword wala section tha
 
let myname = "hitesh        ";

//console.log(myname.trueLength); 


//console.log(myname.Lenght).........//hn .trim().lenght karkai original no. of characters lai sktai hai
// mujhe use karna hai truelenght meri bane hue method remove the space count and print the original no. of characters

// mujhe kya karna hai yaha pai kie string kai andar ek method ad kardo truelenght


//___________________________________________________________________________________________________________________________________________________________

let myheros = ['thor', 'spiderman']

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderpower: function(){  // yeh key kai samnai hum string ya number inject karnai kai jagah hum directly ek function inject kar rhai hai
         console.log(`spidy power is ${this.spiderman}`);
         
    }               

}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object`);
    
}

Array.prototype.heyhitesh = () => {
    console.log(`hitesh says hi`);
    
}


//heropower.hitesh()
//myheros.hitesh()

myheros.heyhitesh() //yeh power bas array kai pass he ayi hai kyukie array mai fn inject kiya hai string mai nhi jaisai kie myheros 
// mai hn obvious hai kie agar object mai he fn inject kar daigai toh wo sab mai pass ho jayaigai array ho ya string


//agar mai power sirf array ko du toh kya by default yeh power object kai pass bhi chali jati hai

//mai toh chata hu kie kabhi bhi koe bhi object he declare ho toh base uss object kai andar he declare kar do
// agar humne object kai andar koe superpower dal di toh sarai function , array , string sab object sai he na ho kai pass hotai hai toh sab kai pass power na a jani chaheyai
// factory fn mtlb iska by default fn jo isko create karnai kai liye use ata hai

// koe aisi situation hai jaha pai ap information exchange karna chahtai ho
//kie inn dono object ko hum apas mai link kar dai toh aisi chizai link karnai kai liye humare pass prototype hai


//INHERTANCE

// har object apnai app mai ek alag instance hai

// OLD SYNTAX

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // __proto__ ko bol rhai hai kie dekho ek kam karo yeh jo apka prototype hai na usko refrence kardo humare teaching support sai iski yeh sari properties ap borrow karlo
    //ab TAsupport sai jo bhi aap further new karkai object banaogai toh uskai pass apko mil jayaiga access
}

Teacher.__proto__ = User

//yahi jo upar mai hai wo prototypial inhertance hai ap kaisai kisi aur kie properties ko access kar saktai ho

// MODERN SYNTAX

//setprototypeof - sets the prototype of a specified object o to object proto or null. returns the object o

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

// oooooooo hum ab samjhai dekho
//upar mai sir nai kaha tha na kie mujhe ek lenght kie method banane hai
//toh sir nai wo method truelenght kai nam sai banya 
//abhi character calculate karna toh string lagaya
//then prototype method bana nai kai liye
//then truelenght kai nam sai banaya
//then function mai ja kai method define kar diya 
// this use kiya kie jo bhi bula yai uskai pass jao jaisai nichai mai hitesh and coldcoffee nai bulaya
//then usi kai andar trim wala method define kar diya and lo ban kai tayar hai humari garma garam turelenght ka method taste kar kai batayeai kaisa hai kam kar rha hai na ;)


//anotherUsername.trueLength()

"hitesh".trueLength();
"coldcoffee".trueLength();


