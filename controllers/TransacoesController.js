const pool = require("../db/connection.js");

const list = (req, res) => {
  const usuario_id = req.params.usuario_id;
  pool.query(
    `SELECT * FROM public.transacoes WHERE usuario_id='${usuario_id}';`,
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

const cadastrar = (req, res) => {
  const cartao_id = req.body.cartao_id;
  const data = req.body.data;
  const tipo_movimentacao = req.body.tipo_movimentacao;
  const valor = req.body.valor;
  const usuario_id = req.body.usuario_id;

  pool.query(
    `INSERT
        INTO
        public.transacoes
      (
        cartao_id,
        data,
        tipo_movimentacao,
        valor,
        usuario_id
      )
      VALUES
      (
        '${cartao_id}',
        '${data}',
        '${tipo_movimentacao}',
        '${valor}',
        '${usuario_id}'
      );`,
    (error, results) => {
      if (error) console.log(error);
      res.status(200).json(results.rows);
    }
  );
};

module.exports = {
  list,
  cadastrar,
};
