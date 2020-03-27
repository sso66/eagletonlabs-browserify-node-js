// File: buffer_concat.js
// Note: Concatenating binary buffer objects
// Date: 03/27/2020
//..............................................................................
console.log("Mounting buffer_concat.js...");

/*
 * You can concatenate two or more Buffer objects together to form a new 
 * buffer.
 * 
 * The concat(list, [totalLength]) method accepts an array of Buffer objects 
 * as first parameter and totalLength, defining the maximum bytes in the 
 * buffer, as optional second argument.
 * 
 * The Buffer objects are concatenated in the order in which the appear in 
 * the list, and a new Buffer object is returned, containing the contents of 
 * the original buffers up to totalLength bytes.
 * 
 * If you do not provide a totalLength parameter, concat() figures out the total
 * length for you. However, it has to iterate thorugh the list, so providing a 
 * totalLength value is a bit faster.
 * 
 */
var af = new Buffer.from("African Swallow?");
var eu = new Buffer.from("European Swallow?");
var question = new Buffer.from("Air Speed Velocity of an ");

console.log(Buffer.concat([question, af]).toString());
console.log(Buffer.concat([question, eu]).toString());

// eof

// output
// Mounting buffer_concat.js...
// Air Speed Velocity of an African Swallow?
// Air Speed Velocity of an European Swallow?

