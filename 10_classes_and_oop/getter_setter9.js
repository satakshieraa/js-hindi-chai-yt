
// yaha banaya humne class

class user {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

   /* 
   
   get password(){
        return this.password.toUpperCase()
        // ab ismai aya error kya aya output
       // TypeError: Cannot set property password of #<user> which has only a getter
       
       //kya hua kie hum line no. 13( matlab bhai satakshi ka 2 line new code wala) pai pahuchai he nhi kabhi kyu ?
       // kie dekho passw property hai toh humne passw property lai rakhi hai constructor mai toh agar app getter define karogai na toh setter bhi define karna he paraiga 
       // getter mtlb class kai bahar sai nichai jo 2 line satakshi new hai waha sai dekhiye class kai bahar sai kuch property get karna chahtai ho isiliye getter hota hai
       // koe value set karna chatai ho class kai andar isiliye setter hota hai 

    }            
    
    */

    /* 
    set password(value) {
       this.password = value                // abhi password ka value yaha bhi set kara and upar constructor mai bhi set kara toh ji chaleyai error dekhtai hai 
        //RangeError: Maximum call stack size exceeded

        // kya hua kie value set kartai time constructor bar bar call huai he ja rha hai kyukie setter mai bhi value set kar di
        // toh object wo confuse ho rhai hai kie karna kya hai dono kai beech mai
        // kie actually mai ap bhi value set kar rhai ho and constructor bhi set kar rha hai password toh ap kar kya rhai ho beech mai 

    */
        // toh hum kya kartai hai solution kie password mai ek _yeh underscore kaga detai hai, mtlb ek naya he var humnai bana diya
        
        get password(){
            //return this._password.toUpperCase()     // humne yaha bhi password mai underscore kaga diya hai
            return `${this._password}hitesh`  // kikikihitesh output
        }
        
        
        set password(value){
            this._password = value
        }     // bachaa error abhi bhi a rha hai hnnn kaisai ,,, ab a rha hai get valai mai waha bhi thik karo
  
        //output 123 if nichai 123 diya hai as password
        //abc as ABC output kyukie get mainai .toUpperCase diya hai get mai 
        

        //aab email kai liye bana tai hai
        //jarurie point get and set kartai waqt var ko jo nam constructor mai hai wahi nam get kai agai and set kai agai lagana paraiga 
        
        get email(){
            return this._email.toUpperCase()    //jaisai yeh _email ek private property he ban gayie hai as isko ap he access kar pa rhai ho class kai bhitar
        }

        set email(gmail){
            this._email = gmail
        }
           // output - SATAKSHI@GMAIL.COM
    }


const satakshi = new user("satakshi@gmail.com", "kikiki");
console.log(satakshi.password);
console.log(satakshi.email)

//thik hai mera password a gaya hai 
// but kae bar mujhe fine gain control chaheyai hota hai kie
//koe bhi mujhsai password puchai toh mai usko retur karu kie password mai nhi batauga
//ya encryted password return karu
// bhut sarai aisai cases hotai hai jaha pai apne ek class banaye hai and uskai andar kuch properties hai uska
//access ap sabko nhi dena chatai 
// ya fir koe laina chata hai access toh aap usmai kuch customise code karna chatai hai
// toh aisai kae sarai scenarios hotai hai
//and ussi kai liye getters and setters hotai hai

// ab kuch kareyai mai password ka access kisi ko dena he nhi chata toh uss case mai usko error kaisai daigai
//toh uss case mai humare pass getters and setters hotai hai

// getter and setters bydefault har class mai hotai he hai lekin humne inkai upar kuch code likh nhi hai toh jo default behaviour hai wahi rehta hai
//toh inko control karnai ka jo sabsai easy tarika hota hai wo kie apnai jitnai bhi variables ya properties bol dijiye
// inmai sai kisi kai upar bhi getter or setters laga saktai ho