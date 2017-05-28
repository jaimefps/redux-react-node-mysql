const express = require('express');
const router = express.Router();

const bunyan = require('bunyan');
const log = bunyan.createLogger({ name: 'sql_route.js' })

const database = require('../SQL-non/database.js');
const Document = require('../SQL-non/model.js');

router.post('/', (req, res) => {
  log.info('POST action reached no-sql with data');
  let data = req.body;
  let row = new Document({
    name: data.name,
    owner: data.owner,
    image: data.image,
    description: data.description
  });
  row.save()
  .catch((err) => log.info(err));
});

router.get('/', (req, res) => {
  log.info('GET action reached no-sql route');
  Document.find({}, (err, data) => {
    if (err) log.info(err);
    res.send(data);
  });
});

module.exports = router;