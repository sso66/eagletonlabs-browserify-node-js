// File: stream_read.js
// Note: Writable data streams
// Date: 03/01/2020
//..............................................................................
console.log("Mounting stream_write.js...");

var stream = require('stream');
var util = require('util');
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

var writer = new Writer();
for (var i = 1; i < 5; i++) {
	writer.write("Item: " + i, 'utf8');
}
writer.end("ItemLast");
console.log(writer.data);

// eof

