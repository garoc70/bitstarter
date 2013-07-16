var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var filename = 'index.html';

fs.readFile(filename, function (err, data) {
  if (err) throw err;
  var htmltext = data;
}); 

app.get('/', function(request, response) {
  response.send(htmltext);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
