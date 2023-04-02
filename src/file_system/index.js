// File: index.js
// Note: Accessing the File System from Node.js
// Date: 04/02/2023
//..............................................................................
// import fs from 'fs';
import fsPromise from 'fs/promises';

// console.info('Synchronous vs. Asynchronous File System Calls fs object:\n', fs);

const filePath = "myFile.txt";

/*
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
*/
// opening and closing files 
// console.log('Promise File System Calls\n', fsPromise);

console.info('Promise File System Calls fs/promises object:\n', fsPromise);
let fileHandle;
try {
  fileHandle = await fsPromise.open(filePath, 'w+')
  console.log('File opened? ', fileHandle)
} catch(err) {
  console.error(err.message);
} finally {
  fileHandle?.close();
}

// eof
// > file_system@1.0.0 start
// > node index.js

// Promise File System Calls fs/promises object:
//  {
//   access: [AsyncFunction: access],
//   copyFile: [AsyncFunction: copyFile],       
//   cp: [AsyncFunction: cp],
//   open: [AsyncFunction: open],
//   opendir: [Function: opendir],
//   rename: [AsyncFunction: rename],
//   truncate: [AsyncFunction: truncate],       
//   rm: [AsyncFunction: rm],
//   rmdir: [AsyncFunction: rmdir],
//   mkdir: [AsyncFunction: mkdir],
//   readdir: [AsyncFunction: readdir],
//   readlink: [AsyncFunction: readlink],
//   symlink: [AsyncFunction: symlink],
//   lstat: [AsyncFunction: lstat],
//   stat: [AsyncFunction: stat],
//   link: [AsyncFunction: link],
//   unlink: [AsyncFunction: unlink],
//   chmod: [AsyncFunction: chmod],
//   lchmod: [AsyncFunction: lchmod],
//   lchown: [AsyncFunction: lchown],
//   chown: [AsyncFunction: chown],
//   utimes: [AsyncFunction: utimes],
//   lutimes: [AsyncFunction: lutimes],
//   realpath: [AsyncFunction: realpath],
//   mkdtemp: [AsyncFunction: mkdtemp],
//   writeFile: [AsyncFunction: writeFile],
//   appendFile: [AsyncFunction: appendFile],
//   readFile: [AsyncFunction: readFile],
//   watch: [AsyncGeneratorFunction: watch]
// }
// File opened?  FileHandle {
//   _events: [Object: null prototype] {},
//   _eventsCount: 0,
//   _maxListeners: undefined,
//   close: [Function: close],
//   [Symbol(kCapture)]: false,
//   [Symbol(kHandle)]: FileHandle {},
//   [Symbol(kFd)]: 3,
//   [Symbol(kRefs)]: 1,
//   [Symbol(kClosePromise)]: null
// }
// PS C:\Users\Owner\Documents\Aptana Studio 3 Workspace\GitHub\webpack-node.js\src\file_system>        
