// utility.js
// Supporting Code: Aspect Oriented Programming
console.info('OS Module:');
var os = require('os');

console.log('endianness: ' + os.endianness());
console.log('type: ' + os.type());
console.log('platform: ' + os.platform());
console.log('total memory: ' + os.totalmem() + 'bytes');
console.log('free memory: ' + os.freemem() + 'bytes');


console.info('\nPATH Module:');
var path = require('path');

console.log('normalizatiion: ' + path.normalize('./nodes-tutorial'));
console.log('resolve: ' + path.resolve('utility.js'));
console.log('ext name: ' + path.extname('utility.js'));

console.info('\nDNS Module:');
var dns = require('dns');
dns.lookup('www.un.org', function onLookup(err, address, family) {
  console.log('address:', address);
  dns.reverse(address, function(err, hostnames) {
    if (err) {
      console.log(err.stack);
    }
    console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
  });
});

console.info('\nDomain Module:');
var domain = require('domain');
var child = domain.create();

var byopEventEventEmitter = require('events').EventEmitter;

var emitter1 = new byopEventEventEmitter();

var domain1 = domain.create();

domain1.on('error', function(err) {
  console.log("domain1 handled this error (" + err.message + ")");
});

// Explict binding
domain1.add(emitter1);

emitter1.on('error', function(err) {
   console.log("listener handled this error (" + err.message + ")");
});

emitter1.emit('error', new Error('To be handled by listener'));

emitter1.removeAllListeners('error');

emitter1.emit('error', new Error('To be handled by domain1'));

var domain2 = domain.create();

domain2.on('error', function(err) {
  console.log("domain2 handled this error(" + err.message + ")");
});

// Implicit Binding
domain2.run(function() {
  var emitter2 = new byopEventEventEmitter();
  emitter2.emit('error', new Error('To be handled by domain2'));
});

domain1.remove(emitter1);

emitter1.emit('error', new Error('Converted to exception. System will crash!'));

// eof