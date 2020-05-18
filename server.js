var fs, https, mimetypes, options, path, port, server;

fs = require('fs');
https = require('https');
path = require('path');
port = process.env.PORT ? process.env.PORT : 3000;

console.log("== Loading index.html");
var indexHTML = fs.readFileSync('./public/index.html');

console.log("== Loading style.css");
var style = fs.readFileSync('./public/style.css');

console.log("== Loading index.js");
var indexJS = fs.readFileSync('./public/index.js');

console.log("== Loading 404.html");
var notFoundHTML = fs.readFileSync('./public/404.html');

mimetypes = {
    'css': 'text/css',
    'html': 'text/html',
    'js': 'application/javascript'
}

options = {
    pfx: fs.readFileSync('ssl/test.pfx'),
    passphrase: 'password'
};

server = https.createServer(options, function(request, response) {
    console.log("Request received for " + request.url);
    switch (request.url) {
        case '':
            response.writeHead(200, {
                'ContentType': 'text/html'
            });
            response.write(indexHTML);
            break;

        case '/':
            response.writeHead(200, {
                'ContentType': 'text/html'
            });
            response.write(indexHTML);
            break;

        case '/index.html':
            response.writeHead(200, {
                'ContentType': 'text/html'
            });
            response.write(indexHTML);
            break;

        case '/404.html':
            response.writeHead(200, {
                'ContentType': 'text/html'
            });
            response.write(notFoundHTML);
            break;

        case '/style.css':
            response.writeHead(200, {
                'ContentType': 'text/css'
            });
            response.write(style);
            break;

        case '/index.js':
            response.writeHead(200, {
                'ContentType': 'application/javascript'
            });
            response.write(indexJS);
            break;

        default:
            response.writeHead(404, {
                'ContentType': 'text/html'
            });
            response.write(notFoundHTML);
            break;
    }
    response.end();
});

server.listen(port, function() {
    console.log("== Server is listening on port " + port);
});