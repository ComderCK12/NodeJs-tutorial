const http = require('http');
const fs = require('fs');
// const url = require("url");

const server = http.createServer((req, res) => {
    // console.log(req.url);


    const data = fs.readFileSync(`${_dirname}/userAPI/userapi.json`, 'utf-8');
    const objData = JSON.parse(data);



    if(req.url == "/") {
        res.end('Hello from the HOME PAGE !');
    }
    else if(req.url == "/about") {
        res.end('Hello from the ABOUT PAGE !');
    }
    else if(req.url == "/contact") {
        res.end('Hello from the CONTACT PAGE !');
    }
    else if(req.url == "/userapi") {

        // fs.readFile(`${__dirname}/userAPI/userapi.json`, 'utf-8', (err, data) => {
        //     console.log(data);
        //     // res.end(data)
        //     const objData = JSON.parse(data);
        //     res.end(objData[0].userId);
        // });
        //Instead ise hum bahar nikal lege toh ye baar baar read nahi karega

        res.writeHead(200, {'content-type': 'application/json'});
        res.end(objData[0].userId);
        // res.end('Hello from the userAPI PAGE !');
    }

    else {
        res.writeHead(404, {"Content-type" : "text/html"});                 //inspect -> network -> click the page -> headers
        res.end('<h1> ERROR ! Page does not exist </h1>');
    }
    
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening on port number 8000");
});