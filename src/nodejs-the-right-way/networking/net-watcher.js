// File: net-watcher.js
// Note: Writing Data to a Socket
// Date: 03/19/2020
//..............................................................................
'use strict';
/*
 * Networked services exist to to two things: connect endpoints and transmit
 * information between them. No mater what kind of information is transmitted
 * aconnection must first be made.
 */
const
	fs = require('fs'),
	net = require('net'),

filename = process.argv[2],
	
/*
 * TCP socket connections consist of two endpoints. One endpoint binds to a
 * numbered port while the other endpoint connects to a port.
 * 
 * In Node.js the bind and connect operations are probided by the 'net'
 * module.
 */

// binding a server to a TCP port
server = net.createServer(function(connection) {

/*
 * This callback function does three things:
 *   - It reports that the connection has been established (both to the client
 *     with connection.write and to the console).
 * 
 *   - It begins listening for changes to the target file, saving the returned
 *     watcher object. This callback sends change formation to the client using
 *     connection.write.
 * 
 *   - It listens for the connection's close event so ti can report that the 
 *     subscriber has disconnected and stop watching file with watcher.close().
 * 
 * Finally, notice the callback passed into the server.listen at the end Node.js
 * invokes this function after it has succfully bound port 5432 and is ready to
 * start receiving connections.
 * 
 */
	// reporting
	console.log('Subscriber connected.');
	connection.write("Now watching '" + filename + "' for changes...\n");

	// watcher setup
	let watcher = fs.watch(filename, function() {
		connection.write("File '" + filename + "' changed: " + Date.now() + "\n");
    });

	// cleanup
	connection.on('close', function() {
		console.log('Subscriber disconnected.');
		watcher.close();
	});
});

if (!filename) {
	throw Error('No target filename was specified.');
}

// listening for socket connections
server.listen(5432, function() {
	console.log('Listening for subscribers...');
});

// eof

