
let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11                         //yaha pai 1 hota toh 1 sai laikai 10 tak print karwata but yaha pai 11 hai toh output score is 11 ayaigai
                                       // kyu kyukie do while mai kam pehlai hota hai and cond bad mai check hoti hai udhari type ka kam chalta hai ismai
do {                                   // do main kam pehlai hota and condition bad mai check hoti hai
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);


/* there are loops which are specialised to be on array like array loop , array pai loop lagana itna jada common hai na kie data abse sai jabhi aap
values fetch karogai  jaisai 10 values 5 values toh wo array kie format mai ati hai, api's mai jada tar kuch apko values array kie format mai denai hai*/  