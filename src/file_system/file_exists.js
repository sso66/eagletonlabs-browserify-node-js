// File: file_exists.js
// Note: Verifying Path Existance
// Date: 03/28/2020
//..............................................................................
console.log("Mounting file_exits.js...");
/* 
 * Before doing any kind of read/write operation on a file or directory, you 
 * might want to verify whether the path exists. Use the following methods:
 * fs.exists(path, callback);
 * fs.existsSync(path)
 * 
 * fs.existsSync(path) returns true or false, depending on whether the path
 * exits.
 * 
 * Just as with any other asynchronous file system call, if you fs.exists, you
 * will need to implement a callback that will be executed when the call 
 * completes. The callback will be passe Boolean value of true or false, 
 * depending on whether the path exists:
 * 
 */
const file = require('fs');

file.exists('./data/config.json', function(exists) {
    console.log(exists ? "Path Exists" : "Path Does Not Exist");
});

// const exitsSync = file.existsSync('./data/config.txt');
// console.log(exitsSync ? "Path Exists" : "Path Does Not Exist");