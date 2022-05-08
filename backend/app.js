var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var passport = require("passport");

const mongoose = require("mongoose");
const dotenv = require('dotenv');


dotenv.config();

//database connectivity
var connect = mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology:true
});
connect
  .then(()=>console.log("DB successsfully connected"))
  .catch((err)=>{
    console.log(err);
  });


var indexRouter = require('./routes/index');
var authRouter = require("./routes/auth");
var usersRouter = require('./routes/users');
var ngoRouter = require('./routes/ngo');
var productRouter = require('./routes/product');
var donateRouter = require('./routes/donate');
var cartRouter = require('./routes/cart');
var orderRouter = require('./routes/order');
var paymentRouter = require("./routes/stripe");


var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(passport.initialize())

app.use('/', indexRouter);
app.use('/api/auth',authRouter);
app.use('/api/users', usersRouter);
app.use('/api/ngos', ngoRouter);
app.use('/api/products', productRouter);
app.use('/api/donate', donateRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
app.use('/api/checkout', paymentRouter);


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
