// File: globals.js
// Date: 9/5/2020
// Note: Node.js globals: "scope", "context" and "function"

// Based on the location of the program, it will print the
// current filename and current directory, respectively.
console.log('filename:' + __filename);
console.log('dirname: ' + __dirname);

// named callback function
function printHello() {
    console.log('Hello, World!');
}

// call the above function after 2 seconds
// const timeout = setTimeout(printHello, 2000);
// clearTimeout(timeout)

// call the above function after 2 seconds
// const interval = setInterval(printHello, 2000);
// clearInterval(interval)


// ___ core NPM 'console' ___
console.info("Program Started");

const counter = 10;
console.log('Counter: %d', counter);

console.time('Getting data');

// Do some processing here...
for (let i = 0; i < counter; i++) {
    printHello();
}

console.timeEnd('Getting data')

console.info('Program Ended');

// ___ core NPM 'process' ___
process.on('exit', function(code) {

    // Following code will never execute.
    setTimeout(() => {
        console.log('This will not run!')
    }, 0);

    // check for status code
    console.log('About to exit with code:', code);
});

// Printing to console
process.stdout.write('Hello World!' + '\n');

// Reading passed parameter
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

// Platform Information
console.log(process.platform);


// Print the current directory
console.log('Current directory ' + process.cwd());

// Print the process version
console.log('Current version: ' + process.version);

console.log(process.memoryUsage());


// eof