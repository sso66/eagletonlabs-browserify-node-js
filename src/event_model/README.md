## event_model: Using Events, Listeners, Timers, and Callbacks in Node.js

Using Events, Listeners, Timers, and Callbacks 

**Purpose**
> Node.js provides scablablility and performance through its powerful event-driven model.

> Focus on understanding the model and how it differs from traditional threaded models
> used by most applications.

> Understanding the event model is critical because it may force you to change your
> design thinking for your applications.
>
> However, those changes will be well worth the improvements in speed that you get by
> using Node.js

**Reason**
> Covers the different methods you use to add work to the Node.js event queue:
> - You can add work by using event listeners or timers or you can schedule work directly
> - Learn also how to implement events in your own custom modules and objects

- *Understanding the Node.js Event Model*
  - Comparing Event Callbacks and Threaded Models
  - Blocking I/O in Node.js
  - A Conversation Example: Concurrent Thinking vs Linear Thinking
	
- *Adding Work to the Event Queue*
	> As you create Node.js application and design code, you need to keep in mind the event model described:
	>	- **Event Queue**
	>	- **Event Loop**
	>	- **Thread Pool**
	
	>```
	> In the Node.js event model work is added as a function (TMC) with callback(EHC) to the event queue, 
	> then picked up on the event loop thread. The function (TMC) is then executed on the event loop
	> thread in case of non-blocking or on a separate thread in case of blocking.
	>```

	> To leverage the scalability and performance of the event model make sure you break up the work into
	> chunks that can be performed as a series of *callbacks*.
	>
	> When you have designed your code correctly, you can use the event model to schedule work on the 
	> event queue. In Node.js applications, you schedule work on the event queue by passing a callback
	> function to using one of these methods:
	>	- Make a call to one of the blocking I/O library calls, such as writing a file or connecting to a database.
	>	- Add an event listener to a build-in event such as an `http.request` or `server.connection`.
	>	- Create your own event emitters and add customer listeners to them.
	>	- Using the `process.nextTick` option to schedule work to be picked up on the next cycle of the the event loop.
	>	- Use timers to schedule work to be done after particular amount of time or at periodic intervals.

	- Implementing Timers
		> A useful feature of Node.js and JavaScript is the ability to delay execution of code for the period of time.
		>
		> This can be useful for cleanup and refresh work that you do not want to always be running.
		>
		> You can implement three types of timers in Node.js: the timeout, interval, immediate timers.
		
		- Delaying Work with Timeouts
		- Performing Periodic Work with Intervals
		- Performing Immediate Work with an Immediate Timer
		- Dereferencing Timers from the Event Loop
		- Using nextTick to Schedule Work
	
	- Implementing Event Emitters and Listeners
		> You will have opportunities to implement a lot of events that are built into various Node.js modules.
		>
		> For now, focus on you own custom events as well as implement listener callbacks that are implemented
		> when an event is emitted (triggered).
		
	  	- Adding Custom Events to Your JavaScript Objects
	  		> Events are emitted using an `EventEmitter` object. This object is included in the `events` module.
	  		> the `emit(eventName, [args])` function triggers `eventName` event and includes any arguments
	  		> provided
	  		>
	  		> The following code snippet shows how to implement simple event emitter:
	  		```
	  		var events = require('events`);
	  		var emitter = new events.EventEmitter();
	  		emitter.emit("simpleEvent");
	  		```
			>
			> Occasionally, you will want to add events directly to your JavaScript objects. To do that,
			> you need to inherit the `EventEmitter` functionality in you object by calling `events`.
			>
			> `EventEmitter.call(this)` in you object instantiation. You also need to add
			> `events.EventEmitter.prototype` to you object prototyping - Prototype Design Pattern.
			```
			function MyObj() {
			    events.EventEmitter.call(this);
			}
			MyObj.prototype.__proto__ = events.EventEmitter.prototype;
			```
			> You can then emit events directly form instances of your object, For example:
			```
			var myObj = new MyObj();
			myObj.emit("someEvent"); // const SOME_EVENT = 'someEvent`;
			```
			
	  	- Adding Event Listeners to Objects
			> Once you have an instance of an object that you will emit events, you can add listeners for the
			> events that you care about. You can add listeners to an `EventEmitter` object by using one of the
			> following functions:
			
			> - **.addListener(eventName, callback):** Attaches the `callback` function to the object's
			> listeners. Every time the `eventName` event is triggered, the `callback` function is placed
			> in the event queue to be executed.
				  
			> - **on(eventName, callback):** Same as `.addListener()`.
			
			> - **.once(eventName, callback):** Only the firs time the `eventName` event is triggered,
			> the `callback` function is placed in the event queue to be executed.
			
			> For example, to add a listener to an instance of the `MyObject` extends `EventEmitter` class
			> defined previously, you would use:
			```
			function myCallback() {
			    ...
			}
			var myObject = new MyObject;
			myObject.on("someEvent", myCallback);
			```						
	  	- Removing Listeners from Objects
			> Listeners are very useful and a vital part of Node.js programming. However, they cause overhead, 
			> and you should use them only when necessary. Node.js provides several helper functions on the
			> `EventEmitter` object that allow you to manage the listeners that are included:
			
			> - **.listener(eventName):** Returns and array of listeners functions attatched to the `eventName`
			> event. 
				  
			> - **setMaxListeners(n):** Triggers a warning if more than `n` listeners are added to an `EventEmitter`
			> object. The default is 10.
			
			> - **.removeListener(eventName, callback):** Removes the `callback` function from the `eventName` event
			> of the `EventEmitter` object.
			
	  	- Implementing Event Listeners and Event Emitters - `emitter_listener.js`
		
- *Implementing Callbacks*
	> The Node.js event-driven model relies heavily on the callback functions. 
	> Callback functions can be difficult to understand at first, especially if you want to depart from
	> implementing a basic anonymous function as opposed to named functions.
	
	> Here is how to deal with three specific implementations of callbacks:
	> - passing parameters to a callback
	> - handling callback function parameters in a loop (iterator), and
	> - nesting callbacks
		
  	- Adding Additional Parameters to Callbacks - `callback_parameters.js`
  	- Implementing Closure in Callbacks - `callback_closure.js`
  	- Chaining Callbacks - `callback_chain.js`

- Summary
> The event-driven model that Node.js uses provides scalability and performance.
> Lessons learned on the difference between the event-driven and the traditional
> threaded model for webservers.

> Also, lessons learned on that you can add events to the event queue when blocking
> I/O is called, and you can use events, timers or the nextTick() method to schedule 
> events.

> You have seen that there are three types of timer events: timeout, interval and
> immediate. You can use each of these events to delay the execution of work for
> a period of time.

> You have also seen how to implement your own custom event emitters and add 
> listener function to them.

- Up Next
> Get a chance to see how to manage data I/O by using streams and buffers. Also, learn
> about Node.js functionality that allows you to manipulate JSON and compressed forms
> of data.
