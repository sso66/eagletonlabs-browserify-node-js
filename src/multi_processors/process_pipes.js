// File: process_pipes.js
// Note: To read input from the console via process i/o pipes for output
// Date: 03/15/2020
//..............................................................................
console.log( "Mounting process_pipes.js..." );

console.log("stdin is the standard input pipe for the process which is console");
console.log("___ read input from console ___");
process.stdin.on('data', function(data) {
    console.log("Console input: " + data);
    console.log("Console: output: " + (2 * data));
});

// console.log("___ begin reading from stdin so the process does not exit ___");
// process.stdin.resume();

process.on('SIGINT', () => {
  console.log('Ctrl+C was pressed!');
});

// Using a single function to handle multiple signals
function handle(signal) {
  console.log(`Received ${signal}`);
}

process.on('SIGINT', handle);

// eof
