// File: socket_server.js
// Note: Implementing full basic TCP socket server
// Date: 04/10/2020
//..............................................................................
console.info('Mounting TCP socket server...');
/*
 * The full implementation of a basic TCP socket client:
 * 
 * The socket server accepts connection on port 8107, reads the data in, and
 * then writes a string back to the client.
 * 
 * Although the implementation is basic, it illustrates handling the events
 * as well as reading and writing data in the client connection.
 * 
 * Notice the client parameter in creating net.Server object; that is the client
 * connection object net.Socket object.
 * 
 * It's just like working with Event Source, Event Object and the Event Listener 
 * as well as EventEmitter Class, Event Loop, Event Queue and the Thread Pool 
 * scenarios.
 *  
 */
var net = require('net');

var server = net.createServer(function(client) {
    console.log('Client connection: ');
    console.log( '--> local = %s:%s', this.localAddress, client.localPort);
    console.log( '--> remote = %s:%s', this.remoteAddress, client.remotePort); 
        
    client.setTimeout(500);
    client.setEncoding('utf8'); 

    client.on('data', function(data) {
        console.log('\t\n<-- Response data from server');
        data = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>501 - Not Implemented</title>
            </head>
            <body>
                <h1>501 - Not Implemented</h1>
            </body>
            </html>
        `;

        console.log('--> Received data from client on port %d: %s', 
               client.remotePort, data.toString());
        console.log('--> Bytes received: ' + client.bytesRead);
        writeData(client, data.toString());
        console.log('<-- Bytes sent ' + client.bytesWritten);
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

// eof
