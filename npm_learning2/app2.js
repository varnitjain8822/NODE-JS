
//how to use modules 
const testingsyntax = require('./syntax');
const port = 3000;
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url,req.method);
    testingsyntax();
    });



server.listen(port, () => {
    
    console.log(`Server running at http://localhost:${port}/`);
});