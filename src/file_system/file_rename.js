const fs = require('fs');

fs.rename('./data/config.json', './data/default.json', function(err){
    console.log(err ? "Rename Failed" : "File Renamed");
});

fs.rename('./metadata', './meta-info', function(err){
    console.log(err ? "Rename Failed" : "File Renamed");
});