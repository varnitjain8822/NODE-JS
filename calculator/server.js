const handler = require('./home');
const port = 3002;
const http = require('http');
const server = http.createServer(handler);

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});