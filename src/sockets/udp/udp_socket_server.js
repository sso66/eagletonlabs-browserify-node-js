// File: udp_socket_server.js
// Date: 8/21/2020
// Note: Node.js UDP/IP Socket Server

console.log("\nMounting udp_socket_server.js...\n");

var udp = require('dgram');

// Create a UDP server
var server = udp.createSocket('udp4');

// Emits when any error occurs
server.on('error',function(error) {
    console.log('Error: ' + error);
    server.close();
});

// Emits on new datagram msg
server.on('message', function(message, info) {
    console.log('Data received from client : ' + message.toString());
    console.log('Received %d bytes from %s:%d\n', message.length, info.address, info.port);

  // Send message to clients
    server.send(message, info.port, 'localhost', function(error){
        if (error) { 
          client.close();
        } else { 
          console.log('Data sent to client !!!');
        }
    });
});

// Emits when socket is ready and listening for datagram messages
server.on('listening', function() {
    var address = server.address();
    var port = address.port;
    var family = address.family;
    var ipaddr = address.address;
    
    console.log('Server is listening at port:' + port);
    console.log('Server ip:' + ipaddr);
    console.log('Server is IP4/IP6 : ' + family);
});

// Emits after the socket is closed using socket.close();
server.on('close', function() {
    console.log('Socket connecton is closed!');
});

server.bind(2222);

var timeout = 12000;

// Timer I/O
// setTimeout(function() {
//     server.close();
// }, timeout);

// eof
