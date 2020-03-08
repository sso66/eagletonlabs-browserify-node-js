/* http_client_static.js */
/* A basic web client retrieving static file */
var http = require('http');

var options = {
	hostname: 'localhost',
	port: '8080',
	path: '/homepage.html'
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
/* eof */