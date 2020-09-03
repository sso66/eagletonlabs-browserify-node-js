// File: socket-http.js
// Date: 9/3/2020
// Note: Manually making an HTTP requests in Node.js via TCP socket conneciton
//..............................................................................
console.info('Mounting socket-http.js...\r\n');

const net = require('net');
const client = new net.Socket();

client.connect(8107, 'localhost', function() {
    console.log('Connected');
    client.write('Hello World!\r\n');
    client.write(`GET / HTTP/1.0
    Host: localhost
    Connection: close

    `)
});

client.on('data', function(data) {
    console.log('--> Received: length of data:' + data.length + " bytes\n");
    console.log('--> Received data: ' + data.toString());
});

client.on('close', function() {
    console.log('Connection closed');
});

// eof
