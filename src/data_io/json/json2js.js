// File: json2js.js
// Note: Converting JSON String to JavaScript Object
// Date: 03/01/2020
//..............................................................................
console.log("Mounting json2js.js...");

// ___ A JSON string represents a JavaScript in string form ___
var accountStr = `{
  "name": "Jedi", 
  "members": ["Yoda", "Obi Wan"],
  "number": 14512,
  "status": true,
  "event":"2014-01-01T23:28:56.782Z",
  "location": "A galaxy far, far away"
}`;
	
var accountObj = JSON.parse(accountStr);

console.info("\nConverting JSON String to JavaScript Object:");
console.log(accountObj.name);
console.log(accountObj.members);
console.log(accountObj.number);
console.log(accountObj.status);
console.log(accountObj.event); 
console.log(accountObj.location); 


// ___ A JSON string represents a JavaScript in string form ___
var defaultStr = `{
	"majorDivisions": 5,
	"minorDivisions": 4,
	"min": 10,
	"max": 50,
	"ranges": [
			{ "min": 10, "max": 50, "color": "#F00" },
			{ "min": 20, "max": 75, "color": "#0F0" },
			{ "min": 30, "max": 90, "color": "#00F" }
	]
}`;	

console.info("\nConverting JSON String to JavaScript Object");
var defaultObj = JSON.parse(defaultStr);
console.log(defaultObj.majorDivisions);
console.log(defaultObj.minorDivisions);
console.log(defaultObj.min);
console.log(defaultObj.max);
console.log(defaultObj.ranges);

// eof 
