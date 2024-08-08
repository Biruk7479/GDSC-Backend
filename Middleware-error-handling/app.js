const http = require('http');
const url = require('url');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');

const server = http.createServer((req, res) => {
  try {
    const parsedUrl = url.parse(req.url, true);
    const routeHandler = routes[parsedUrl.pathname];
    if (routeHandler) {
      routeHandler(req, res);
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found');
    }
  } catch (err) {
    errorHandler(err, req, res);
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
