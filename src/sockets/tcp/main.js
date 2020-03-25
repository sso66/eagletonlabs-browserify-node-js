// File: main.js
// Note: Implementing full basic TCP socket main process
// Date: 03/22/2020
//..............................................................................
console.info('Mounting TCP socket main process...');

var client = require('./socket_client');

var Dwarves = client.getConnection("Dwarves");
var Elves = client.getConnection("Elves");
var Hobbits = client.getConnection("Hobbits");

client.writeData(Dwarves, "More Axes");
client.writeData(Elves, "More Arrows");
client.writeData(Hobbits, "More Pipes Weed");

// eof
