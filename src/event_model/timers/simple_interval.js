// File: simple_interval.js
// Note: Performing periodic work with time intervals
// Date: 03/01/2020
//..............................................................................
console.info('Mounting simple_interval.js...');

// 2. scope
var x = 0, y = 0, z = 0;

// 1. function
function updateX() {
	x += 1;
}

function updateY() {
	y += 1;
}

function updateZ() {
	z += 1;	
	displayValues();
}

setInterval(updateX, 500);
setInterval(updateY, 1000);
setInterval(updateZ, 2000);

// 3. context
function displayValues() {
  console.log("X = %d; Y = %d; Z = %d", x, y, z);
}

// eof 
