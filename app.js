const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.status(200).send('Hello, openshift workshop');
});

module.exports = app;
