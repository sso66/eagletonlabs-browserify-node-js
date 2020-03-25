// File: zeromq-watcher-pub.js
// Note: Publishing Messages over TCP
// Date: 03/22/2020
//..............................................................................
/*
 * Implement the PUB half of PUB/SUB pair using the 'zeromq' module.
 * 
 * First, instead of requiring the 'net' module, now we're requiring 'zeromq'.
 * We use it to create a publisher endpoint by calling zeromq.socket('pub).
 * 
 * Importantly, we have only one call to fs.watch(). Our servers the last 
 * chapter would invoke watch() once for every contected client. Here we have 
 * just one file-system watcher, which invokes the publisher's send() method.
 * 
 * Notice that the string we send to the publisher.send() is the output of 
 * JSON.stringify(). 0MQ does not do any formatting of messages itsele - it is
 * only interested pushing bytes down the wire. It is our job to serialize and
 * deserializ any messages we send through 0MQ.
 * 
 * Finally, we call publisher.bind('tcp://*:5432') to tell 0MQ to listen on TCP
 * port 5432 for subscribers.
 * 
 * Even though this service use TCP, we can't simply use 'telnet' to get 
 * anything out it. A 0MQ server a 0MQ client because of its high-performance
 * binary protocol.
 * 
 */
'use strict';

const
	fs = require('fs'),
	zeromq = require('zeromq'),

	// create publisher endpoint
	publisher = zeromq.socket('pub'),

	filename = process.argv[2];

fs.watch(filename, function(){

	// send message to any subscribers
	publisher.send(JSON.stringify({
		type: 'changed',
		file: filename,
		timestamp: Date.now()
	}));

});

// listen on TCP port 5432
publisher.bind('tcp://*:5432', function(err) {
	console.log('Listening for zeromq subscribers...');
});
