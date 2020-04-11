## Compressing and Decompressing Data with Zlib
> When working with large systems or moving large amounts of data around, it is extremely helpful to be able to compress/decompress the data.
>
> Node.js provides an excellent library in the `zlib` module that allows yout to compress and decompress buffers very easily and efficiently.

> You need to keep in mide that compressing data takes CPU cycles, so you should be certain of the benefits of compressing data before you incur the compression/decompression cost.
>
> `zlib` supports compression methods:
> - **gzip/gunzip:** Standard *gzip* ompression.
> - **deflate/inflate:** Standard deflate compression algorithm, based on Huffman coding.
> - **deflateRaw/inflateRaw:** Deflate compression algorithm on new buffer.

  - Compressing and Decompressing Buffers
  > The `zlib` module provides several helper functions that make it easy to compress/decompress data buffers.
  >
  > The all use the same basic format function(buffer, callback), where function is the compression/decompression method, buffer is the buffer to be compressed/decompressed, and callback is the callback function that is executed after the compression/decompression occurs. Re: zlib_buffers.js
  
  - Compressing and Decompressing Streams
  > Compression/Decompression *streams* using `zlib` is slightly different from compressing/decompressing *buffers*.
  >
  > Instead, you use the pipe() function to pipe the data from one stream through the compression/decompression object inot another stream. This can apply to compressing `Readable` streams into `Writable` streams.
  >
  > The good example of doing this is compressing the contents of a file by using `fs.Readstream` and  `fs.WriteSteam. Re: zlib_file.js`
  
