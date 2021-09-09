const http = require('http');
const fs = require('fs');
const port = 3000;

let dataIndex = fs.readFileSync('./index.html',{ encoding:'utf8' });
let dataLogin = fs.readFileSync('./formLogin.html',{ encoding:'utf8' });
let dataRegister = fs.readFileSync('./formLogin.html',{ encoding:'utf8' });

const server = http.createServer((req, res) => {
    if(req.url === '/') {
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.write(dataIndex);
      return res.end();;
    };

    if(req.url === '/login') {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.write(dataLogin);
        return res.end();

    };

    if(req.url === '/register') {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.write(dataRegister);
        return res.end();
    };
    
    if(req.url === '/submit-login') {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(302, {
          'Location': '/'
        });
        return res.end();
    };

    if(req.url === '/submit-register') {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(302, {
          'Location': '/'
        });
        return res.end();
    };
    
    res.writeHead(404);
    res.end(`<h1>Page Not Found</h1> `)
});

server.listen(port, () => console.log(`Server running port: ${port}`));