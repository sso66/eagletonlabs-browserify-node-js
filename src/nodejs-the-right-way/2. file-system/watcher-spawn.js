// File: watcher-spawn.js
// Note: Spawning a Child Process
// Date: 03/17/2020
//..............................................................................
"use strict";

const 
    fs = require('fs'),
    spawn = require('child_process').spawn,
    filename = process.argv[2];

if (!filename) {
    throw Error("A file to watch must be specified!");
}

fs.watch(filename, function() {
    let ls = spawn('ls', ['-lh', filename]);
    // console.log("File " + filename + " just changed!");
    ls.stdout.pipe(process.stdout);
});

console.log("Now watching " + filename + " for changes...");

// eof
