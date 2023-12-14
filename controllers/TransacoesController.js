const pool = require("../db/connection.js");

const list = (req, res) => {
    const usuario_id = req.params.usuario_id;
    pool.query(`SELECT * FROM public.transacoes WHERE usuario_id='${usuario_id}';`, (error, results) => {
        if (error) {
            console.log(error);
            res.status(500).json("Erro ao consultar transações.");
        } else {
            res.status(200).json(results.rows);
        }
    });
};

const cadastrar = (req, res) => {
    const numero_cartao = req.body.numero_cartao;
    const data = req.body.data;
    const tipo_movimentacao = req.body.tipo_movimentacao;
    const valor = req.body.valor;
    const plataforma = req.body.plataforma;
    const referente = req.body.referente;
    const usuario_id = req.body.usuario_id;

    pool.query(
        `INSERT
        INTO
        public.transacoes
      (
        numero_cartao,
        data,
        tipo_movimentacao,
        valor,
        plataforma,
        referente,
        usuario_id
      )
      VALUES
      (
        '${numero_cartao}',
        '${data}',
        '${tipo_movimentacao}',
        '${valor}',
        '${plataforma}',
        '${referente}',
        '${usuario_id}'
      );`,
        (error, results) => {
            if (error) {
                res.status(500).json("Erro ao consultar transações.");
                console.log(error);
            } else {
                res.status(200).json("Transação cadastrada com sucesso!");
            }
        }
    );
};

module.exports = {
    list,
    cadastrar,
};
