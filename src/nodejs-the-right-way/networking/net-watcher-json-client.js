// File: net-watcher-json-client.js
// Note: Creating Socket Cliet Connections
// Date: 03/19/2020
//..............................................................................
'use strict';
/*
 * Here is client side of Node.js sockets to receive JSON message from the 
 * server. 
 * 
 * It uses net.connect() to create a client connection to locahost port 5432, 
 * then wait for data. The client object is a net.Socket, just like the incoming
 * connection object on the server.
 * 
 * Whenever a data event happens, the callback function takes the incoming buffer
 * object, parses the JSON message, and then logs an appropriate message to the
 * console.
 * 
 * It works, but far from perfect. Need to consider what happens when the 
 * connection ends or if it fais to connect in the first place. We consider
 * what must have, could have and should have listened for the events and take
 * appropriate actions when they happen.
 * 
 * Note there's actually  a deeper problem lurking in our code - caused by 
 * assumptions we've made about message boundaries. 
 * 
 * Develop a test that exposes this bug to fix it.
 */
const
	net = require('net'),
	client = net.connect({port: 5432});
		
client.on('data', function(data) {
	let message = JSON.parse(data);
	if (message.type === 'watching') {
		// console.log("Now watching: " + message.file);
	} else if (message.type === 'changed') {
		let date = new Date(message.timestamp);
		console.log("File '" + message.file + "' changed at " + date);
	} else {
		throw Error("Unrecognized message type: " + message.type);
	}
});
