// File: http_server_static.js
// Note: Serving Static Files
// Date: 04/18/2020
//..............................................................................
console.log("Mounting http_server_static.js...\n");
/*
 * The most basic type of HTTP server is one that serves static files.
 * 
 * To serve static files from Node.js, you need to first start the HTTP server 
 * and listen on a port.
 * 
 * Then, in the request handler, you need to open the file locally, using the
 * `fs` module, and then write the file contents to the response - 
 * http.ServerResponse object.
 * 
 * Following is the basic implementation of a static file server.
 * 
 * Notice that it creates the server using createServer() and also defines the
 * request event handler; and, the server is listening on the port 8080 by 
 * calling listen() on the http.Server object.
 * 
 */
var fs = require('fs');
var http = require ('http');
var url = require('url');
var ROOT_DIR = "html/";

http.createServer(function(request, response) {
    /*
     * Inside the request event handler, the url.parse() method parses the URL
     * so that you can use the pathname attribute when specifying the path for
     * a file.
     * 
     * The static file is opened and read simply synchronous using 
     * fs.readFile(), and in the fs.read() callback, the contents of the file 
     * are written to the response object - http.ServerResponse, using 
     * response.end(data).
     * 
     */
	var urlObj = url.parse(request.url, true, false);
	
	fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) {
		if (err) {
			response.writeHead(404);
			response.end(JSON.stringify(err));
			return;
		}
		response.writeHead(200);
		response.end(data);
	});
}).listen(8080);


// eof// Console I/O will print the message
console.log('curl Server running at http://127.0.0.1:8080');

