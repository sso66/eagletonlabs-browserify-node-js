// File: stream_main.js
// Note: Implementing a Readable stream object
// Date: 03/27/2020
//..............................................................................
console.log("Mounting stream_main.js...");

const Reader = require('./stream_read');
const Writer = require('./stream_write');

console.log("--> Reader...");
var reader = new Reader();
console.log ("Direct read: " + reader.read().toString());
reader.on('data', function(data) {
	console.log("Callback read: " + data.toString());
});

reader.on('end',function(data) {
	console.log("No more Readers.");
});

// console.log("<-- Writer...");
// var writer = new Writer();
// for (var i = 1; i < 5; i++) {
	// writer.write("Item: " + i, 'utf8');
// }
// writer.end("ItemLast");
// console.log(writer.data);

// eof

