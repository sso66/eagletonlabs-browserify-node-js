// File: simple_dereference.js
// Note: Deferenceing Timers from the Event Loop
// Date: 04/04/2020
//..............................................................................
console.info('Mounting simple_dereference.js...');
/*
 * Often you will not want timer even callbacks to continue to be schedule when
 * they are the only events left in the event queue.
 * 
 * Node.js provides a very useful utility to handle this case.
 * 
 * The unref() function, available in Node.js the object returned by setInterval
 * and setTimeout, allows you to nodify the event loop to not to continue when
 * these are the only events on the event queue.
 * 
 * For example, the following code dereferences the myInterval timer:
 * 
 * myInterval = setInterval(myFunc)
 * myInterval.unref();
 * 
 * If for some reason you later do not want to terminate if the interval function
 * is the only left on the event queue, you can use the ref() function to 
 * re-reference it:
 * 
 * myInterval.ref() // pointer-to-function concept
 * 
 * Warning:
 * When using unref() with setTimeout timers, a separate time is used to wake the
 * event loop. Using a lot of these can have an adverse performance impact on your
 * code, so you should create them sparingly.
 * 
 */