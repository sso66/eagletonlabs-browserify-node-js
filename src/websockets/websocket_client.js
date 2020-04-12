// File: websocket_client.js
// Note: A simple client and API for W3C Standardized WebSocket Protocol
// Date: 04/12/2020
//..............................................................................
console.log("Mounting websocket_client.js...\n");

var ws = new WebSocket("wss://echo.websocket.org");

ws.onopen = function(evt) { 
  console.log("Connection open ..."); 
  ws.send("Hello WebSockets!");
};

ws.onmessage = function(evt) {
  console.log( "Received Message: " + evt.data);
  ws.close();
};

ws.onclose = function(evt) {
  console.log("Connection closed.");
}; 

// eof
