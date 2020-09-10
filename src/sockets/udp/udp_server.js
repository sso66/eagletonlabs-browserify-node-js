// File: udp_server.js
// Date: 8/21/2020
// Note: Node.js UDP/IP Socket Server

console.log("\nMounting udp_server.js...\n");

var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function() {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ':' + address.port);
});

server.on('message', function(message, remote) {
    console.log("request-origin: " + remote.address + ':' + remote.port +' - ' + message);
});

server.bind(PORT, HOST);

// eof
