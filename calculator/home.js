const fs = require('fs');
const {sumrequesthandler}=require('./addition');
const createserver = (req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<body>');
        res.write('<h1>WELCOME TO CALCULATOR</h1>');
        res.write('<a href="/calculator">CLICK HERE FOR CALCULATOR</a><br>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(req.url.toLowerCase() === '/calculator'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Calculator</title></head>');
        res.write('<body>');
        res.write('<h1>CALCULATOR</h1>');
        res.write('<form action="/result" method="POST">');
        res.write('<input type="number" name="num1" placeholder="Enter first number"><br>');
        res.write('<input type="number" name="num2" placeholder="Enter second number"><br>');
        res.write('<button type="submit">Calculate Sum</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } 

    if(req.url.toLowerCase() === '/result' && req.method === 'POST'){
          return sumrequesthandler(req,res);
        }

    res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>404</title></head>');
        res.write('<body>');
        res.write('<h1>page not found</h1>');
        res.write('</body>');
        res.write('</html>');
};

module.exports = createserver;
