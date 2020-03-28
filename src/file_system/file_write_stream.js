// File: file_write_streamjs
// Note: Streaming File Writing
// Date: 03/28/2020
//..............................................................................
console.log("Mounting file_write_stream.js...");
/*
 * One of the best methods to use when writing large amount data to a file is
 * streaming, which involves opening the file as Writable stream. 
 * 
 * Writable streams can easily be implement and linked to Readable streams,
 * using the pipe() method; this makes it very easy to write data from Readable
 * stream source such as HTTP request...to server (re: Websocket).
 * 
 * To stream data to a file synchronously, you first need to create a Writable
 * stream object:
 * 
 * fs.createWriteStream(path, [options])
 * 
 * The path parameter specifies the path to file, which can be relative or 
 * absolute.
 * 
 * The optional parameter is an object (meta) that can contain encoding, mode
 * and the flags properties that define the string encoding (Character Encoding)
 * as well as mode and flags used when openning the file.
 * 
 * Once you have opened the Writable file stream, you can write to it using the
 * standard stream write(buffer)methods. When you finished writing call the 
 * end method to close the stream.
 * 
 */
var fs = require('fs');
var grains = ['wheat', 'rice', 'oats'];

var options = { 'encoding': 'utf8', 'flag': 'w' };
var fileWriteStream = fs.createWriteStream('./data/grains.txt', options);

fileWriteStream.on('close', function() {
	console.log("File Closed.");
});

while (grains.length) {
	var data = grains.pop() + " ";
	fileWriteStream.write(data);
	console.log("Wrote: %s", data);
}
fileWriteStream.end();

// eof 
