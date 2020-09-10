// File: say-it.js
// Date: 9/3/2020
// Note: Understanding the module object

console.log('Mounting say-it.js...\n');

module.exports = new function() {
    this.it = (it) => console.log(it);
}

// eof
