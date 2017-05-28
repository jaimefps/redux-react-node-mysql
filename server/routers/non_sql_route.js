const express = require('express');
const router = express.Router();

const bunyan = require('bunyan');
const log = bunyan.createLogger({ name: 'sql_route.js' })

const Data = require('../SQL-non/model.js');

// NOTE: Mongoose mpromise (mongoose's default promise library) is deprecated, 
// I need to plug in my own promise library instead.
Data.Promise = require('bluebird');

router.post('/', (req, res) => {
  log.info('POST action reached no-sql with data');
  let data = req.body;
  let row = new Data({
    name: data.name,
    owner: data.owner,
    image: data.image,
    description: data.description
  });
  row.save()
  .then((result) => log.info(result))
  .catch((err) => log.info(err));
});

router.get('/', (req, res) => {
  log.info('GET action reached no-sql route');
  Data.find({}, (err, data) => {
    if (err) console.error(err);
    res.send(data);
  });
});

module.exports = router;