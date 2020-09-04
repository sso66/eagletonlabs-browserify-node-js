## http_https: Implementing HTTP Services in Node.js

**Purpose**
> One of the most important aspects of Node.js is the ability to implement HTTP and HTTPS server and services quickly.

**Reason**
> Node.js provides the `http` and `https` modues out of the box, and they give you a basic framework to do just about anything you might need to do from an HTTP and HTTPS standpoint.
>
> In fact, it is not difficult to implement a full webserver using just the `http` module. However, the `http` module is pretty low level.
>
> You will likely to use different module to handle routing, cookies, caching, etc. Explore `express` module to see the  advantages of this module provides.
>
> What you will more likely be using the `http` module for is implementing backend web services for your applications.

**Impact**
> This is where the `http` module is an invaluable tool in your arsenal.
>
> You can create basic HTTP **servers** that provide and interface for communications behind your firewall, and then create basic HTTP **clients** that interact with those services, for example, WebSocket: `ws`, TCP: `net`, UDP: `dgram` and IP: `ip`  modules.
>
> Focus on the Objects you use when implementing *clients* and *servers* using `http` module.

### Implementing HTTP Services in Node.js 

- *Processing URLs: 'url' npm*
  - Understanding URL Object
  - Resolving the URL Components
	
- *Processing Query Strings and Form Parameters: 'querystring' npm*

- *Understanding Request, Response, and Server Objects*
  > To use the `http` module in Node.js applications, you first need to understand the request and response objects. They provide the 
  > information and much of the functionality that comes into and out of HTTP clients and servers.
  >
  > Once you see the makeup of these **objects** - including the **properties**, **methods** and **events** they provide - it will be simple to implement your own HTTP servers and clients.
  
  - The http.ClientRequest Object 
  - The http.ServerResponse Object
  - The http.IncomingMessage Object
  - The HTTP Server Object
	
- *Implementing HTTP Clients and HTTP Servers in Node.js*
	> Now that you understand the http.ClientRequest, http.ServerResponse, and http.IncomingMessage object, you are ready to jump in and implement some
	> Node.js HTTP clients and the servers.
	>
	> Follow the guidelines through the process of implementing basic HTTP clients and servers in Node.js.
	>
	> You implement a client and server in each section to see how the two interacts.
	>
	> These sections are extremely basic to make it easy for you to grasp the concepts of starting the client/server and then handling the different types of request and responses.
	>
	> Notice there are no error handling, no protection against attack, and not much other functionality. However, they provide a variety of basic flow and structure required to handle HTTP request using `http` module.
	
  - Serving Static Files
  - Implementing GET Servers
  - Implementing POST Servers
  - Interacting with External Sources

- Implementing HTTPS Servers and Clients
  - Creating a HTTPS Client
  - Creating a HTTPS Server

- Summary
> An important aspects of Node.js is the ability to implement HTTP and HTTPS servers and the services quickly.

> The `http` and `https` modules provide everything you need to implement webserver basics. For your full webserver, you are still going to want to use a more extended library, such  as `express`. 

> However, the `http` and `https` modules work well for some basics web services and are super simple to implement.

> Here it covers enough HTTP basics to give you a good start on implementing your own services. You also got a chance to seed how to use the `url` and `querystring` modules to parse URLs and query strings into object and back.

- Up Next
> You'll get a chance to go a little bit deeper and learn about the 'net` module. You will also learn how to implement your own socket services, using TCP clients and servers.

