const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1635984",
    database: "apicanuto",
  },
});

module.exports = knex;
