var http = require('http');
var server = http.createServer(function(req,res){
    //把url转为小写
    req.url = req.url.toLowerCase();
    if(req.url == '/' || req.url == '/index'){
        res.end('index');
    }else if(req.url == '/login'){
        res.end('login');
    }else if(req.url == '/register'){
        res.end('register');
    }else{
        res.end('404 not found');
    }
});
server.listen(3000,function(){
    console.log('请去访问http://127.0.0.1:3000');
});