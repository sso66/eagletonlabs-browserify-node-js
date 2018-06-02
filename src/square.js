// square.js
console.info('Mounting square.js-Node Model...');

var multiply = require('./multiply');

module.exports = function(n) {
  return multiply(n, n);
};
