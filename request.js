const http = require("http");
const port = 3000;

const navbar = `
  <nav>
    <a href="/">Home</a> |
    <a href="/men">Men</a> |
    <a href="/women">Women</a> |
    <a href="/kids">Kids</a> |
    <a href="/cart">Cart</a>
  </nav>
  <hr>
`;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/" || req.url === "/home") {
    res.write(navbar);
    res.write("<h1>Welcome to Home Section</h1>");
    return res.end();
  } 
  else if (req.url === "/men") {
    res.write("<h1>Welcome to Men Section</h1>");
    res.write(navbar);
    return res.end();
  } 
  else if (req.url === "/women") {
    res.write("<h1>Welcome to Women Section</h1>");
        res.write(navbar);

    return res.end();
  } 
  else if (req.url === "/kids") {
    res.write("<h1>Welcome to Kids Section</h1>");
        res.write(navbar);

    return res.end();
  } 
  else if (req.url === "/cart") {
    res.write("<h1>Welcome to Cart Section</h1>");
        res.write(navbar);

    return res.end();
  } 
  else {
    res.statusCode = 404;
    res.write("<h1>404 Page Not Found</h1>");
        res.write(navbar);

    return res.end();
  }
});

server.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}/`);
});
