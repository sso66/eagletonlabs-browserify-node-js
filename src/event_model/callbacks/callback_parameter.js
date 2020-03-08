// File: callback_parameter.js: 
// Note: Passing additional parameters to callbacks
// Date: 03/01/2020
//..............................................................................
console.info('Mounting callback_parameter.js...');

// 1. FUNCTION - Controller Layer
/*
 * Most callback have automatic parameters passed to them, such as
 * err or result buffer (data), e.g. response
 * 
 * A common question when working with callbacks is how to pass
 * additional parameters (re: ...spread and rest...) to them from
 * the calling function (caller)
 * 
 * The way to do this is to implement the parameter in an anonymous
 * function, then call the callback with the parameters from anonymous
 * function.
 */
//___ Publisher/Provider module ___
var events = require('events');

// Event
const SAW_CAR = 'SAW_CAR';

// Callback
function CarShow() {
	events.EventEmitter.call(this);
	
	this.seeCar = function(make) {
		this.emit(SAW_CAR, make);
	};
}

// Applied Prototype Design Pattern
// Points to the object which was used as prototype when the object was instantiated
// CarShow.prototype.__proto__ = events.EventEmitter.prototype;

var util = require('util');
util.inherits(CarShow, events.EventEmitter);

//___ Subscriber/Consumer module ___

// PROPERTY BINDING
//
var show = new CarShow();

function logCar(make) {
	console.log("Saw a " + make);	
}

function logColorCar(color, make) {
	console.log("Saw a %s %s", color, make);
}

// EVENT BINDING
//
// 1st Event Handler
show.on(SAW_CAR, logCar);

// 2nd Event Handler
show.on(SAW_CAR, function(make) {
  // additional parameters to callback JS function Prototype
  // apply Decorator Structural Design Pattern
	var colors = ['red', 'blue', 'black'];
	var color = colors[Math.floor(Math.random() * 3)];
	
	logColorCar(color, make);
});

// Event Emitter
// Applied Observer Behavioral Design Patterns
show.seeCar('Ferrari');
show.seeCar('Porsche');
show.seeCar('Bugatti');
show.seeCar('Lamborghini');
show.seeCar('Ashton Martin');

// eof
