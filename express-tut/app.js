const http = require("http");
const { readFileSync } = require("fs");

//get all files
const homePage = readFileSync('./index.html', "utf-8");

const server = http.createServer((req, res) => {
  //console.log(req);
  //console.log(req.method);
  //console.log(req.url);
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(9000);
