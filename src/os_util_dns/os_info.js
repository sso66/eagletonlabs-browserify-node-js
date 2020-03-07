// File: os_info.js
// Note: Calling methods on the os module
// Date: 03/07/2020
//..............................................................................
console.log( "Mounting os_info.js..." );

var os = require('os');

console.log("tmpdir :\t" + os.tmpdir());
console.log("endianness :\t" + os.endianness());
console.log("hostname :\t" + os.hostname());
console.log("type :\t\t" + os.type());
console.log("platform :\t" + os.platform());
console.log("arch :\t\t" + os.arch());
console.log("release :\t" + os.release());
console.log("uptime  :\t" + os.uptime());
console.log("loadavg :\t" + os.loadavg());
console.log("totalmem :\t" + os.totalmem());
console.log("EOL :\t" + os.EOL);
console.log("cpus :\t\t" + JSON.stringify(os.cpus()));
console.log("networkInterfaces :\t" + JSON.stringify(os.networkInterfaces()));

// eof

