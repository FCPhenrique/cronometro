var http = require("http");

http.createServer(function(a,b){
    b.end("aaaaaa");
}).listen(8080);