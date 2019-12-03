const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit();
    res.setHeader("Contest-Type", "text/html");
    res.write("<html>");
    res.write("<h1>");
    res.write("Kandarp, Hello from nodejs server");
    res.write("</h1>");
    res.write("</html>");
    res.end();
});

server.listen(3000)