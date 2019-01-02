var http = require('http');
var server = http.createServer(function(req,res){
    console.log('请访问了又一次');
    res.write('hello wrold');
    res.end();
});
server.listen(3000,function(){
    console.log('请去访问http://127.0.0.1:3000');
});