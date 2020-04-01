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
> sockets (`net`) and WebSockets (`websocket`).
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



