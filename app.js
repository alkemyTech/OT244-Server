const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const index = require ('./routes');

const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const swaggerSpec = {
  definition: {
      openapi: '3.0.0',
      info: {
          title: 'Nodejs',
          version: '1.0.0',
      },
      servers: [
          {
              url:'http://localhost:3000'
          }
      ]
  },
  apis: [`${path.join(__dirname, './routes/*.js')}`],
}

// Routes
app.use(index);
app.use('/api', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

// catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
