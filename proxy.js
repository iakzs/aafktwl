const http = require('http');
const fetch = require('node-fetch');

const server = http.createServer((req, res) => {
  const options = {
    method: req.method,
    headers: req.headers,
    redirect: 'follow'
  };

  const url = 'https://neededaafttwl/epicthing.js';

  fetch(url, options)
    .then(response => response.text())
    .then(data => {
      res.writeHead(200, {
        'Content-Type': 'application/javascript'
      });
      res.write(data);
      res.end();
    })
    .catch(error => {
      console.error(error);
      res.writeHead(500, {
        'Content-Type': 'text/plain'
      });
      res.write('An error occurred while fetching the data');
      res.end();
    });
});

server.listen(3000);
console.log('Proxy server listening on port 3000');

