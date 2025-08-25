//how to use modules 
const handler = require('./first');
const port = 3000;
const http = require('http');
const server = http.createServer(handler);

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});