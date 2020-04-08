// File: udp_server.js
// Note: Implementing full basic UDP socket server
// Date: 04/04/2020
//..............................................................................
console.info('Mounting UDP socket udp_server_ipg...');
/*
 * When execute this file, it will create a UDP server socket which will listen 
 * on localhost with 8089 port number.
 * 
 * When the server receives message sent from client, it will print the message 
 * in standard output ( process log on console in this example ).
 * 
 */ 
var dgram = require('dgram');

var PORT = 8089;
var HOST = '127.0.0.1';

var server = dgram.createSocket("udp4");

server.bind(PORT, HOST);

server.on('listening', function () {
    var address = server.address(); 
    console.log('UDP server started and listening on ' + address.address + ":" + address.port);
});

server.on("message", function (message) {    
    // create output message from UDP client.
    var output = "UDP server receive message : " + message + "\n";
    
    // print received message in stdout, here is process log on console.
    process.stdout.write(output);
});

// eof

