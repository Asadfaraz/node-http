const http = require("http");

const server = http.createServer((req, res) => {
  // providing headers in reqeust
  //   res.writeHead(200, { "content-type": "text/plain" });
  res.writeHead(200, { "content-type": "text/html" });
  // prividing body
  res.write("<h1>Home Page </h1>");
  // ending the request
  res.end();

  console.log("User hit the server");
});

server.listen(5000);
