
// write a js function to get the the first element of an arrray
// passing a prarmeter 'n' will return the first 'n' elements of the array

// wrong solution make again

function retrieve (arr , n = 1) {
    if (n <= arr.lenght) {
        for ( let i = 0; i < n ; i++){
            console.log(arr[i])
            
        }
    } else {
        console.log(n + " toh elements he nhi hai ");
        
    }
}

retrieve([1,2,3,4,5], 3);
