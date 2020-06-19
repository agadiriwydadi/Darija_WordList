const http = require('https');
const fs = require('fs');
const path = require('path');





    const directoryPath = path.join(__dirname, 'temp');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        fs.readFile(path.join(directoryPath, file), 'utf8', (err, data) => {

            const regix = /[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF]+/g;
            let result =     data.match(regix);
    
    
            var stream = fs.createWriteStream("../arbic");
            stream.once('open', function(fd) {
                    
                    result.forEach(element => {
                        stream.write(element);
                        stream.write('\n');
                    });
    
    
                    stream.end();
            });
    
    
    
        });
    });
});