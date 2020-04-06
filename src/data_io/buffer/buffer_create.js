// File: buffer_write.js
// Note: Creating Buffers
// Date: 04/04/2020
//..............................................................................
console.log("Mounting buffer_create.js...");
/*
 * Buffer objects are actually raw memory allocations. Therefore, you must
 * determine their size when you create them.
 * 
 * Buffer() is deprecated due to security and usability issues. Use the 
 * Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead
 * of new Buffer() constructor to create Buffer objects in Node.js.
 * 
 */
// define buffer using a byte size
var buf256 = Buffer.alloc(265);
// define an octet buffer
var bufOctets = Buffer.from([0x6f, 0x63, 0x74, 0x65, 0x74, 0x73]);
// define a UTF8 string buffer
var bufUTF8 = Buffer.from("Some UTF8 Text \u00b6 \u30c6 \u020ac", 'utf8');

console.log("buf256: " + buf256.write("buf256"));
console.log("bufOctets: " + bufOctets.toString());
console.log("bufUTF8: " + bufUTF8.toString());

// output
// Mounting buffer_create.js...
// buf256: 6
// bufOctets: octets
// bufUTF8: Some UTF8 Text ¶ テテ Ȋc
