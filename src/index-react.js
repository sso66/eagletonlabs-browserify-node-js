// index-react.js
console.log('Mounting index-react.js Node.js Application...');

var ReactDOM = require('react-dom');
var React = require('react');
 
// var Chat = require('./Chat');
// var Contacts = require('./Contacts');

const square = require('./square');
console.log("Browserify: " + square(125)); //  15625

ReactDOM.render(
  <div style={{fontSize: '1.5em', color: '#00F'}}>React JS + Browserify:  {square(125)}</div>,
  document.getElementById('app')
);

// eof 
