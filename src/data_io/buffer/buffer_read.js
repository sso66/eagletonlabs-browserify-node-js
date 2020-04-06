// File: buffer_write.js
// Note: Reading from B uffers
// Date: 04/05/2020
//..............................................................................
console.log("Mounting buffer_read.js...");
/* 
 * There are several methods for reading buffers. The simplest is to use the
 * toString() method to convert all or part of a buffer to string. However, you
 * can also access specific indexes in the buffer directly or by using read(). 
 * 
 * Also, Node.js provides a StringDecoder object that has a write(buffer) 
 * method that decodes and writes buffered data using specified encoding.
 *
 * Methods of reading to Buffer objects:
 * ----------------------------------------------------
 * buffer.toString(string, [encoding], [start], [end])
 * stringDecoder.write(buffer)
 * buffer[offset]
 *
 * buffer.readInt8(offset, [noAssert])
 * buffer.readInt16LE(offset, [noAssert])
 * buffer.readInt16BE(offset, [noAssert])
 * 
 * The following code illustrates reading from Node.js Buffer object:
 * 
 */
// defines a buffer with UTF8 with encoded character data
bufUTF8 = new Buffer.from("Some UTF8 Text \u00b6 \u30c6 \u20ac", 'utf8');

// and then uses toString() without parameters to read all buffer
console.log(bufUTF8.toString());

// and then with the encoding, start, and end part of the buffer
console.log(bufUTF8.toString('utf8', 5, 9));

// creates StringDecoder with UTF8 coding 
var StringDecoder = require('string_decoder').StringDecoder;

// and uses it to write the content of the buffer out to the console log
var decoder = new StringDecoder('utf8');
console.log(decoder.write(bufUTF8));

// next, a direct access method gets the value of the octet at index 18
console.log(bufUTF8[18].toString(16));

// and then readUInt32BE reads the 32-bit integer
console.log(bufUTF8.readUInt32BE(18).toString(16));

// eof

// output
// Mounting buffer_read.js...
// Some UTF8 Text ¶ テテ €
// UTF8
// Some UTF8 Text ¶ テテ €
// e3
// e3838620

