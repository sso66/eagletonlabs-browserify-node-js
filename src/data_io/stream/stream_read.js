// File: stream_read.js
// Note: Implementing a Readable stream object
// Date: 03/27/2020
//..............................................................................
console.log("Mounting stream_read.js...");

var stream = require('stream');
var util = require('util');
/* 
 * Notice that the Reader() class inherits from Readable and then implements 
 * the Reader.prototype._read() function to handle pushing data out.
 * 
 */
util.inherits(Reader, stream.Readable);

function Reader(opt) {
	stream.Readable.call(this, opt);
	this.quotes = ['yes', 'no', 'maybe'];
	this._index = 0;
}
Reader.prototype._read = function() {
	if (this._index > this.quotes.length) {
		this.push(null);
	} else {
		this.push(this.quotes[this._index]);
		this._index += 1;
	}
};
/*
 * Also, notice that a direct read() calls read the first item from the stream,
 * and then the 'data' event handler reads the rest of the items.
 */
var reader = new Reader();
console.log ("Direct read: " + reader.read().toString());
reader.on('data', function(data) {
	console.log("Callback read: " + data.toString());
});

reader.on('end',function(data) {
	console.log("No more Readers.");
});

module.exports = Reader;

// eof

// output
// Mounting stream_read.js...
// Direct read: yes
// Callback read: no
// Callback read: maybe
// No more Readers.
