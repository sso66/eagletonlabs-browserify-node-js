// File: udp_multicast.js
// Note: A naïve peer discovery implementation using UDP multicast.
// Date: 03/24/2020
//..............................................................................
console.info('Mounting UDP socket udp.js...');
/*
 * UDP is considered part of the transport layer alongside TCP. Unlike TCP, 
 * UDP is a unreliable and connectionless protocol that does not guarantee 
 * delivery or order of messages. The protocol is, however, much simpler and 
 * faster and supports broadcast and multicast. Because of these properties, 
 * UDP should be an excellent protocol to use for any system that must emit 
 * its state to multiple subscribers. Examples of these systems are online 
 * game engines that must share state between clients, distributed systems 
 * where components must be discoverable, and a blockchain network.
 * 
 */
const PORT = 20000;
const MULTICAST_ADDR = "233.255.255.255";   // HOST
// how to connect to and send messages to a UDP multicast group.
// Here, choose the port that we will bind the socket to and the multicast 
// address we will use. The multicast group address must be within the 
// appropriate multicast address space. Much of the space is reserved, but 
// you can still find some unassigned ad-hoc space such as 
// 233.252.18.0-233.255.255.255.

const dgram = require("dgram");
const process = require("process");

const socket = dgram.createSocket({ type: "udp4", reuseAddr: true });

socket.bind(PORT);

// The socket is an instance of EventEmitter, so we can listen to a couple 
// events. The ‘listening’ event is the first event that is fired after 
// binding to the port. 
//
// We catch this event and add ourselves to the multicast group. Then, we call 
// sendMessage every 2.5 seconds which sends a message to the multicast group.

socket.on("listening", function() {
    socket.addMembership(MULTICAST_ADDR);
    setInterval(sendMessage, 2500);
    const address = socket.address();
    console.log(
        `UDP socket listening on ${address.address}:${address.port} pid: ${
            process.pid
        }`
    );
});

function sendMessage() {
    const message = Buffer.from(`Message from process ${process.pid}`);
    socket.send(message, 0, message.length, PORT, MULTICAST_ADDR, function() {
        console.info(`Sending message "${message}"`);
    });
}

// Finally, we listen for the message event and print any messages to the console
socket.on("message", function(message, address) {
  console.info(`Message from: ${address.address}:${address.port} - ${message}`);
});

// eof

// We can then run this script in 3 separate terminal sessions to see each process 
// bouncing a message off my home router and communicating with one-another.
//
// Now for the bad news: UDP multicast is not supported by the vast majority of 
// ISPs and cloud hosting providers which means it likely won’t work over the 
// internet. 

