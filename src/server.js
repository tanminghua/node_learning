const http = require('http');

http.createServer(function(request, response) {
    console.log(request)
    response.writeHead(200, {
        'Content-Type': 'text/plain',
    });
    response.write("hello world");
    response.end();
}).listen(8888);