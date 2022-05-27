## Using the `Stream` Module to Stream Data

**Reason**
> An important module in Node.js is the `Stream` module. 
>
> Data streams are memory structures that are readable, writable or both. 
>
> Streams are used all over in Node.js, when accessing files, when reading data from HTTP (Websocket) requests, and in several areas.
>
> This section covers using the `Stream` module to create streams as well as to read and write data from them.

**Purpose**
> The purpose of streams is to provide a common mechanism to transfer data from one location to another. 
>
> They also expose events such as `data` when data is available to be read, `error` when error occurs, and so forth so that you can register listeners to handle the data when it becomes availabile in a stream or is ready to be written to.
>
> Streams are commonly used for HTTP data and files. You can open a file as readable stream or access the data from HTTP (Websocket) requests as readable stream and read bytes out of as needed.
>
> In addition, you can create your own custom streams. Follow up on the process of creating and using streams such as:
  - `Readable` streams
  > They are designed to provide a mechanism to easily read data coming into and application from another source. 
  > Common readable streams are:
   >  - `http` responses on the client
   >  - `http` request on the server
   >  - `fs` read streams
   >  - `zlib` streams
   >  - `crypto` streams
   >  - `net` TCP sockets
   >  - `dgram` UDP sockets
   >  - Child processes `stdout` and `stderr`
   >  - `process.stdin`
   >  - `websocket` streams
   
   > `Readable` streams provide the `read([size])` method to read data, where size specifies the number of bytes to read from the `stream.read` can return a String object, Buffer object or null.
   
   > `Readable` streams also expose the following events:
   >    - `readable` Emitted when a chunck of data can be read from the stream.
   >
   >    - `data` Similar to `readable`, except that when data event handlers are attatched, the stream is turned into flowing mode, and the data handler is called continuously until all data has be drained.
   >
   >    - `end` Emitted by the stream when data will no longer be provided.
   >  
   >    - `close` Emitted when the underlying resources, such as files, has been closed.
   >
   >    - `error` Emitted when an error occurs in receiving data.
   
   > **Methods available on `Readable` stream objects**
   >
   >  - `read[size])` Reads data from the stream. The data can be a String, Buffer or null (null means there is no more data left). If the size argument is read, then the data is limited to that number of bytes.
   >
   >  - `setEncoding(encoding)` Sets the encoding to use when returning String in the `read()` request.
   >
   >  - `pause()` Pauses data events from being emitted by the object.
   >
   >  - `resume()` Resumes data events being emitted by the object.
   
   >  - `pipe(destination, [options])` Pipes the ouput of this stream into `Writable` stream object specified by `destination.options` is a JavaScript object. For example, `{ end: true }` ends the `Writable` destination when 'Readable` ends.
   >
   >  - `unpipe([destination])` Disconnects this object from the `Writable` destination.  
          
  - `Writable` Streams
   > `Writable` streams are designed to provide a mechanism to easily write data into a form that can easily be consumed in another area of code. Common writable streams are:
   >  - `http` request on the client
   >  - `http` response on the server
   >  - `fs` write streams
   >  - `zlib` streams
   >  - `crypto` streams
   >  - `net` TCP sockets
   >  - `dgram` UDP sockets
   >  - Child process `stdin` 
   >  - `process.stdout` and `process.stderr`
   >  - `websocket` streams
   
 > `Writable` streams provide the` write(chunk, [encoding], [callback])` method to write data into the stream, where chunk contains the data to write; `encoding` specifies the string encoding, if necessary; and `callback` specifies a callback function to executed when the data has been full flush.
 >
 > The `write()` function returns true if the data was written successfully. 
 > `Writable` streams also exposes the following events:
   >    - `drain` After `write()` call returns false, emitted to notify listeners when it is okay to begin writing more data.
   >
   >    - `finish` Emitted when `end()` is called on the `Writable` object, all data is flushed, and no more data will be accepted.
   >
   >    - `pipe` Emitted when the `pipe()` method is called on a `Readable` stream to add this `Writable` as a destination.
   >  
   >    - `unpipe` Emitted when the `unpipe()` method is called on a `Readable` stream to remove this `Writable` as destination.
   
   > **Methods available on `Writable` stream objects**
   >
   >  - `write(chunk, [encoding], [callback)` Writes the data `chunk` to the stream object's data location. The data can be String or Buffer. If the `encoding` is specified, then it is used to encode string data. If the `callback` is specified, then it is called after the data has been flushed.
   >
   >  - `end([chunk], [encoding], [callback])` Same as `write()` expect it puts the `Writable` into a state where it no longer accepts data and sends the finished event.
    
  - `Duplex` Streams
  > A `Duplex` stream is a stream that combines `Readable` and `Writable` functionality. A good example of `Duplex` stream is a TCP socket connection. You can read and write from the socket connection after it has been created.
     
  - `Transform` Streams
  > A `Transform` stream extends `Duplex` but modifies the data between the `Writable` stream and the `Readable`. This stream can be extremely useful when you need to modify data from one system to another. Some examples of `Transform streams:
  >   - `zlib` streams
  >   - `cyrpto` streams
  >
  > A major differences between `Duplex` and the `Transform` streams is that for `Transform` streams, you do not need to implement the **_read()** and **_write** prototype methods. These are provided as pass-through functions.
  >
  > Instead, you implement the **_transform(chunk, encoding, callback)** and  `flush(callback)` methods. The **_transform()** method should accept data from `write()` request, modify it and push out the modified data.
  >
  - Piping `Readable` Streams and `Writable` Streams
  > One of the coolest things you can do with stream objects is chain `Readable` streams to `Writable` streams by using `pipe(writableStream, [options])` function.
  >
  > This does exactly what the name implies: It puts the output of `Readable` stream directly into the `Writable` stream.
  >
  > The options parameter accepts and object with the `end` property set to true or false. When `end` is true, the `Writable` stream ends. This is default behavior. For example:
  >
  >   `readStream.pipe(writableStream, {end: true})`
  >
  > You can break the pipe programmatically by using `unpipe(destinationStream)` option. Re: stream_piped.js
