// File: http_server_post.js
// Note: Implementing a basic HTTP server tha handles HTTP POST requests 
// Date: 3/30/2020
//..............................................................................
console.log("Mounting http_server_post.js...\n");
/*
 * Implementing a POST server is similar to implementing a GET server.
 * 
 * In fact, you may end up implementing them together in the same code for the
 * sake of convenience.
 * 
 * POST server are handy if you need to send data to the server to be updated, as
 * with form submissions.
 * 
 * To server a POST request, you need to implement code in the request handler
 * that reads the contents of the post body out and process the contents.
 * 
 * Once you have processed the data, you dynamically populate the data you want to
 * send back to the client, write it out to the response, and then call end() to
 * finalize the response and flush the << Writable > stream.
 * 
 * Just as with a dynamic GET server, the output of the POST request may be a
 * webpage, an HTTP snippet, JSON data, or some other data.
 * 
 * Following shows the basic implementation of a dynamic web service handling 
 * POST requests.
 * 
 * In this case, the web service accepts from the client a JSON string 
 * representing an object that has name and occupation properties.
 * 
 * The code reads the data form the request stream, and then in the event
 * handler, the data is converted to an object and used to build a new object
 * with message and question properties.
 * 
 * Then the response JSON string is converted to an object and displayed on 
 * the console.
 * 
 */
var http = require ('http');
var options = {
    host: '127.0.0.1',
    port: '8080',
    path: '/',
    method: 'POST'
};

http.createServer(function(request, response) {
	var jsonData = "";
	request.on('data', function(chunk) {
		jsonData += chunk;
	});
	request.on('end', function() {
		var reqObj = JSON.parse(jsonData);
		var resObj = {
			message: "Hello " + reqObj.name,
			question: "Are you a good " + reqObj.occupation + "?"
		};
		response.writeHead(200);
		response.end(JSON.stringify(resObj));
	});
}).listen(8080);

// eof
