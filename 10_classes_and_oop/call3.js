function setusername(username){
    //complex calculation
    this.username = username ;
}

function createuser(username, email, password){
    setusername.call(this, username); //as yeh run nhi hua tha toh isko ek refrence kai andar hold kar laigai jo hai call
    
    //yaha pai username ka access hona chaheyai kyukie yeh method call ho 
    // rha iss method kai andar he call ho rha hai toh tecnhically kie agar iskai andar call ho rha hai toh iska access hona chaheyai ,
    //jitnai bhi variable ap iskai andar declare kartai ho uska access hota hai, internally fn kai andar aur kuch declare kartai 
    // hai toh wo access hona chaheyai .......
    this.email = email;
    this.password = password;

}

const chai = new createuser("chai", "@gmail.com", "123")
console.log(chai);

 
// wo jo refrence hold kara kai rakhna hai na ki uske andar jo bhi variable declare ho rhai hai
// ya jo bhi function call ya execute ho rhai hai and ussai jo value return ho rhi hai wo bhi toh chaheyai na mujhe
// aisai thodai na hota hai kie fn execution hat gaya toh bass kam khatam 
// toh execution context apko daina paraiga 

//agar humnai sirf .call diya hai toh bhi username execute nhi hoga  toh object mai koe change nhi milaiga kyukie username hat hai kie gayab ho rhai hai
//toh iskai liye ussai ek refrence daina paraiga kie jo yeh set kar rhai ho na jitna bhi 3rd line wala code
//  hai wo aap khud kai this mai mat karo
// kyukie har fn ka apnai apnai app mai ek this hota hai and uss this kai andar or bhi values add kari ja sakti hai
// kyukie wo jo this hai wo actually mai gayab ho jayaiga toh iss this ko mat uss karo 
// mai apko apna this deta hu refrence (call kiya hai global object kabhi broswer mai windows ho jata hai and node mai yeh)
// toh usko mai apna this deta hu 
// toh ja bhi app call use karaigai toh first parameter app optionally this pass kar saktai hai
// toh ab humnai this as a first parameter pass kiya toh line no. 1 to 4 kai code gayab ho jayaigai
//unhone kaha kie ab mera jo bhi hai apka hua 

// yeh answer bhi bol dena kie call jo hai humara current execution context kisi aur executoin ko pass kar deta hai

