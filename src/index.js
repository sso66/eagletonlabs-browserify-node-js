// index.js
console.log('Mounting index.js Node Application...');

const square = require('./square');
console.log(square(125)); // =. 15625

const _ = require('underscore');
_.each([1, 2, 3], function(n) {
  console.log(n); //=> 1, 2, 3
});

const readwords = require('./readwords/readwords');
console.info(readwords);

// eof 
