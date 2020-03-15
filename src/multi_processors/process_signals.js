// File: process_signals.js
// Note:  handling standard POSIX signal names such as 'SIGINT', 'SIGHUP', etc.
// Date: 03/15/2020
//..............................................................................
console.log( "Mounting process_signals.js..." );

// Begin reading from stdin so the process does not exit.
process.stdin.resume();

const os = require('os'); 
  
constants = os.constants; 
  
// Printing os.constants 
  
// Signals constants 
if(constants.signals != undefined){ 
    console.log("Signals:"); 
    console.log(constants.signals); 
} 
  
// Priority constants 
if(constants.priority!=undefined){ 
    console.log("priority:"); 
    console.log(constants.priority); 
} 

process.on('SIGINT', () => {
  console.log('Ctrl+C was pressed!');
});

// process.on('SIGPIPE', () => {
  // console.log('Received SIGPIPE.');
// });

// Using a single function to handle multiple signals
function handle(signal) {
  console.log(`Received ${signal}`);
}

process.on('SIGINT', handle);
// process.on('SIGPIPE', handle);

// eof