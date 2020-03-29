// http_client_url.js

var http = require('http');

// Implementing ClientRequest object
var options = {
  hostname: 'localhost',
  path: '/',
  port: 8080,
  method: 'POST',
};

var request = http.request(options, function(response) {
  var str = '';
  response.on('data', function(chunk) {
    str += chunk;
  });
  response.on('end', function() {
    console.log(str);
  });
});
request.end();

// eof