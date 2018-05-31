// square.js
console.info('Mounting square.js UIViewController...');

var multiply = require('./multiply');

module.exports = function(n) {
  return multiply(n, n);
};
