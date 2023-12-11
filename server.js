var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var skillsRouter = require('./routes/skills');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Mount middleware into the middleware/request pipeline
// app.user([starts with path], <middleware function> [, <middleware function>])

// adds a 'do nothing' middleware. This adds time to skills set page.
app.use(function(req, res, next) {
  // console.log('Hello SEI!');
  // add a time property to the res.locals object. The time property will then be accessible within templates
  res.locals.time = new Date().toLocaleTimeString();
  next();  // Pass the request to the next middleware
});
// end of the add 'do nothing' middleware

// Log in the terminal the HTTP request info - method and path
app.use(logger('dev'));
// processes data sent in the body of the request, if it's json
app.use(express.json());
// processes data sent in 'form' body of the request
// it will create a property on req.body for each <input>, <select> and/or <textarea> in the <form>
app.use(express.urlencoded({ extended: false }));
// add a cookies property for each cookie sent in the request
app.use(cookieParser());
// if the request is for a static asset, returns the file
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/skills', skillsRouter);

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
  res.render('error');
});

module.exports = app;
