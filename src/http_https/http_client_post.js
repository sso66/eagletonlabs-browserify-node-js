// File: http_client_post.js
// Note: A basic HTTP client that sends JSON data to the server using POST, 
//       and that handles the JSON response
// Date: 3/30/2020
//..............................................................................
console.log("Mounting http_client_post.js...\n");
/*
 * The following code shows a basic implementation of an HTTP client that sends
 * JSON data to the server as part of a POST request.
 * 
 * The request starts, and then a string is written ot the request stream, and 
 * finishes the request with the end().
 * 
 * When the server sends back the response, the on('data') handler reads the 
 * JSON response.
 * 
 * Then the on('end') handler parses the response into JSON object and ouputs
 * the raw response, message, and question.
 * 
 */
var http = require('http');
var options = {
	host: '127.0.0.1',
	port: '8080',
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
var request = http.request(options, readJSONResponse);
request.write('{"name":"Biblo", "occupation":"Buglar"}');
request.end();

// eof
