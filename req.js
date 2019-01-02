var http = require('http');
var server = http.createServer(function(req,res){
    console.log('请求方式:', req.method);
    console.log('请求路径',req.url);
    console.log('请求头',req.headers);
    
    res.end('hello');
});
server.listen(3000,function(){
    console.log('请去访问http://localhost');  
});