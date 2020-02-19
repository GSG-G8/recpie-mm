const express = require('express');
const path = require('path');
const errorHandele = require('./controller/error');
const routes = require('./routes/index');

// const compression = require('compression');
const app = express();

app.disable('x-powered-by');
app.use(express.json());
// app.use(compression());
app.use(
  express.static(path.join(__dirname, '..', 'public')),
);
app.use(routes);
app.use(errorHandele.clientError);
app.use(errorHandele.serverError);

module.exports = app;
