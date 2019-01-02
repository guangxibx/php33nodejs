var http = require('http');
var url= require('url'); 
var server = http.createServer(function(req,res){
    console.log(req.url);
    var myurl = url.parse(req.url.true);
    console.log(myurl.pathname);
    console.log(myurl.query.id);
   
    
    
    res.end('1');
});
server.listen(3456,function(){
    console.log('访问http://127.0.0.1:3456');
    
})