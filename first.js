//creating the first server 

/*const server = http.createServer((req, res) => {
    console.log(req);
    process.exit();
});*/

/*how to exit the server after getting the request
const server = http.createServer((req, res) => {
    console.log(req.url,req.method,req.headers);
    process.exit();
});*/


//sending the response to the client

//how to exit the server after getting the request
/* const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
}); */

//routing

/*const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>welcomme to the home page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        return res.end();
    }

    else if(req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>About Us</title></head>');
        res.write('<body><h1>This is the about page</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Page Not Found</title></head>');
        res.write('<body><h1>404 Page Not Found</h1></body>');
        res.write('</html>');
        return res.end();
    }
    
}); */

//taking input from the user and checking it in payload
/*const http = require('http');
const port = 3001;
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>welcomme to the home page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1><form action="/message" method="POST"><input type="text" name="enter your name"><br> <input type="text" name="username"><br><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (req.url.toLowerCase() === '/message' && req.method === 'POST') {
            const fs = require('fs');
            fs.writeFile('message.txt',"prashant jain");
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        }
    });*/

 
//taking input from the user and and storing something in a file on recieving request

/*const http = require('http');
const fs = require('fs');
const port = 3001;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<body>');
        res.write('<h1>Hello from Node.js!</h1>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
        res.write('<input type="text" name="age" placeholder="Enter your age"><br>');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (req.url.toLowerCase() === '/message' && req.method === 'POST') {
        let parsedBody = "hello world"; // temporary fix so it's defined
        fs.writeFile('message.txt', parsedBody, (err) => {
    if (err) throw err;
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
});

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
     }   });

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});  */


//taking input from the user and and printing it on the console on recieving request
/*const http = require('http');
const fs = require('fs');
const port = 3001;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<body>');
        res.write('<h1>Hello from Node.js!</h1>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
        res.write('<input type="text" name="age" placeholder="Enter your age"><br>');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (req.url.toLowerCase() === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);           
            console.log(chunk);
        });         
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
      
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();

     }   });

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});*/



//taking input from the user and and printing it in correct format in the file 

const http = require('http');
const fs = require('fs');
const port = 3001;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<body>');
        res.write('<h1>Hello from Node.js!</h1>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
        res.write('<input type="text" name="age" placeholder="Enter your age"><br>');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (req.url.toLowerCase() === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);           
            console.log(chunk);
        });         

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);

            const jsonobject = {};
            const params = new URLSearchParams(parsedBody);
            for (const [key, value] of params) {
                jsonobject[key] = value;
            }
            console.log(jsonobject);

            fs.writeFile('message.txt', JSON.stringify(jsonobject), (err) => {
                if (err) throw err;
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
