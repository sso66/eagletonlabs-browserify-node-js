// File: js2json
// Note: Converting JavaScript Object to JSON String
// Date: 03/01/2020
//..............................................................................
console.log("Mounting js2json.js...");

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
