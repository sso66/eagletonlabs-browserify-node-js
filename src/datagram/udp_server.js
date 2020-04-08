// File: udp_server.js
// Note: Implementing full basic UDP socket server
// Date: 03/24/2020
//..............................................................................
console.info('Mounting UDP socket udp_server.js...');
/*
 * dgram.createSocket() can either accept 'udp4' or 'udp6'. The former uses 
 * IPv4, the later uses IPv6.
 * 
 * HOST is optional in server.bind(). If omitted, it will be listening 
 * on 0.0.0.0, which might be what you want in some cases.
 * 
 * The listening event is fired, when the server has initialized and all ready
 * to receive UDP packets. 
 * 
 * The message event is fired, when a UDP packet arrives destined for this 
 * server.
 * 
 */
var dgram = require('dgram');

var PORT = 33333;
var HOST = '127.0.0.1';
var server = dgram.createSocket('udp4');

server.bind(PORT, HOST);

server.on('listening', function() {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ':' + address.port);
});

server.on('message', function(message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
});

// eof
