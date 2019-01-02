var http = require('http');
var server = http.createServer(function(req,res){
   
    res.statusCode = 200;
    res.setHeader('Content-type','text/html;charset=utf8');
    res.statusMessage = 'okkkkkkkkkkkkk';
    res.end('link---卡卡西');
});
server.listen(3000,function(){
    console.log('请去访问http://127.0.0.1:3000');
});