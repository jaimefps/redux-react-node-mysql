const express = require('express');
const router = express.Router();

const Data = require('../SQL-non/model.js');

router.post('/', (req, res) => {
  console.log('POST action reached no-sql route');
  let data = req.body;
  let row = new Data({
    name: data.name,
    owner: data.owner,
    image: data.image,
    description: data.description
  });
  row.save();
});

router.get('/', (req, res) => {
  console.log('GET action reached no-sql route');
  Data.find({}, (err, data) => {
    if (err) console.log(err);
    res.send(data);
  });
});

module.exports = router;