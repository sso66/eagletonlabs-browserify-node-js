## data_io: Handling Data I/O in Node.js
**Purpose**
> Most active web applications and services have a lot of data flowing through them - in the form
> of text, JSON Strings, binary buffer buffers and data streams.

**Reason**
> Therefore, Node.js has lot of mechanisms built into it to support handline the data  I/O from 
> system to system.
>
> It is important to understand the mechanisms that Node.js provides to implement  effective and 
> efficient web applications and services.
>
> Focus on manipulating JSON data, managint binary data structure - byte arrray, and implementing
> readable and writable streams and data compression / decompression.
> 
> Learn how to leverage the Node.js functionality to work with different I/O requirements.

- Working with JSON
	- Converting JSON to JavaScript Objects
	- Converting JavaScript Objects to JSON
	
- Using the Buffer Module to Buffer Data
	- Understainding Buffered Data
    - Creating Buffers
	- Writing to Buffers
	- Reading from Buffers
	- Determing Buffer Length
	- Copying Buffers
	- Slicing Buffers
	- Concatenating Buffers

- Using the Stream Module to Stream Data
	- Readable Streams
	- Writable Streams
	- Duplex Streams
	- Transform Streams
	- Installing Node Packaged Modules
	- Piping Readable and Writable Streams
	
- Compressing and Decompressing Data with Zlib
	- Compressing and Decompressing Buffers
	- Compressing/Decompressing Streams

- Summary
> At the heart of most intense web applications and services is a lot of data streaming from 
> one system to another.
> You have learned how to use functionality build into Node.js to work with JSON data, manipulated
> binary buffer data and utilize data streams.
> Also had a chance to play around with compression in compressing buffered data as well as 
> running data streams through compression/decompressions.

> Note to file
> - Persistent data denotes information that is infrequently accessed and not likely to be modified. 
> - The opposite of this is dynamic data (also known as transactional data) where information 
>   is asynchronously changed as further updates to the information become available.
 
- Up Next
> You will see how to interact with file-system from Node.js. You will read/write files, create
> directories, and read file system information.

