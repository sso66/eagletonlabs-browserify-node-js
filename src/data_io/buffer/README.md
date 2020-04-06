### Using the Buffer Module to Buffer Data

> While JavaScript may be extremely Unicode friendly it is not ver good at managing binary data. 
> However the binary data is exremely useful when implementing some web application and services, 
> such as:
  - Transferring compressed files
  - Generating dynamic images
  - Sending serialized binary data
  
#### Understanding Buffer Data
> Buffered data is made up of a series of octects (8-bits) in big-endian or little-endian format.
> That means they take up considerable less space than text data.
> Therefore, Node.js provides the *Buffer* module which allows to create, read, write and
> manipulate data in a buffer structure. 
> The buffer module is global, so you don not need to use require() function to access it.

> Buffered data is stored in a structure simalr to that an array, but it it store outside the
> normal V8 heap in raw memory allocations - RAM. Therefore, a buffer cannot be resized.

> When converting buffers to and from strings, you need to specify the explicit enconding - 
> **Character Encoding** to be used. string <->number<->binary

> Method of encoding between strings and binary buffers:
>	- utf8
>	- utf16le
>	- ucs2
>	- base64
>	- hex

*Big Endian and Little Endian*
> Binary data in buffers is stored as a series of octects or a sequences of eight 0s
> and 1s that can be a hexadecimal value 0x00 to 0xFF.
>
> It can be read as a single byte or as word conaining multiple bytes.
>
> *Endian* defines the ordering of significant bits when defining the word.
> Big endian stores the least significant word first, and little endian stores
> the least significant workd last.
>
> For example, 0x0A 0x0B 0x9C 0x0D would store in buffer as [0x0A, 0x0B, 0x9C, 0x0D]
> in bit endian but as [0x0D, 0x0C, 0x9B, 0x0D] in little endian.

#### Creating Buffers
#### Writing to Buffers
#### Reading from Buffers
#### Determining Buffer Length
#### Copying Buffers
#### Slicing Buffers
#### Contatenating Buffers

