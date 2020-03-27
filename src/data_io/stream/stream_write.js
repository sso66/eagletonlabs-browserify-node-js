// File: stream_read.js
// Note: Implementing writable stream object
// Date: 03/27/2020
//..............................................................................
console.log("Mounting stream_write.js...");

var stream = require('stream');
var util = require('util');
/*
 * To implement your own custom Writable stream object, you need to first inherit
 * the functionality for Writable streams. The simplest way 
 * 
 * Then you create an instance of the object all
 * 
 * You alss to need to implement a _writable(data, encoding, callback) method that
 * stores the data for the Writable object.
 */
util.inherits(Writer, stream.Writable);

function Writer(opt) {
	stream.Writable.call(this, opt);
	this.data = new Array();
}
Writer.prototype._write = function(data, encoding, callback) {
	this.data.push(data.toString('utf8'));
	console.log("Adding: " + data);
	callback();
};

// var writer = new Writer();
// for (var i = 1; i < 5; i++) {
	// writer.write("Item: " + i, 'utf8');
// }
// writer.end("ItemLast");
// console.log(writer.data);

module.exports = Writer;

// eof

