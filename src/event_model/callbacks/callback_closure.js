// File: callback_closure.js: 
// Note: Implementing closure in callbacks
// Date: 03/01/2020
//..............................................................................
console.info('Mounting callback_closure.js...');

// 2. SCOPE - Model Layer 

// Composite Design Patterns
/*
 * An interesting problem related to asynchronous callbacks is closure.
 * 
 * Closure is a JavaScript term that indicates that variables are 
 * bound to a "child" function's scope and not to the parent function's
 * scope.
 * 
 * When you execute an asynchronous callback the parent's scope may have 
 * changed (for example when iterating through the list or collection, 
 * and altering values on each iteratiion).
 * 
 * If a callback needs access to variables in parent's function's
 * scope, you need to provide closure so that those values are available
 * when the callback is pulled off the event queue.
 * 
 * A basic way of doing this is to encapulated an asynchronous call 
 * inside a function block and pass in the variables that are needed.
 * 
 */
function logCar(logMsg, repeat) {
	process.nextTick(function() {
		repeat(logMsg);
	});
}

var cars = ['Ferrai', 'Porsche', 'Bugatti'];

for (var idx in cars) {
	var message = "Saw a " + cars[idx];
	logCar(message, function () {
		console.log("Normal Callback: " + message);
	});
}

for (var idx in cars) {
	var message = "Saw a " + cars[idx];
	// __ closure __
	(function(msg) {
		logCar(msg, function() {
			console.log("Closure Callback: " + msg);
		});
	})(message);
}

// eof
