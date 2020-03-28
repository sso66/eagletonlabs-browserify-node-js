// File: file_stats.js
// Note: Getting File Info
// Date: 03/28/2020
//..............................................................................
console.log('Mounting file_stats.js...');
/*
 * Another common task is to get basic information about file system objects, 
 * such as file size, mode, modification time, whether the entry is a file or
 * folder, etc:
 * 
 * fs.stats(path, callback)
 * fs.statsSync(path)
 * 
 * The fs.statsSync method returns a Stats object.  
 * 
 * The fs.stats() method is executed, adn the Stats object is passed to the
 * callback function as the second parameter. The first parameter is error if
 * an error occurs.
 * 
 */
var fs = require('fs');

fs.stat('file_stats.js', function (err, stats) {
	if (!err) {
		console.log('stats: ' + JSON.stringify(stats, null, ' '));
		console.log(stats.isFile() ? "Is a File" : "Is not a File");
		console.log(stats.isDirectory() ? "Is a Folder" : "Is not a Folder");
		console.log(stats.isSocket() ? "Is a Socket" : "Is not a Socket");
		stats.isDirectory();
		stats.isBlockDevice();
		stats.isCharacterDevice();
		stats.isSymbolicLink(); // only lstat
		stats.isFIFO();
		stats.isSocket();
	}
});

//eof
