const pool = require("../db/connection.js");

const list = (req, res) => {
    pool.query(`SELECT * FROM public.artigos;`, (error, results) => {
        if (error) console.log(error);
        res.status(200).json(results.rows);
    });
};

module.exports{
    list
}