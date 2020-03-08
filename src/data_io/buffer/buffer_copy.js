// File: buffer_copy.js
// Note: Various ways to copy data form on Buffer objec to another
// Date: 03/01/2020
//..............................................................................
console.log("Mounting buffer_read.js...");

/* Buffer() is deprecated due to security and usability issues. Use the 
 * Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
 */
var alphabet = new Buffer.from('abcdefghijklmnopqrstuvwxyz');
console.log(alphabet.toString());

// ___ copy full buffer ___
var blank = new Buffer.alloc(26);
blank.fill();
console.log("Blank: " + blank.toString());

alphabet.copy(blank);
console.log("Blank: " + blank.toString());

// ___ copy part of buffer ___
var dashes = new Buffer.alloc(26);
dashes.fill('-');
console.log("Dashes: " + dashes.toString());
alphabet.copy(dashes, 10, 10, 15);

// ___ copy to and from direct indexes of buffers ___
var dots = new Buffer.from('--------------------------');
dots.fill();
for (var i = 0; i < dots.length; i++) {
	if (i % 2) { dots[i] = alphabet[i]; }
}
console.log("Dots: " + dots.toString());

/* eof */

