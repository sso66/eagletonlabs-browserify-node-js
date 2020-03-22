// File: zeromq-watcher-sub.js
// Note: Subscribing to a Publisher
// Date: 03/22/2020
//..............................................................................
"use strict";
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
