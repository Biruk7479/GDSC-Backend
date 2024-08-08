const routes = {
    '/': (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello World!');
    },
    '/error': (req, res) => {
      throw new Error('This is an error!');
    }
  };
  
  module.exports = routes;
  