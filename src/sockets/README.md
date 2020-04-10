## sockets: Implementing Socket Services in Node.js

**Purpose:**
> An important part of backend services is the ability to communicate over sockets. 
>
> Sockets allow one process to communicate with another process through and IP address and port. 
>
> This can be useful when you're implementing interprocess communication (IPC) for two different processes running on the same server or accessing a service running on a completely different server.

**Reason:**
> Node.js provides the `net` module which allows you to create both a socket server and clients that can connect to the socket server.
>
> For secure connnections Node.js provides the `tls` module that allows you to implement secure TLS socket servers and the clients.

- *Understanding Network Sockets*
> Network sockets are endpoints of communications that flow across a computer network.
>
> Sockets live below the HTTP layer and provide the point-to-point communciation between servers.
>
> Virtually all Internet communication is based on Internet sockets that flow data between two points on the Internet.

> A socket works using a socket address, which is a combination of IP address and port.
>
> There are two types of points in a socket connection: a server, which *listens* for connections, and a client, which *opens* a connection to the server.
>
> Both the server and the client requires a unique IP address-and-port combination.

> The Node.js `net` module sockets communicate by sending **raw data** using Transmission Control Protocol (TCP).
>
> This protocol is responsible for packaging data and guaranteeing that it is sent from point to point successfully.
>
> Node.js sockets implement `Duplex` stream, which allows you to read and write streamed data between the server and client.

> Sockets are the underlying structure for the `http` module. 
>
> If you do not need the functionality for handling web request like GET and POST and you just need to stream data from
> point to point, then using sockets gives you a lighter-weight solution and a bit more control.

> Sockets are extremely handy when communicating with other processes running on the same computer.
> Process cannot share memory directly, so if you want to access data in one process from another process,
> you can open up the same socket in each process and read and write data between two process via `Duplex` stream.
	
- *Understanding TCP Server and the Socket Objects*
> To begin using the `net` module in Node.js application, you first need to understand the TCP `Server` and `Socket` objects. 
>
> These objects provide the framework for starting TCP server to handle requests and implementing TCP socket clients to make requests to the socket servers.
>
> Once you understand the **events**, **methods**, **properties** and **behavior** of the objects, it will be simple to implement your own TCP socket servers and clients.

> The following sections cover the purposes and behaviors of the `net.Socket` and `.net.Server` objects. You'll learn  about their most important **events**, **methods** and **properties**.

### The net.Socket Object
> `Socket` objects are created on both the socket server and the socket client and allow data to be written and read back and forth between them.
>
> The `Socket` object implements the `Duplex` stream, so it provides all the functionality that `Writable` and `Readable` streams provide.
>
> For example, you can use the `write()` method to stream writes of data to server or client, and a `data` event handler to stream data from the server or client.

> *On the socket client*, the `Socket` object is created internally when you call `net.connect()` or `net.createConnection()`.
>
> This object is intended to represent the socket connection to the server.
>
> You use the `Socket` object to monitor the connection, send data to the server, and handle the response from the server.
>
> There is no explicit client object in the Node.js `net` module because the `Socket` object acts as the full client, allowing you to send/receive data and terminate (close) the connection.

> *On the socket server*, the `Socket` object is created when a client connects to the server and is passed to the connection event handler.
>
> This object is intended to represent the socket connection to the client.
>
> On the server, you use the `Socket` object to monitor the client connection as well as send and receive data to and from the client.

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
>
> The final parameter for all of them is a callback function that is executed when a connection is opened to the server
>
> Notice that each method, there is a `net.connect()` form and a `net.createConnection()`. These work exactly same way.
>
> The first way to create as `Socket` is to pass `options` parameter, which is an object that contains properties that define the socket connection.
>
> The second method accepts `port` and `host` values, specified as direct parameters.
>
> The third method specifices a file system location that is a Unix socket to use when creating the `Socket` object.

