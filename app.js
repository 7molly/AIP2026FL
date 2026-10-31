var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo');
if (!MongoStore.create && MongoStore.MongoStore) MongoStore = MongoStore.MongoStore;
mongoose.connect('mongodb://127.0.0.1:27017/flstudio2026');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pluginsRouter = require('./routes/plugins');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "FlStudio",
  cookie: { maxAge: 60 * 1000 },
  proxy: true,
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/flstudio2026' })
}));

app.use(function(req, res, next) {
  req.session.counter = (req.session.counter || 0) + 1;
  next();
});

app.use(require("./middlewares/createMenu.js"));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/plugins', pluginsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'FlStudio' });
});

module.exports = app;
