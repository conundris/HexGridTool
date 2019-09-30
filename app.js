var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var specLocation = path.join(__dirname, 'swagger.json');
const swStats = require('swagger-stats');
var swaggerSpec = require( specLocation );
//const expressSwagger = require('express-swagger-generator')(app);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(swStats.getMiddleware({swaggerSpec:swaggerSpec}));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/stylesheets'));
app.use('/js', express.static(__dirname + '/public/javascripts'));
app.use('/images', express.static(__dirname + '/public/images'));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
