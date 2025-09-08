import * as http from "node:http";
import { env } from "node:process";
import url from "node:url"
import path from "node:path"
import fs from "node:fs/promises"

const PORT =process.env.PORT || 3000;
const LOCALHOST = process.env.LOCALHOST

const server = http.createServer(async(req, res) => {
    /*res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write("Ez egy egyszerű http szerver üzenete!")
    res.end("\nGET típusú kérés érkezett a localhost:3000-es portra. Erre érkezett a szerver válasza.");*/

    const fileName =url.fileURLToPath(import.meta.url)
    const __dirname = path.dirname(fileName)
    const indexPath = path.join(__dirname,"index.html")
    console.log(indexPath);
    const html = await fs.readFile(indexPath)
    if(req.url === "/"){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"})
        res.end(html)
    }else{
        res.statusCode=404
        res.end("Page not Found")
    }

});

server.listen(PORT, () => {
    console.log(`The server is running on http://${LOCALHOST}:${PORT}\n`);
});