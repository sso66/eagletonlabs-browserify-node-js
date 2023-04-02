// File: index.js
// Note: Accessing the File System from Node.js
// Date: 04/02/2023
//..............................................................................
import fs from 'fs';

console.info('Synchronous vs. Asynchronous File System Calls fs object:\n', fs);

const filePath = "myFile.txt";

// opening and closing files 
console.log("Asynchronous File System Calls\n");
// fs.open(path, flags, [mode], callback)
fs.open(filePath, 'w', (err, fd) => {
  if(!err) {
	 // fs.close(fd, callback)
    fs.close(fd);
    console.warn('Found no error in opening a file (async) -> file descriptor: ', fd);
  } else {
    console.error(err);
  }
});

// opening and closing files 
console.log("Synchronous File System Calls...\n");
// fs.openSync(path, flags, [mode]
let fd = fs.openSync(filePath, 'w');
// fs.closeSync(fd)
fs.closeSync(fd);
console.warn('Found no error in opening a file (sync) -> file descriptor: ', fd);

console.info('___ The fd parameter is the file decriptor that you can use to read or write the file ___');

// eof

// Asynchronous File System Calls

// Synchronous File System Calls...

// Found no error in opening a file (sync) -> file descriptor:  3
// ___ The fd parameter is the file decriptor that you can use to read or write