__Options__ that can be specified when creating a `Socket` object
> - `port` The port number the client should connect to. This option is required.
>
> - `host` The domain name or IP address of the server that the client should connect.
>
> - `localAddress` The local IP address the client should bind to for network connections.
>
> - `allowHalfOpen` A Boolean that, when true, indicates that the socket, won't automatically send a FIN packet when the other end of the socket sends a FIN packet, thus allowing half of the `Duplex stream to remain open. Defaults to false.
>
__Events__ that can be triggered on a `Socket` object
> - `connect` Emitted when a connection is successfully established with the server. The callback function does not accept any parameters.
>
> - `data` Emitted when data is received on the socket. If no data event handler is attached, data can be lost. The callback function must accept a parameter that is a `Buffer` object containing the chunk of data that was read from the socket. For example: 
`function(chunk) {}`
>
> - `end` Emitted when server terminates the connection by sending a FIN. The callback function does not accept any parameters.
>
> - `timeout` Emitted when the connection to the server times out due to inactivity.
>
> - `drain` Emitted when write buffer becomes empty. You can use this event to throttle back the data stream being written to the socket.
The callback function does not accept any parameters.
>
> - `error` Emitted when an error occurs on the socket connection. The callback function should accept `error` as the only argument.
For example: `function(error) {}`
>
> - `close` Emitted when the socket has fully closed either because it was closed by `end()` method or because an error occurred. The
callback function does not accept any parameters.

> The `Socket` object also includes several methods that allow you to do things like read from and write to the socket as welss as pause or end data flow.
>
> Many of these are inherited from the `Duplex` stream objects. 

__Methods__ that can be called on on `Socket` object
> - `setEncoding([encoding])` When this function is called, data returned for the socket's streams is an encoded `String` instead of
`Buffer` object. Sets the default encoding that should be used when writing data to and reading from the steams. Using this option handles multibyte characters that might otherwise be mangled when converting a buffer to a string using `buf.toString(encoding). If you want to read the data as strings, always use this method.
>
> - `write(data, [encoding], [callback])` Writes a data buffer or string to the `Writable` stream of the socket, using the encoding if specified. The callback function is executed as soon as the data is written.
>
> - `end([data], [encoding])` Writes a data buffer or string to the `Writable` stream of the socket and then flushes the stream and closes the connection.
>
> - `destroy()` Forces the socket connection to shut down. You should only need to use thie in case of failures.
>
> - `pause()` Pauses the `Readable` stream of a socket from emitting daa events. This allows you to throttle back the upload of data to the stream.
>
> - `resume()` Resumes the data event emitting on the `Readable` steam of the socket.
>
> - `setTimeout(timeout, [callback])` Specifies a `timeout`, in milliseconds, that the server will wait before emitting a timeout event when the socket is inactie. The `callback` function is triggered as a `once` event listener. If you want the connection to be terminated on timeout, you should do it manuall in the callback function.
>
> - `setNoDelay([noDelay])` Disables/enables the Nagle algorithm, which buffers data before sending it. Setting to false disable data buffering.
>
> - `setKeepAlive([enable], [initialDelay])` Enables/disables/ the keep-alive functionality on the connection. The optional `initialDelay` parameter specifies the time, in milliseconds, that the socket is idel before sending the keep-alive packet.
>
> - `address()` Returns the bound address, the address family name, and the port of the socket, as reported by the operating system. The return value is an object that contains the `port`, `family`, and `address` properties. For example
{port: 8107, family: 'IPv4', address: '127.0.0.1' }
>
> - `unref()` Allows the Nodes.js application to terminate if this socket is the only event on the event queue.
>
> - `ref()` Re-references a socket so that if this socket is the only thing on the event queue, the Node.js application does not terminate.

__Properties__ that can be accessed on creating a `Socket` object
> - `bufferSize` The number of bytes currently buffered and waiting to be written to the socket's stream.
>
> - `removeAddress` The IP address of the remote server that the socket is connected to.
>
> - `removePort` The port of the remote server that the socket is connected to.
>
> - `localAddress` The local IP addess the remote client is using for the socket connection.
>
> - `locakPort` The local port the remote client is using for the socket connection.
>
> - `byteRead` The number of bytes read by the socket.
>
> - `bytesWritten` The number of bytes written by the socket.

### The net.Server Object
> You use the `net.Server` object to create a TCP socket server and begun listening for connections to which you will be 
> able to red and write data.
>
> The `Server` object is created internally when you call `net.createServer()`. 
>
> This object is to represent the socket server and handles listening for connections and then sending and receiving data on those connections.

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
>
> This `connectionListener` call function is passed the `Socket` object for the connection client.

__Options__ that can be specified when creating a `net.Server` objects
> - `allowHalfOpen` A Boolean that, when true, indicates that the socket, won't automatically send a FIN packet when the other end of the socket sends a FIN packet, thus allowing half of the `Duplex stream to remain open. Defaults to false.
>
> Once the `Server` object is created, if provides several events that are triggered during the life cycle of the server. For example, the `connection` event is trigger when the socket client connects, and `close` event is trigger when the server shuts down.
>
> As you implement your socket server, you can register callbacks to be executed when these events are triggered to handle connections, errors and shutdown.

