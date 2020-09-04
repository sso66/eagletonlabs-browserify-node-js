// File: http-server.js
// Date: 9/3/2020
// Note: Simple HTTP Server require 'http' core NPM
//..............................................................................
console.log("Mounting http-server.js...\n");

const http = require('http');

http.createServer((req, res) => {
    // send HTTP header
    // HTTP Status: 200 Ok
    // Content-type: text/plain
    res.writeHead(200, { 'Content-type': 'text/plain' });

    res.end('Hello World!\n');
}).listen(8081);

// Console I/O will print the message
console.log('Server running at http://127.0.0.1:8081');

// eof

// $ curl I http://127.0.0.1:8081
