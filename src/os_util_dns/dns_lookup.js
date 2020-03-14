// File: dns_lookup.js
// Note: Perform lookups and reverse lookups on domain names and IP addresses
// Date: 03/07/2020
//.............................................................................. 
console.info('Mounting dns_lookup.js...\n');

var dns = require('dns');

console.log('Retrieving www.carlingtech.org...');
dns.resolve4('www.carlingtech.com', function(err, addresses) {
    console.log('IPv4 addresses' + JSON.stringify(addresses, false, ' '));
    addresses.forEach(function(addr) {
        dns.reverse(addr, function(err, domains) {
            console.log('Reverse lookup for ' + addr + ': ' + JSON.stringify(domains));
        });
    });
});

// eof
