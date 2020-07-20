const Pool = require("pg").Pool;

const pool = new Pool({
  user: "admin",
  password: "Monique1998!!1998",
  host: "localhost",
  database: "pern_sample_database",
  port: "5432",
});

module.exports = pool;
