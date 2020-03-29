// File: http_incoming_message_object.js
// Note: Implementing http.Server object
// Date: 3/28/2020
//..............................................................................
console.log("Mounting http_server_object.js...\n");
/*
 * 
 */
var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(200);
	res.write("Hello, this is dog.");
	res.end();
}).listen(8080, '127.0.0.1');

console.log('Listening on port 8080 ...');
console.log('Server running at http://127.0.0.1:8080');

// eof