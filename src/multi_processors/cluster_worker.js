// File: cluster_info.js
// Note: A worker process implementing an HTTP server
// Date: 03/07/2020
//..............................................................................
console.log( "Mounting cluster_server.js..." );

var cluster = require('cluster');
var http = require('http');
if (cluster.isWorker) {
    http.Server(function(req, res) {
       res.writeHead(200);
       res.end("Process " + process.id + "says hello");
       process.send("Process " + process.pid + " handled request"); 
    }).listen(8080, function() {
        console.log("Child Server Running on Process " + process.id);
    });
}

// eof
