// index.js
console.log('Mounting index.js Node.js Application...');

const square = require('./square');
console.log(square(125)); //  15625

const _ = require('lodash');

_.each([1, 2, 3], function(n) {
  console.log(n); //=> 1, 2, 3
});

// ___ basics Node.js directory ___
const readwords = require('./basics/readwords/readwords');
console.info(readwords);

// ___ all about javascript array extras ___
//...................................................................
let tasks = new Array(10)
console.log("length = " + tasks.length);

let projects = ['Learn Spanish', 'Learn Go', 'Learn Erlang'];

// adding items to the end of an array
//projects.push("Learn Malayalam");

// adding items to the begining of an array
//projects.unshift("Learn Tamil");

// adding items to the end of an array
projects = [...projects, "Learn Malayalam"];

// adding items to the end of an array
//projects = ["Learn Malayalam", ...projects];

// looping through array
//for (let i = 0; i < projects.length; i++) {
//	console.log(projects[i]);
//}

console.log("__forEach__");
projects.forEach((element, index) => {
	console.log(element + ", " + index);
});

//removing first item from an array
let numbers = [1, 2, 3, 4];
let first = numbers.shift();
console.log(numbers.length);
console.log(first);

// removing portion of an array
let elements = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];

console.log(elements.slice(2)); //["Task 3", "Task 4", "Task 5"]
console.log(elements.slice(2,4));  // ["Task 3", "Task 4"]
console.log(elements.slice(1,5)) // ["Task 2", "Task 3", "Task 4", "Task 5"]

// removing last item from an array
//console.log(elements.pop());
//console.log(elements.pop());
//console.log(elements.pop());
//console.log(elements.pop());
//console.log(elements.pop());

// merging two arrays
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];

//let merged = array1.concat(array2);
let merged = [...array1, ...array2];

console.log(merged);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// joining arrays
console.log(elements.join());
// expected output: Task 1,Task 2,Task 3
console.log(elements.join(''));
// expected output: Task 1Task 2Task3
console.log(elements.join('-'));
// expected output: Task 1-Task 2-Task 3

// finding elements in an array
let data = [51, 12, 8, 130, 44];

let found = data.find(function(element) {
	return element > 100;
});
console.log(found); 

for (let index in projects) {
	console.log(projects[index]);
}

//let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map((value, index, origArr) => {
   return value * value;
});
console.log(squared);

let newProjects = projects.map((project, index) => {
   return {
     [index]: project
   }
});
console.log(newProjects);

// eof 
