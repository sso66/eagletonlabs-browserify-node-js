// File: event-dispatcher.js
// Date: 9/5/2020
// Note: Event-Driven Programming in Node.js
//..............................................................................
console.info('Mounting event-dispatcher.js...\n');

const events = require('events');

const CONNECTION = 'connection';
const DATA_RECEIVED = 'data_receved';

// Create an event dispatcher object
const eventEmitter = new events.EventEmitter();

// Create an connection event handler
const connectionHandler = function connected() {
    console.log('connection successful.');

    // Fire the data received event
    eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectionHandler);

// Bind the data_received event with anonymous function
eventEmitter.on('data_received', function() {
    console.log('data received successfully');
})

// Fire an event programmatically
eventEmitter.emit('connection');

console.log('Program Ended.')


// How Node Applications Work?

fs.readFile('callback-concept.txt', (error, data) => {
    if (error) return console.error(error);
    console.log(data.toString());
});

console.log('Program Ended');

// eof