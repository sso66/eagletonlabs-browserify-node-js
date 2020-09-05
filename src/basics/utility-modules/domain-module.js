const domain = require('domain');
const { exception } = require('console');
const EventEmitter = require('events').EventEmitter;

// Create a domain
const domain1 = domain.create();
// Create a listener
const emitter1 = new EventEmitter();

domain1.on('error', (error) => {
    console.log('domain1 handled this error(' + error.message+')');
});

// Explicit binding
domain1.add(emitter1);

emitter1.on('error', (error) => {
    console.log('listener handled this error(' + error.message+')');
});

emitter1.emit('error', new Error('To be handled by listener'));

emitter1.removeAllListeners('error');

emitter1.emit('error', new Error('To be handled by domain1'));

var domain2 = domain.create();

domain2.on('error', (error) => {
    console.log('domain2 handled this error(' + error.message+')');
});

// Implicit binding
domain2.run(() => {
    const emitter2 = new EventEmitter();
    emitter2.emit('error', new Error('To be handled by domain2'));
});

domain1.remove(emitter1);
emitter1.emit('error', new Error('Converted to exception. System will crash!'));

// eof

