// File: udp_client.js
// Note: Implementing full basic UDP socket client
// Date: 03/24/2020
//..............................................................................
console.info('Mounting UDP socket client...');

/*
 * client.send() requires a proper Node.js Buffer object, not a plain string 
 * or number.
 * 
 * The second parameter 0, of client.send() is the offset in the buffer where 
 * the UDP packet starts.
 * 
 * The third parameter message.length, is the number of bytes we want to send 
 * from the offset in the buffer. 
 * 
 * In our case, the offset is 0, and the length is message.length (16 bytes), 
 * which is quite tiny and the whole buffer can be sent in a single UDP packet. 
 * This might always not be the case. For large buffers, you will need to 
 * iterate over the buffer and send it in smaller chunks of UDP packets.
 * 
 * Exceeding the allowed packet size will not result in any error. The packet 
 * will be silently dropped. That's just the nature of UDP. 
 * 
 * The err object in the callback function of client.send() is going to be only 
 * of the DNS lookup kind.
 * 
 * Make sure the HOST / IP address is in conformance with the IP version you 
 * use, else your packets will not reach the destination.
 * 
 */
var dgram = require('dgram');

var PORT = 33333;
var HOST = '127.0.0.1';

var datagram = 'My KungFu is Good!';
/*
 * Buffer() is deprecated due to security and usability issues. Please use the 
 * Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
 * 
 */
var message = Buffer.from(datagram);
var client = dgram.createSocket('udp4');

client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
  if (err) throw err;
  console.log('UDP message sent to ' + HOST +':'+ PORT);
  client.close();
});

// eof
