var fs = require('fs');
var str = 'hello wrold';
fs.writeFile("./3.txt",str,'utf8',function(err){
    if(err){
        throw err;
    }
    console.log(str);
});