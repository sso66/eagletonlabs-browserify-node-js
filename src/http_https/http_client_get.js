// File: http_client_get.js.js
// Note: A basic web client making a GET request to the server
// Date: 3/30/2020
//..............................................................................
console.log("Mounting http_client_get.js...\n");
/*
 * Following it the basic implementation of an HTTP client that reads the 
 * response from the server.
 * 
 * This is similar to URL request, but note that no path was specified because
 * the service doesn't really require one
 * 
 * For more complex services, you would implement query strings or complex path
 * routes to handle a variety of calls.
 * 
 * Note that the statusCode from the response is logged to the console. Also 
 * the headers from the response are also logged. Then the full response from 
 * the server is logged.
 * 
 * It shows the output of the HTTP client as well as the dynamic GETT server 
 * being access from the web browser.
 * 
 */
var http = require('http');

var options = {
	hostname: 'localhost',
	port: '8080',
};

function handleResponse(response) {
	var serverData = '';
	response.on('data', function(chunk) {
		serverData += chunk;
	});
	response.on('end', function() {
		console.log("Response Status", response.statusCode);
		console.log("Response Headers", response.headers);		
		console.log(serverData);
	});
}

http.request(options, function(response) {
	handleResponse(response);
}).end();

// eof
