// File: emitter_listener.js
// Note: Implementing Event Emitters and Listeners
// Date: 03/01/2020 
//..............................................................................
console.info('Mounting emitter_listener.js...');

/**
 * Creating a custom EventEmitter class and implementing their
 * event listeners that are triggered when the balanceChanged
 * custom event is detected.
 */
//___ Provider module __
// Adding Custom Events to JavaScript Objects - [you]
var events = require('events');
var util = require('util');

function Account() {
	events.EventEmitter.call(this);
	this.balance = 0;
  BALANCE_EVENT = 'balanceChanged';
  
	this.deposit = function(amount) {
		this.balance += amount;
		//this.emit('balanceChanged');
		this.emit(BALANCE_EVENT);
	};
	
	this.withdraw = function(amount) {
		this.balance -= amount;
		//this.emit("balanceChanged");
    this.emit(BALANCE_EVENT);
	};	
}

//Account.prototype.__proto__ = events.EventEmitter.prototype;
util.inherits(Account, events.EventEmitter);
// Add Event Listener (Handler) to JavaScript Object - Event Queue - [ioc] 
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

// exports.Account = Account

//___ Consumer module ___
// var account = require('./emitter_listener');

var account = new Account();
// Event binding
account.on(BALANCE_EVENT, displayBalance);
account.on(BALANCE_EVENT, checkOverdraw);
account.on(BALANCE_EVENT, function () {
	checkGoal(this, 1009);
});
// Property binding
account.deposit(220);
account.deposit(320);
account.deposit(600);
account.withdraw(1200);

// eof
