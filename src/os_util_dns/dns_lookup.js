// File: dns_lookup.js
// Note:
// Date:
//.............................................................................. 
console.info('Mounting dns_lookup.js...\n');

var dns = require('dns');

console.log('Retrieving www.cnn.com...');

dns.resolve('www.cnn.com', function(err, addresses) {
  console.log('IPV6 addresses' + JSON.stringify(addresses, false, ' '));
  addresses.forEach(function(addr) {
    dns.reverse(addr, function(err, domains) {
      console.log('Reverse for ' + addr + ': ' + JSON.stringify(domains));
    });
  });
});

// eof
