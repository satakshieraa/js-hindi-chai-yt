// for

//select the word press ctrl d and select and write the new word and change it so easy hahaha

for (let i = 0; i <= 10; i++) { //i <= 10 mtlb jo i hai uski lenght kam honi chaheyai array.lenght
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element); // error out of scope


//..........................................................................................................................


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) { //outer loop 1 var chailaga and inner loop 10 bar cahailga fir outer loop 1 var chaliga and outer loop 10 var chailga
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );................. oh my goddddddddddd issai toh table print hogaya 10 tak ka oooooooooooooooooo
   }
    
}

//.............................................................................................................................


let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) { // if index++ kie jaga index as it is he return kar rhai hai toh humai condition change he nhi kari angar cond change nhi karaigai toh loop wahi ka wahi kie chaltai jayaiga , ismai yeh flash pai he atak jayaiga
    const element = myArray[index];
    //console.log(element);
    
}


//..................................................................................................................................................................................................................................................................................


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break                                  // break sai contol execution ko sidha he bahar faik daitai ho toh baki ka print nhi hota hai mtbl 5 detect hogaya agai ka countine nhi karna hai wahi sai bahar aa jao ofcourse koe cond match honi chaheyai
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue                                 // 5 detect hogaya kie mtlb ek var apko 1 cond kai liye mafi di jaati hai aap agai continue karo and sab kko print kawa do mtlb ek war kai liye hum cond skip daigai 
    }
   console.log(`Value of i is ${index}`);
    
}
