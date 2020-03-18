// File: write-simple.js
// Note: Reading and Writing Files Asynchronously
// Date: 03/17/2020
//..............................................................................
"use strict";

const fs = require('fs');
fs.writeFile('target.txt', 'a witty message', function (err, data) {
   if (err) {
       throw err;
   } 
   console.log('File Saved!');
});

// eof
