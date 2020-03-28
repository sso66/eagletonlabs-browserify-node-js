const fs = require('fs');

fs.mkdir("./metadata", function(err) {
    fs.mkdir("./metadata/folderA", function(err) {
        fs.mkdir("./metadata/folderA/folderB", function(err) {
            fs.mkdir("./metadata/folderA/folderB/folderD", function(err) {                
            });
        });
        fs.mkdir("./metadata/folderA/folderC", function(err) {
            fs.mkdir("./metadata/folderA/folderC/folderE", function(err) {
            });   
        });      
    });
});
