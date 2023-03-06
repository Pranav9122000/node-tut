const http = require("http");

const server = http.createServer((req,res) => {
    console.log("request event")
    res.end("Hello World");
    });

    server.listen(8000, () => {
        console.log("Server listening on port : 8000");
    });

    //Using Event emitter API
const server1 = http.createServer();
server1.on("request", (req, res) => {
    res.end("Welcome");
})