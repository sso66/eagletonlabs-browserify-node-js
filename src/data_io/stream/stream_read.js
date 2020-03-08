// File: stream_read.js
// Note: Readable data streams
// Date: 03/01/2020
//..............................................................................
console.log("Mounting stream_read.js...");

var stream = require('stream');
var util = require('util');
util.inherits(Answers, stream.Readable);

function Answers(opt) {
	stream.Readable.call(this, opt);
	this.quotes = ['yes', 'no', 'maybe'];
	this._index = 0;
}
Answers.prototype._read = function() {
	if (this._index > this.quotes.length) {
		this.push(null);
	} else {
		this.push(this.quotes[this._index]);
		this._index += 1;
	}
};

var answer = new Answers();
console.log ("Direct read: " + answer.read().toString());
answer.on('data', function(data) {
	console.log("Callback read: " + data.toString());
});

answer.on('end',function(data) {
	console.log("No more answers.");
});

// eof
