// File: read-simple.js
// Note: Reading and Writing Files Asynchronously
// Date: 03/17/2020
//..............................................................................
"use strict";

const fs = require('fs');
fs.readFile('target.txt', function (err, data) {
   if (err) {
       throw err;
   } 
   console.log(data.toString());
});

// eof

