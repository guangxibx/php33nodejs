var fs = require('fs');
var str = 'hello world';
fs.writeFile('data.txt',str,'utf8',function(err){
    if (err) {
        throw err;
    }
    console.log('写入ok');
    
});