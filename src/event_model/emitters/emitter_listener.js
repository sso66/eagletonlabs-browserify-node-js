// File: emitter_listener.js
// Note: Implementing Event Emitters and Listeners
// Date: 04/04/2020 
//..............................................................................
console.info('Mounting emitter_listener.js...');

/**
 * Creating a custom EventEmitter object and implementing three
 * event listeners that are triggered when the balanceChanged
 * custom event is triggered.
 */
var events = require('events');
var util = require('util');

// exposes a function which can be used like a class.
module.exports = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () { 
        return this.firstName + ' ' + this.lastName;
    };
};

function Account() {
	events.EventEmitter.call(this);
	this.balance = 0;
  
	this.deposit = function(amount) {
		this.balance += amount;
		this.emit('balanceChanged');
	};
	
	this.withdraw = function(amount) {
		this.balance -= amount;
		this.emit("balanceChanged");
	};	
}

// Account.prototype.__proto__ = events.EventEmitter.prototype; // prototype design pattern
util.inherits(Account, events.EventEmitter); // factory method design pattern

function displayBalance() {
	console.log("Account balance: $%d", this.balance);
}

function checkOverdraw() {
	if (this.balance < 0) {
		console.log("Account overdrawn!!!");
	}
}

function checkGoal(account, goal) {
	if (account.balance > goal) {
		console.log("Goal Archieved!!!");
	}
}

var account = new Account();

// Event binding
account.on("balanceChanged", displayBalance);
account.on("balanceChanged", checkOverdraw);
account.on("balanceChanged", function () {
	checkGoal(this, 1009);
});

// Property binding
account.deposit(220);
account.deposit(320);
account.deposit(600);
account.withdraw(1200);

// eof
