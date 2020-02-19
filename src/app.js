const express = require('express');
const path = require('path');
// const compression = require('compression');
// const controller = require('./controller/index');

const app = express();

app.disable('x-powered-by');
// app.use(compression());
app.use(
  express.static(path.join(__dirname, '..', 'public')),
);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
});

app.use((err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname, '..', 'public', '500.html'));
});

module.exports = app;
