// File: json2js.js
// Note: Converting JSON String to JavaScript Object
// Date: 04/06/2020
//..............................................................................
console.log("Mounting json2js.js...JSON.parse(text[, reviver])");
/*
 * A JSON string represents a JavaScript Object in string form. The string 
 * syntax is very similar to code, so it is easy to understand.
 * 
 * You can use the JSON.parse(string) method to convert a string that is 
 * properly formatted with JSON into JavaScript object.
 * 
 * Notice that accStr is defined as formatted JSON string, then converted to a 
 * JavaScript object using JSON.parse() and then member properties can be 
 * accesssed via dot notation.
 * 
 */
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
console.log("majorDivisions: " + defaultObj.majorDivisions);
console.log("minorDivisions: " + defaultObj.minorDivisions);
console.log("min: " + defaultObj.min);
console.log("max: " + defaultObj.max);
// console.log(defaultObj.ranges);
for (let i = 0; i < defaultObj.ranges.length; i++) {
    console.log("min: " + defaultObj.ranges[i].min);
    console.log("max: " + defaultObj.ranges[i].max);
    console.log("color: " + defaultObj.ranges[i].color);
}

// eof 
