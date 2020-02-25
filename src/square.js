// square.js
console.info('Mounting square.js...');

let multiply = require('./multiply');

module.exports = function(n) {
  return multiply(n, n);
};
