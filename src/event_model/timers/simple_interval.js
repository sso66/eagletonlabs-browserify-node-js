// File: simple_interval.js
// Note: Performing Periodic Work with Intervals
// Date: 04/03/2020
//..............................................................................
console.info('Mounting simple_interval.js...');
/*
 * Interval timers are used to perform work on regular delayed interval. When 
 * the delay time expires, the callback function is executed and is then
 * rescheduled for the delay interval again.
 * 
 * You should use intervals for work that needs to be performed on regular 
 * basis.
 * 
 * You create interval timers by using
 * 
 * setInterval(callback, delayMilliSeconds, [args])
 * 
 * method that is build into Node.js.
 * 
 * When you call setInterval(), the callback function ise executed every interval
 * after delayMilliSeconds has expired. For example, the following executes 
 * myFunc() every second:
 * 
 * setInterval(myFunc, 1000)
 * 
 * The setInterval() function returns a timer object ID, and you can pass this ID
 * to clearInterval(intervalId) at anytime before delayMilliSeconds expires to 
 * cancel the timeout function. For example:
 * 
 * myInterval = setInterval(myFunc, 100000)
 * ...
 * clearInterval(myInterval)
 * 
 * The following code implements a series of simple interval callbacsk that update
 * the values of the variables x, y, and z at different intervals.
 * 
 * Notice that the values of x, y and z are changed differently because the internal
 * ammounts are differens; x increments twice as fast as y, which increments twice
 * as fast as z.
 * 
 */
var x = 0, y = 0, z = 0;

function updateX() {
	x += 1;
}

function updateY() {
	y += 1;
}

function updateZ() {
	z += 1;	
	displayValues();
}

setInterval(updateX, 500);
setInterval(updateY, 1000);
setInterval(updateZ, 2000);

function displayValues() {
  console.log("X = %d; Y = %d; Z = %d", x, y, z);
}

// eof 
