// File: how-node-applicaions-work.js: 
// Date: 9/5/2020
// Note: Event Emitters -> Events -> Event Loop -> Event Handlers
//..............................................................................
console.info('Mounting callback-concept.js...How Node Applications Work??\n');

const fs = require('fs');

fs.readFile('how-node-applications-work.txt', (error, data) => {
    if (error) return console.error(error);
    console.log(data.toString());
});

console.log('Program Ended\n');

// eof
