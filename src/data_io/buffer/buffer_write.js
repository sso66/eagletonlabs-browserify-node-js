// File: buffer_write.js
// Note: Writing to binary buffers
// Date: 03/26/2020
//..............................................................................
console.log("Mounting buffer_write.js...");

/* 
 * You cannot extend the size of a buffer object after been created, by you can
 * write data to any location in buffer.
 *
 * Buffer() is deprecated due to security and usability issues. Use the 
 * Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
 */
// defines a buffer
buf256 = new Buffer.alloc(256);

// fills it with zeros
buf256.fill(0);

// writes some text at the begining
buf256.write("add some text");
console.log(buf256.toString());

// adds some additional text that alters port of the exting buffer via
// write(string, offset, length) to the middle of the buffer
buf256.write("more text", 9, 9);
console.log(buf256.toString());

// adds a + to by directly the value of an index - changes a single byte
buf256[18] = 43;
console.log(buf256.toString());

// eof


// output
// Mounting buffer_write.js...
// add some text
// add some more text
// add some more text+

