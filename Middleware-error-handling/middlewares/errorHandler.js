function errorHandler(err, req, res) {
    console.error(err.message);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server Error');
  }
  
  module.exports = errorHandler;
  