__Events__ that can be triggered on a `net.Server` objects
> - `listening` Emitted when the server begins listening on a port by calling the `listen()` method.
> The call function does not accept any parameters. `connection` Emitted whe a connection is received from a socket client. 
> The callback function muse accept a prrameter that is a `Socket` object representing the connection to the connecting client. 
> For example: `function(client) {}`
>
> - `close` Emitted when the server closes either normally or on error. This event is not emitted undil all client connections have ended.
>
> - `error` Emitted when an error occurs. The `close` event also triggered on errors.

> The `Server` object also includes several methods that allow you to do things like read from and write to the socket as well as pause or end data flow.  Many of these are inherited from `Duplex` stream objects. 

__Methods__ that can be called on `net.Server` objects
> - `listen(port, [host], [backlog], [callback])` Opens a port on server and begins listening for connections.
> `port` specifies the listening port. If you specify 0 as the `port` a random port number is selected.  `host` is the IP address to
> listen on; if it is omitted, the server accepts connections directed to any IPv4 addess. `backlog` specifies the maximum numbers of
> pending connections the server allows. The default is 511. The `callback` function is called when the server has opened the port and
> begin listening.

> - `listen(port, [path], [callback])` Same as above except that a Unix socket server is started, to listen for connections on the file
> system `path` specified.

> - `listen(port, handle, [callback])` Same as above except that a handle to a `Server` or `Socket` object has an underlying `_handle`
> member points to a file descriptor handle on the server. It assumes that the file descriptor points to as socket file that has already
> bound to a port.

> - `getConnections(callback)` Returns the number of connections currently connected to the server. `callback` is executed when the
> number of connections is caculated and accepts an `error` parameter and a `count` parameter. For example `function(error, count)`

> - `close(callback)` Stops the server form accepting new connections. Current connections are allowed to remain until they are
> complete. The server does not truly stop until all current connections have been closed.

> - `address()` Returns the bound address, the address family name, and the port of the socket, as reported by the operating system.
> The return value is an object that contains the `port`, `family`, and `address` properties. For example
> { port: 8107, family: `IPv4`, address: `127.0.0.1` }

> - `unref` Calling this method allows the Node.js application to terminate if this server is the only event on the event queue.

> - `ref` References this socket so that if this server is the only thing on event queue, the Node.js application does not terminate.

> The `Server` object also provides the `maxConnections` attribute, which allows you to set the maximum number of connections that the
> server accepts before rejecting them. If the process has been forked to a child for processing using `child_process.fork()`, you 
> should not use this option.

__Properties__ that can be accessed on `net.Socket` objects
> - `maxConnections` allows t set the maximum numbers of connectons that the server accepts before rejecting them
 
- *Implementing TCP Socket Severs and Clients*
> Now that you understand the `net.Server` and the `net.Socket` objects, you are ready to jump in and implement some Node.js TCP clients and servers. 
>
> This guides you through the process of implement basic TCP cients and servers in Node.js.
>
> The examples in the following are extremely basic, to make is easy for you to grasp the concepts of starting TCP server listening on a port and then implimiting clients that can connedc. The examples are designed to help you set the interactions (TMC) and event handling (EHC) that need to be implemented.

- Implement a TCP Socket Client
 > At the most basic level, implementing a TCP socket client involes creating a net.Socket object that connects to the server and then writing data to the server and handling the data that comes back. In addition you should build  the socket so that it can handle errors, the buffer being full, and timeouts.
 > 
 > Steps involved in implementing a socket client using the net.Socket object:

  > The first step is to create the **socket client** by calling `net.connect()`, as shown below. Pass in the `port` and `host` that you want to connect to as well and implement a `callback` function to handle the connect event:
