// using JS after ES6

 class user {       // class kai andar hum properties and functions bhi add kar saktai hai
      constructor(username, email, password){        // constructor kab call hota hai jaisai he class sai ek object initalize hoga yani kie wo new keyword jaisai he kam mai logai wasai he constructor apne app call ho jata hai
       this.username = username;
       this.email = email;
       this.password = password
      
    }          
    
    encryptPassword(){                      //wo password dots mai ayai uske liye sayad
        return `${this.password}abc`
    }

    changeusername(){
        return`${this.username.toUpperCase()}`
    }
 }

 const chai = new user("satakshi","@gmail.com","1234")
 
 console.log(chai.encryptPassword());
console.log(chai.changeusername());

 // behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());

//agar mujhe class wali functionality nhi available hoti toh kie dikat wali bat nhi thi
// kyukie pehlai hum isi tarah sai kam kar rhai thai 
// kyukie ab mainai dekh liya hai yeh jo user hai actually mai fn hai but yeh object kie tarah bhi behave karta hai
// isiliye mai iskai andar ja ke yeh prototype n sarai kam yaha pai inject kar sakta hu