// File: udp_client.js
// Note: Implementing full basic UDP socket client
// Date: 04/08/2020
//..............................................................................
console.info('Mounting UDP socket udp_client.js...');

var dgram = require('dgram');

var PORT = 8089;
var HOST = '127.0.0.1';

var client = dgram.createSocket("udp4");
var data = "";

// set command line input character encoding to utf-8
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (text) {
    
    // if user confim with 'send\r\n' then send all input data to UDP server
    if('send\r\n' === text) {
        
        // if user do not input data in command line then send default data
        if (data == null || data.length == 0) {
            data = "Hello UDP server...";
        }        
        console.log("User input : " + data);

        // create a Buffer object to wrap data String object
        message = Buffer.from(data);

        // send message to UDP server through UDP client socket
        client.send(message, 0, message.length, PORT, HOST);
    } else {
        // concat all user input text in message.
        data += text;
    }
 });
 
// eof
