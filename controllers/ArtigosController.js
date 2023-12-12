const pool = require("../db/connection.js");

const create = (req, res) => {
    pool.query(
        `INSERT
            INTO
            public.artigos
            (
                titulo,
                texto
            )
            VALUES
            (
                '${req.body.titulo}',
                '${req.body.texto}'
            );`,
        (error, results) => {
            if (error) {
                res.status(500).json("Erro ao cadastrar artigo.");
                console.log(error);
            } else {
                res.status(200).json(results.rows);
            }
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
