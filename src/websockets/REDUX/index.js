// File: wepack-nodejs/src/websockets/index.js
// Date: 9/17/2020
// Note: How Redux works in general and in Node.js!
//................................................................................
const { createStore, applyMiddleware } = require('redux');
const logMiddleware = require('./middleware/logMiddleware');

// create reducer and inject state and action
function count(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            // return state = state + 1;
            return state = state + action.payload;
        case 'DECREMENT': 
            // return state = state - 1; 
            return state = state - action.payload;
        default:
            return state;       
    }
}

// create store and inject root reducer with or without middleware
// let store = createStore(count);
let store = createStore(count, applyMiddleware(logMiddleware));

// subscribe state from store to render
store.subscribe(() => console.log('<-- redux: ' + store.getState()));

// dispatch action with or without payload
store.dispatch({ type: 'INCREMENT', payload: 5 })
store.dispatch({ type: 'INCREMENT', payload: 5 })

store.dispatch({ type: 'DECREMENT', payload: 3 })

// eof
