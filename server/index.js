const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const worker = require('../worker.js');

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.text());

app.post('/', (req, res) => {
  console.log('body', req.body);
  worker.getFilingData(req.body, (html) => {
    res.send(html);
  });
})

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})