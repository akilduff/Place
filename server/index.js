const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/', express.static(path.join(__dirname, '../dist')))

app.post('/', (req, res) => {
  console.log('Incoming info to server: ', req.body);
  res.send('Post request recevied');
  res.end();
})

app.listen(port, () => {
  console.log(`now listening at port ${port}`);
})