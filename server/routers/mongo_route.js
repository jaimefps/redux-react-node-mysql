const express = require('express');
const router = express.Router();

const bunyan = require('bunyan');
const log = bunyan.createLogger({ name: 'sql_route.js' });

const database = require('../mongo/database.js');
const Document = require('../mongo/model.js');

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
    res.send(err);
    log.info(err);
  });
});

router.get('/', (req, res) => {
  Document.find({})
  .then(data => res.send(data))
  .catch((err) => {
    res.send(err);
    log.info(err);
  });
});

module.exports = router;
