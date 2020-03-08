// File: stream_duplex.js
// Note: Duplex data streams
// Date: 03/01/2020
//..............................................................................
console.log("Mounting stream_duplex.js...");

var stream = require('stream');
var util = require('util');

util.inherits(Duplexer, stream.Duplex);

function Duplexer(opt) {
	stream.Duplex.call(this, opt);
	this.data = [];
}
Duplexer.prototype._read = function readItem(size) {
	var chunk = this.data.shift();

	if (chunk == "stop") {
		this.push(null);
	} else {
		if (chunk) {
			this.push(chunk);
		} else {
			setTimeout(readItem.bind(this), 500, size);
		}
	}
};

Duplexer.prototype._write = function(data, encoding, callback) {
	this.data.push(data);
	callback();
};

var duplexer = new Duplexer();

duplexer.on('data', function(chunk) {
	console.log('read ', chunk.toString());
});

duplexer.on('end', function() {
	console.log("Message Complete");
});

duplexer.write("I think, ");
duplexer.write("therefore");
duplexer.write("I am.");
duplexer.write("Rene Descarries");
duplexer.write("stop");
duplexer.end();

// eof
