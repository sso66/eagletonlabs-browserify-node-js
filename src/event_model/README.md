## event_model: Using Events, Listeners, Timers, and Callback in Node.js

Using Events, Listeners, Timers, and Callbacks 

**Purpose**
> Node.js provides scablablility and performance through its powerful event-driven model.

> Focus on understanding the model and how ti differs from traditional threaded models
> used by most applications

> Understainding the event model is critical because it may force you to change your
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
	
- Adding Work to the Event Queue
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
