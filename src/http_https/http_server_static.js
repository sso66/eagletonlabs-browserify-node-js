/* http_server_static.js */
/* Implementing a basic static file webserver */
var fs = require('fs');
var http = require ('http');
var url = require('url');
var ROOT_DIR = "html/";

http.createServer(function(req, res) {
	var urlObj = url.parse(req.url, true, false);
	fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) {
		if (err) {
			res.writeHead(404);
      res.end(JSON.stringify(err));
			return;
		}
		res.writeHead(200);
		res.end(data);
	});
}).listen(8080);
console.log('Static Server running at http://127.0.0.1:8080/login.html');

/* eof */