// File: udp_client.js
// Date: 8/21/2020
// Note: Node.js UDP/IP Socket Client

console.log("\nMounting udp_client.js...\n");

var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var data = 'My KungFu is Good!'
var message = new Buffer.from(data);

var client = dgram.createSocket('udp4');

client.send(message, 0, message.length, PORT, HOST, function(error, bytes) {
    if (error) throw error;
    console.log('UDP message sent to server: ' + HOST +':'+ PORT);
    client.close();
});

// eof
