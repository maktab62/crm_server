const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');

if(process.env.NODE_ENV === 'production') {
  dotenv.config({ path: './.env.production' });
} else if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: './.env.test' });
} else {
  dotenv.config({ path: './.env.development' });
}

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const categoryRouter = require('./routes/category.route');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category', categoryRouter);

module.exports = app;
