// File: buffer_concat.js
// Note: Concatenating binary buffers
// Date: 03/01/2020
//..............................................................................
console.log("Mounting buffer_concat.js...");

var af = new Buffer.from("African Swallow?");
var eu = new Buffer.from("European Swallow?");
var question = new Buffer.from("Air Speed Velocity of an ");

console.log(Buffer.concat([question, af]).toString());
console.log(Buffer.concat([question, eu]).toString());

// eof
