// File: udp_socket_server.js
// Date: 8/21/2020
// Note: Node.js UDP/IP Socket Client

console.log("\nMounting udp_socket_client.js...\n");

var udp = require('dgram');

// creating a client socket
var client = udp.createSocket('udp4');

//buffer data
var data = Buffer.from('Message in the Bottle...by Sting');

client.on('message', function(message, info) {
    console.log('Data received from server: ' + message.toString());
    console.log('Received %d bytes from %s:%d\n', message.length, info.address, info.port);
});

//send single message to server
client.send(data, 2222, 'localhost', function(error) {
    if (error) {
        client.close();
    } else {
        console.log('Data - Individual A/C sent to server !!!');
    }
});

var data1 = Buffer.from('hello');
var data2 = Buffer.from('world');

//send multiple messages to server
client.send([data1, data2], 2222, 'localhost', function(error){
    if (error) {
        client.close();
    }  else {
        console.log('Data - Joint/Group A/C sent to server !!!');
    }
});

// eof
