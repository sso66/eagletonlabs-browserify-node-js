// File: cat.js
// Note: Creating Read and Write Streams
// Date: 03/17/2020
//..............................................................................
"use strict";

require('fs').createReadStream(process.argv[2]).pipe(process.stdout);

// eof
