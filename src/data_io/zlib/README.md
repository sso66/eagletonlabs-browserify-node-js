## Compressing and Decompressing Data with Zlib
> When working with large systems or moving large amounts of data around, it is extremely helpful to be able to 
> compress/decompress the data.
>
> Node.js provides an excellent library in the `zlib` module that allows yout to compress and decompress buffers
> very easily and efficiently.

> You need to keep in mide that compressing data takes CPU cycles, so you should be certain of the benefits of
> compressing data before you incur the compression/decompression cost.
>
> `zlib` supports compression methods:
> - **gzip/gunzip:** Standard *gzip* ompression.
> -** deflate/inflate:** Standard deflate compression algorithm, based on Huffman coding.
> -**deflateRaw/inflateRaw:** Deflate compression algorithm on new buffer.

  - Compressing and Decompressing Buffers
  - Compressing and Decompressing Streams
  
