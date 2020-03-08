// File: cluster_client.js
// Note: An HTTP client sending a series of requests to test the server
// Date: 03/07/2020
//..............................................................................
console.log( "Mounting cluster_client.js..." );

var http = require('http');
var options = { port: '8080' };
function sendRequest() {
    http.request(options, function(response) {
        var serverData = '';
        response.on('data', function(chunk) {
            serverData += chunk;
        });
        response.on('end', function() {
            console.log(serverData);
        });
    }).end();
}
for (var i = 0; i < 5; i++) {
    console.log("Sending Request");
    sendRequest();
}

// eof
