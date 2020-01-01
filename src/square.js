// square.js
console.info('Mounting square.js-Node Model...');

let multiply = require('./multiply');

module.exports = function(n) {
  return multiply(n, n);
};
