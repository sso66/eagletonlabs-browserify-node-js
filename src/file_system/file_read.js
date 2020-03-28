// File: file_read.js
// Note: Reading a JSON string file to an object
// Date: 03/28/2020
//..............................................................................
console.log("Mounting file_read.js...");
/*
 * The fs module provides four different ways to read data to the files:
 * in one larg chunck, chunks insynchronous reads, in chunks using asynchronous 
 * reads or stream reads through Readable stream.
 * 
 * All these methods are effective. Which one you use depends on the particular
 * needs of you application.
 * 
 */
var fs = require('fs');
var options = { encoding: 'utf8', flag: 'r'};
/*
 * Simple File Reading:
 *
 * The simplest method for reading data to a file is to used one of the
 * readFile() methods. Thiese methods read the full contents from a file into
 * a data buffer.
 * 
 * fs.readFile(path, [options], callback)
 * fs.readFileSync(path [options])
 * 
 */
fs.readFile('./data/config.json', options, function(err, data) {
	if (err) {
		console.log("Failed to open Config File.");
	} else {
		console.log("Config Loaded.");
		var config = JSON.parse(data);
		console.log("Max Files: " + config.maxFiles);
		console.log("Max Connections: " + config.maxConnections);
		console.log("Root Path: " + config.rootPath);
	}
});

// eof
