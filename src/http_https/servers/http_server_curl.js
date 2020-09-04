// File: http_server_curl.js
// Date: 9/3/2020
// Note: Simple HTTP Server require 'http' core NPM with curl Client
//..............................................................................
console.log("Mounting http_server_curl.js...\n");

const http = require('http');

http.createServer((req, res) => {
    // send HTTP header
    // HTTP Status: 200 Ok
    // Content-type: text/plain
    res.writeHead(200, { 'Content-type': 'text/plain' });

    res.end('Hello World!\n');
}).listen(8080);

// Console I/O will print the message
console.log('Server running at http://127.0.0.1:8080');

// eof

// $ curl -I http://127.0.0.1:8080
