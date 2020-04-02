## multi_processors: Scaling Applications Using Multiple Processors in Node.js

Scaling Applications Using Multiple Processors in Node.js

- Understanding the **process** Module
	- Understanding Process I/O Pipes
	- Understanding Process Signals
	- Controlling Process Execution with process Module
	- Getting Information from the process Module

- Implementing Child Process
  - Understanding the ChildProcess object
  - Executing a System Command on Another Process by Using exec()
  - Executing an Executing File on Another Process Using execFile()
  - Spawning Process in Another Node.js Instance Using spawn()
  - Implementing Child Forks

- Implement Process Clusters
  - Understanding the cluster Module
  - Understanding the Worker Object
  - Implementing an HTTP Cluster
	
- Summary
>To make the most of Node.js performance on servers with multiple processors, you 
> need to be able to farm off work to the other process.
> The `process` module allows you to interact with the system process, the `child_process`
> module allows you to actually execute code on a separate process, the `cluster` module
> allows you to create a cluster of HTTP and TCP servers.
>
> `child_process`, provides the *exec()*, *execFile()*, *spawn()*, and *fock()* functions,
> which start work on separate processes.
>
> The **ChildProcess** and **Worker** objects provide IPC channels that allows you
> to communicate between the parent and the child process.

- Up Next
> You will see some of the other modules that Node.js provides. For the `os` module
> provides tools to interact with the operating system, and the `util` module
> provides useful functionality.


