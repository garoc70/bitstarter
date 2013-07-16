var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

//var htmltext ="idk";

var htmltext = fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
}); 

app.get('/', function(request, response) {
  response.send(htmltext);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
