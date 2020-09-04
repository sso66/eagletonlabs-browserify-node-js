// File: http_incoming_message_object.js
// Note: Understanding http.IncomingMessage Object
// Date: 9/4/2020
//..............................................................................
console.log("Mounting http_incoming_message_object.js...\n");
/*
 * Either the HTTP server or the HTTP client creates the http.IncomingMessage
 * object.
 * 
 * On the server side the client request is represented by an 
 * http.IncomingMessage object, on the clientside the server response is
 * represented by an http.IncomingMessage object. 
 * 
 * The reason that the http.IncomingMessage object can be used for both is that
 * the functionality is basically the same.
 * 
 * The http.IncomingMessage object implements a << Readable >> stream, allowing
 * you to read the client request or server response as a streaming source. This
 * means that the readable and data events can be listened on and usesd to read
 * data from the stream.
 * 
 * In addition to the functionality provided by the << Readable >> class,
 * http.IncomingMessage objects also provide the properties, events and 
 * methods. 
 * 
 * These following list allows you to access information from the client request
 * or the server response.
 * 
 * Properties:
 * - httpVersion
 * - headers
 * - trailers
 * - method
 * - url
 * - statusCode
 * - socket
 * 
 * Events:
 * - close
 * 
 * Methods:
 * - setTimeout(msecs, callback)
 * 
 */

// eof