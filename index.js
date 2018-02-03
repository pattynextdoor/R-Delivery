var express = require('express');
var mongoose = require('mongoose');

var app = express();

<<<<<<< HEAD
//mongoose.connect('mongodb://localhost/r-delivery')
=======
mongoose.connect('mongodb://localhost/r-delivery');
>>>>>>> 21908f8ede20529694dcdb30ab22ed773cdfacbe

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.get('/', function(req, res) {
  res.render('home');
});

iapp.get('/create-account', function(req, res) {
  res.render('create-account');
});

<<<<<<< HEAD
app.get('/FAQ', function(req, res) {
    res.render('faq');
=======
app.get('/log-in', function(req, res) {
    res.render('log-in');
>>>>>>> 21908f8ede20529694dcdb30ab22ed773cdfacbe
});

app.get('/login', function(req, res) {
  res.render('login');
});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 43010885a141f3e05229737e4020e1d82ccf3d27
=======
>>>>>>> 43010885a141f3e05229737e4020e1d82ccf3d27
=======
>>>>>>> Douglas
=======

app.get('/map', function(req, res) {
  res.render('googleMaps');
});
>>>>>>> 21908f8ede20529694dcdb30ab22ed773cdfacbe

apip.listen(3000, function() {
  console.log('Server started');
});
