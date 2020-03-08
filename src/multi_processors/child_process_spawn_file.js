// File: child_process_spawn_file.js
// Note: Spawning a command in another process
// Date:
//..............................................................................
console.log( "Mounting child_process_spawn_file.js..." );

var spawn = require('child_process').spawn;
var options = {
	env: { user: 'stephen' },
	detached: false,
	stdin: ['pipe', 'pipe', 'pipe']
};
var child = spawn('netstat', ['-e']);
child.stdout.on('data', function(data) {
   console.log(data.toString()); 
});
child.on('exit', function(code) {
    console.log('Child exited with code', code);
});

// eof