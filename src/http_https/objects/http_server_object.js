// File: http_incoming_message_object.js
// Note: Implementing http.Server object
// Date: 3/28/2020
//..............................................................................
console.log("Mounting http_server_object.js...\n");
/*
 * The Node.js http.Server object provides the fundamental framework to
 * implement the HTTP servers.
 * 
 * It provide an underlying socket that listens on port and handles receiving
 * requestuests and then sending responseponses out to client connections.
 * 
 * While the server is listening, the Node.js application does not end.
 * 
 * The http.Server implements the << EventEmitter >> and emits the events:
 * - requestuest
 * - connection (socket)
 * - close
 * - checkContinue
 * - connect (socket)
 * - upgrade
 * - clientError (socket)
 * 
 * As you implement an HTTP server, you need to handle at least some or all of
 * the listed events. For example, at a minimum, you need an event handler to
 * handle the requestuest event (EHC) that is triggered when a client requestuest 
 * (TMC) - "action/command" is received.
 * 
 * To start the HTTP server, you need to first create a Server object, using
 * the createServer() method:
 * 
 * http.createServer([requestuestListener])
 * 
 * This method returns the http.Server object.
 * 
 * The optional requestListener parameter is a callback that is executed when the
 * request event triggered. The callback should accept two parameters.
 * 
 * The first paramenter is http.IncomingMessage object representing the client 
 * request, and the second is a http.ServerResponse object you use to formulate
 * and send the response.
 * 
 * Once you have created the http.Server object, you can begin listening on it
 * by calling the listen() method on the http.Server object:
 * 
 * listen(port, [hostname], [backlog], [callback])
 * 
 * This is the method you are most likely to use. The following are parematers:
 * 
 * - port: Specifies the port to listen on.
 * 
 * - hostname: Specifies when hostname will accept connections; if omitted, the
 * server accepts connection directed to any IPv4 address (INADD_ANY).
 * 
 * - backlog: Specifies the maximum number of pending connections that are 
 * allowed to be queued. The default 511.
 * 
 * - callback; Specifies the callback handler to execute when the server has 
 * begun listening on the specified port.
 * 
 * Following is the code for starting the HTTP server and listening on port 
 * 8080. Notice that a request callback handler function is passed in 
 * createServer() method.
 * 
 * You can use two other method to listen for connection through the file
 * system. The first accepts a path to file to listen on, and the second
 * accepts on already open file descriptor:
 * 
 * listen(path, [callback])
 * listen(handle, [callback])
 * 
 * To stop the HTTP server from listening once it has started, use the 
 * following method:
 * 
 * close([callback])
 *
 */
var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200);
	response.write("Hello, this is dog.");
	response.end();
}).listen(8080, '127.0.0.1');

console.log('Listening on port 8080 ...');
console.log('Server running at http://127.0.0.1:8080');

// eof