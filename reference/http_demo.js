const http = require('http');

// Create server object
http.createServer((req, res, next) => {
    // Write response
    res.write('Hello World!');
    res.end();

}).listen(5000, () => console.log('Server running on port 5000...'));