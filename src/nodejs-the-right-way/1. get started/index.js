// index.js
// Node.js Application

var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, { 'Content-Type': 'text/plain' }); 
  //response.writeHead(200, { 'Content-Type': 'text/html' });
  //response.writeHead(200, { 'Content-Type': 'application/json' });
  
  //response.end('Hello World!');
  response.end( '{ "hello": "Hello World!" }');
}).listen(8081);


console.log('Mounting web-static-server at: http://127.0.0.1:8081'); 
