// File: mediator-design-pattern.js: 
// Date: 9/5/2020
// Note: Event Emitters -> Events -> Event Loop -> Event Handlers
//..............................................................................
console.log('Mounting mediator-design-pattern.js...\n');

const events = require('events');

const eventEmitter = new events.EventEmitter();
let eventListeners = null; // good practice of let used in Joint/Group A/C

// listener #1
const listener1 = function listener1() {
    console.log('listener1 executed.');
}

// listener #2
const listener2 = function listener1() {
    console.log('listener2 executed.');
}

// Bind the connection event with the listener1 function
eventEmitter.addListener('connection', listener1);

// Bind the connection event with the listener2 function
eventEmitter.on('connection', listener2);

eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listeners(s) listening to connection event");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listener 1 function
eventEmitter.removeListener('connection', listener1);
console.log('Listener 1 will not listen now.');

// Fire the connection event - again

eventEmitter.emit('connection');

eventListeners =  events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listeners(s) listening to connection event");

console.log('Program Ended\n');

// eof
