import * as http from "node:http";

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write("Helló, itt a szerver!")
    res.end("\nGET típusú kérés érkezett a localhost:3000-es portra. Erre érkezett a szerver válasza.");
});

server.listen(3000, () => {
    console.log("The server is running on http://localhost:3000");
});