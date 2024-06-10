var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//instalamos session
const session = require ('express-session');

var indexRouter = require('./routes/index');
let productRouter = require('./routes/product');
let userRouter = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Aca "usamos" session
app.use(session(
  { secret:'baseDatos',
    resave: false,
    saveUninitialized: true }
));

app.use(function(req,res,nest){
  console.log('en session middleware')
  if(req.session.user != undefined){
    res.local.user = req.session.user
    res.local.user = res.locals.user
    console.log ('Entre en locals');
    console.log (res.locals);
    return next()
  }
  return next()
})

app.use('/', indexRouter);
app.use('/product', productRouter);
app.use('/user', userRouter);

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
