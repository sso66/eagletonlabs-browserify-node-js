// File: net-watcher-json-service.js
// Note: Implementing a Messaging Protocol
// Date: 03/19/2020
//..............................................................................
'use strict';
/*
 * A protocol is a set of rules that define how endpoints in a system 
 * communicate. Every time you develope a networked application, Node.js, 
 * you're working with one or more protocols. Here we'll create protocol based
 * on passing JSON encoded message over TCP.
 * 
 * JSON is extensively used for data serialization and configuration.
 * 
 * Develop the message-passing protocol that uses JSON to serialize messages. 
 * 
 * Each message is a JSON-serialized object, which is a has of key-value pairs.
 * 
 * Here is an example of JSON object with twk key-value pairs:
 *  {"key": "value", "anotherKey", "anotherValue"}
 * 
 */
const
	fs = require('fs'),
	net = require('net'),

	filename = process.argv[2],
	
    server = net.createServer(function(connection) {

		// reporting
		console.log('Subscriber connected.');
		connection.write(JSON.stringify({
			type: 'watching',
			file: filename
		}) + '\n');

		// watcher setup
		let watcher = fs.watch(filename, function() {
			connection.write(JSON.stringify({
				type: 'changed',
				file: filename,
				timestamp: Date.now()
			}) + '\n');
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

server.listen(5432, function() {
	console.log('Listening for subscribers...');
});
