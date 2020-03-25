// File: zeromq-watcher-sub.js
// Note: Subscribing to a Publisher
// Date: 03/23/2020
//..............................................................................
"use strict";
/*
 * Implementing the SUB portion of the 0MQ PUB/SUB pair:
 * 
 * It uses zeromq.socket('sub') to make a subscriber endpoint.
 * 
 * Calling subscriber.subscribe("") tells 0MQ that we want to receive all
 * messages. If you only want certain messages, you can provide a string that 
 * acts as a prefix filter. You must call subscribe() at some point in your 
 * code - you won't receive any messages until you do.
 * 
 * The subscriber object inherits from EventEmitter. It emits a 'message' event
 * whenever it receives one from a publisher, so we use subscriber.on to listen
 * for them.
 * 
 * Lastly, we use subscriber.connect() to establish the client end for the 
 * connection.
 * 
 * How 0MQ handles network interruptions: Automatically Reconnecting Endpoints!
 * 
 */
const
	zeromq = require('zeromq'),

	// create subscriber endpoint
	subscriber = zeromq.socket('sub');

// subscribe to all messages
subscriber.subscribe("");

// handle messages from publisher
subscriber.on("message", function(data) {
	let
		message = JSON.parse(data),
		date = new Date(message.timestamp);
	console.log("File '" + message.file + "' changed at " + date);
});

// connect to publisher
subscriber.connect("tcp://localhost:5432");

// eof

