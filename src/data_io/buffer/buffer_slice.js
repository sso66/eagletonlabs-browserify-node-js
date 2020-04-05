// File: buffer_slice.js
// Note: Creating and manipulating slices of a Buffer object
// Date: 03/27/2020
//..............................................................................
console.log("Mounting buffer_slice.js...");
/* 
 * Another important aspects of working with buffers is the ability to divide
 * them into slices (chunks). 
 * 
 * A slice (chunk) is a section of a buffer between starting index and an 
 * ending index. 
 * 
 * Slicing a buffer allows you to manipulate a specific chunk.
 * 
 * Buffer() is deprecated due to security and usability issues. Use the 
 * Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
 * 
 */
var numbers = new Buffer.from("123456789");
console.log(numbers.toString());

var slice = numbers.slice(3, 6);
console.log(slice.toString());
/*
 * The important thing to note is that when the slice is altered, it also
 * alters the original buffer.
 * 
 */
slice[0] = '#'.charCodeAt(0);
slice[slice.length-1] = '#'.charCodeAt(0);
console.log(slice.toString());
console.log(numbers.toString());

// eof

// output
// Mounting buffer_slice.js...
// 123456789
// 456
// #5#
// 123#5#789

