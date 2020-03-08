/* http_server_event.js */
var http = require('http');

var server = http.createServer();

server.on('req', function(req, res) {
	res.end('Hello World!');
});
server.listen(8124, '127.0.0.1'); // local host

console.log('Server running at http://127.0.0.1:8124');