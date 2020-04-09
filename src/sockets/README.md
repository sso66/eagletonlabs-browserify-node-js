## sockets: Implementing Socket Services in Node.js

**Purpose:**
> An import part of backend services is the ability to communicate over sockets.
> Sockets allow one process to communicate with another process through and IP address and port.
> This can be useful when you're implementing interprocess communicacation (IPC) for two different processes
> running on the same server or accessing a service running on a completely different server.

**Reason:**
> Node.js provides the `net` module which allows you to create both a socket server and clients that can connect 
> to the socket server.
>
> For secure connnections Node.js provides the `tls` module that allows you to implement secure TLS socket servers
> and the clients.

- *Understanding Network Sockets*
> Network sockets are endpoints of communications that flow across a computer network. 
> Sockets live below the HTTP layer and provide the point-to-point communciation between servers.
> Virtually all Internet communication is based on Internet sockets that flow data between two points on the Internet.

> A socket works using a socket address, which is a combination of IP address and port.
> There are two types of points in a socket connection: a server, which *listens* for connections, and a
> client, which *opens* a connection to the server.
> Both the server and the client requires a unique IP address-and-port combination.

> The Node.js `net` module sockets communicate by sending **raw data** using Transmission Control Protocol (TCP).
> This protocol is responsible for packaging data and guaranteeing that it is sent from point to point successfully.
> Node.js sockets implement `Duplex` stream, which allows you to read and write streamed data between the server
> and client.

> Sockets are the underlying structure for the `http` module. If you do not need the functionality for handling
> web request like GET and POST and you just need to stream data from point to point, then using sockets gives
> you a lighter-weight solution and a bit more control.

> Sockets are extremely handy when communicating with other processes running on the same computer.
> Process cannot share memory directly, so if you want to access data in one process from another process,
> you can open up the same socket in each process and read and write data between two process via `Duplex` stream.
	
- *Understanding TCP Server and the Socket Objects*
> To begin using the `net` module in Node.js application, you first need to understand the TCP `Server` and `Socket`
> objects. These objects the framework for starting TCP server to handle requests and implementing TCP socket clients
> to make requests to the socket servers.
>
> Once you understand the events, properties, methods, and behavior of the objects, it will be simple to implement 
> your own TCP socket servers and clients.

> The following sections cover the purposes and behaviors of the `net.Socket` and `.net.Server` objects. You'll learn 
> about their most important events, properties, and methods.

- **The net.Socket Object**
> `Socket` objects are created on both the socket server and the socket client and allow data to be written and read 
> back and forth between them.
> The `Socket` object implements the `Duplex` stream, so it provides all the functionality that `Writable` and 
> `Readable` streams provide.
>
> For example, you can use the `write()` method to stream writes of data to server or client, and a `data` event
> handler to stream data from the server or client.

> *On the socket client*, the `Socket` object is created internally when you call `net.connect()` or `net.createConnection()`.
> This object is intended to represent the socket connection to the server.
>
> You use the `Socket` object to monitor the connection, send data to the server, and handle the response from the server.
>
> There is no explicit client object in the Node.js `net` module because the `Socket` object acts as the full client,
> allowing you to send/receive data and terminate (close) the connection.

> *On the socket server*, the `Socket` object is created when a client connects to the server and is passed to the connection
> event handler.
> This object is intended to represent the socket connection to the client.
>
> On the server, you use the `Socket` object to monitor the client connection as well as send and receive data to and from
> the client.

> To create a `Socket` object, you use one of the following methods:
```
net.connect(options, [connectionListener])
net.createConnetion(options, [connectionListener])

net.connect(port, [host], [connectionListener])
net.createConnection(port, [host], [connectionListner])

net.connect(path, [connectionListener]);
net.createConnection(path, [connectionListener]
```
> All the calls return `Socket` object; the only difference is the first parameter they accept.
> The final parameter for all of them is a callback function that is executed when a connection
> is opened to the server
>
> Notice that each method, there is a `net.connect()` form and a `net.createConnection()`. These work
> exactly same way.
>
> The first way to create as `Socket` is to pass `options` parameter, which is an object that contains
> properties that define the socket connection.
>
> The second method accepts `port` and `host` values, specified as direct parameters.
>
> The third method specifices a file system loacation that is a Unix socket to use when creating the 
> `Socket` object.

