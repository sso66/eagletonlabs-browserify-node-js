// File: buffer_write.js
// Note: Writing to binary buffers
// Date: 03/01/2020
//..............................................................................
console.log("Mounting buffer_write.js...");

/* Buffer() is deprecated due to security and usability issues. Use the 
 * Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
 */
buf256 = new Buffer.alloc(256);
buf256.fill(0);
buf256.write("add some text");
console.log(buf256.toString());

buf256.write("more text", 9, 9);
console.log(buf256.toString());
buf256[18] = 43;
console.log(buf256.toString());

// eof

