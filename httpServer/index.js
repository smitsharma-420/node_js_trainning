const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
      res.end("Hello From the other sides");
    } else if (req.url == "/about") {
      res.end("Hello from the AboutUS Sides");
    } else if (req.url == "/contact") {
      res.end("Hello from the ContactUS Sides");
    } else {
        res.writeHead(404, {"content-type": "text/html"});
        res.end("<h1>404 error pages. Page Not Found </h1>")
    }
});

server.listen(8000, () => {
    console.log("Listening to the  port  no 8000");
})