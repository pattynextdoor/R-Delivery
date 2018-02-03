var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/create-account', function(req, res) {
  res.render('create-account');
})

app.get('/login', function(req, res) {
  res.render('login');
})

app.get('/FAQ', function(req, res) {
  res.render('FAQ');
})

app.listen(3000, function() {
  console.log('Server started');
});
