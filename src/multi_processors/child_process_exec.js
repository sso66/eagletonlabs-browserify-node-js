// File: child_process_exec.js
// Note: Executing a system command in another process
// Date: 03/07/2020
//..............................................................................
console.log( "Mounting child_exec.js..." );

var childProcess = require('child_process');
var options = { maxBuffer: 100*1024, encoding: 'utf8', timeout: 5000 };
var child = childProcess.exec('dir /D', options, function(error, stdout, stderr) {   
    if (error) {
        console.log(error.stack);
        console.log('Error Code: ' + error.code);
        console.log('Error Signal: ' + error.signal);
    }
    console.log('Results: \n' + stdout);
    if (stderr.length) {
        console.log('Errors: ' + stderr);
    }
});
child.on('exit', function(code) {
    console.log('Child complete with code: ' +code);
});

// eof
