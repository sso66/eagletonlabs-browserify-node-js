// File: echo.js
// Note: Building an Echo Server Using Your New Server API
// Date: 04/14/2020
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