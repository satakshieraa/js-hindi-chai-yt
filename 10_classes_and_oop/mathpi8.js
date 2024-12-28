// yeh sawal object related chiz hai
//object bhi iterate ho kai ja saktai hai
//yeh getownpropertydescriptor humai object kai barai mai kuch hidden chizo kai barai mai batati hai jo kie humne sayad nhi dekhi hogi


const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor);

/*output
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  }

  yeh jo output hai yeh itnai indepth indetail hardcoded hai kie isko true change nhi kar saktai ho

  toh iss tarah sai kya hum humare bhi object mai properties dai saktai hai kya 
  kie koe humara framework ya library use karai toh kuch hardcoded value hai jo hum unko dai dai and wo kabhi 
  change he nhi kar paye toh 
  hnji aisai possible hai ap unki property flex wagrah lai saktai ho and un properties flex ko change bhi kar saktai ho
  _____ aisai he indepth mai answer ho
  //toh iss tarah kie properties hoti hai object kai andar and hum khud kie aisie properties define kar saktai hai


*/
//console.log(math.pi)
//console.log(Math.round(Math.PI));

// there are a lot of ways to declare a object one of them is factory fn jaisai

//const newobject = Object.create(null)

const chai = {
    name: "masalachai",
    price:50,
    isavailaible: true,

    //nichai walai example kai liye last mai jo if satatement uskai liye 
    orederchai : function(){
        console.log("chai nhi bani");
        
    }
}

//console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai)); //iska output undfined aya kyukie apnai kaha property ka descriptor do and yeh chai property toh hai nhi yeh toh object hai 
//property kya hai chai andar ko name price isavailable hai wo hai property

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

/*

{
  value: 'masalachai',
  writable: true,
  enumerable: true,
  configurable: true
}       

*/

//aab isko hum kardaigai false upar math pi walai kai jaisai hehehahaha
  
Object.defineProperty(chai, 'name', {
 // writable: false,
  enumerable: false, //jaisai enumerable false hai toh yeh iterate hona band ho gaya hai
  //toh output mai sirf price and isavailable he a rha hai name nhi aya and if isai true kar daiga toh name bhi ayaiga
  //matlab jaisai he issai true kiya wasai he iteration hoga , ab loop kai andar hum isko available kar patai hai
})

//last part hai last mai padhna 
// kya hoga agar ap isko bol dogai kie mai enumeration nhi chahta hu yaha pai
//tab uss case mai actually mai aap loop nhi laga pao gai waha pai

console.log(Object.getOwnPropertyDescriptor(chai, "name")); 

/*

{
  value: 'masalachai',
  writable: false,
  enumerable: false,
  configurable: true
}

*/

//jisko jisko define kiya wo false hogayie ______ mast hai na re baba! 


for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {  //matlb agar fn hai toh print mat karwana 
        
        console.log(`${key} : ${value}`);
    }
}

// before using entries chai was not iterable
//iterable kyu nhi hai kyukie yeh object hai
//now if want to iterate an object then after of 
// write object.enteries(chai) to make it iterable
//and yes  ek fn nhi lai saktai hai key values he chaheya rehti hai
//toh uss case mai kya kar saktai hai

//yeh upar wala for and if mai real world mai handle karaigai advance mai

// mudai kie bat yeh hai kie hn aisa configuration ho sakta hai
//kie jitni bhi apki object kie properties hai wo kuch apke loop kai part he na banai
//toh kae bar aisi situation ati hai jaha pai backend as a service mil jata hai 
// toh waha pai dhyan sai dekhiya ga kie unkie properties kya hai getonproperties karkai dekheyie kie wo writeable , readable hai ya nhi hai
//kyukie maths.pi kai andar nhi hai 
//toh ho sakta hai kuch framework sai kuch data a rha ho is trah sai apkai pass values ho nhi ho

//browser mai object ko sirf dropdown sai khol kai dekhna hai kie uski properties hai kie nhi hai

//advance chizo mai faseyai toh advance knowledge ayaigie and
// and advance knowledge mai fasnai ka ek he chiz he
//kie build kareyai kuch
//toh khud research kareyai toh khud sikhiyai ga


 
