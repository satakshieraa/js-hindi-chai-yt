// properties kai kaisai through getters and setters define hotai thai 
 
//yaha banaya humnai fn 

function user(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value    //aisai he password ko bhi declare kar dena 
        }
    })
}

const satakshi = new user("satakshi@gmail.com", "kikiki");
console.log(satakshi._password);
console.log(satakshi.email)

// fn 2 tarah sai behave karta hai fn khud mai fn bhi hai and object bhi hai 
