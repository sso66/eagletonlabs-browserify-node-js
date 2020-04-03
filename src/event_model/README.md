## event_model: Using Events, Listeners, Timers, and Callback in Node.js

Using Events, Listeners, Timers, and Callbacks 

**Purpose**
> Node.js provides scablablility and performance through its powerful event-driven model.

> Focus on understanding the model and how it differs from traditional threaded models
> used by most applications.

> Understanding the event model is critical because it may force you to change your
> design thinking for your applications.
> However, those changes will be well worth the improvements in speed that you get by
> using Node.js

**Reason**
> Covers the different methods you use to add work to the Node.js event queue:
> - You can add work by using event listeners or times or you can schedule work directly
> - Learn also how to implement events in your own custom modules and objects

- Understanding the Node.js Event Model
	- Comparing Event Callbacks and Threaded Models
	- Blocking I/O in Node.js
	- A Conversation Example
	
- *Adding Work to the Event Queue*
	> As you create Node.js application and design code, you need to keep in mind the event model described:
	>	- **Node.js Application**
	>	- **Event Queue**
	>	- **Event Loop**
	>	- **Thread Pool**
	
	>```In the Node.js event model work is added as a function (TMC) with callback(EHC) to the event queue, 
	>then picked up on the event loop thread. The function (TMC) is then executed on the event loop
	>thread in case of non-blocking or on a separate thread in case of blocking```

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
		- Delaying Work with Timeouts
		- Performing Periodic Work with Intervals
	  	- Performing Immediate Work with an Immediate Timer
	  	- Dereferencing Timers from the Event Loop
	  	- Using nextTick to Schedule Work
	- Implementing Event Emitters and Listeners
		- Adding Custom Events to Your JavaScript Objects
		- Adding Event Listeners to Objects
		- Removing Listeners from Objects
		- Implementing Event Listeners and Event Emitters
	- Implementing Callbacks
  		- Adding Additional Parameters to Callbacks
  		- Implementing Closure in Callbacks
  		- Chaining Callbacks

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
