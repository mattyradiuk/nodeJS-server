var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('cert/key.pem'),
  cert: fs.readFileSync('cert/cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.write(index.html);
  res.end();
}).listen(8000);