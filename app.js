var express = require('express');
var mongoose = require('mongoose');
var api = require('./api/init');
var http = require('http');
var path = require('path');

var app = express();

mongoose.connect('mongodb://mongo/gameSettings');
app.set('port', 3000);
app.set('view engine', 'ejs');
app.use(require('body-parser').json());
app.use(express.static('frontend'));

// serve index and view partials
app.get('/', function(req, res) {
  res.render('index');
});

// JSON API
api(app);

// redirect all others to the index (HTML5 history)
app.get('*', function(req, res) {
    res.redirect('/');
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
