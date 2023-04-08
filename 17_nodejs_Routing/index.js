const http = require('http');
// const url = require("url");

const server = http.createServer((req, res) => {
    // console.log(req.url);

    if(req.url == "/") {
        res.end('Hello from the HOME PAGE !');
    }
    else if(req.url == "/about") {
        res.end('Hello from the ABOUT PAGE !');
    }
    else if(req.url == "/contact") {
        res.end('Hello from the CONTACT PAGE !');
    }

    else {
        res.writeHead(404, {"Content-type" : "text/html"});                 //inspect -> network -> click the page -> headers
        res.end('<h1> ERROR ! Page does not exist </h1>');
    }
    
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening on port number 8000");
});