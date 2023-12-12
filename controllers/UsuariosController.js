const pool = require("../db/connection.js");

const login = (req, res) => {
    const { email, senha } = req.body;
    pool.query(
        `SELECT usuario_id, nome, (CASE WHEN count(*)>0 THEN TRUE ELSE FALSE END) as authorized FROM public.usuarios WHERE email = '${email}' AND senha = '${senha}' GROUP BY usuario_id, nome;`,
        (error, results) => {
            if (error) console.log(error);
            res.status(200).json(results.rows[0]);
        }
    );
};

const create = (req, res) => {
    pool.query(
        `INSERT
            INTO
            public.usuarios
            (
                nome,
                sobrenome,
                telefone,
                email,
                senha
            )
            VALUES
            (
                '${req.body.nome}',
                '${req.body.sobrenome}',
                '${req.body.telefone}',
                '${req.body.email}',
                '${req.body.senha}'
            );`,
        (error, results) => {
            if (error) {
                res.status(500).json("Erro ao cadastrar usuário.");
                console.log(error);
            } else {
                res.status(200).json(results.rows);
            }
        }
    );
};

module.exports = {
    login,
};
