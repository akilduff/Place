const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../dist')))
app.use('/about', express.static(path.join(__dirname, '../dist')))

// app.get('/:view', (req, res) => {
//   let newView = req.params.view;
//   res.send(newView)
//   res.end()
// })

app.listen(port, () => {
  console.log(`now listening at port ${port}`);
})