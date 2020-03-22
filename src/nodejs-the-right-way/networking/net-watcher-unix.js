// File: net-watcher-unix.js
// Note: Writing Data to a Socket
// Date: 03/19/2020
//..............................................................................
'use strict';

const
	fs = require('fs'),
	net = require('net'),

	filename = process.argv[2],

	server = net.createServer(function(connection) {

	// reporting
	console.log('Subscriber connected.');
	connection.write("Now watching '" + filename + "' for changes...\n");

	// watcher setup
	let watcher = fs.watch(filename, function() {
		connection.write("File '" + filename + "' changed: " + Date() + "\n");
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

// Unix sockets work only on Unix-like environments - linux and macos platforms
server.listen('/tmp/watcher.sock', function() {
	console.log('Listening for subscribers...');
});

// eof
