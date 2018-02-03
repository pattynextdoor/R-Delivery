var express = require('express');
var mongoose = require('mongoose');

var app = express();

//mongoose.connect('mongodb://localhost/r-delivery')

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.get('/', function(req, res) {
  res.render('home');
});

iapp.get('/create-account', function(req, res) {
  res.render('create-account');
});

app.get('/FAQ', function(req, res) {
    res.render('faq');
});

app.get('/login', function(req, res) {
  res.render('login');
});
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 43010885a141f3e05229737e4020e1d82ccf3d27
=======
>>>>>>> 43010885a141f3e05229737e4020e1d82ccf3d27
=======
>>>>>>> Douglas

apip.listen(3000, function() {
  console.log('Server started');
});
