
// write a js program to find the most frequent item of an array

function freq(arr){
    let freq = {};
    arr.forEach(function (elem){
        if(freq.hasOwnProperty(elem)) freq[elem]++;
        else freq[elem] = 1 ;
    })

    let ans = Object.keys(freq).reduce(function(acc ,num){
        return freq[acc] > freq[num] ? acc : num ;
    })

    console.log(ans);
    
}

freq([1 , 2, 3, 1, 1 , 2, 2,2]) 