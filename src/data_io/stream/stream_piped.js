// File: stream_read.js
// Note: Piping Readable data streams to Writable data streams
// Date: 03/01/2020
//..............................................................................
console.log("Mounting stream_piped.js...");

var stream = require('stream');
var util = require('util');

util.inherits(Reader, stream.Readable);
util.inherits(Writer, stream.Writable);

function Reader(opt) {
	stream.Readable.call(this, opt);
	this._index = 1;
};

Reader.prototype._read = function(size) {
	var idx = this._index++;
	if (idx > 10) {
		this.push(null);
	} else {
		this.push("Item " + idx.toString());
	}
};

function Writer(opt) {
	stream.Writable.call(this, opt);
	this._index = 1;
};

Writer.prototype._write = function(data, encoding, callback) {
	console.log(data.toString());
	callback();
};

var reader = new Reader();
var writer = new Writer();

reader.pipe(writer);

// eof

