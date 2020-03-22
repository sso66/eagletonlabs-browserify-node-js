// File: net-watcher-json-service.js
// Note: Testing Network Application Functionality
// Date: 03/21/2020
//..............................................................................
"use strict";
/*
 * Understanding the Message-Boundary Problem
 * 
 * When you develop networked programs in Node.js, they'll often communicate by
 * passing messages. In the best case, a message will arrive all at once.
 * 
 * But sometimes messages will arrive in pieces, split into distinct data events.
 * 
 * To develop neworked applications, you'll need to deal with these splits when
 * they happen.
 * 
 */

const
	net = require('net'),

	server = net.createServer(function(connection) {

		console.log('Subscriber connected');

		// send the first chunk immediately
		connection.write(
			'{"type":"changed","file":"targ'
		);

		// after a one second delay, send the other chunk
		let timer = setTimeout(function() {
			connection.write('et.txt","timestamp":1358175758495}' + "\n");
			connection.end();
		}, 1000);

		// clear timer when the connection ends
		connection.on('end', function() {
			clearTimeout(timer);
			console.log('Subscriber disconnected');
		});
    });

server.listen(5432, function() {
	console.log('Test server listening for subscribers...');
});

// eof
