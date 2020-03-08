/* http_client_static.js */
/* A basic HTTP client that sends JSON data to the server using POST, and that handles the JSON response */
var http = require('http');
var options = {
	host: '127.0.0.1',
	post: '8080',
	path: '/',
	method: 'POST'
};
function readJSONResponse(response) {
	var responseData = "";
	response.on('data', function(chunk) {
		responseData += chunk;
	});
	response.on('end', function() {
		var dataObj = JSON.parse(responseData);
		console.log("Raw Response: " + responseData);
		console.log("Message: ", dataObj.message);
		console.log("Question: ", dataObj.question);		
	});
}
var req = http.request(options, readJSONResponse);
req.write('{"name":"Biblo", "occupation":"Buglar"}');
req.end();
/* eof */