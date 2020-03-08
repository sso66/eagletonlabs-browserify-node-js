// Contacts.js
console.log("Mounting Contact.js...");

var React = require('react');
var Contact = require('./Contact');

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    state: {
    	text: "NPM + Browserfy"
    }
  }
  render() {
    return (
      <div>
      	<Contact />
      </div>
    );
  }
}

module.exports.Contacts = Contacts;

// eof
