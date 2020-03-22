// File: net-watcher-json-service.js
// Note: Extending Core Classes in Custom Modules
// Date: 03/22/2020
//..............................................................................
'use strict';
/*
 * The are other ways to do inheritance in JavaScript, but this is how Node.js's
 * own modules are structured. Follow the Node.js core library style.
 * 
 * Code to use LDJClient might look like this:
 * 
 * const client = new LDJClient(networkstream);
 * client.on('message', function(message) {
 *    // take action for this message 
 * });
 * 
 * Even though the client object doesn't have an on() method directly, its
 * prototypal grandparent, EventEmitter does.
 * 
 */
const
	net = require('net'),
	ldj = require('./ldj'),
	
	netClient = net.connect({port: 5432}),
	ldjClient = ldj.connect(netClient);

ldjClient.on('message', function(message) {
	if (message.type === 'watching') {
		console.log("Now watching: " + message.file);
	} else if (message.type === 'changed') {
		console.log(
			"File '" + message.file + "' changed at " + new Date(message.timestamp)
		);
	} else {
		throw Error("Unrecognized message type: " + message.type);
	}
});

// eof

