class user {
    constructor(username){
        this.username = username
    }


logMe(){                   //yeh logme jo bhi apnai username set kiya hai uska value dai daita hai
      
    console.log(`username is ${this.username}`);

}
}

//yeh ban gayie upar mai humari basic class 
// lekin agar iss user ko kabhi lms bana rhe hai ya koe e-commerce bana rhe hai 
// toh iss user ko kabhi admin bhi banana parega kabhi teacher ya kabhi student bana na parega
// extends jasai pehlai prototype hota tha and sab kuch kar deta tha toh usi kai upar 1 sugar laga diya apnai


class Teacher extends user {
    constructor(username, email, password){
        super(username)
        this.email = email ;
        this.password = password
    }

    addcourse(){
        console.log(`this course was added by ${this.username}`);
        
    }
}

const course = new Teacher("hitesh sir", "@gmail.com", "123")

course.addcourse()

const masalachai = new user("masalachai")
// masalachai.addcourse()    ....... masalachai kai pass addcourse ka access nhi hai
masalachai.logMe()  //hnji available hai

course.logMe() //hnji course kai pass bhi available hai

// ab jaisai kie dono course aur masalachai alag alag classes sai ban kai kai aye hai toh kya dono available hai

console.log(user === masalachai); // false  // nhi yeh equal nhi hai

//chai teacher kai bhi equal nhi hai kyukie wo ek instance hokai aya thodai he na exactly laikai aya hai usko

console.log(course instanceof Teacher); //true
//teacher bhi toh user ka he instance hai

console.log(course instanceof user); //true



