// File: zlib_file.js
// Note: Compressing/Decompressing file data streams
// Date: 03/01/2020
//..............................................................................
console.log("Mounting zlib_file.js...");

var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');
var inFile = fs.createReadStream('zlib_file.js');
var outFile = fs.createWriteStream('zlib_file.gz');

inFile.pipe(gzip).pipe(outFile);

setTimeout(function() {
	var gunzip = zlib.createUnzip( {flush: zlib.Z_FULL_FLUSH });
    	
    /* A .tar.gz file is always a simple archive of files, very much like a
     * standard WinZip file. In the general UNIX world, a .tgz file is
     * actually the same as a .tar.gz file. You can freely switch the
     * extensions of these two without affecting the uncompression of the
     * file.
     */
	var inFile = fs.createReadStream('zlib_file.gz');
	var outFile = fs.createWriteStream('zlib_file.unzipped');
	inFile.pipe(gunzip).pipe(outFile);
}, 3000);

// eof

