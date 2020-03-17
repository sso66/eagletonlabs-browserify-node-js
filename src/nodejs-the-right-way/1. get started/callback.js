// callback.js
// Callback Concept

var fs = require('fs');

/* synchronous process | task | command:
var data = fs.readFileSync('input.txt');
//...wait or block for I/O to complete
console.log(data.toString());
*/

// asynchronous process | task | command: 
//fs.readFile('input.txt', function(err, data) {
fs.readFile('data/input.txt', function(err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});
//...neither wait nor block for I/O to complete
console.info('Program Ended');
// eof
