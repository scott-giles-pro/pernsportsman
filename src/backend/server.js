const express = require('express');
const knex = require('knex');

const app = express();
const port = 8000;
app.use(express.json());
const dbRouter = require("./routes.js");

// Knex configuration
const knexConfig = {
  client: 'pg', // PostgreSQL client
  connection: {
    host: 'https://localhost',
    user: 'postgres',
    password: 'postgres',
    database: 'sportsmanDB',
  },
};

const db = knex(knexConfig);

app.use(dbRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});