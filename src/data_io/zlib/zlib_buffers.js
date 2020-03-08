// File: zlib_buffers.js
// Note: Compressing/Decompressing binary buffers
// Date: 03/01/2020
//..............................................................................
console.log("Mounting zlib_buffer.js...");

var zlib = require('zlib');
var input = "............text............";

zlib.deflate(input, function(err, buffer) {
	if (!err) {
		console.log("deflate (%s): ", buffer.length, buffer.toString('base64'));	
		zlib.inflate(buffer, function(err, buffer) {
			if (!err) {
				console.log("unzip inflate (%s): " , buffer.length, buffer.toString());
			}
		});
	
		zlib.unzip(buffer, function(err, buffer) {
			if (!err) {
				console.log("unzip deflate (%s): ", buffer.length, buffer.toString());
			}
		});
	}
});

zlib.deflateRaw(input, function(err, buffer) {
	if (!err) {
		console.log("deflateRaw (%s): ", buffer.length, buffer.toString('base64'));
		zlib.inflateRaw(buffer, function(err, buffer) {
			if (!err) {
				console.log("inflateRaw (%s): ", buffer.length, buffer.toString());
			}
		});
	}	
});

zlib.gzip(input, function(err, buffer) {
	if (!err) {
		console.log("gzip (%s): " , buffer.length, buffer.toString('base64'));	
		zlib.gunzip(buffer, function(err, buffer) {
			if (!err) {
				console.log("unzip gzip (%s): ", buffer.length, buffer.toString());
			}
		});
		zlib.unzip(buffer, function(err, buffer) {
			if (!err) {
				console.log("unzip gzip (%s): ", buffer.length, buffer.toString());
			}
		});
	}
});
/* eof */