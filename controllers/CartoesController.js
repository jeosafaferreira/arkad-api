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
  const number = req.body.number;
  const expiry = req.body.expiry;
  const cvc = req.body.cvc;
  const name = req.body.name;
  const usuario_id = req.body.usuario_id;

  pool.query(
    `INSERT
        INTO
        public.cartoes
      (
        number,
        expiry,
        cvc,
        name,
        usuario_id
      )
      VALUES
      (
        '${number}',
        '${expiry}',
        '${cvc}',
        '${name}',
        '${usuario_id}'
      );`,
    (error, results) => {
      if (error) {
        console.error;
        res.status(500).json(error);
      }
      res.status(200).json(results.rows);
    }
  );
};

const deletar = (req, res) => {
  const cartao_id = req.params.cartao_id;

  pool.query(
    `DELETE FROM public.cartoes WHERE cartao_id=${cartao_id}`,
    (error, results) => {
      if (error) {
        console.error;
        res.status(500).json(error);
      } else {
        res.status(200).json(results.rows);
      }
    }
  );
};

module.exports = {
  list,
  cadastrar,
  deletar,
};
