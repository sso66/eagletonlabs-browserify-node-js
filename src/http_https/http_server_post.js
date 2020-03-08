/* http_server_post.js */
/* Implementing a basic HTTP server tha handles HTTP POST requests */
var http = require ('http');
http.createServer(function(req, res) {
	var jsonData = "";
	req.on('data', function(chunk) {
		jsonData += chunk;
	});
	req.on('end', function() {
		var reqObj = JSON.parse(jsonData);
		var resObj = {
			message: "Hello " + reqObj.name,
			question: "Are you a good " + reqObj.occupation + "?"
		};
		res.writeHead(200);
		res.end(JSON.stringify(resObj));
	});
}).listen(8080);
console.log('POST Server running at http://127.0.0.1:8080');
/* eof*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/* http_client_static.js */
/* A basic HTTP client that sends JSON data to the server using POST, and that handles the JSON response */

var http = require ('http');
var options = {
	host: '127.0.0.1',
	port: '8080',
	path: '/',
	method: 'POST'
};
function readJSONResponse(response) {
	var responseData = '';
	response.on('data', function(chunk) {
		responseData += chunk;
	});
	response.on('end', function() {
		var dataObj = JSON.parse(responseData);
		console.log("Raw Response: " + responseData);
		console.log("Message: " + dataObj.message);
		console.log("Question: " + dataObj.question);
	});
}
var req = http.request(options, readJSONResponse);
req.write('{"name":"Biblo", "occupation":"Buglar"}');
req.end();
/* eof */