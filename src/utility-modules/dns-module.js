const dns = require('dns');

dns.lookup('www.google.com', onLookup = (error, address, family) => {
    console.log('address', address);
    dns.reverse(address, (error, hostnames) => {
        if (error) {
            console.log(error.stack);
        }

        console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
    });
});

// eof
