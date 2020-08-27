// File: echo-server.js
// Date: 8/24/2020
// Note: Building Echo server with WebSocket, WebSocket API, WebSocket Protocol
//..............................................................................
console.log("Mounting echo-server.js...\n");

var websocket = require("./websocket-example");

websocket.listen(9999, "localhost", function(connection) {
	console.log("Connection opened!");

	connection.on("data", function(opcode, dataEvent) {
		console.log("message: ", dataEvent);
		conn.send(dataEvent);
	});

	connection.on("close", function() {
		console.log("connection closed: ");
	});
});
// eof