// Create web server
// Create a web server that listens to the port 3000 and responds with a message "Hello World" for every request it receives.

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});