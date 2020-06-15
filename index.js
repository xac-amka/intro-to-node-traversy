// const Person = require('./person');
// const person1 = new Person('Amka Heroku', 21);

// person1.greeting();

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html'});
    //         res.end(content);
    //     });
    // }
    // if(req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html'});
    //         res.end(content);
    //     });
    // }
    // if(req.url === '/api/users') {
    //     // most time we take it from database
    //     const users = [
    //         { name: 'Amka', age: 30 },
    //         { name: 'Bobby', age: 24 }
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    // }
    // console.log(req.url);

    // Build file path
    let filePath = path.join(__dirname, 'public', req.url ==='/' ? 'index.html' : req.url);

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = 'text/html';

    // Check ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    // Read File
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT'){
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                });
            } else {
                // Some server error 500
                res.writeHead(500, {});
                res.end('Server Error: ' + err.code);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    });

});

// First look for environment port then go for given port
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('Server listening on port ' + PORT));