> *Options that can be specified when creating a `Socket` object*
> - `port` The port number the client should connect to. This option is required.
> - `host` The domain name or IP address of the server that the client should connect.
> - `localAddress` The local IP address the client should bind to for network connections.
> - `allowHalfOpen` A Boolean that, when true, indicates that the socket, won't automatically
> send a FIN packet when the other end of the socket sends a FIN packet, thus allowing half of the `Duplex stream to remain open. Defaults to false.

> *Events that can be triggered on a `Socket` object*
- `connect`

> *Methods that can be called on on `Socket` object*
- `setEncoding([encoding])

> *Properties that can be accessed on creating a `Socket` object*
- `bufferSize


- **The net.Server Object**
> You use the `net.Server` object to create a TCP socket server and begun listening for connections to which you will be 
> able to red and write data.
>
> The `Server` object is created internally when you call `net.createServer(). This object is to represent the socket
> server and handles listening for connections and then sending and receiving data on those connections.

> When the server receives a connection, the server creates a `Socket` object and passes it to any connection event
> handlers that are listening.
>
> Because the `Socket` object implements a `Duplex` stream, you can use the `write()` methode to stream writes data 
> back to the client and a `data` event handler to stream data from the client.

> To create a `Server` object, you used the `net.createServer() method:
```
net.createServer[options], [connectionListener])
```
> The `options` parameter is an object that specifies options to use when creating the socket `Server` object.
>
> The second parameter is the `connection` event callback function, which is executed when a connection is received.
> This `connectionListener` call function is passed the `Socket` object for the connection client.

> *Options that can be specified when creating a `net.Server` objects*
> - `allowHalfOpen` A Boolean that, when true, indicates that the socket, won't automatically
> send a FIN packet when the other end of the socket sends a FIN packet, thus allowing half of the `Duplex stream to remain open. Defaults to false.

> Once the `Server` object is created, if provides several events that are triggered during the life cycle of the server.
> For example, the `connection` event is trigger when the socket client connects, and `close` event is trigger when the server
> shuts down.
>
> As you implement your socket server, you can register callbacks to be executed when these events are triggered to handle
> connections, errors and shutdown.

> *Events that can be triggered on a `net.Server` objects*
> - `listening` Emitted when the server begins listening on a port by calling the `listen()` method. The call function does not accept any parameters.
>
> - `connection` Emitted whe a connection is received from a socket client. The callback function muse accept a prrameter that is a `Socket` object representing the connection to the connecting client. For example: `function(client) {}`
>
> - `close` Emitted when the server closes either normally or on error. This event is not emitted undil all client connections have ended.
>
> - `error` Emitted when an error occurs. The `close` event also triggered on errors.

> The `Server` object also includes several methods that allow you to do things like read from and write to the socket as well as pause or end data flow.  Many of these are inherited from `Duplex` stream objects. 

> *Methods that can be called on `net.Server` objects*
> - `listen(port, [host], [backlog], [callback])`	
> - `listen(port, [path], [callback])`
> - `listen(port, handle, [callback])`
> - `getConnections(callback)`
> - `close(callback)`
> - `address()`
> - `unref`
> - `ref`

> *Properties that can be accessed on `net.Socket` objects*
> `maxConnections` allows t set the maximum numbers of connectons that the server accepts before rejecting them

 
- *Implementing TCP Socket Severs and Clients*
  - Implement a TCP Socket Client
  - Implement a TCP Socket Server
  
- *Implementing TLS Servers and Clients*
  - Creating a TLS Socket Client
  - Creating a TLS Socket Server
  	
- *Summary*
> Sockets are extremely useful when you're implementing backend services in Node.js
> applications. 
> They allow a service on one system to communicate with a service on another system
> through an IP address and port.
> They also provide the ability to implement IPC (inter-process communication) 
> between two processes running on the same server.
> The `net` module allow you to create net.Server objects act as socket servers and 
> net.Socket object act as socket clients.

> Because the net.Socket object extends **Duplex** streams, you can read and write data
> from both the server and the client.
> For secure connections, Node.js provides `tls` module, which allows you to implement
> secure TLS socket servers and clients.

- *Up Next*
> You will get a chance to implement multiprocessing in a Node.js environment. This
> allows you to farm out work to other process on the system and take advantages
> of multiprocessor servers.

