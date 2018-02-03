var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/r-delivery');

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/create-account', function(req, res) {
  res.render('create-account');
});

app.get('/log-in', function(req, res) {
    res.render('log-in');
});

app.get('/FAQ', function(req, res) {
  res.render('FAQ');
});

app.get('/map', function(req, res) {
  res.render('googleMaps');
});

app.listen(3000, function() {
  console.log('Server started');
});
