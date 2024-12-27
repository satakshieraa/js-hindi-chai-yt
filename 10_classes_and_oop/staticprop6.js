// prop ko short mai property boltai hai

class user {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`username: ${this.username}`);
        
    }

    static createID(){       //.. aisie bhut sari sitaution hogie jaha pai iss method ka access har uss object ko nhi daina chahtai jo iss class sai instantiate hua hai
        return`123`       // assume kar lijiye har bar unique kara
    }
}

//const hitesh = new user ("hitesh")
//console.log(hitesh.createID());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
console.log(iphone.createId());

// mai chata hu kie jaisai he ek user banai wasai he uss user ko ek unique id mil jayai
// jab ab database wagarh mai save karogai na mongo DB automatically jaisai he ap ek user bana tai wo sai
// toh uske sath ek underscore id attach kar deta hai
// toh suppose kareyai wahi functionality hum yaha pai kar rhai hai


//static kya karta hai uss method ko ya uss propety ko access honai sai rok deta hai jo ap inko karaogai

// static - ek kam hua na kie id ka access mai sab ko nhi daina chahta tha
// kie har bar unique id bana nai kie functionality apko bhi mil jayai
// kar bar dena chahta hu kae bhi nhi dena chahta hu kae sarai cases hai

// toh apnai static jaisai he kr diya wo apko kisi bhi child ko access
//  ya class ko inherit bhi kisi ko karne nhi de rha hai