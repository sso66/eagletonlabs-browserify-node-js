const fs = require('fs');

fs.watchFile('./data/config.json', { persistent: true, interval: 5000 }, function(curr, prev) {
    console.log('./data/config.json modified at: ' + curr.mtime);
    console.log('Previous modification was: ' + prev.mtime);
});
