// File: file_read.js
// Note: Reading a JSON string file to an object
// Date: 03/28/2020
//..............................................................................
console.log("Mounting file_read.js...");
/*
 * 
 */
var fs = require('fs');

var options = { encoding: 'utf8', flag: 'r'};

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
