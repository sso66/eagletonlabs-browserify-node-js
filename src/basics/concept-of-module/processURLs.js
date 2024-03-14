// File: processURLs.js
// Date: 9/4/2020
// Note: Implementing HTTP Service in Node.js

console.log('Mounting processURLs.js...\n');
// Signature: metadata
// url.parse(urlStr, [parseQueryString], [slashesDenoteHost]);
// url.format(ursObject);
// url.resolve(from, to);

const url = require('url');
const baseUrl = 'http://user:password@host.com:80/resource/path?query=string#hash';

const urlObj = url.parse(baseUrl, false, true);
const urlStr = url.format(urlObj);

console.log("\n___ Understanding the URL Object ___")
console.log('urlObj:');
console.log(`
    href: ${urlObj.href}
    protocol: ${urlObj.protocol} 
    host: ${urlObj.host} 
    auth: ${urlObj.auth} 
    hostname: ${urlObj.hostname}
    port: ${urlObj.port}
    pathname: ${urlObj.pathname}
    search: ${urlObj.search} 
    path: ${urlObj.path}
    query: ${urlObj.query}
    hash: ${urlObj.hash}
`);
console.log('urlStr: ' + urlStr);

console.log("\n___ Resolving the URL Componnts ___")
const targetUrl = '/another/path?querynew';
console.log('urlRsv: ' + url.resolve(baseUrl, targetUrl + '\n'));

// Signature: data
// qs.parse(str, [sep], [eq], [options]);
// qs.stringify(obj, [sep], [eq]);
console.log("\n___ Processing Query String and Form Parameters ___");

const qs = require('querystring');
const params = qs.parse("name=Brad&color=red&color=blue");

console.log('qsObj: name: ' + params.name + ', [' + params.color + ']');
console.log('qsStr: ' + qs.stringify(params));

// eof
