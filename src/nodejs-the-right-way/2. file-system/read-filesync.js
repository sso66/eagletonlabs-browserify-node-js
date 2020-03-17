// File: read-filesync.js
// Note: Blocking the Event Loop with Synchronous File Access
// Date: 03/17/2020
//..............................................................................
"use strict";

const 
    fs = require('fs'),
    data = fs.readFileSync('target.txt');

    process.stdout.write(data.toString());

// eof
