// write a js fn that reverses a number

 function reverseit(num){
    return Number(num.toString().split("").reverse().join(""))
}

console.log(reverseit(8833)); //3388

// this above is a one liner answer
// try in loop also

// yeh aisai bhi kar sktai hai nichai wala

// var a = 12
//a.toString() //'12'
//a.toString().split("") // ['1', '2']
//a.toString.split("").reverse() //['2' , '1']
//a.toString.split("").reverse().join("") // '21'
//Number(a.toString.split("").reverse().join(""))
//console.log(a);


// yeh bhaiya chal gaya loop sai bhutai logic hai bhai
// yeh mitro hai chatgpt ka answer and iskai nichai 
// hai mera answer explaiantion wala

function reverseNumber(num) {
    let reversed = 0;
    
    while (num > 0) {
      reversed = (reversed * 10) + (num % 10);
      num = Math.floor(num / 10);
    }
    
    return reversed;
  }

  console.log(reverseNumber(56)); 

  

// isko loop mai solve karnai ka logic

// agar kisi bhi num mai % 10 lagatia hai toh wo uska last digit humai deta hai

// jaisai  34587 % 10  will give as output 7 ( we can number here )

// ab math.floor ( 34587 / 10 ) karaigai toh output will be 3458



// timespan sheryians coding school 25 questions video 33:16


function reversekaro(num){
 
    let rev = 0;
    while(num>0){         // jab tak number 0 sai bara hai
    let reminder = num%10  // num jo bhi apka akhri digit hai wo apko bahar milti jayaigie  toj jaisai 1234%10 will give us 4 
    rev = rev*10+reminder
    num = Math.floor( num/10)       // number ko tor tor kai chota kartai raho jaisai  1234/10 = 123.4  |  123/10 = 12.3  | 12/10 = 1.2  | 1/10 = 0.1 ,,,,, toh value num mai save hojayiga and at the end 0 ho jayaiga  aur jab 0 hojayaiga toh value band ho jayaiga

    }

    return rev
}
    
console.log(reversekaro(2255)); // output 5522





