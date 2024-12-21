// singleton = koe bhi constructor sai jab banatai hai toh singleton obejct banta hai
// yani kie yeh ek he object hai
//jab bhi hum literals kie tarah declare kartai hai toh singleton nhi banta hai constructor sai he singleton banta hai


// Object.create = contructor method singleton iski kai through banta hai


// object literals = object ko declare karnai ka tarika hai

const mySym = Symbol("key1")
// interview question 
//kie ek symbol lo aur usko objects kie keys mai define kar kai dikha do
//simply ek symbol lena hai usko define karna hai (mysym mai)
//usko keys kie trah act karna hai jaisai nichai object mai kiya hai and usko print karna hai

const JsUser = {         // key value pair
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//hoe to access object

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com" //to change the value of the pair
// Object.freeze(JsUser)
// so that no one can change the value

JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

//functions kai andar koe discrimination nahi hota ap usko variables kie tarh teart
//kareyai koe difference nhi hoga

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // ya pai kya hai kie jab bhi apko same object ko refrence krna hai we us this. itna karnai sai jo bhi humara 
    // object hai uskai andar jitni properties hai wo humai dikh jayegie
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());