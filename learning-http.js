const http = require("http");
const fs = require("fs");

const homePage = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {
  // providing headers in reqeust
  //   res.writeHead(200, { "content-type": "text/plain" });
  // res.writeHead(200, { "content-type": "text/html" });
  // // prividing body
  // res.write("<h1>Home Page </h1>");
  // // ending the request
  // res.end();

  // Working with url
  const url = req.url;
  console.log(url);
  console.log("User hit the server");

  // Home Page
  if (url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // about page
  else if (url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page </h1>");
    res.end();
  }
  // error page
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not Found</h1>");
    res.end();
  }
});

server.listen(5000);
