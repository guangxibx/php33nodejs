var http = require('http');
var server = http.createServer(function(req,res) {
    res.end('hellllllllllll');//可以显示在网页中
});
server.listen(3000,function(){
    console.log('请去访问http://127.0.0.1:3000');
    
});