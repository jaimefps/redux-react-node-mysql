# redux-react-node-mysql-mongo
Environment for a redux/react/node/mysql/mongo stack 

# To run app locally, run these commands from the root:

`npm i`

`mysql -u root < server/schema.sql`

`nodemon server/index.js | ./node_modules/.bin/bunyan -j`

`npm start`

# To use knex migration

`knex migrate:latest`