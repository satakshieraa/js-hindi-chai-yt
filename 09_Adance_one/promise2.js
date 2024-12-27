const one = new Promise(function(resolve, reject) {
//do an async task which is -> 
//DB calls ho saktai hai , cryptography related , network call
setTimeout(function(){
console.log("async task is complete");
resolve() //yaha pai yeh resolve pass karna paraiga tab ja ke yeh connect hoga .then sai and iss resolve kai andar hum values bhi pass kar saktai hai
},1000) 
})

one.then(function(){ //.then kai abdar ek callback miltai hai jaisai promise mai milta hai and automatically isko ek receive karta hai
    console.log("hehehehe"); //.then kie value pehlai kabhi bhi nahi ayaigie resolve sai kyukie ek var resolve hogaya toh yeh .then bolaiga kie mera time a gaya hai chalnai kai tab yeh promise consumed part humara run karaiga

    
})

//____________________________________________________________________________________________________________________________________________________

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
        },2000)
}).then(function(){
    console.log("completes 2");
    
})

//______________________________________________________________________________________________________________________________________________________

const promise3 = new Promise(function(resolve, reject){ //har bar setimeout thodai he na karna hai ho sakta hai kie network sai koe data aya ho and wo data bhi toh humai pass karna hai
    setTimeout(function(){ //abhi iss function nai bhut sara kam kara hosakta hai network sai file system sai jakai kuch data laya

        resolve({username:"chai", email: "chai@example.com"}) //iskai andar chahai toh object ya array bhi pass karsaktai hai

    },4000) 

})

promise3.then(function(user){         //resolve kai andar jo bhi parametr pass krtai hai wo humai .then mai mil jata hai
console.log(user);

})

//____________________________________________________________________________________________________________________________________________________________________________________________________________________________

const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false  //suppose mainai web ya network kari ya file access karni chahi , file access ho gaya toh kuch bolna paraiga , file access nhi kie toh kuch bolna paraiga 
        if(!error){
            resolve({username: "hitesh", password: "123"}) // agar error false hai toh print karwao resolve
            } else {
                reject('something went worng' ) // agar error true hai toh print karwao reject
             }
    }, 1000)
})

promise4.then((user) => {
    console.log(user);
    return user.username
}).then((usernamee) => {
    console.log(usernamee);
}).catch((err) => {
    console.log(err);
    
}).finally(() => console.log("The promise is either resolved or rejected"))



//_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

const promise5 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true //suppose mainai web ya network kari ya file access karni chahi , file access ho gaya toh kuch bolna paraiga , file access nhi kie toh kuch bolna paraiga 
        if(!error){
            resolve({username: "javascript", password: "123"})
            } else {
                reject('ERROR : js went wrong')
            }
    }, 1000)
});

//promise ko .then and .catch kie jagah async await sai bhi handle kar sktai hai yeh topic jyada tar tab kam ata hai jab ap database connection katai hai

/*async function consumepromise5() {
    const result = await promise5; //if the statement above was false then asyn await cant handle error directly
    console.log(result);
    
}*/

async function consumepromise5() {
    try {
        
    const result = await promise5; // async await cant handle errors directly so 
    console.log(result);           // we use try and catch method that try will see the error 

    } catch (error) {              //and catch will if there is a error we will handle it and pirnt the error
        console.log(error);
        
        
    }  //try and catch use karnai sai greacefully error handle hua hai
    
}
consumepromise5() 

//__________________________________________________________________________________________________________________________________________________________________________________________________________

//asyn await mai values hoti hai aur kaisai hum usko use kar sktai hai

async function getallusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') //fetch hai network request hai obvious si baat hai time lagaiga toh await karaigai
    const data = await response.json() //json kyu ban jao kyukie abi ho data a rha hai wo string mai a rha hai and uss string sai hum koe value nhi nikal payaigai
    console.log(data);
    } catch (error) {
        console.log("E:",error);
        
    }
    }

    getallusers()     //ismai async await sai data ko fetch kiya 


//____________________________________________________________________________________________________________________________________________________________________________________________________________________\

//isi just upar walai fetch ko .then and .catch mai kar kai dekhtai hai

// basically idea toh yahi hai kie response kai andar values dalo aur print karwa do

fetch ('https://jsonplaceholder.typicode.com/users')
.then(function (response) {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(data));    //ismai .then and .catch sai data ko fetch kiya

//____________________________________________________________________________________________________________________________________________________________________________________________________________________________

//AbortController mtlb jab apki node reqeust gayie hue hai fetch kai through usko ap rok bhi saktai ho
// browser kai andar apkai pass full control hai


//question interview type = promise sai apnai ek request kari and usmai error code aygaya 404
//toh apko resolve mai milaiga ya reject mai milaiga ? ____________________________ ans. toh wo humaisa apko as a response he mlaiga error nhi hai
//error wo tab hoga uss case mai jab request kar he nhi paya hai wo browser

//mdn mai ja kai fetch ko padhao waha pai likha hua hai kie kab kismai kaisai syntax mai send karna hai

//fetch kai liye ek special queue banti hai isilye settimeout bhi bad mai he execute hota hai
// fetch queue ka nam hai micro task queue yeh fast ya priority queue bhi boltai hai
//priority ya fetch queu bhi boltai hai

//response = fetch('something')
//fetch ka 2 part hota hai 1st part jata hai browser ya node kie api request handle karnai kai liye
// aur dusra part jata hai variables ya memory mai data space reserve karnai kai liye kai liye bhagta hai toh 2 janai bhagtai hai fata fat ....... wo jo data keh lijiye hn toh jo data hai wo initially empty rehta hai

//2nd part mai 1 hota hai onfulfilled[] (yeh hai promise ka resolve) or 1 hota hai onRejection[] (yeh hota hai promise ka reject) iskai nam alag alag hai

// 1st part sai jata hai network request , ap network request pai data jayaiga ya nhi jayaiaga
//if response gaya toh onfulfilled[] iskai[] andar miltai hai function jo data ko fulfill karnai ka kam kartai haimai jayaigai and
//if response nhi gaya toh onrejection[] mai jayaigai _____ 404 error
//404 error bhi onfulfilled[] mai he count hota hai kyuie kuch toh response aya hai na



