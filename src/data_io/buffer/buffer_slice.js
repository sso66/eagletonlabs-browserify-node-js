// File: buffer_slice.js
// Note: Slicing binary buffers
// Date: 03/01/2020
//..............................................................................
console.log("Mounting buffer_read.js...");

/* Buffer() is deprecated due to security and usability issues. Use the 
 * Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
 */
var numbers = new Buffer.from("123456789");
console.log(numbers.toString());

var slice = numbers.slice(3, 6);
console.log(slice.toString());

slice[0] = '#'.charCodeAt(0);
slice[slice.length-1] = '#'.charCodeAt(0);
console.log(slice.toString());
console.log(numbers.toString());

// eof
