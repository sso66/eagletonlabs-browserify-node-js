// File: echo.js
// Date: 8/22/2020
// Note: Building Echo server using official WebSocket and WebSocket API
//..............................................................................
console.log("Mounting echo.js...\n");

var websocket = require("./websocket-example");

websocket.listen(9999, "localhost", function(conn) {
	console.log("connection opened");

	conn.on("data", function(opcode, dataEvent) {
		console.log("message: ", dataEvent);
		conn.send(dataEvent);
	});
	conn.on("close", function(code, reason) {
		console.log("connection closed: ", code, reason);
	});
});

// eof