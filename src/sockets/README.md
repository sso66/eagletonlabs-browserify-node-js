## sockets: Implementing Socket Services in Node.js

Implementing Socket Servces in Node.js 

- Understanding Network Sockets
	
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

> They allow a servce on one system to communicate with a service on another system
> through an IP address and port.

> They also provide the ability to implement IPC (Inter-process Communication) 
> between two processes running on the same server.

> The `net` module allow you to create net.Server objects act as socket servers and 
> net.Socket object act as socket clients.

> Because the net.Socket object extends *Duplex* streams, you can read and write data
> from both the server and the client.

> For secure connections, Node.js provides `tls` module, which allows you to implement
> secure TLS socket servers and clients.

- Up Next
> You will get a chance to implement multiprocessing in a Node.js environment. This
> allows yyou to farm out work to other process on the system and take advantages
> of multiprocessor servers.

