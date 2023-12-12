const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8081;
const usuariosController = require("./controllers/UsuariosController");
const cartoesController = require("./controllers/CartoesController");
const transacoesController = require("./controllers/TransacoesController");
const emailController = require("./controllers/EmailController");
const artigosController = require("./controllers/ArtigosController");

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
app.post("/cartoes/", cartoesController.cadastrar);
app.delete("/cartoes/:cartao_id", cartoesController.deletar);

//Usuários
app.post("/login", usuariosController.login);

//Movimentações
app.get("/transacoes/:usuario_id", transacoesController.list);
app.post("/transacoes", transacoesController.cadastrar);

//Email
app.post("/email", emailController.enviarEmail);

//Artigos
app.get("/artigos", artigosController.list);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
