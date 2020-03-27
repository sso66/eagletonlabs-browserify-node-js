// File: buffer_copy.js
// Note: Copying data from on Buffer object to another
// Date: 03/27/2020
//..............................................................................
console.log("Mounting buffer_copy.js...");

/* 
 * An important part of working with buffers is the ability to copy data from
 * one buffer to another buffer.
 * 
 * Node.js provides the 
 * copy(targetBuffer, [targetStart], [sourceStart], [sourceIndex]) function
 * for Buffer objects. The targetBuffer parameter is another Buffer object, 
 * and targetStart, sourceStart, sourceEnd are indexes inside the source and 
 * target buffers.
 * 
 * Note:
 * To copy string data from one buffer to another, make sure that both buffers
 * use the same encoding, or you may get unexpected results when decoding the
 * resulting buffer.
 * 
 * You can also copy data from one buffer to the other by indexing them 
 * directly.
 * 
 * Buffer() is deprecated due to security and usability issues. Use the 
 * Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
 * 
 */
var alphabet = new Buffer.from('abcdefghijklmnopqrstuvwxyz');
console.log(alphabet.toString());

// ___ copy full buffer ___
var blank = new Buffer.alloc(26);
blank.fill();
console.log("Blank: " + blank.toString());

alphabet.copy(blank);
console.log("Blank: " + blank.toString());

// ___ copy part (the middle 5 bytes) of buffer ___
var dashes = new Buffer.alloc(26);
dashes.fill('-');
console.log("Dashes: " + dashes.toString());
alphabet.copy(dashes, 10, 10, 15);

// ___ copy to and from direct indexes of buffers ___
var dots = new Buffer.from('--------------------------');
dots.fill();
/*
 * iterate through the source buffer and copies only
 * every other byte in the buffer
 */
for (var i = 0; i < dots.length; i++) {
	if (i % 2) { dots[i] = alphabet[i]; }
}
console.log("Dots: " + dots.toString());

// eof 

// outputq
// Mounting buffer_read.js...
// abcdefghijklmnopqrstuvwxyz
// Blank:
// Blank: abcdefghijklmnopqrstuvwxyz
// Dashes: --------------------------
// Dots:  b d f h j l n p r t v x z

