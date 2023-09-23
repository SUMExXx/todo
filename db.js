const Pool = require("pg").Pool;

const pool = new Pool
(
    {
        user: "postgres",
        password: "8974863731@Sd",
        host: "localhost",
        port: 5432,
        database: "todo"
    }
);

module.exports = pool;