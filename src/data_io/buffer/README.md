### Using the Buffer Module to Buffer Data

> While JavaScript may be extremely Unicode friendly, it is not very good at managing binary data. 
>
> However the binary data is exremely useful when implementing some web application and services, 
> such as:
  - Transferring compressed files
  - Generating dynamic images
  - Sending serialized binary data
  
#### Understanding Buffer Data
> Buffered data is made up of a series of octets (8-bits) in big-endian or little-endian format.
> That means they take up considerable less space than text data.
> Therefore, Node.js provides the *Buffer* module which allows to create, read, write and
> manipulate data in a buffer structure. 
> The buffer module is global, so you do not need to use require() function to access it.

> Buffered data is stored in a structure similar to that an array, but it is stored outside the
> normal V8 heap in raw memory allocations - RAM. Therefore, a buffer cannot be resized.

> When converting buffers to and from strings, you need to specify the explicit enconding - 
> **Character Encodings** to be used. 

> Method of encoding between strings and binary buffers:
- utf8 `Multi-byte encoded Unicode characters; the standar in most documents and webpages.`
-	utf16le  `Little-endian encoded Unicode characters of 2 or 4 bytes.`
-	ucs2 `Little-endian encoded Unicode characters of 2 or 4 bytes.`
-	base64 `Base-64 string encoding.`
-	Hex `Each byte encoded as two hexadecimal characters.`

*Big Endian and Little Endian*
> Binary data in buffers is stored as a series of octects or a sequences of eight 0s
> and 1s that can be a hexadecimal value of 0x00 to 0xFF.
>
> It can be read as a single byte or as word conaining multiple bytes.
>
> *Endian* defines the ordering of significant bits when defining the word.
> Big endian stores the least significant word first, and little endian stores
> the least significant word last.
>
> For example, 0x0A 0x0B 0x9C 0x0D would store in buffer as [0x0A, 0x0B, 0x9C, 0x0D]
> in bit endian but as [0x0D, 0x0C, 0x9B, 0x0D] in little endian.

#### Creating Buffers
#### Writing to Buffers
#### Reading from Buffers
#### Determining Buffer Length
#### Copying Buffers
#### Slicing Buffers
#### Concatenating Buffers

