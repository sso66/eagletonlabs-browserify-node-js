// File: buffer_length.js
// Note: Determining the Buffer Length
// Date: 03/26/2020
//..............................................................................
console.log("Mounting buffer_length.js...");
/*
 * A common taks when dealing with buffers is determining the length, 
 * especially when you create a buffer dynamically from a string.
 * 
 * You can detertime the length of a buffer by calling .length on the Buffer
 * object.
 * 
 * To determine the byte length of the string will take up in a buffer, you 
 * cannot use the .length property. Instead, you need to use the
 * Buffer.byteLength(string, [encoding]).
 * 
 * It is important to note that there is a difference between the string 
 * length and byte length of a buffer.
 * 
 */
console.log("UTF8 text \u00b6".length);
// evaluate to 11

console.log(Buffer.byteLength("UTF8 text \u00b6", 'utf8'));
// evaluate to 12

console.log(Buffer.from("UTF8 text \u00b6").length);
// evaluate to 12

/*
 * Notice that the same evaluate to 11, but because it contains a double-byte
 * character, the byteLength is 12.
 * 
 * Also note that Butter.from("UTF8 text \u00bc6").length evaluates to 12 also. 
 * This is because .length on buffer returns the byte length.
 * 
 */

// eof


// output
// Mounting buffer_check.js...
// 11
// 12
// 12

 
