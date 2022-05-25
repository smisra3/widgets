const express = require('express');
const path = require('path');
const app = express()
const port = 5500;

const options = {
  root: path.join(__dirname, ''),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  },
};

app.get('/js/:name', (req, res) => {
  res.sendFile(`/assets/js/${req.params.name}`, options);
});

app.get('/', (req, res) => {
  res.sendFile('index.html', options);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});