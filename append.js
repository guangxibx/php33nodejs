var fs = require('fs');
var str = 11111111111111;
fs.appendFile('data.txt',str,'utf8',function(err){
    if (err) {
        console.log(err);
        throw err;
    }
    console.log('写入ok');
    
});