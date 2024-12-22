// Immediately Invoked Function Expressions (IIFE)
/*jaisai he apnai f likha usai turant he exeucte karwana hai 
toh isko karwanai kai toh bhut sarai tarike hai toh kyu humai aisa f chaheyai jo turant he execute ho jayai
toh kae bar hum yeh chizai karaigai espcically kae bar hum ek file likhtai hai jiskai andar sirf database 
connection hai aur hum chahtai hai kie jaisai he humari application jaisai he strat ho wo wasai he uss file kai andar
humara database ka connection start ho jayai
kae bar jo scope kai andar variables declare hotai hai kae bar hum functon kai andar kuch likh 
rhai hai aur hum nhi chahtai hai kie uss f kai andar wo global var kuch problem karai kyukie wo toh
available hai bachai toh baro sai ja kai mang sktai hai usi tarah sai jo f mai ap declare kar rhai hai
wo kae var global scope sai pollute ho jatai hai

toh 2 main reason hotai hai kie

1) global scope sai pollute nhi chaheyai toh hum humara ek alag
pura scope bana laitai hai kyukie f mai scope ban he jata hai

2) aur + mai chata hu kie wo immediately execute hojayai wahi pai*/

(function chai(){
    // named IIFE kyukie yeh jo F hai chai yeh ek named iifi hai
    console.log(`DB CONNECTED`);
})();

( (name) => { //koe nam nhi hai toh yeh simple iifi hai
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

/* first () jaha pai hum f kie defination likh nai walai hai
aur second() hogaya iska execution call

iife do immediately execute the code but dont know where to stop so 
at last we write ;  <- to let it know that this part of code will end now


iife mtlb jo f immediately execute ho jayai 
and global scope kai pollution sai problem hoti hai kae bar
toh global scope kai jo bhi variables hai ya jo bhi uska declaration hai
uskai pollution ko hatanai kai liye humnai iife ka use kiya 

to write two iifi in one file put a ; to end the first iifi 
and to begun the second iifi

*/