>
```
  net.connect({port: 8107, host: 'localhost', function() {
        // handle connection
  });
```
> Then inside the callback, you set up the connection behavior. For example, you might want to add a timeout or set encoding as shown   below:
```
this.setTimeout(500);
this.setEncoding('utf8')
  ```
> You also need to add handlers for the `data`, `end`, `error`, `timeout`, and `close` events that you want to handle. For example, to handle the `data` event, so that you read data coming back from the server, you might want to add the handler once the connection has been established:
```
  this.on('data', function(data) {
      console.log("Read form server: ' + data.toString());
      // process data
      this.end();
  });
  ```
> To write data to the server, you implement `write()` command (event->command->service). If you are writing a lot of data to thw server and the write fails, you might also want to implement a `drain` event handler to begin writing again when the buffer is empty.
>
> The following shows and example of implement a `drain` handler because of a write failure. Notice that a **closure** is used to preserve the values of the socket and data variables once the function has ended.
```
function writeData(socket, data) {
    var success = !socket.write(data)
    if (!success) {
        (function(socket, data) {
     	    socket.once('drain', function() {
	        writeData(socket, data);
            });
	}) (socket, data);
    }
}
```
  - Implement a TCP Socket Server
>  At the most basic level, implementing a TCP server client involves creating a `net.Server` object, listening on a port, and handling incoming connections, including reading and writing data to and from the connections.
> 
> In addition, the socket server should handle the `close` and `error` events on the `net.Server` object, as well as the events occur in the incoming client connection `net.Socket` object.
>
> The steps involved in implementing a socket server using the `net.Server` object as following.

> The first step is to create socket server by calling `net.createServer()`. You also need to provide a connection callback handler and then call listen() to begin listening on the port:
```
var server = net.createServer(function(client) {
    // implement the connection callback handler code here
});
server.listen(8107, function() {
    // implement the listen callback handler code here
});
```
> Inside the `listen` callback handler, you also add handlers to support the `close` and `error` events of the `Server` Object. These may just be log statements, or you might want to add additional code that is executed when these events occur.
```
server.on('close', function() {
    console.log('Server Terminated');
});
server.on('error', function(err) {
});
```
> Inside the 'connection' event callback, you set up the connection behavior.  For example, you might want to add timeout or set the encoding:
```
this.setTimeout(500);
this.encoding('utf8');
```
> You also need to add handlers for the `data`,`end`, `error`, `timeout`, and `close` events that you want to handle on the client connections. For example, to handle the `data` event so that you can read data coming from the client, you might add the following handler `once` the connection has been established.
```
this.on('data', function(data) {
    console.log("Received from client: " + data.toString());
    // process data
});
```
>
> To write data to the server, you implement a `write()` command somewhere in your code. If you are writing a lot of data, you may also want to implement a `drain` event handler that will begin writing when the buffer is empty. This can help if `write()` returns failure because the buffer is full or if you want to throttle back writing to the socket.
> 
> The following is an example of implementing a `drain` handler because of the write failure. Notice that a **closure** is used to preserve the values of the socket and data variables once the function has ended:
```
function writeData(socket, data) {
    var success = !success.write(data);
    if (!success) {
        (function(socket, data) {
	    socket.once('drain', function() {
	        writeData(socket, data);
	    });
        }) (socket, data)	
    }
}
```

- *Implementing TLS Servers and Clients*
  - Creating a TLS Socket Client
  - Creating a TLS Socket Server
  	
- *Summary*
> Sockets are extremely useful when you're implementing backend services in Node.js applications. 
> They allow a service on one system to communicate with a service on another system through an IP address and port.
> They also provide the ability to implement IPC (inter-process communication) between two processes running on the same server.
> The `net` module allow you to create net.Server objects act as socket servers and net.Socket object act as socket clients.

> Because the net.Socket object extends **Duplex** streams, you can read and write data from both the server and the client.
> For secure connections, Node.js provides `tls` module, which allows you to implement secure TLS socket servers and clients.

- *Up Next*
> You will get a chance to implement multiprocessing in a Node.js environment. This allows you to farm out work to other process on the system and take advantages of multiprocessor servers.

