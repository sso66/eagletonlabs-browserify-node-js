src/index-react.js
console.log('Mounting index-react.js React Application...');

var React = require('react');
var ReactDOM = require('react-dom');

const square = require('./square')
console.log('Browserify: ' + square(125)); // --> 15625

ReactDOM.render(
    <div style={{ background: 'darkblue', fontSize: '1.25rem', color: 'gold' }}>
        Browserify React JavaScript Injected: {square(125)}
    </div>,
    document.getElementById('app')
)