// File: http_client_static.js
// Note: A basic web client retrieving static file *
// Date: 3/30/2020
//..............................................................................
console.log("Mounting http_client_static.js....\n");
/*
 * Following is the basic implementation of an HTTP client that sends a GET 
 * request to the server to retrieve file contents.
 * 
 * Notice that the options for the the request are set, and then the client 
 * request is initiated.
 * 
 * When the request completes, the callback function user the on('data') 
 * handler to reader the contents of the response from the server and then the
 * on('end') handler to log the file contents to a file shows the output
 * of the HTTP client in the terminal as well as the static file being accessed
 * from the web browser.
 * 
 */ 
var http = require('http');

var options = {
	hostname: 'localhost',
	port: '8080',
	path: '/'
};

function handleResponse(response) {
	var serverData = '';
	
	response.on('data', function(chunk) {
		serverData += chunk;
	});
	response.on('end', function() {
		console.log(serverData);
	});
}

http.request(options, function(response) {
	handleResponse(response);
}).end();

// eof
