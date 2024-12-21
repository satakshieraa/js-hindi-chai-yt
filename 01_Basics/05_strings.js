const name = "hitesh"
const repocount = 50

console.log (`this is my name ${name} and this is my repocount ${repocount}`) 
// this is called string interpoliation so cooollll ! can use like touppercase type of function or method also eg. ${name.toUppercase}

const gamename = new String("sataskhi")
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.__proto__);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("t"));


const gameName = new String("sataskhi")

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

//like slice push pop trim and space you have the notes and refer to mdn too

//these are few kind of methods for more refert to mdn refrence
//learn about string methods

const gameName2 = new String('hitesh-hc-com')
console.log(gameName2.split('-'));//







