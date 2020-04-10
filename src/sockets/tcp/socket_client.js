// File: socket_client.js
// Note: Implementing full basic TCP socket clients
// Date: 04/10/2020
//..............................................................................
console.info('Mounting TCP socket clients...');
/*
 * The full implementation of a basic TCP socket client:
 * 
 * The client just sends a bit of data and receives a bit data back; however, 
 * the example could be easily be expanded to support more complex data handling 
 * across the socket.
 * 
 * Notice that there are three separate sockets opened to the server, and they
 * are communicating at the same time.
 * 
 * Also, notice that each client that is created gets a different random port 
 * number at runtime.
 */
var net = require('net');

function getConnection(connName) {
    var client = net.connect({ port: 8107, host: 'localhost' }, function() {
        console.log(connName + ' Connected: ');
        console.log( ' local = %s:%s', this.localAddress, this.localPort);
        console.log( ' remote = %s:%s', this.remoteAddress, this.remotePort);   
          
        this.setTimeout(500);
        this.setEncoding('utf8'); 
        
        this.on('data', function(data) {
            console.log(connName + " from Server: " + data.toString());
            this.end();
        });
        this.on('end', function() {
            console.log(connName + " Client disconnected");
        });
        this.on('error', function(err) {
            console.log("Socket Error: " + JSON.stringify(err));
        });
        this.on('timeout', function() {
            console.log("Socket Timed Out");
        });
        this.on('close', function() {
            console.log("Socket Closed");
        });
    });
    return client;
}
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
// var Dwarves = getConnection("Dwarves");
// var Elves = getConnection("Elves");
// var Hobbits = getConnection("Hobbits");
// 
// writeData(Dwarves, "More Axes");
// writeData(Elves, "More Arrows");
// writeData(Hobbits, "More Pipes Weed");

// expose module methods
module.exports.getConnection = getConnection;
module.exports.writeData = writeData;

// eof

