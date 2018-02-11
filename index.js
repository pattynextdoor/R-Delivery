var firebase = require('firebase');
var express = require('express');
var config = require('config');
var app = express();

firebase.initializeApp(config);

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/create-account', function(req, res) {
  res.render('create-account');
});

app.get('/FAQ', function(req, res) {
    res.render('faq');
});

app.get('/map', function(req, res) {
  res.render('googleMaps');
});

app.get('/login', function(req, res) {
  res.render('login');
});


app.listen(3000, function() {
  console.log('Server started');
});
