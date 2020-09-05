// File: callback.js: 
// Date: 9/5/2020
// Note: Callback Concept
//..............................................................................
console.info('Mounting callback-concept.js...What is Callback?\n');

const fs = require('fs')

// For example, a function to read a file may start reading a file and return
// the control to the execution environment immediately so that the next 
// instruction can be executed. Once file I/O is complete, it will call the
// call back function while passing the callback functio, the contend of the 
// file as a parameter. So there is no blocking or wait for File I/O. This
// makes Node.js highly scalable, as it can process a high number of requests
// without waiting for any function to return results. 

// ___ Blocking I/O code ___
// let data = fs.readFileSync('callback-concept.txt');
// console.log(data.toString());

// ___ Non-blocking I/O code with anonymous callback function ___
fs.readFile('callback-concept.txt', (error, data) => {
    if (error) return console.error(error);
    console.log(data.toString());
});

console.log('Program Ended');

// These two examples explain the concept of blocking and non-blocking calls.

//  - The first example shows that the program blocks until it reads the file
//  and then only it proceeds to the end the program.
//
//  - The second example shows that the program does not wait for file reading
// and proceeds to print "Program Ended" and at the same time, the program 
// without blocking continues reading the file.
//
// Thus, a blocking program executes very much in sequence. For the programming
// point of view, it it easier to implement the logic but non-bocking programs
// do not execute in sequence. In case a program needs to use any data to be
// processed, it should be kept with the same block to make it sequential 
// execution.

// eof