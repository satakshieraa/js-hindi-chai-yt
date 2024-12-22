//this keyword current context kai barai mai batata hai

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage() //hitesh, welcome to webside
// user.username = "sam"
// user.welcomeMessage() ........sam, welcome to website

/* console.log(this); and = {} , jab bhi hum node enviroment kai andar hotai toh apka jo this hai wo refer 
ar rha hai ek empty object ko kie abhi koe global kai andar koe context he nhi hai isliye empty
but jab browser walai console.log mai ja rhai hai and print karwa rhai hai kie console.log(this) then windows show kr rha hai kyu
 
so explaination interview question
earlier there was only one way of executing js was browser jo engine hai jo js ko execute karta tha
wo engine ek he jagah paya jata tha browser kai andar aur abhi humnai uss engine ko nikala aur usko alag alag
nam diye kuch na usko node nam diya ya deno nam diya toh abhi humarai pass engine standalone hai toh browser kai
andar jabhi wo engine run karta hai toh jabsai jyada jo global object hai  wo window object hai
toh browser kai andar jo global object hai wo hai windows object */


 function chai(){
     let username = "hitesh"
     console.log(this.username); 
 }

// chai() 
/* toh yeh huamara context hai wo object kai andar he kam kar rha hai
aisai F kai andar hum akai this use nhi kar pa rhai hai*/

 const chai = function () {
     let username = "hitesh"
    console.log(this.username);
 }

const chai =  () => {  //itna he diff hai arrow f anf f mai kie f mai f text ko hata kai () kai samnai => laga daitai hai bass
    let username = "hitesh"
    console.log(this);
}


// chai()

 const addTwo1 = (num1, num2) => {
     return num1 + num2
 }

const addTwo = (num1, num2) =>  num1 + num2 
/* implicit return so here we dont have to use these paranthese{} and just write the 
num so implicit ka mtlb hota hai kie yeh return keyword likhnai ka jarurt nhi hai apka 1 he line ka statement hai*/

 const addTwo3 = (num1, num2) => ( num1 + num2 )
 /*ye 1 aur tarika hai kie paranthese mai wrap kar djiye kyukkie agar {} likha toh isamai return pass karna paraiga*/
//this technique is used mostly in react
//aur explicit return kya hai hota hai return keyword lagana par rhai hai explicly return likhna par rha hai


const addTwo4 = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()