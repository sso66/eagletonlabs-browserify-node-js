// basics/readwords.js - consumer NPM
console.info('Mounting readwords.js...');
 
const censor = require("../censorify");

console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad and mad text."));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("\nA very gloomy up day.\n"));
console.log("-----------------------------------------------");

// render node app in the browser
// const content = document.querySelector('#content');
const content = document.getElementById('content');
content.innerHTML = '<i>'+censor.getCensoredWords()+'</i><br />';
content.innerHTML += censor.censor("Some very sad, bad and mad text. <hr/>");
content.innerHTML += "Render Node App in the Browser";

// eof 
