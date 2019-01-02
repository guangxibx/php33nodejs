var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
    console.log('被请求了');
    
    res.end('hello wrold');
});
server.listen(3000,function(){
    console.log('请访问http://localhost:3000');
})




