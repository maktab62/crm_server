var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');

if(process.env.NODE_ENV === 'production') {
  dotenv.config({ path: './.env.production' });
} else if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: './.env.test' });
} else {
  dotenv.config({ path: './.env.development' });
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
