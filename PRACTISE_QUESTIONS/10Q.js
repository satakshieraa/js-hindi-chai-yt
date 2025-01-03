
// write a js fn to get the number of occurrences of 
// each letter in specified string

/* matlab apple
 a = 1
 b = 2
 l = 1
 e = 1

 */

 function occ(str){
    let occurrences = {};
    str.split("").forEach(function (elem){
        if(occurrences.hasOwnProperty(elem) === false)
            occurrences[elem] = 1;
    else {
        occurrences[elem]++
    }
    })
    return occurrences;
 }

 console.log(occ("apple"));
 console.log(occ("rahul"));
 
 // sabsai pehlai humnai log mai apple bheja 
 //fir mtlb str apple.split("") 
 //split mai ja kai wo jayaiaga ek array mai ['a' , 'p' , 'p', aisia]

 // fir forEach mtlb har char pai aap khud ko loop karogai 
 // fir elem pai toh har ek char ayaiga elem pai a p p l e
 // fir occurences mtlb let  occurence = {}  iss object pai ayaigai

 //fir agar humarai elem mai a nam kie property nhi hai mtlb false hai

 // toh aap apnai occurences walai object mai a kie property set kardo 1 

 // agar repeated value hai jaisai p toh usko bhej do ++ walai mai toh 2 hojayaiga p kie value

 

