// File: process_info.js
// Note: Access information about a process and system using process module
// Date: 03/06/2020
//..............................................................................
console.log( "Mounting process_info.js...\n" );

var util = require('util');
console.log('Current Working Directory: ' + process.cwd());
// console.log('Environment Settings: ' + JSON.stringify(process.env));
console.log('Node Args: ' + process.argv);
console.log('Execution Path: ' + process.execPath);
console.log('Execution Args: ' + JSON.stringify(process.execArgv));
console.log('Node Version: ' + process.version);
console.log('Module Versions: ' + JSON.stringify(process.versions));
// console.log('Process Config: ' + process.config);
console.log('Process Title: ' + process.title);
console.log('Process Platform: ' + process.platform);
console.log('Process Architecture: ' + process.arch);
console.log('Memory Usage: ' + util.inspect(process.memoryUsage()));
console.log('Process Title: ' + process.title);
const start = process.hrtime();
setTimeout(function() {
    const delta = process.hrtime(start);
    console.log('High-Resolution timer took %d seconds and %d nanoseconts', delta[0], + delta[1]);    
    console.log('Node has been running %d seconds', process.uptime());
});

// eof

