const fs = require('fs');

fs.rmdir("./metadata/folderA", function(err) {
    fs.rmdir("./metadata/folderA/folderB", function(err) {
        fs.rmdir("./metadata/folderA/folderB/folderD", function(err) {                
        });
    });
    fs.rmdir("./metadata/folderA/folderC", function(err) {
        fs.rmdir("./metadata/folderA/folderC/folderE", function(err) {
        });   
    });      
});

