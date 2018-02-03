var express = require('express');
var mongoose = require('mongoose');

var app = express();
/*
var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    }
});

if(req.body.email && req.body.password && req.body.fname && req.body.lname) {    var userData = {
        email: req.body.email,
        password: req.body.password,
        fname: req.body.fname,
        lname: req.body.lname
    }

UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.has(user.password, 10, function (err, hash){
        if(err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});

app.use(session({
    secret: 'AAAAAA',
    resave: true,
    saveUnitializaed: false
}));

UserSchema.statics.authenticate = function(email, password, fname, lname) {
    User.findOne({ email: email})
        .exec(function (err, user) {
            if(err) {
                return callback(err)
            } else if(!user) {
                var err = new Error('Wrong email/password.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function(err, result))
            {
                if(result == true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
        });
}
*/
///////////////////////////////

var User = mongoose.model('User', UserSchema);
module.exports = User;
//mongoose.connect('mongodb://localhost/r-delivery')

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

app.get('/login', function(req, res) {
  res.render('login');
});

app.listen(3000, function() {
  console.log('Server started');
});
