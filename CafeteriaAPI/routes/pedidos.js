//Importação do módulo express
const express = require("express");

const conexao = require("../data/conexao");

const verificarToken = require("../middleware/verificarToken");

const router = express.Router();

/*
Rotas para o pedido 
  - /buscar/:id -> Localizar pedido específico                  Verbo GET
  - /usuario/:id -> Localizar os pedidos do usuario             Verbo GET
  - /cadastrar -> Realizar o cadastro do pedido                 Verbo POST
*/
router.get("/buscar/:id", verificarToken, (req, res) => {
    conexao.query(
      "SELECT * FROM pedido WHERE idpedido=?",
      [req.params.id],
      (erro, resultado) => {
        if (erro)
          return res.status(500).send({ retorno: `Erro interno ->${erro}` });
        res.status(200).send({ retorno: resultado });
      }
    );
  });
  
  router.get("/usuario/:id", verificarToken, (req, res) => {
    conexao.query(
      "SELECT * FROM pedido WHERE idusuario=?",
      [req.params.id],
      (erro, resultado) => {
        if (erro)
          return res.status(500).send({ retorno: `Erro interno ->${erro}` });
        res.status(200).send({ retorno: resultado });
      }
    );
  });
  
  router.post("/cadastrar", verificarToken, (req, res) => {
    conexao.query("INSERT INTO pedido SET ?", [req.body], (erro, resultado) => {
      if (erro)
        return res.status(500).send({ retorno: `Erro interno ->${erro}` });
      res.status(201).send({ retorno: resultado });
    });
  });

  module.exports = router;