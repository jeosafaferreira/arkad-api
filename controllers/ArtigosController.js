const pool = require("../db/connection.js");

const create = (req, res) => {
    pool.query(
        `INSERT
            INTO
            public.artigos
            (
                titulo,
                texto,
                resumo
            )
            VALUES
            (
                ${req.body.titulo},
                ${req.body.texto},
                ${req.body.resumo}
            );`,
        (error, results) => {
            if (error) console.log(error);
            res.status(200).json(results.rows);
        }
    );
};

const list = (req, res) => {
    pool.query(`SELECT * FROM public.artigos;`, (error, results) => {
        if (error) console.log(error);
        res.status(200).json(results.rows);
    });
};

module.exports = {
    list,
    create,
};
