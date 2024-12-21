//constructor or declare it through literals

// const tinderUser = new Object() ...... this is a singleton object
const tinderUser = {} // an this is a non singleton object


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); {id: '123abc', name : 'sammy', isloggedIn: false}

const regularUser = {
    email: "some@gmail.com",
    fullname: {        //kinda nesting type
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"} //objects can be combined also
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) = .assign mtlb copy the values of all the enmureable own properties from
//from one or more source object to a target object. returns the target object
// {} isai upar walai mai guarante ho jati hai kie humara target hai aur other obj 1 2 4 act as a source 


const obj3 = {...obj1, ...obj2} //this ... is spread operator so 90% of time we will use this
// console.log(obj3);

//whenever values come through database
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); output as array toh apnai sari keys ko liya ek array mai rakh diya
//ab chahai toh uskai upar loop laga sktai hai and bhut sarai jagah use kar sktai hai imp while working in database


// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser)); ......har ek jo key value hai usko array mai bana diya jata hai

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); ..........returns boolean value T or F


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //muhjhe laga kir courseinstructor bhut bara nam hai toh uski jagah mai ussai instructor he bulauga sirf itna he syntax hai


// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

//jaisai react mai ek object milaiga usko destructre karkai uski value nikalni hoti hai
