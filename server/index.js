const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

// mySQL w/knex
const SQLRoute = require('./routers/sql_route.js');
app.use('/sql', SQLRoute);

// mongoDB w/mongoose
const noSQLRoute = require('./routers/non_sql_route.js')
app.use('/nosql', noSQLRoute);

app.use(express.static(path.join(__dirname, '../build')));

app.listen(PORT, () => console.log('server-side-app listening on PORT ', PORT));