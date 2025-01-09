// given a string , reverse each word in the sentence

let work = "todays work paid me 12000 rupees"

let result = work.split(" ").map (function(word){
  return    word.split("").reverse().join("")
})

console.log(result.join("  "));


//split(" ")
//there is a space in the split above 
// so what it does is basically split the words of the 
// sentence split space basically means we want to split on the basis on space can be other things too

// map ka andar jo bhi chiz return hoti hai wo new array kai andar save hoti rehti hai

//map
