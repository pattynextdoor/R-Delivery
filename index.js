var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/r-delivery')

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.get('/', function(req, res) {
  res.render('home');
i});

app.get('/create-account', function(req, res) {
  res.render('create-account');
});

<<<<<<< HEAD
app.get('/log-in', function(req, res) {
    res.render('log-in');
})
=======
app.get('/login', function(req, res) {
  res.render('login');
});

app.get('/FAQ', function(req, res) {
  res.render('FAQ');
});
<<<<<<< HEAD
>>>>>>> 43010885a141f3e05229737e4020e1d82ccf3d27
=======
>>>>>>> 43010885a141f3e05229737e4020e1d82ccf3d27

app.listen(3000, function() {
  console.log('Server started');
});
