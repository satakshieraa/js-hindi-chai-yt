//code execution explaination

//go on inspect at google and code in source under snippet 
// and add a break point run it in call stack easy hai 





/*ismai humlog janai kie code ko execute kaisai karna hai kyukie jisko bhi js kai andar yeh pata
hai kie code kaisai execute hoga jo call staks hotai hai wo kis tarah sai execute hotai hai

topic name js execution context divided in two parts mtlb jo bhi apnai file banaye hai wo js run kaisai karegie ya execute kasiai karegie
toh js 2 phase mai run karti hai

jab bhi ap koe file banatai hai js kai andar jo sabsai pehlai banti hai ismai wo hai global execution context
jisko refer kar diya jata hai to this variable
( browser kai andar this kie value windows aati hai)

 js single threaed hai aur iskai andar ssab chiz ek process hoti hai 


1) call stacks - kie apkai pass ek memory hai aur uss memory kai andar kaisai f jayaigai kaisai 
execute hogai aue kaisai usai bahar ayagai isko pata karnai kai liye hum sidha browser kai andar dekhaigai
kie browser kai andar hum apni js ko sidha add kar sktai hai wahi pai visuaalize kar kai dekh sktai hai kie
call stack kaisai execute ho rha hai

global and function execution context and in mogous that is evsl execution contest
eval EC is a property in itself of global object

2 phases mai js code execute hota hai :-

1) memory creation phase - mai apkai variables ya jo bhi apnai declare kiya hai unkai liye jagah allocate hoti hai
unko execute nhi kiya jata hai

2) execution phase - 

*/


let val1 = 10;
let val2 = 5;
function addNum (num1, num2){
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

/* example of how a code is executed above code is input

1) global execution allocated inside this
2) memory phase sarai var ko collect kiya jata hai aur rakha jatai hai apnai pass mai
jaisai aya val1 toh iskai andar pehlai ayaiga undefined wasai he val2 kai sath
now addNum mai jati hai  f kie defination  

now in next line we take result1 and result2 again give undefined 
now this was the first cylce

now 2nd phase is execution phase 

1)val1 = 10
2)val2 = 5
3) addNum mai kuch nhi hoga kyukie uskai andar execution karnai kai lye kuch hai he nhi
4) now jab hum addNum pai a jatai hai in result1 toh yeh apna alag execution context banata hai
toh iskai andar banaiga (new var enviroment + execution thread)
mtlb jitni var bhi yeh f execute hotai hai toh har ek box create hota hai aur isko boltai hai new execution context
now as  a totally new sandbox has been created here (iskai andar upar mai) toh 2 kam wapas sai hogai memory phase and execution phase and yeh kiskai lye execute hoga 
line  88 walai addNum kai liye toh waha ka num1 and num2 dekhna hai

naya execution context banai kai bad delete bhi hota hai most important  
 see the ss of this in photos explained neatly */