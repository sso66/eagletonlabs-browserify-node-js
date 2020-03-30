// File: http_server_response_object.js
// Note: Implementing http.ServerResponse object
// Date: 3/30/2020
//..............................................................................
console.log("Mounting http_server_response_object.js...\n");
/*
 * The HTTP server create the http.ServerResponse object internally when it 
 * receives a request event.
 * 
 * This object is passed to the request event handler as the second argument.
 * 
 * You use the http.ServerResponse object to formulate and send a response to 
 * the client.
 * 
 * The http.ServerResponse object implements a << Writable >> stream, so it
 * provides all the functionaly of a << Writable >> object. For example, you 
 * can use the write() method to write to the http.ServerResponse object as 
 * well as pipe a << Readable >> stream into it to write data back to the 
 * client
 * 
 * When handling the client request, you use the properties, events and methods
 * of the http.ServerObject to build and send headers; write data and send the 
 * response:
 * 
 * Properties:
 * - headersSent
 * - sendDate
 * - statusCode
 * 
 * Events:
 * - close
 * 
 * Methods:
 * - writeContinue()
 * - writeHead(statusCode, [reasonPhrase], [headers])
 * - setTimeout((msecs, callback)
 * - setHeader(name, value)
 * - removeHeader(name)
 * - write(chunk, [enchoding])
 * - addTrailers(headers)
 * - end([data], [encoding])
 * 
 */

// eof