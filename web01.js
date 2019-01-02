var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer(function(req,res){
    var url = req.url.toLowerCase();
    if(url == '/' || url == '/index'){
        fs.readFile(path.join(__dirname,'view/index.html'),'utf8',function(err,data){
            if(err){
                throw err;
            }
            res.end(data);
        });
       
    }else if(url == '/login'){
        fs.readFile(path.join(__dirname,'view/login.html'),'utf8',function(err,data){
            if(err){
                throw err;
            }
            res.end(data);
        });
    }else if(url == '/register'){
        fs.readFile(path.join(__dirname,'view/register.html'),'utf8',function(err,data){
            if(err){
                throw err;
            }
            res.end(data);
        });
    }else{
        res.statusCode = 404;
        res.end('404 not found');
    }
});
server.listen(3303,function(){
    console.log('请访问http://127.0.0.1:3303');
    
});