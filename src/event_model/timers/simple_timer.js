// File: simple_timer.js
// Note: Delaying Work with Timeouts
// Date: 04/03/2020
//..............................................................................
console.info('Mounting simple_timer.js...');
/*
 * Timeout timers are used to delay work for a specific amount of time. When
 * that time expires the callback function is executed, and the timer goes
 * away.
 * 
 * You should use timeouts for work that need to be performed only once.
 * 
 * You create the timeout timers using 
 *
 *   setTimeout(callback, delayMilliSeconds, [args])
 *
 * method built into Node.js.
 * 
 * When you call the setTimeout(), the callback function is executed after
 * delayMilliSeconds has expired. For example, the following executes
 *
 * myFunction() after a second:
 *   setTimeout(myFunction, 1000)
 * 
 * The setTimeout() function returns a timer object ID, and you can pass this
 * ID to clearTimeout(timeoutId) at anytime before delauMilliSeconds expires
 * to cancel the timeout function. For example:
 * 
 * myTimeout = setTimeout(myFunction, 1000 * 1000)
 * ...
 * clearTimeout(myTimeout)
 * 
 * Following code implements a series of simple timeouts that call to the
 * simpleTimeout() function, which output the number of milliseconds since
 * the timeout was scheduled.
 * 
 * Notice that it doesn't matter in which the setTimeout is called.
 *
 */
// create a named reusable callback function using console I/O methods
function simpleTimeout(consoleTimer) {
	console.timeEnd(consoleTimer);
}

console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");

console.time("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");

console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");

console.time("50MilliSecond");
setTimeout(simpleTimeout, 50, "50MilliSecond");

// eof

// output
// Mounting simple_timer.js...
// 50MilliSecond: 55.728ms
// oneSecond: 1062.735ms
// twoSecond: 2009.097ms
