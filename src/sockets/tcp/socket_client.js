// File: socket_client.js
// Note: Implementing basic TCP socket clients
// Date: 03/22/2020
//..............................................................................
console.info('Mounting TCP socket clients...');

var net = require('net');
/*
 * At the most basic level, implementing a TCP socket client involes creating a
 * net.Socket object that connects to the server and then writing data to the 
 * server and handling the data that comes back. In addition you should build 
 * the socket so that it can handle errors, the buffer being full, and timeouts.
 * 
 * Steps involved in implementing a socket client using the net.Socket object:
 * 
 * The first step is to create the socket client by calling net.connect(). Pass
 * in the port and host - Options object -that you want to connect to as well 
 * and implement the callback fuction to handle the connect event.
 * 
 * Then inside the callback, you set up the connection behavior. For example 
 * you might want to add a timeout or the encoding.
 * 
 * You also need to add the handlers for the 'data', 'end', 'error', 'timeout' 
 * and 'close' events that you want to handle. For example, to handle 'data'
 * event so that you can read data coming back from the server.
 */
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
/*
 * To write data to the sever you implement write() command. If you are writing 
 * a lot of data to the server and the write fails, you might also want to 
 * implement a 'drain' event handler to begin writing again whe the buffer is 
 * empty. The following shows an example of implementing a 'drain' handler because 
 * of a write failure.
 * 
 * Notice that a closure is used to preserve the values of the socket and data 
 * variables once the function has ended.
 * 
 * Observe the used of success (failure) flag.
 * 
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
 * The client just sends a bit of data and receives a bit data back; however, 
 * the example could be easily be expanded to support more complex data handling 
 * across the socket.
 * 
 * Notice that there are three separate sockets opened to the server, and they
 * are communicating  at the same time.
 * 
 * Also, notice that each client that is created gets a different random port 
 * number at runtime.
 */
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

