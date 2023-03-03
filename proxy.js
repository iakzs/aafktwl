const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  proxy.web(req, res, {
    target: 'https://api.github.com',
    changeOrigin: true
  });
});

server.listen(3000);
console.log('Proxy server listening on port 3000');
const response = await fetch('https://api.github.com/repos/iakzs/aafktwl/contents/tkns/vat.js');
const data = await response.json();
console.log(data);
