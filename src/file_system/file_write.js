// File: file_write.js
// Note: Simple File Writing 
// Date: 03/28/2020
//..............................................................................
console.log("Mounting file_write.js...");
/*
 * The fs module provides four different ways to write data to the files.
 * You can write data to file in as single call, write chuncks using synchronous
 * writes, write chunks using asynchronous writes or stram writes through 
 * Writable stream.
 * 
 * Each of these methods accepts either a String or Buffer Object as input.
 * 
 */
var fs = require('fs');

var config = {
	maxFiles: 20,
	maxConnections: 15,
	rootPath: "/webroot"
};
/*
 * fs.writeFile(path, data [options], callback)
 * fs.writeFileSync(path, data [options])
 * 
 * The path parameter specifies the path to file, which can be relative or 
 * absolute.
 * 
 * The data parameter specifies the String or Buffer object that will be
 * written to the file.
 * 
 * The optional parameter is an object (meta) that can contain encoding, mode
 * and flag properties that defines the string encoding (Character Encoding),
 * as well as the mode and flags used when opening the file.
 * 
 * The synchronous method also requires the callback parameter, which will be
 * called when the file write has been completed.
 * 
 * To implement a simple asynchronous fileWrite() request to store as JSON
 * string of a config object in a file:
 */
var configTxt = JSON.stringify(config);
var options = { encoding: 'utf8', flag: 'w' };

fs.writeFile('./data/config.json', configTxt, options, function(err) {
	if (err) {
		console.log("Config Write Failed!");
	} else {
		console.log("Config Saved.");
	}
});

// eof
