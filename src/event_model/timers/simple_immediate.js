// File: simple_immediate.js
// Note: Performing Immediate Work with Immediate Time
// Date: 04/03/2020
//..............................................................................
console.info('Mounting simple_immediate.js...');
/*
 * Immediate timers are used to perform work as soon as the I/O event callbacks
 * begin executing but before time or interval event are executed.
 * 
 * They allow yu to schedule work to be done after the current events in the 
 * event que are completed.
 * 
 * You should use immediate timers to yield long-running execution secments to 
 * other callbacks to prevent starving I/O events.
 * 
 * You create timers by using the setImmediate(callback, [args]) method that
 * 
 */
// A timeout timer
setTimeout(function() {
    console.log('I am a timeout');
}, 5000);

// An interval timer
setInterval(function() {
    console.log('I am an interval');
}, 5000);

// An immediate timer, its callback will be executed before those defined above
setImmediate(function() {
    console.log('I am an immediate');
});

// IO callbacks and code in the normal event loop runs before the timers
console.log('I am a normal statement in the event loop, guess what comes next?');

// eof