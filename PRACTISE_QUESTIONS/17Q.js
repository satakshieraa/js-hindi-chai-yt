// write a js function to get the the last element of an arrray
// passing a prarmeter 'n' will return the last 'n' elements of the array

// wrong solution make again

function retrieve (arr , n = 1) {
    if (n <= arr.lenght) {
        for ( let i = 0; i < n ; i++){
            console.log(arr[arr.lenght - 1 - i])
            }
    } 
    else {
        console.log(n + " toh elements he nhi hai ")
        
    }
}

retrieve([1 , 2 , 3 , 4 , 5], 3)