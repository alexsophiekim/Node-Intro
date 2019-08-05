const http = require('http');


http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello There, how is it going');
}).listen(3000) 
