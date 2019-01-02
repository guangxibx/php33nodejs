var http = require('http');
var server =http.createServer(function(req,res){
    console.log('请求了');
    res.write('hello');
    res.end();
});
server.listen(3000,function(){
    console.log('请访问http://127.0.0.1:3000');
});
