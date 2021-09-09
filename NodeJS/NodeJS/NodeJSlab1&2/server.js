const http = require('http');
const fs = require('fs')
const port = 3000;

let dataIndex = fs.readFileSync('./index.html',{ encoding:'utf8' });
let dataHome = fs.readFileSync('./Home.html',{ encoding:'utf8' });

const server = http.createServer((req, res) => {
    if(req.url === '/') {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.write(dataIndex);
      return res.end();;
    }
    if(req.url === '/home') {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.write(dataHome);
        return res.end();
    };
    
    res.writeHead(404);
    res.end(`<h1>Page Not Found</h1> `)
});

server.listen(port, () => console.log(`Server running port: ${port}`));