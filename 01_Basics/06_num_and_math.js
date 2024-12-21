const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); ans = will return a string and length will be 3
// console.log(balance.toFixed(1)); ans = 100.0

const otherNumber = 123.8966 //123.9

// console.log(otherNumber.toPrecision(4));
//what precise means is to give the number closest value
//jaisai precise value agar .toPrecision(3) mai agar 3 diye hai aur input 12.889 toh output ayaiga 12.8 like only 3 numbers as the input given in the precision was 3 if i had give (4) and input was 1256.9587, then output would have been 1257 to the nearest value and only 4 digits

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); 10,00,000

// waisai default toh american currency hota  hai but agar indian curr mai change karna hai toh 'en-IN' daina parta hai then output will be 10,00,000 this will be the output 


// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math); //like all the properties related to maths jaisai sin cos square pi these methods will appear

console.log(Math.abs(-4));// -ve changes to +ve and +ve is +ve
console.log(Math.round(4.3));// simple round off
// console.log(Math.ceil(4.2)); 5 hojayaiga
// console.log(Math.floor(4.9)); 4 he rahaiga only world where i can control math
// console.log(Math.min(4, 3, 6, 8)); ans = 3
// console.log(Math.max(4, 3, 6, 8)); ans = 8


console.log(Math.random()); // value always lies between 0 and 1 jaisai dice game mai value 1 sai 6 kai beech mai chaheyai
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);// floor basically round of to lowest value
console.log(Math.floor(Math.random()*100) +1);// jaisai *10 ka mtlb hai single digit value ayaigie and *100 ka mtlb hai 2 digit mai value ayaigie like 65 and 89 aisai
// and agar hum chatai hai kie value sabsai choti ayai toh hum use kartai hai math.floor okay !
//floor basically round of kr deta hai lowest value pai
// to avoid getting the value in 0 we add +1 in it 
const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
