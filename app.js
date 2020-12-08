const express = require('express');
const app = express();
const morgan = require('morgan');
const axios = require('axios');

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.status(200).send('Hello, world');
});

app.get('/friendship/bracelet', async (req, res) => {
  const response = await axios.get(
    `${process.env.FRIENDSHIP_HOST}:${process.env.FRIENDSHIP_PORT}/api/friend`
  );
  res.send(
    `${response.data.name} is now your friend. They live at ${response.data.address}`
  );
});

module.exports = app;
