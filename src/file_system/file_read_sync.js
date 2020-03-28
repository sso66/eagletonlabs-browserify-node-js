// File: file_read_sync.js
// Note: Synchronous File Reading
// Date: 03/28/2020
//..............................................................................
console.log("Mounting file_read_sync.js...");
/*
 * The synchronous method of file reading the data from a file before returning
 * executing to the running thread. 
 * 
 * This provides the advantages of allowing you to read multiple items in the 
 * same section of code, but it can be disadvantage if the file reads hold up 
 * other threads.
 * 
 */
var fs = require('fs');
fd = fs.openSync('./data/veggie.txt', 'r');

var veggies = "";
/*
 * To read af file synchronous, first opet it by using openSync() to get a file
 * descriptor then use readSync() to read data from the file.
 * 
 * fs.readSync(fd, buffer, offset, length, position)
 * 
 * The fd arameter is the file descriptor that openSync() returns.
 * 
 * The buffer parameter specifies the Buffer object that data will be read 
 * into from the file.
 * 
 * The offset parameter specifies the index in the buffer to begin writing data;
 * if you want to begin at the curren index in the buffer, the value should be
 * null.
 * 
 * The length parameter specifies the number of bytes to read; to write until 
 * the end of the buffer, specify null.
 * 
 * The position argument specifies the position in the file to begin reading.
 * To use the current file position, specify null for this value.
 * 
 * To implement basic synchronous reading to read a chunck of string data from
 * a file:
 * 
 */
do {
	var buf = new Buffer.alloc(5);
	buf.fill();
	var bytes = fs.readSync(fd, buf, null, 5);
	console.log("read %d bytes", bytes);
	veggies += buf.toString();	
} while (bytes > 0);

fs.closeSync(fd);
console.log("Veggie: " + veggies);

// eof
