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
> sockets and WebSockets.
#### Network socket
> A network socket or simply socket serves as an internal endpoint for exchanging data
> between single-threaded Node.js applications running on the same computer or on
> different computers on the same network.



