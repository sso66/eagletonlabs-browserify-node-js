// File: socket_server.js
// Note: Implementing basic TCP socket server
// Date: 03/22/2020
//..............................................................................
console.info('Mounting TCP socket server...');

var net = require('net');
/*
 * At the most basic level, implementing a TCP server client involves creating
 * a Server object, listening on a port, and handling incoming connections, 
 * including reading and writing data to and from the connections.
 * 
 * In addition, the socket server should handle the 'close' and 'error' events
 * on the server object, as well as the events occur in the incoming client
 * connection Socket object.
 * 
 * The steps involved in implementing a socket server using the Server object as
 * following.
 * 
 * The first step is to create socket server by calling net.createServer(). You
 * also need to provide a connection callback handler and then call listen() to
 * begin listening on the port.
 * 
 * Inside the 'listen' callback handler, you also add handlers to support the
 * 'close' and 'error' events of the Server Object. They may jus be log statements,
 * or you might want to add additional code that is executed when these events
 * occur.
 * 
 * Inside the 'connection' event callback, you set up the connection behavior. 
 * For example, you might want to add timeout or set the encoding.
 * 
 * You also need to add handlers for the 'data','end', error, 'timeout', and 
 * 'close' events that you want to handle on the client connections. For example,
 * to handle the 'data' event so that you can read data coming from the client,
 * you might add the following handler once the connection has been established.
 * 
 */

var server = net.createServer(function(client) {
    console.log('Client connection: ');
    console.log( ' local = %s:%s', this.localAddress, client.localPort);
    console.log( ' remote = %s:%s', this.remoteAddress, client.remotePort); 
        
    client.setTimeout(500);
    client.setEncoding('utf8'); 
    
    client.on('data', function(data) {
        console.log('Received data from client on port %d: %s', 
               client.remotePort, data.toString());
        console.log(' Bytes received: ' + client.bytesRead);
        writeData(client, 'Sending: ' + data.toString());
        console.log(' Bytes sent ' + client.bytesWritten);
    });
    client.on('end', function() {
        console.log("Client disconnected");
        server.getConnections(function(err, count) {
           console.log('Remaining Connections: ' + count);
        });
    });
    client.on('error', function(err) {
        console.log("Socket Error: " + JSON.stringify(err));
    });
    client.on('timeout', function() {
        console.log("Socket Timed Out");
    });
});  

server.listen(8107, function() {
   console.log('Server listening: ' + JSON.stringify(server.address()));
   server.on('close', function() {
       console.log("Server Terminated");
   }); 
   server.on('error', function(err) {
       console.log("Server Error: " + JSON.stringify(err));
   }); 
});
/*
 * To write data to the server, you implement a write() command some where
 * in your code. 
 * 
 * If you are writing a lot of data, you may also want to 
 * implement a 'drain' event handle that will begin writing when the buffer
 * is empty. This can help if write() returns filure because the buffer is
 * full or if you want to throttle back writing to the socket.
 * 
 * The following is an example of implementing a 'drain' handler because of
 * the write failure.
 * 
 * Notice that a closure is used to preserve the values of the socket and
 * data variables once the function has ended:
 */
function writeData(socket, data) {
    var success = !socket.write(data);
    if (!success) {
        (function (socket, data) {
            socket.once('drain', function() {
                writeData(socket, data);
            });
        })(socket, data);
    }
}
/*
 * The full implementation of a basic TCP socket client:
 * 
 * The socket server accepts connection on port 8107, reads the data in, and
 * then writes a string back to the client.
 * 
 * Although the implementation is basic, it illustrates handling the events
 * as well as reading and writing data in the client connection.
 * 
 * Notice the client parameter is the client connection object Socket object.
 * 
 * Just like working with Event Source, Event Object and the Event Listener 
 * as well as EventEmitter Class, Event Loop, Event Queue and the Thread Pool 
 * scenarios.
 *  
 */
// eof
