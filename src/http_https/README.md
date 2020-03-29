## http_https: Implementing HTTP Services in Node.js

**Reason**
> One of the most important aspects of Node.js is the ability to 
> implement HTTP and HTTPS server and services quickly.

**Purpose**
> Node.js provides the `http` and `https` modues out of the box,
> and they give you a basic framework to do just about anything
> you might need to do from an HTTP and HTTPS standpoint.
>
> In fact, it is not difficult to implement a full webserver using
> just the `http` module. However, the `http` module is pretty 
> low level.
>
> You will likely to use different module to handle routing, 
> cookies, caching, etc. Explore `express` module to see the 
> advantages of this module provides.
>
> What you will more likely be using the `http` module for is 
> implementing backend web services for your applications.

**Impact**
> This is where the `http` module is an invaluable tool in your
> arsenal.
>
> You can create basic HTTP *servers* that provide and interface 
> for communications behind your firewall, and then create basic
> HTTP ***clients*** that interact with those services, for example,
> `websocket`, TCP `net`, UDP `dgram` and `ip` modules.
>
> Focus on the objects you use when implementing *clients* and
> *servers* using `http` module.

### Implementing HTTP Services in Node.js 

- Processing URLs
  - Understanding URL Object
  - Resolving the URL Components
	
- Processing Query Strings and Form Parameters

- Understanding Request, Response, and Server Objects
  - The http.Client.Request Object
  - The http.Server.Response Object
  - The http.IncomingMessage Object
  - The HTTP Server Object
	
- Implementing HTTP Clients and Servers in Node.js
  - Serving Static Files
  - Implementing GET Servers
  - Implementing POST Servers
  - Interacting with External Sources

- Implementing HTTPS Servers and Clients
  - Creating a HTTPS Client
  - Creating a HTTPS Server

- Summary


