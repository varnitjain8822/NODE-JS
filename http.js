const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath = "";

  if (req.url === "/" || req.url === "/remotehub.html") {
    filePath = path.join(__dirname, "remotehub.html");
    sendFile(filePath, "text/html", res);
  } 
  else if (req.url === "/remotehub.css") {
    filePath = path.join(__dirname, "remotehub.css");
    sendFile(filePath, "text/css", res);
  } 
  else if (req.url === "/remotehub2.html") {
    filePath = path.join(__dirname, "remotehub2.html");
    sendFile(filePath, "text/html", res);   // ✅ Fixed
  }
  else if (req.url === "/remotehub2.css") {
    filePath = path.join(__dirname, "remotehub2.css");
    sendFile(filePath, "text/css", res);
  }
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

function sendFile(filePath, contentType, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading file.");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
}

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
