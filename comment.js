//create web server
var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function (request, response) {
    var path = url.parse(request.url).pathname;
    switch (path) {
        case '/':
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write('<h1>Welcome to the home page</h1>');
            response.end();
            break;
        case '/comment':
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write('<h1>Welcome to the comment page</h1>');
            response.end();
            break;
        default:
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            response.end();
            break;
    }
});

server.listen(8001);
console.log('Server is running at http://');