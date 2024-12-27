/*promises sai he 1 concept banta hai apka .then ka and .catch ka 
ek internal tool bhi apko milta hai jisko boltai hai fetch bhut imp hai yeh fetch 
kyukie yeh bhut sara kam hai behind the scene and isko samjhnai sai pehlai humai promises 
samjhnai paraigai tab hum bat karaigai kie browser diagrams , network calls , brwoswer API's
kya hoti hai*/ 

//promise ka simple sa mtlb hai kie apnai usai jo bhi task diya hai wo abhi k abhi queue mai lagkai complete nhi hoga
//async await mtlb jab tak kam nhi ho rha tab tak wait karo
//promise future mai ja kai complete hota hai examples - cryptographic operations , networks , file systems

/*The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value */

/*To learn about the way promises work and how you can use them, we advise you to read Using promises first.

Description
A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods 
return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. 
If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

A promise is said to be settled if it is either fulfilled or rejected, but not pending.

Flowchart showing how the Promise state transitions between pending, fulfilled, and rejected via then/catch handlers. A pending promise can become either fulfilled or rejected. If fulfilled, the "on fulfillment" handler, or first
 parameter of the then() method, is executed and carries out further asynchronous actions. If rejected, the error handler, either passed as the second parameter of the then() method or as the sole parameter of the catch() method, gets executed.*/

//jyada tar hum promises ko consume he kar rhai hotai hai banatai bhi hai but jyada tar consume he karta hai

//fetch('https://something.com').then()____ .then mai response ata hai | .catch() _____ .catch mai error ata hai | and .fianlly ______ ismai sab kuch he a jata hai  */
 
//HOW TO MAKE PROMISES     

//in next file

