const path = require('path');

// Normalize
console.log(`normalize: ${path.normalize('/test/test1//2slashes/1slash/tab/..')}`);

// Join
console.log(`join path: ${path.join('test/', 'test1/', '2slashes/1slash', 'tab', '..')}`);

// Resolve
console.log(`resolve: ${path.resolve('main.js')}`);

// extName
console.log(`ext name: ${path.extname('main.js')}`);

// eof
