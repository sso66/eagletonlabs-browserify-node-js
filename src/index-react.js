// index-react.js
console.log('Mounting index-react.js React App on Node.js...');

var ReactDOM = require('react-dom');
var React = require('react');

const square = require('./square');
console.log("Browserify: " + square(125)); //  15625

ReactDOM.render(
  <div style={{ background: 'purple', fontFamily: 'monospace' }}>
    React JS + Browserify: {square(125)}
  </div>,
  document.getElementById('app')
);

// eof 
