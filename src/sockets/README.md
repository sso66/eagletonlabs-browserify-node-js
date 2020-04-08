## sockets: Implementing Socket Services in Node.js

Implementing Socket Servces in Node.js 
**Purpose:*
> An import part of backend services is the ability to communicate over sockets.
> Sockets allow one process to communicate with another process through and IP address and port.
> This can be useful when you're implementing interprocess communicacation (IPC) for two different processes
> running on the same server or accessing a service running on a clmpletely different server.

**Reason:**
> Node.js provides the `net` module which allows you to create both a socket server and clients that can connect 
> to the socket server.
>
> For secure connnections Node.js provides the `tls` module that allows you to implement secure TLS socket servers
> and the clients.

- Understanding Network Sockets
> Network sockets are endpoints of communications that flow across a computer network. 
> Sockets live below the HTTP layer and provide the point-to-point communciation between servers.
> Virtually all Internet communication is based on Internet sockets that flow data between two points on the Internet.

	
- Understanding TCP Server and the Socket Objects
  - The net.Socket Object
  - The net.Server Object
	
- Implementing TCP Socket Severs and Clients
  - Implement a TCP Socket Client
  - Implement a TCP Socket Server
  
- Implementing TLS Servers and Clients
  - Creating a TLS Socket Client
  - Creating a TLS Socket Server
  	
- Summary
> Sockets are extremely useful when you're implementing backend services in Node.js
> applications. 

> They allow a service on one system to communicate with a service on another system
> through an IP address and port.
>
> They also provide the ability to implement IPC (inter-process communication) 
> between two processes running on the same server.
>
> The `net` module allow you to create net.Server objects act as socket servers and 
> net.Socket object act as socket clients.
>
> Because the net.Socket object extends **Duplex** streams, you can read and write data
> from both the server and the client.

> For secure connections, Node.js provides `tls` module, which allows you to implement
> secure TLS socket servers and clients.

- Up Next
> You will get a chance to implement multiprocessing in a Node.js environment. This
> allows you to farm out work to other process on the system and take advantages
> of multiprocessor servers.

