var http = require('http');
var server = http.createServer(function(req,res){
    console.log('再次请求');
    res.write('hello world');
    res.end();
});
server.listen(3000,function(){
    console.log('请访问http://127.0.0.1:3000');
});