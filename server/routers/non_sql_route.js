const express = require('express');
const router = express.Router();

const Data = require('../SQL-non/model.js');

router.post('/nosql/test', function (req, res) {
  let data = req.body;
  let row = new Data({
    name: data.name,
    owner: data.owner,
    image: data.image,
    description: data.description
  });
  row.save();
});

router.get('/nosql/test', function (req, res) {
  Data.find({}, function (err, data) {
    if (err) console.log(err);
    res.send(data);
  });
});


module.exports = router;