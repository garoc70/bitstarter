var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var filename = 'index.html';
var htmltext = '';

fs.readFile(filename, function (err, data) {
  if (err) {
    throw err;
  }
  htmltext = data;
}); 

app.get('/', function(request, response) {
  response.send(htmltext.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
