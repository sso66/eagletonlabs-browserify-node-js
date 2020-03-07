// basics/censortext.js - provider NPM
console.info('Mounting censortext.js...');

var censoredWords = ['sad', 'bad', 'mad'];
var customCensoredWords = [];

// constuctor/initializer
function censor(inStr) {
	for (idx in censoredWords) {
		inStr = inStr.replace(censoredWords[idx], "****");
	}
	
	for (idx in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[idx], "****");
	}
	return inStr;
};

// accessor/getter
function getCensoredWords() {
	return censoredWords.concat(customCensoredWords);
};

// mutator/setter
function addCensoredWord(word) {
	customCensoredWords.push(word);
};

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;

// eof 