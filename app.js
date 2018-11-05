var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const port = process.env.PORT || 5005
const listener = () => console.log(`Listening on port ${port}`)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.get('/', (req, res) => {
  res.json({
      message: "working!!!!!"
  })
})

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.status(err.statusCode || 500);
  res.json({
      message: err.message,
      stack: req.app.get('env') === 'development' ? err.stack : {}
  })
})

app.listen(port, listener)

module.exports = app;
