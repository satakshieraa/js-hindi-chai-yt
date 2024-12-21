const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
console.log(marvel_heros.concat(dc_heros)); // add both of the arrays into 1 array


// const allHeros = marvel_heros.concat(dc_heros) 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //same as concat but in programming people genrally prefer ....method

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// [1,2,3,4,5,6,7,6,7,4,5] it has spread out

const real_another_array = another_array.flat(Infinity) // returns a new array witha ll sub-array elements 
// concatenated into the recursively up to the specified depth
// mtlb aapko chaheyai ek single array ab uskai andar array kai andar array hai aapko yeh syntax psand nhi a rha kya
//sabko ek array mai dai du kya hnji daidijiye infinity sara indepht khud he dekh laiga
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))// asking question is it a array
console.log(Array.from("Hitesh"))// made it a array
console.log(Array.from({name: "hitesh"})) //intresting an empty array [] as it cannot directly convert it toh 
/* isko apko bolna paraiga actually mai dena paraiga kie aacha keys ka 
mai arrays banao ya fir sirf mai iskai values ka array banao
and jab nhi bana payaiga toh khali [] yeh daiga */


//example

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// array.of returns new array from set of elements

// .is , .from  , .of read mdn 