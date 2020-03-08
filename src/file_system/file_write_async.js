var fs = require('fs');
var fruitBowl = ['apple', 'orange', 'banana', 'grapes'];

function writeFruit(fd) {
	if (fruitBowl.length) {
		var fruit = fruitBowl.pop() + " ";
		fs.write(fd, fruit, null, null, function(err, bytes) {
			if (err) {
				console.log("File Write Fail.");
			} else {
				console.log("Wrote %s %d bytes", fruit, bytes);
				writeFruit(fd);
			}
		});
	} else {
		fs.close(fd);
	}
}
fs.open('fruit.txt', 'w', function(err, fd) {
	writeFruit(fd);
});
/*eof */
