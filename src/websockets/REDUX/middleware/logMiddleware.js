// File: src/websockets/REDUX/middleware/logMiddleware.js
// Date: 9/17/2020
// Note: How Redux works in general and in Node.js!
//................................................................................
const logMiddleware = ({ getState, dispatch }) => next => action => {
    console.log("--> Before reducers have run")
    next(action);
    console.log("--> After reducers have run");
}

// export default logMiddleware;
module.exports = logMiddleware;

// eof
