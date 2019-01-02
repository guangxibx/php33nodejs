var http = require('http');
var server = http.createServer(function(req,res){
    //用writeHead方式  先写状态码 状态码对应提示信息 字符编码
    res.writeHead(200,'okkkkk',{
        'Content-type':'text/html;charset=utf8'
    });
    res.end('link--卡卡西');
});
server.listen(3000,function(){
    console.log('请去访问http://localhost:3000');
    
});
//res.writeHead的优先级比较高