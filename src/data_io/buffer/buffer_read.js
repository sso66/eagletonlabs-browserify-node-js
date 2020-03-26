// File: buffer_write.js
// Note: Reading from binary buffers
// Date: 03/01/2020
//..............................................................................
console.log("Mounting buffer_read.js...");

/* Buffer() is deprecated due to security and usability issues. Use the 
 * Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
 */
bufUTF8 = new Buffer.from("Some UTF8 Text \u00b6 \u30c6 \u20ac", 'utf8');
console.log(bufUTF8.toString());
console.log(bufUTF8.toString('utf8', 5, 9));

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
console.log(decoder.write(bufUTF8));
console.log(bufUTF8[18].toString(16));
console.log(bufUTF8.readUInt32BE(18).toString(16));

// eof

