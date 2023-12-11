const Pool = require("pg").Pool;
const pool = new Pool({
  host: "database-1.ctmvkscuuafe.sa-east-1.rds.amazonaws.com",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "YvhdN7346UmDHdPUaslA",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
