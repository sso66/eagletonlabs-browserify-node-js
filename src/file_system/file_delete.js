// File: file_exists.js
// Note: Deleting Files
// Date: 03/28/2020
//..............................................................................
console.log("Mounting file_delete.js...");

const fs = require('fs');

fs.unlink('./data/config.json', function(err) {
    console.log(err ? "file Delete Failed" : "File Deleted");
});

// eof
