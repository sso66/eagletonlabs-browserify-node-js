const fs = require('fs');

fs.truncate('./data/config.json', function(err) {
    console.log(err ? "File Truncate Failed" : "File Truncated");
});