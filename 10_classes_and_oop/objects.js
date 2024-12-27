/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


/*js is  primarily a prototype based language 
 the constructor method is a special method for creating and initializing an object
 created with a class*/

 const user = {     //isko jo hai base unit bola gaya hai kie apka jo object yahi wahi object literal hai and wahi sabsai basic unit hai
    username: "hitesh",
    logincount: 8,
    signedIn: true,

    getuserdetails: function(){
        console.log(this); //this mtlb abhi kis chiz konsai current context kie bat kar rhai hai toh upar user tha humara current context wo agaya consol mai
        
        }
  }

 //console.log(user.username);
 //console.log(user.getuserdetails());
 
 
 //const promise1 = new Promise();
 // const date  = new Date()   //toh yeh new keyword hai yeh ek constructor function hai 
// yeh constructor fn kya karta hai ?
//yeh apko allow karta hai kie ap ek hie object liertal sai multiple instances bana sako

function user1(username, logincount, isloggedin){
    this.username = username;                      // kie myusername ek variable hai and = username wala jo just uper parameter pass hua hai uski value hai kam ho jayaiga
    this.logincount = logincount;
    this.isloggedin = isloggedin

     //return this // abhi return this karkai humai jo object tha na wo pass on kar diya ab jo bhi iskai sath khelaiga wo aram sai in puri values ko access kar skta hai

}                                                  //toh yeh lefthand side wali humara variable hai and yeh righthand side wali wo value hai jo ap pass kar kai dai rhai ho


const user2 = new user1("hitesh", 12 , true); //yaha pai user sai pehlai humnai new keyword use kiya nichai jo problem likha hai uske liye
const user3 = new user1("chaiaurcode", 5 , false); // ab dekho isko toh humnai kabhi print he nhi karwaya but conosole may jayaigai toh ovveride kar diya ab yahi dikat ko hatanai kai liye ata hai constructor fn 
console.log(user2.constructor); //output = [function: user]

//constructor fn apko har war ek naya instance ya copy dai deta hai
// uss copy kai sath kuch karo wo apki responsibilty hai original copy ya dusrai ussai affect nhi hotai hai

//ab jaisai upar mai return this nhi likha hai toh yeh implicitly define hota he hai

//constructor -> the initial value of object.prototype.constructor is the standard built-in object constructor
//constructor property refrence hoti hai khud kai barai mai

//ek hota hai instanceof bhi =
//The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. 
// The return value is a boolean value. Its behavior can be customized with Symbol.hasInstance.

//example code of instanceof yeh methid hota hai operator hota hai basically

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true
  