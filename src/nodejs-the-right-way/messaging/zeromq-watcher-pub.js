// File: zeromq-watcher-pub.js
// Note: Publishing Messages over TCP
// Date: 03/22/2020
//..............................................................................
/*
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
