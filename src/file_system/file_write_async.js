// File: file_write_async.js
// Note: Asynchronous File Writing
// Date: 03/28/2020
//..............................................................................
console.log("Mounting file_write_async.js...");
/*
 * The asynchronous method of file writing puts a write request on the event 
 * queue (function, callback) and then returns control back to the calling code.
 * 
 * The actual write does not take place until event loop picks up the write
 * request.
 * 
 * You need to be careful when performing multiple asynchronous write request
 * on the same file because you cannot guarantee execution order unless you 
 * wait for the first write callback before executing the next one.
 * 
 * To write a file asynchronously, first open it using open() and then after the
 * callback from the open request has executed, use fs.write() to write data to
 * the file.
 * 
 * fs.write(fd, data, offset, length, position, callback)
 * 
 * The fd parameter is the file descriptor that open() returns.
 * 
 * The data parameter specifies the String or Buffer object that will be written
 * to the file.
 * 
 * The offset parameter specifies the index in the input data to begin reading
 * data. If you want to begin at the current index in the string or buffer, this
 * value should be null.
 * 
 * The length parameter specifies the number of bytes to write;if you want to 
 * write at the end of the buffer, specify null for this parameter.
 * 
 * The position argument specifies the position in the file to begin writing.
 * To use the current file position, specify null for this value.
 * 
 * The callback funciton must be a function that can accept two parameters, 
 * error and bytes, where error is an error that occurred during the wirte and
 * bytes specifies the number of bytes written.
 * 
 * To implement basic asynchronous writing to store a series of string data in
 * the file:
 *  
 */
var fs = require('fs');
var fruitBowl = ['apple', 'orange', 'banana', 'grapes'];

function writeFruit(fd) {
	if (fruitBowl.length) {
		var fruit = fruitBowl.pop() + " ";
		fs.write(fd, fruit, null, null, function(err, bytes) {
			if (err) {
				console.log("File Write Fail.");
			} else {
				console.log("Wrote %s %dbytes", fruit, bytes);
				writeFruit(fd);

			}
		});
	} else {
	    // ___ multiple async calls cannot guarantee execution order ___
	    // fs.close(fd); 
		fs.closeSync(fd);
	}
} 
/*
 * Notice the callback specified in the fs.open() method calls the writeFruit()
 * function and passes the file descriptor. 
 * 
 * Also notice that the fs.write() method also call writeFruit()funciton and
 * passes the file descripter. This ensures that the asynchronous write completes
 * before another executes.
 */
fs.open('fruit.txt', 'w', function(err, fd) {
    writeFruit(fd);	               
});

// eof
