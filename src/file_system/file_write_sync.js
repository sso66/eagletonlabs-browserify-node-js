// File: file_write_sync.js
// Note: Synchronous File Writing 
// Date: 03/28/2020
//..............................................................................
console.log("Mounting file_write_sync.js...");
/*
 * The synchronous method of file writing involves writing data to file before
 * returning execution to the running thread. This provides the advantage of 
 * allowing you to write multiple times in the same section of code, bu it can 
 * a disadvantage if the file writes hold up other threads.
 * 
 * To write to a file synchronously, first open it using openSync() to get a 
 * file descriptor and then use fs.write() to write data to the file.
 * 
 * fs.writeSync(fd, data, offset, length, position)
 * 
 * The fd parameter is the file descriptor that openSync() returns.
 * 
 * The data parameter specifics the String or Buffer object that will be written
 * to the file.
 * 
 * The offset parameter specifies the index in the data parameter to begin 
 * reading from. If you wnat to begin at the current index in the string or 
 * buffer, this value should be null.
 * 
 * The length parameter specifies the number of bytes to write; you can specify
 * null to write until the end of the data buffer.
 * 
 * The position argument specifies the position in the file begin write; to 
 * use current file position, specify null for this value.
 * 
 * To implement basic synchronous write to store a series of string data to a 
 * file:
 * 
 */
var fs = require('fs');
var veggieTray = ['carrots', 'celery', 'olives'];

fd = fs.openSync('./data/veggie.txt', 'w');
while (veggieTray.length) {
	veggie = veggieTray.pop() + " ";
	var bytes = fs.writeSync(fd, veggie, null, null);
	console.log("Wrote %s %dbytes", veggie, bytes);
}
fs.closeSync(fd);

// eof
