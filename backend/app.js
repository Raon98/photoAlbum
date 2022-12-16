var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var testRouter = require('./routes/test');
var cors = require('cors')

var app = express();
app.use(cors({              // front 서버인 127.0.0.1:8080 의 요청을 허용하도록 cors 사용
  origin: process.env.VUE_APP_URL,
  credentials:true,
}));
app.use(cors({              // front 서버인 127.0.0.1:8080 의 요청을 허용하도록 cors 사용
  origin: 'http://localhost:8080',
  credentials:true,
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/test', testRouter);


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
