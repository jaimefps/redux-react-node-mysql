const express = require('express');
const router = express.Router();

const bunyan = require('bunyan');
const log = bunyan.createLogger({ name: 'sql_route.js' });

const database = require('../SQL-non/database.js');
const Document = require('../SQL-non/model.js');

router.post('/', (req, res) => {
  const data = req.body;
  const row = new Document({
    name: data.name,
    owner: data.owner,
    image: data.image,
    description: data.description,
  });
  row.save()
  .then(() => res.sendStatus(201).end())
  .catch((err) => {
    res.end(err);
    log.info(err);
  });
});

router.get('/', (req, res) => {
  Document.find({})
  .then(data => res.send(data))
  .catch((err) => {
    res.end(err);
    log.info(err);
  });
});

module.exports = router;
