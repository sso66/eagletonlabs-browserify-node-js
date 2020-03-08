/* http_server_get.js */
/* Implementing a basic GET webserver */
var http = require ('http');
var messages = [
	"Hello World",
	"From basic Node.js server",
	"Take Luck"
];
http.createServer(function(req, res) {
	res.setHeader("Content-Type", "text/html");
	res.writeHead(200);
	res.write('<html><head><title>Simple HTTP Server</title></head>');
	res.write('<body>');
	for (var idx in messages) {
		res.write('\n<h3>' + messages[idx] + '</h3>');
	};
	res.end('\n</body></html>');
}).listen(8080);
console.log('GET Server running at http://127.0.0.1:8080');
/* eof */