const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 'index.js'})

const app = express();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());

// mySQL server w/knex
const testRoute = require('./routers/test_route.js');
app.use('/test', testRoute);

app.use(express.static(path.join(__dirname, '../build')));

app.listen(PORT, () => log.info('server-side-app listening on PORT ', PORT));