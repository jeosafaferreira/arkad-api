const pool = require("../db/connection.js");

const list = (req, res) => {
  const usuario_id = req.params.usuario_id;
  pool.query(
    `SELECT * FROM public.cartoes WHERE usuario_id='${usuario_id}';`,
    (error, results) => {
      if (error) console.log(error);
      res.status(200).json(results.rows);
    }
  );
};

const cadastrar = (req, res) => {
  const nome_impresso = req.body.nome_impresso;
  const numero = req.body.numero;
  const bandeira = req.body.bandeira;
  const vencimento = req.body.vencimento;
  const usuario_id = req.body.usuario_id;

  pool.query(
    `INSERT
        INTO
        public.cartoes
      (
        numero,
        bandeira,
        vencimento,
        usuario_id,
        nome_impresso
      )
      VALUES
      (
        '${numero}',
        '${bandeira}',
        '${vencimento}',
        '${usuario_id}',
        '${nome_impresso}'
      );`,
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

module.exports = {
  list,
  cadastrar,
};
