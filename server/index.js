const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

// mysql w/knex
const SQLRoute = require('./routers/mysql_route.js');
app.use('/sql', SQLRoute);

// mongo w/mongoose
const noSQLRoute = require('./routers/mongo_route.js');
app.use('/nosql', noSQLRoute);

app.use(express.static(path.join(__dirname, '../build')));

app.listen(PORT, () => console.log('server-side-app listening on PORT ', PORT));
