// File: util_inherits.js
// Note: Using inherits() to inherit the prototypes from event.EventEmitter
// Date: 03/07/2020
//..............................................................................
console.log( "Mounting util_inherit.js... " );

var util = require('util');
var events = require('events');

function Writer() {
    events.EventEmitter.call(this);
}

util.inherits(Writer, events.EventEmitter);
Writer.prototype.write = function(data) {
    this.emit("data", data);
};

var w = new Writer();
console.log(w instanceof events.EventEmitter);
console.log(Writer.super === events.EventEmitter);
w.on("data", function(data) {
   console.log("Receiving data: " + data + '"'); 
});

w.write("Some data");

//eof
