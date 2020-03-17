// File: watcher.js
// Note: Watching a File for Changes
// Date: 03/17/2020
//..............................................................................
const fs = require('fs');

fs.watch('target.txt', function() {
    console.log("File 'target.txt' just changed!");
});

console.log("Now watching target.txt for changes...");

// eof
