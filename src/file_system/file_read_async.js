// File: file_read_async.js
// Note: Asynchronous File Reading
// Date: 03/28/2020
//..............................................................................
console.log("Mounting file_read_async.js...");
/*
 * The asynchronous method of the reading put the read request on the event
 * queue and then returns control back to the calling code.
 * 
 * The actual read does not take until the event loop picks up the read request
 * and executes. 
 * 
 * You need to be careful when performing multiple asynchronous read request on
 * the same file because you cannot guarantee their execution order unless you
 * wait for the first read callback to execute before executing the next read.
 * 
 * To read form a file synchronously, frst open it by using open() and then after
 * the callback form the open request has executed, use read() to read data from
 * the file.
 * 
 * fs.read(fd, buffer, offset, length position, callback)
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
 * To implement basic asynchronous reading to chuncks of data from ta file:
 */
var fs = require('fs');

function readFruit(fd, fruits) {
    var buf = new Buffer.alloc(5);
    buf.fill();
    fs.read(fd, buf, 0, 5, null, function(err, bytes, data) {
        if (bytes > 0) {
            console.log("read %dbytes", bytes);
            fruits += data;
            readFruit(fd, fruits);
        } else {
            // ___ multiple async calls cannot guarantee execution order ___
            // fs.close(fd); 
            fs.closeSync(fd);
             console.log("Fruits: %s", fruits);
        }
    });
}
/*
 * Notice the callback specified in the fs.open() method calls the writeFruit()
 * function and passes the file descriptor. 
 * 
 * Also notice that the fs.read() method also call readFruit()funciton and
 * passes the file descripter. This ensures that the asynchronous write completes
 * before another executes.
 */
fs.open('./data/fruit.txt', 'r', function(err, fd) {
    readFruit(fd, "");
});

// eof
