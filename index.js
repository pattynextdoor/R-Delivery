var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('this is the home page');
});

app.listen(3000, function() {
  console.log('Server started');
});
