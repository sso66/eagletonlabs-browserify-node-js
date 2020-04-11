// File: stream_filed.js
// Note: Implementing File I/O vs Stream I/O
// Date: 04/11/2020
//..............................................................................
console.log("Mounting stream_filed.js...");

var fs = require('fs');

// fs.readFile('default.json', function(err, data) {
    // if (err) {
        // return console.log(err);
    // }
    // console.log('default JSON file is loaded:\n' + data);
// });

// var stream = fs.createReadStream('default.json');
// 
// stream.on('data', function(data) {
    // console.log('Loaded part of the file \n' + data);
// });
// 
// stream.on('end', function() {
    // console.log('Load complete');
// });
// 
// stream.on('error', function(err) {
    // console.log('Load error: ' + err);
// });

var request = require('request');
var stream = request('http://i.imgur.com/dmetFjf.jpg');

var writeStream = fs.createWriteStream('default.jpg');
var writeStreamZip = fs.createWriteStream('default.gz');

stream.on('data', function(data) {
    console.log('Loaded part of the file \n' + data);
    writeStream.write(data);
});
stream.on('end', function() {
    console.log('Load complete');
    writeStream.end();
});

stream.on('error', function(err) {
    console.log('Load error: ' + err);
    writeStream.close();
});

var gzip = require('zlib').createGzip();
stream.pipe(gzip).pipe(writeStreamZip);

// eof
