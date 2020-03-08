// http_client_url.js

var http = require('http');
/*
http.createServer(function(req, res) {
	res.writeHead(200);
	res.write("Hello, this is dog.");
	res.end();
}).listen(8080, '127.0.0.1');

console.log('Listening on port 8080 ...');
console.log('Server running at http://127.0.0.1:8080');

// Understanding the URL Object
var url = require('url');
var urlStr = 'http://user:pass@host.com:80/resource/path?query=string#hash';
var urlObj = url.parse(urlStr, true, false);

console.log(url.format(urlObj));

// Resolving the URL Components
var urlNew = '/another/path?querynew';
console.log(url.resolve(urlStr, urlNew));

// Processing Query Stings, and Form Parameters
// querystring.parse(str, [sep], [options]);
var qs = require('querystring');
var params = qs.parse('name=Brad&color=red&color=blue');
var sep = ['*', '#'];
var eq = ['==', '==='];

console.log('params: ' + qs.stringify(params, sep, eq));
*/
// Implementing ClientRequest object
var options = {
  hostname: 'localhost',
  path: '/',
  port: 8080,
  method: 'POST',
};

var req = http.request(options, function(response) {
  var str = '';
  response.on('data', function(chunk) {
    str += chunk;
  });
  response.on('end', function() {
    console.log(str);
  });
});
req.end();

// eof