// File: js2json.js
// Note: Converting JavaScript Object to JSON String
// Date: 08/28/2020
//..............................................................................
console.log("Mounting js2json.js...JSON.stringify(value[, replacer[, space]])");
/*
 * Node.js allows you to convert JavaScript object into a properly formatted 
 * JSON string.
 * 
 * Thus, you can store the string form in a file or database, send across an
 * HTTP connection, WebSocket connection, or write it to a stream or buffer.
 * 
 * You use the JSON.stringify(object) method to parse a JavaScript object and
 * generate a JSON string.
 * 
 * Following code defines a JavaScript object that includes string, numberic,
 * boolean, and array properties.
 * 
 * JSON.string(object) converts it to a JSON string:
 * 
 */
var accountObj = {
  name: "Jedi", 
  members: ['Yoda', 'Obi Wan'],
  number: 33418,
  status: true,
  event: new Date().getTime(),
  location: "A galaxy far, far away"
};

var defaultObj = {
  majorDivisions: 5,
  minorDivision: 4,
  min: 10,
  max: 50,
  ranges: [ { min: 10, max: 50, color: '#F00' },
  { min: 20, max: 75, color: '#0F0' },
  { min: 30, max: 90, color: '#00F' } ]
};

var accountStr = JSON.stringify(accountObj);
console.info("\nConverting JavaScript Object to JSON String:");
console.log(accountStr);

var defaultStr = JSON.stringify(defaultObj);
console.info("\nConverting JavaScript Object to JSON String:");
console.log(defaultStr);

// eof
