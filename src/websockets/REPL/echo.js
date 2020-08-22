// File: echo.js
// Date: 8/22/2020
// Note: Building an Echo Server using official WebSocket API
//..............................................................................
console.log("Mounting echo.js...\n");

var websocket = require("./websocket-example");

websocket.listen(9999, "localhost", function(conn) {
	console.log("connection opened");
	conn.on("data", function(opcode, data) {
		console.log("message: ", data);
		conn.send(data);
	});
	conn.on("close", function(code, reason) {
		console.log("connection closed: ", code, reason);
	});
});

// eof