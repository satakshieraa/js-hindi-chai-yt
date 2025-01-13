
//write a js program to shuffle an array


/*const users = [
    {firstname:'satakshi', lastname: 'raj', age:20},
    {firstname:'bili', lastname: 'bili', age:21},
    {firstname:'aarchi', lastname: 'didi', age:22},
    {firstname:'rahul ', lastname: 'santhalia', age:23},
]

const output = users.map((x) => x.firstname + " " + x.lastname);
console.log(output); // wahi arr kai andar satakshi raj aisai output hai
*/

//___________________________________________________________________________________________________

/*
const users = [
    {firstname:'satakshi', lastname: 'raj', age:21},
    {firstname:'bili', lastname: 'bili', age:23},
    {firstname:'aarchi', lastname: 'didi', age:22},
    {firstname:'rahul ', lastname: 'santhalia', age:23},
]

const output = users.reduce (function ( acc , curr){
    if(acc[curr.age]){
        acc[curr.age]++
    } else{
        acc[curr.age] = 1
    }
    return acc;
},{})

console.log(output); //{ '21': 1, '22': 1, '23': 2 } */

//_______________________________________________________________________________________________________

// if you have an array and you need to iterate over that array
// and come up to a single value up to it most propbably we can use reduce method

/*const users = [
    {firstname:'satakshi', lastname: 'raj', age:21},
    {firstname:'bili', lastname: 'bili', age:26},
    {firstname:'aarchi', lastname: 'didi', age:55},
    {firstname:'rahul ', lastname: 'santhalia', age:75},
] */

//const output = users.filter((x) => x.age < 30).map((x)=> x.firstname);

// can be done using reduce method yessssssss dimag ka  bati jala 

/*const output = users.reduce(function(arr , curr){
    if()
})

console.log(output); //[ 'satakshi', 'bili' ] */

//________________________________________________________________________________________________________

// this is HIGH ORDER FUNCTION

// THIS is dry method 
//dont repeat youserlf

/*const radius = [3,1,2,4]

const calculatorarea = function(radius){
    const output = [];
    for(let i = 0 ; i <radius.lenght; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

console.log(calculatorarea(radius));
*/

//______________________________________________________________________________________________________
/*

// this is high order function

const radius = [3,1,2,4];

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const calculate = function (radius, logic){
    const output =[];
    for (let i = 0; i < radius.length; i++) {
       output.push(logic(radius[i]))        
    }
    return output;
}

console.log(radius.map(area)); // does the same work as line no. 100

console.log(calculate(radius, area)); 
console.log(calculate(radius, circumference)); 
*/
//____________________________________________________________________________________________________________

// same type of high order fn 

const radius = [3,1,2,4];

const area = function (radius) {
    return Math.PI * radius * radius;
};

Array.prototype.calculate = function(logic){
    const output = [];
    for (let i = 0; i < array.length; i++) {
       output.push(logic(radius[i]))        
    }
    return output;
}

console.log(radius.map(area));
