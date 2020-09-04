// File: http_server_get.js.js
// Note: Implementing Dynamic GET Servers
// Date: 3/30/2020
//..............................................................................
console.log("Mounting http_server_get.js...\n");
/*
 * You will use Note.js webserver to serve dynamic content more often than 
 * you'll use them to serve static content.
 * 
 * This content may be dynamic HTML files or HTTP snippets, JSON data, or a
 * number of other types of data - User Defined Types.
 * 
 * To serve a GET request dynamically,, you need to implement code in the 
 * request handler that dynamically populates the data you want to send back
 * to the client, write it out to the response and then call end() to finalize 
 * the response and flush the << Writable >> stream.
 * 
 * Following is the basic implemenation of a dynamic webserver. In the case,
 * the webserver simply responds with a dynamically generate HTTP file.
 * 
 * It is designed to show the process of sending headers, building the response,
 * and then sending the data in a series of write() requests.
 * 
 * Notice that the code creates the server, using createServer(), and begins
 * listening on port 8080, using listen().
 * 
 */

var http = require ('http');
var messages = [
	"Hello World",
	"From basic Node.js server",
	"Take Luck"
];
http.createServer(function(request, response) {
    /* 
     * Inside request event handler, the Content-Type header is set, and
     * then the header is sent, with response code of 200.
     * 
     * In reality, you would have already done a log of processing to prepare
     * the data. But in this case study the data is just the message array
     * defined.
     * 
     * Notice the loop iterates through the messages and calls write() each
     * time to stream the response to the client. 
     * 
     * Then the response is completed with a call to end().
     * 
     */
	response.setHeader("Content-Type", "text/html");
	response.writeHead(200);
	response.write('<html><head><title>HTTP Clients and Servers in Node.js</title></head>');
	response.write('<body>');	
	for (var idx in messages) {
		response.write('\n<h3>' + messages[idx] + '</h3>');
	};	
	response.end('\n</body></html>');
}).listen(8080);

// eof
