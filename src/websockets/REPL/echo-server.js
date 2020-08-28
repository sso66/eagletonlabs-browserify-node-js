// File: echo-server.js
// Date: 8/24/2020
// Note: Building Echo server with WebSocket, WebSocket API, WebSocket Protocol
//..............................................................................
console.log("Mounting echo-server.js...\n");

var websocket = require("./websocket-example");

websocket.listen(9999, "localhost", function(connection) {
	console.log("Connection opened");

	connection.on("open", function(openEvent) {
		console.log("message: ", openEvent.data);
	});

	connection.on("message", function(opcode, messageEvent) {
		console.log("message: ", messageEvent.data);
		conn.send(data);
	});

	connection.on("close", function(closeEvent) {
		console.log("Connection closed: " + closeEvent);
	});

	connection.on("error", function(errorEvent) {
		console.log("Connection error: " + errorEvent);
	});
});
// eof