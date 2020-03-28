// File: file_readdir.js
// Note: Listing Files
// Date: 03/28/2020
//..............................................................................
console.log("Mounting file_readdir.js... ");
/*
 * Another common task when working the file system is listing files and folders
 * in a directory - for example listing files in a directory to determine 
 * whether they need to be cleaned up, to dynamically operate on the directory
 * structure, etc.
 * 
 * You can access the files in the file system by using the following commands
 * to read a list of entries:
 * 
 * fs.readdir(path, callback) 
 * fs.readdirSync(path)
 * 
 * If readdirSync() is called, and array of strings representing the entry
 * naes in the specified path is return. 
 * 
 * In the case of readdir(), the list is passed as the second parameter to 
 * the callback function, an error,if there is one, is passed as the first
 * parameter.
 *  
 */
var fs = require('fs');
var Path = require('path');
/*
 * Implementting a callback chain to walk down and output the contents of a 
 * directory structure.
 *
 * Notice that the callback function implement as a wrapper to provide closure
 * for the fullPath variable and the WalkDirs() function loops by being called
 * by the asynchronous callback function.
 */ 
function WalkDirs(dirPath) {
	console.log(dirPath);
	fs.readdir(dirPath, function(err, entries) {
		for (var idx in entries) {
			var fullPath = Path.join(dirPath, entries[idx]);
			// closure
			(function(fullPath) {
				fs.stat(fullPath, function(err, stats) {
					if (stats && stats.isDirectory()) {
						console.log(fullPath);
					} else if (stats && stats.isDirectory()) {
						WalkDirs(fullPath);
					}
				});
			})(fullPath);
		}
	});
}
WalkDirs("../data_io");
