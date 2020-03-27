## Using the Stream Module to Stream Data
> An important module in Node.js is the Stream module. Data streams are 
> memory structures that are readable, writable or both. Streams are 
> used all over in Node.js, when accessing files, when reading data from
> HTTP (Websocket) requests, and in several areas.
>
> The purpose of streams is to provide a common mechanism to transfer data
> from one location to another. They also expose events such as 'data' when
> data is available to be read, 'error' when error occurs, and so forth so
> that you can register listeners (handlers) to handle the data when it 
> becomes availabile in a stream or is readyy to be written to.
>
> Steams are commonly used for HTTP data and files. You can open a file as
> readable stream or access the data from HTTP (Websocket) requests as 
> readable stream and read bytes out of as needed.
>
> In addition, you can create your own custom streams. Follwo up on the 
> process of creating and using streams such as:
  - Readable, 
  - Writable, 
  - Duplex
  - Transform

