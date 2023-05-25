// Events Module 
// Nodejs has a built-in module , called "Events".
// Where you can create , fire- , and listen for your own events 

// Ex-1 Registering for the event to be fired only 
// Ex -2 Create an event emmitter instance and register a couple of callbacks.
//  Ex -3 Registering for the  event with callback parameters

const EventEmitter = require("events");

const event  = new EventEmitter()

event.on("TellMeYourName" , () => {
    console.log("Anuj Sharma");
} );

event.emit("TellMeYourName");


// check status code of page  

event.on("checkPage", (scCode, complete) => {
    console.log(`status code is ${scCode}, page is ${complete}`)
});

event.emit("checkPage", 200 , 'DONE');







