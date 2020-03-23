// File: zeromq-watcher-pub.js
// Note: Publishing Messages over TCP
// Date: 03/22/2020
//..............................................................................
/*
 * Implement the PUB half of PUB/SUB pair using the 'zeromq' module.
 * 
 * First, instead of requiring the 'net' module, now we're requiring 'zeromq'.
 * We use it to create a publisher endpoint by calling zeromq.socket('pub).
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
