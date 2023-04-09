const EventEmitter = require('events');                 //Class

const event = new EventEmitter();                       //Object


// // Example 1: Registering for an event to be fired only one time using once 

// event.on('sayMyName', () => {
//     console.log('My name is Chirag')
// });

// // event.emit('sayMyName');


// // Example 2: Create an event emitter instance and register a couple of callbacks 

// event.on('sayMyName', () => {
//     console.log('My name is Chirag')
// });
// event.on('sayMyName', () => {
//     console.log('My name is Chirag')
// });

// event.emit('sayMyName')

// Example 3: Registering for the event with callback parameters

event.on( 'checkPage', (sc, msg) => {
    console.log(`The status code is ${sc} and the page is ${msg}`);
})

event.emit('checkPage', 200, 'ok');
event.emit('checkPage', 404, 'ERROR');