// event.js
// Event-Driven Programming
/*
 * Event Loop | Event Life Cycle
 * Event Emitter Class
 * Event 
 * Event Queue
 * Event Handler | Event Listener
 */ 

// Template Method Design Pattern Signatures:
var events = require('events');
var eventEmitter = new events.EventEmitter();
/*
// make immutable events
const CONNECTION = 'connection';
const DATA_RECEIVED = 'data_received';

var connectHandler = function connected() {
  console.log('connection successful');

  // eventEmitter.emit('eventName');
  eventEmitter.emit('data_received');
};

// eventEmitter.on('eventName', eventHandler);
eventEmitter.on('connection', connectHandler);
// eventEmitter.on(EVENT_NAME, eventHandler);

eventEmitter.on('data_received', function() {
  console.log('data received successfully');
});

eventEmitter.emit('connection');

console.info('Program Ended');

*/
var eventHandler1 = function eventHandler1() {
  console.log('eventHandler1 executed');
};

var eventHandler2 = function eventHandler2() {
  console.log('eventHandler2 executed');
};

eventEmitter.addListener('connection', eventHandler1);
eventEmitter.on('connection', eventHandler2);

var listenerCount = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(listenerCount + ' eventHandler(s) listening to connection event');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', eventHandler1);
console.log('eventHandler1 will not listen now.');

eventEmitter.emit('connection');

listenerCount = events.EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(listenerCount + ' eventHandler(s) listening to connection event');

console.info('Program Ended.');

// eof
