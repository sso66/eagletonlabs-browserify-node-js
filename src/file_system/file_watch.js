// File: file_watch.js
// Note: Watching for File Changes
// Date: 03/28/2020
//..............................................................................
console.log("Mounting file_watch.js... ");

const fs = require('fs');
/*
 * The fs module provides a useful tool for watching a file and executing a 
 * callback bunciotn when the file changes. This can be useful if you want to
 * trigger event to occurs whin a file is modified but don not want to 
 * continually poll from your applicaton diractly.
 * 
 * Watches do incur some overhead in the underlying operating system, so you
 * should use them sparingly.
 * 
 * To implement a watch on a file use:
 * 
 * fs.watchFile(path, [options], callback)
 * 
 * You can also pass in options whichis an object (meta) that contains 
 * persistent and interval properties.
 * 
 * The persistent property is true if you want the process to continue to run
 * as long as files are being watched.
 * 
 * The interval property specifies the time, in milliseconds, that you want
 * the file to be polled for changes.
 * 
 * When a file change occurs, the callback functon is executed and passed
 * current and previous Stats objects.
 * 
 * The following code snippet monitors a file name config.json every 5 seconds
 * and uses the Stats object to output the current and previous times the file
 * was modified.
 */
const options = { persistent: true, interval: 5000 };
fs.watchFile('./data/config.json', options , function(curr, prev) {
    console.log('./data/config.json modified at: ' + curr.mtime);
    console.log('Previous modification was: ' + prev.mtime);
});

// eof
