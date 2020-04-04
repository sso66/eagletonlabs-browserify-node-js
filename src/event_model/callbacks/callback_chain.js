// File: callback_chain.js: 
// Note: Chaining callbacks
// Date: 03/01/2020
//..............................................................................
console.info('Mounting callback_chain.js...');

// 3. CONTEXT: Event Queue  - View Layer

// Applied Command/Chain of Responsibility Design Patterns
/*
 * With asynchronous functions, you are not guaranteed the order in which 
 * they will run if two are placed on the event queue.
 * 
 * The best way to resolve this is to implement callback chain by having
 * the callback from asynchronous function call the function again until
 * there is no more work to do.
 * 
 * That way, the asynchronous function is never on the event queue more 
 * than once.
 * 
 */
//___ Publisher/Provider Module ___
function logCar(car, repeat) {
	// show(car);
	console.log("saw a %s", car);
	
	if (cars.length) {	
	  // using nextTick method to schedule work on event queue	
		process.nextTick(function() {
			repeat();
		});
	}
}

function logCars(cars) {
	var car = cars.pop();
	
	logCar(car, function() { 
		logCars(cars);
	});
}

//___ Subscriber/Consumer Module
function show(car) {
  console.log("Saw a %s", car);
}

var cars = [
  'Ferrari', 
  'Porsche', 
  'Bugatti',
  'Lamborghini', 
  "Aston Martin"
];

logCars(cars);

// eof 
