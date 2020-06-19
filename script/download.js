const https = require('https');
const fs = require('fs');
const readline = require('readline');




const rl = readline.createInterface({
   input: fs.createReadStream('darija_source'),
   output: process.stdout,
   terminal: false
});

rl.on('line', (line) => {

let number = Math.random() *  150000;

let filename =  "temp/" + number; 
const file = fs.createWriteStream("temp/" + number);
 const request = https.get(line, function(response) {
    response.pipe(file);
    
 });

});



