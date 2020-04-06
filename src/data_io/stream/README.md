## Using the Stream Module to Stream Data
> An important module in Node.js is the `Stream` module. Data streams are 
> memory structures that are readable, writable or both. Streams are 
> used all over in Node.js, when accessing files, when reading data from
> HTTP (Websocket) requests, and in several areas.
>
> The purpose of streams is to provide a common mechanism to transfer data
> from one location to another. They also expose events such as `data` when
> data is available to be read, `error` when error occurs, and so forth so
> that you can register listeners (handlers) to handle the data when it 
> becomes availabile in a stream or is ready to be written to.
>
> Streams are commonly used for HTTP data and files. You can open a file as
> readable stream or access the data from HTTP (Websocket) requests as 
> readable stream and read bytes out of as needed.
>
> In addition, you can create your own custom streams. Follow up on the 
> process of creating and using streams such as:
  - `Readable` Streams
  > `Readable` streams are designed to provide a mechanism to easily read data coming into and application,
  > from another source. Common readable streams are:
   >  - `http` responses on the client
   >  - `http` request on the server
   >  - `fs` read streams
   >  - `zlib` streams
   >  - `crypto` streams
   >  - TCP `net` sockets
   >  - UDP `dgram` sockets
   >  - Child processes `stdout` and `stderr`
   >  - `process.stdin `
   >  - `websocket` streams
   
   > `Readable` streams provide the read([size]) method to read data, where size specifies the number of bytes
   > to read from the stream.read can return a String object, Buffer object or null.
   
   > `Readable` streams also expose the following events:
   >    - **readable**: Emitted when a chunck of data can be read from the stream.
   >    - **data**: Similar to **readable**, except that when data event handler are attatched, the stream is turned 
          into flowing mode, and the data handler is called continuously until all data has be drained.
  - Writable, 
  - Duplex
  - Transform
