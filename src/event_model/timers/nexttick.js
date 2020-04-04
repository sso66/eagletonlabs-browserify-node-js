// File: nexttick.js
// Note: Using nextTick() to Schedule Work
// Date: 04/04/2020
//..............................................................................
console.info('Mounting nexttick.js...');
/*
 * A very useful method of scheduling work on the event queue is using the 
 * process.nextTick(callback) function.
 * 
 * This function schedules work to be run on the next cycle of the event loop.
 * 
 * Unlike the setImmediate() method, nextTick() executes BEFORE the I/O events
 * are fired. 
 * 
 * This can result in starvation of I/O events, so Node.js limits the number
 * of nextTick() events that can be executed each cycle through the event 
 * queue by the value of process.maxTickDepth, which defaults to 1000.
 * 
 * The code implementing a series of blocking fs I/O calls, immediate timers,
 * and nextTick() calls to show the order of execution.
 * 
 * It illustrates the order of events when using a blocking I/O calls, 
 * immediate timers and nextTick().
 * 
 * Notice that the blocking call fs.stat() is executed first, then two
 * setImmediate() calls are executed BEFORE any of the other, then the 
 * first setImmediate() call followed by the fs.stat() call and then on
 * the next iteration through the event loop, the second setImmediate() 
 * call.
 * 
 */
var fs = require("fs");

// fs.state method executes the blocking call recursively - "nexttick.js"
fs.stat("nexttick.js", function(err, stats) {
	if (stats) { console.log("nexttick.js Exists"); }
});

setImmediate(function() {
	console.log("Immediate Timer 1 Executed");	
});

setImmediate(function() {
	console.log("Immediate Timer 2 Executed");
});

process.nextTick(function() {
	console.log("Next Tick 1 Executed");
});

process.nextTick(function() {
	console.log("Next Tick 2 Executed");
});

// eof
