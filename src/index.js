// index.js
console.log('Mounting index.js Node Application...');

var square = require('./square');
console.log(square(125)); // =. 15625

var _ = require('underscore');
_.each([1, 2, 3], function(n) {
  console.log(n); //=> 1, 2, 3
});

var readwords = require('./readwords');
console.info(readwords);

// eof 