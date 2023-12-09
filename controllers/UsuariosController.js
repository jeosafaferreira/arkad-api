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

module.exports = {
  login,
};
