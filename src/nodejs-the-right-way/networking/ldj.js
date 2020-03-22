// File: net-watcher-json-service.js
// Note: Extending Core Classes in Custom Modules
// Date: 03/22/2020
//..............................................................................
'use strict';
/*
 * Need to fix the client exposed a flaw in code, namely it doesn't buffer its 
 * input. Any message that arrives as multiple data events will crash it.
 * 
 * So really the client program has two jobs to do. One is to buffer incoming
 * data into messages. The other is to handle each message when it arrives.
 * 
 * Single Responsible Principle: 
 * Rather than cramming both of these jobs into one Node.js programme, the right 
 * thing to do is to turn at least one of them into a Node.js module.
 * 
 * Create a module that handles the input buffering piece and the main program 
 * can reliably get full messages. 
 * 
 * Extending EventEmitter:
 * Use of Inheritance in Node.js
 * 
 * LDJClient is a constructor function, which means other code should call new
 * LDJClient(stream) to get the instance. The stream parameter is an object that
 * emits data events, such as Socket connection.
 * 
 * Inside the constructor function, call the EventEmitter constructor on 'this'.
 * That line of code is roughly equivalent to calling super() in languages with
 * classical inheritance (React JSX).
 * 
 * Finally, call util.inherits() to make LDJClient's prototypal parent object 
 * the EventEmitter prototype. It's like saying "class LDJClient inherits from
 * from EventEmitter" in classical inheritance model.
 * 
 */
const
	events = require('events'),
	util = require('util'),
	
    /* 
     * Buffering Data Events:
     * It's time to use the stream parameter in the LDJClient to retrieve and
     * buffer input. The goal is to take the incoming raw data from the stream
     * and convert it into message events containing the parsed message objects.
     * 
     * It appends incoming data chunks to a running buffer string and scans for
     * line endings (which should be JSON message boundaries).
     * 
     * The constructor function starts out by calling the EventEmitter constructor,
     * and then set up the local variable 'self' to capture 'this'
     * 
     * In JavaScritn, the value of 'this' is assigned inside each function when 
     * it is invoke at runtime. The of 'this' is not tightly bound to any 
     * particular object like classical language (C++/Java). It is more like
     * a special variable - context.
     * 
     * Setting a separate vaiable 'self' to the same value guarenttes that wer'e
     * referring to the correct object inside the data event handler. Be careful
     * about 'this' in JavaScript, especially when nested functions are involved.
     * 
     * Inside the data event handle, append raw data to the end of the buffer 
     * and then pull completed messages of the front. Each message string is sent
     * through the JSON.parse() and finally emitted by the LDJClient as a message
     * event via self.emit().
     * 
     * At this point, the problem handling split messages is effectively solved.
     * Whether ten messages come in on a single data event or only half of one
     * does, they'll all precipitate 'message' events on the LDJClient instance.
     * 
     * Next put this class inot a Node.js module so the upstream client can use it
     * 
     */         
	// client constuctor
	LDJClient = function(stream) {
		events.EventEmitter.call(this);
		let
			self = this,
			buffer = '';
		stream.on('data', function(data) {
			buffer += data;
			let boundary = buffer.indexOf('\n');
			while (boundary !== -1) {
				let input = buffer.substr(0, boundary);
				buffer = buffer.substr(boundary + 1);
				self.emit('message', JSON.parse(input));
				boundary = buffer.indexOf('\n');
			}
		});
	};
util.inherits(LDJClient, events.EventEmitter);

// expose module methods
exports.LDJClient = LDJClient;

exports.connect = function(stream) {
	return new LDJClient(stream);
};
 