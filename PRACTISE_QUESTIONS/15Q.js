// write a js fn whuch accepts an argument and returns the type
// note: there are six possible values that typeof returns
// : object , boolean , function , number , string and undefined


 function checktypeof (elem) {
    return typeof elem ;
 }

 console.log(checktypeof("riya"));
 console.log(checktypeof(24));
 console.log(checktypeof(123n));
 console.log(checktypeof(true));
 console.log(checktypeof([1,2])); //object
 console.log(checktypeof(undefined));
 console.log(checktypeof( function () {}));
 
 