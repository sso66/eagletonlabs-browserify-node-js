## event_model: Using Events, Listeners, Timers, and Callback in Node.js

Using Events, Listeners, Timers, and Callbacks 


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
