const os = require('os');

// Operating System Parameters
console.log(`edianness.....: ${os.endianness}`);
console.log(`type..........: ${os.type()}`);
console.log(`platform......: ${os.platform()}`);
console.log(`total memory..: ${os.totalmem} bytes.`);
console.log(`free memory...: ${os.totalmem} bytes.`);