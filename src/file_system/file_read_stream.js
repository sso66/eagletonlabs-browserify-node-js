// File: file_read_streamjs
// Note: Streaming File Reading
// Date: 03/28/2020
//..............................................................................
console.log("Mounting file_read_stream.js...");
/*
 * One of the best methods to use when reading large amount data to a file is
 * streaming, which involves opening the file as Readable stream. 
 * 
 * Readable streams can easily be implement and linked to Wrtable streams,
 * using the pipe() method. This makes it very easy to read data from a file
 * and inject it inot a Writable stream source, such as HTTP response...
 * from server (re: Websocket).
 * 
 * To stream data to a file synchronously, you first need to create a Readable
 * stream object:
 * 
 * fs.createReadStream(path, [options])
 * 
 * The path parameter specifies the path to file, which can be relative or 
 * absolute.
 * 
 * The optional parameter is an object (meta) that can contain encoding, mode
 * and the flags properties that define the string encoding (Character Encoding)
 * as well as mode and flags used when openning the file.
 * 
 * Once you have opened the Readable file stream, you can read to it using the
 * standard stream read() methods. When you finished reading call the end method 
 * to close the stream.
 * 
 */
var fs = require('fs');

var options = { 'encoding': 'utf8', 'flag': 'r' };
var fileReadStream = fs.createReadStream('./data/grains.txt', options);

fileReadStream.on('data', function(chunk) {
    console.log("Grains: %s", chunk);
    console.log("read %d bytes of data.", chunk.length);    
});

fileReadStream.on('close', function() {
	console.log("File Closed.");
});

// eof 
