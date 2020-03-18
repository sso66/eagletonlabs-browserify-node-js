// global.js
// Global Object
console.log(__filename);
console.log(__dirname);

// Callback Object
function printHello() {
  console.log("Hello World!");
}
// Timer Object
var timeout = setTimeout(printHello, 2000);
clearTimeout(timeout);

var interval = setInterval(printHello, 2000);
clearInterval(interval);

// Console Object
console.info('Program Started...');
var counter = 10;
console.log("Counter: %d", counter);
console.time('Getting data');
console.info('Do some processing here...' + counter);
console.timeEnd('Getting data');
console.info('Program Ended');

// Process Object
process.on('exit', function(code) {
  setTimeout(function() {
    console.log('This will not run');
  }, 0);
  
  console.log('About to exit with code: ' + code);
});
console.log('Program Ended');

// Standard I/O and Error Object
process.stdout.write('Hello world!' + "\n");
process.argv.forEach(function(val, index, array) {
  console.log(index + ':' + val);
});
console.log(process.platform);

console.log('Current director: ' + process.cwd());
console.log('Current verison: ' + process.version);
console.log(process.memoryUsage());

// eof
