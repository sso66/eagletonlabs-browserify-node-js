## websockets: Implementing WebSockets in Node.js
#### Purpose:
> Sending a message and getting an instance response without refreshing the page is
> something we take for granted. But in the past, enabling real-time functionality was 
> a real challenge for developer. 
>
#### Reason:
> The developer community has come a long from HTTP long polling and AJAX (Asyncyronous
> JavaScript And XML - eXtensible Markup Language) and has finally found a solution for
> building truly real-time applications in Node.js.
>
> This solution comes in the form of WebSockets, which make it possible to open an 
> interactive session between a user's browser and a server. 
>
> Websockets allow a browser to send messages to a server and receives event-driven
> responses with having to poll the server for a reply
#### Impact:
> For now, WebSockets are teh number one solution for building real-time applications: 
> online games, instant messagers, tracking apps, and so on. This guide explains how
> WebSockets operate and shows how we can build WebSocket application in Node.js.

### Network sockets vs WebSockets
> Getting started with WebSockets in Node.js, let's draw the line between network 
> sockets - npm `net` and WebSockets - npm (`websocket`).
#### Network socket
> A network socket or simply socket serves as an internal endpoint for exchanging data
> between single-threaded Node.js applications running on the same computer or on
> different computers on the same network.

> Sockets are a key part of Unix and Windows-based operating systems, and they make it
> easier for developers to create network-enable software. Instead of constructiong
> from scratch, app developers can include sockets in their programs. Since network 
> sockets are used for a number of different network protocols (HTTP, FTP, Telnet
> etc.), several sockets can be used simultaneously.

> Sockets are created and used with a set function calls, which are sometimes referred
> to as socket's application programming interface (API). Due to function calls, 
> socket can be opened just like regular files.

> There are several types of network sockets:
- **Datagram Sockets** also known as connection-oriented sockets, use the User Datagram
  Prototol (UDP) - npm `dgram`.
- **Stream sockets** also know as connection-oriented sockets, use the Tramission Control
  Protocoo (TCP) - npm 'net', Stream Control Transmission Protocol (SCTP), Datagram
  Congestion Control Protocol (DCCP). Thise sockets provide a bidirectional, reliable,
  sequenced, and unduplicated flow of data with no record boundaries.
- **Raw socket** (or raw **IP sockets**) are typically available in routers and other 
  networking equipment (e.g. IPG100 device). These sockets are nomally datagram-oriented,
  although the exacted characteristics depend on the interface provided by the protocol.
  Raw sockets are not use by most applications. They're provided *to support the* 
  *development of the new protocols* and *to provide access to more esoteric facilities*
  *of existing protocols.* 

##### Socket communications
> First, let's figure out how to ensure that every socket is unique. If they're not, you 
> can't establish a reliable communication channel
>
> Giving every `process` a unique PID helps to deal with the problem locally. But such
> an approach doesn't work over network.
>
> To create a unique within a given network, and the protocol and port are unique among
> we recommed using the TCP/IP - `ip` protocol. With the TCP/IP, the IP addresses of the
> network layer are unique within a given network, and the protocol and port are unique
> among host Node.js applications.

> TCP and UDP are two major protocols for communicating between hosts. Explore how your
> Node.js application connect to TCP and UDP sockets.



