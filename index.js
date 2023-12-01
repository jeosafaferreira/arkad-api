const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8081;
const usuariosController = require("./controllers/UsuariosController");
const cartoesController = require("./controllers/CartoesController");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Arkad - Node.js, Express, and Postgres API" });
});

//Cartões
app.get("/cartoes/:usuario_id", cartoesController.list);
app.post("/cartoes/cadastrar", cartoesController.cadastrar);

//Usuários
app.post("/login", usuariosController.login);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
