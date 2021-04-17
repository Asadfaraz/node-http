const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from Node");
  console.log("User hit the server");
});

server.listen(5000);
