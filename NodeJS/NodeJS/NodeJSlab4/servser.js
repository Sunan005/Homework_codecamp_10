const http = require('http');
const port = 8000;



const server = http.createServer((req, res) => {
  if(req.url === '/login' && req.method === 'POST') {
    res.writeHead(200)
    res.write(JSON.stringify({
      path: req.url.slice(1),
      method: req.method
    }))
    return res.end()
  };

  if(req.url === '/register' && req.method === 'POST') {
    res.writeHead(200)
    res.write(JSON.stringify({
      path: req.url.slice(1),
      method: req.method
    }))
    return res.end()
  };

  if(req.url === '/user' && req.method === 'GET') {
    res.writeHead(200)
    res.write(JSON.stringify({
      path: req.url.slice(1),
      method: req.method
    }))
    return res.end()
  };

  if(req.url === '/user' && req.method === 'PUT') {
    res.writeHead(200)
    res.write(JSON.stringify({
      path: req.url.slice(1),
      method: req.method
    }))
    return res.end()
  };

  if(req.url === '/user' && req.method === 'DELETE') {
    res.writeHead(200)
    res.write(JSON.stringify({
      path: req.url.slice(1),
      method: req.method
    }))
    return res.end()
  };

  res.writeHead(404)
  res.write(JSON.stringify({ message: 'path not found on this server' }));
  return res.end();

});


server.listen(port, () => console.log(`Server running port: ${port}`));