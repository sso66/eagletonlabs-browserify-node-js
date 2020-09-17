// src/redux/logMiddleware.js

console.log( "Mounting src/redux/logMiddleware.js...\n" );

const logMiddleware = ({ getState, dispatch }) => next => action => {
    console.log("Before reducers have run")
    next(action);
    console.log("After reducers have run");
}

export default logMiddleware;

// eof
