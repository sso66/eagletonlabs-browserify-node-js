// File: chef.js
// Note: A child process that handles message events and sends data back to the parent process
// Date: 03/07/2020
//..............................................................................
console.log( "Mounting chef.js..." );

process.on('message', function(message, parent) {
    var meal = {};
    switch (message.cmd) {
        case 'makeBreakfast':
            meal = ["ham", "eggs", "toast"];
            break;
         case 'makeLunch':
            meal = ["burger", "fries", "shake"];
            break;
        case 'makeDinner':
            meal = ["soup", "salad", "steak"];
            break;
    } 
    process.send(meal);   
});

// eof
