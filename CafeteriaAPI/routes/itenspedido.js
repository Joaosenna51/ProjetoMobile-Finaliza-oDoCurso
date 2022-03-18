//Importação do módulo express
const express = require("express");

const conexao = require("../data/conexao");

const verificarToken = require("../middleware/verificarToken");

const router = express.Router();

/*
Rota para o itenspedido
- /pedido/:id -> Listar todos os produtos de um pedido                 Verbo GET
- /cadastrar -> Cadastrar os itens de pedido                           Verbo POST
- /atualizar/quantidade/:2 -> Atualizar a quantidade de um produto     Verbo PUT
- /apagar/:id -> Apagar itenspedido                                    Verbo DELETE
*/
router.get("/pedido/:id", verificarToken, (req, res) => {
    conexao.query(
      "SELECT * FROM itenspedido WHERE idpedido=?",
      [req.params.id],
      (erro, resultado) => {
        if (erro)
          return res.status(500).send({ retorn: `Erro interno -> ${erro}` });
        res.status(200).send({ retorno: resultado });
      }
    );
  });
  
  router.post("/cadastrar", verificarToken, (req, res) => {
    conexao.query(
      "INSERT INTO itenspedido SET ?",
      [req.body],
      (erro, resultado) => {
        if (erro)
          return res.status(500).send({ retorno: `Erro interno -> ${erro}` });
        res.status(201).send({ retorno: resultado });
      }
    );
  });
  
  router.put("/atualizar/quantidade/:id", verificarToken, (req, res) => {
    conexao.query("UPDATE itenspedido SET ? WHERE iditens", [req.body, req.params.id],
     (erro, resultado) => {
      if (erro)
        return res.status(500).send({ retorno: `Erro interno -> ${erro}` });
      res.status(200).send({ retorno: resultado });
    });
  });
  
  router.delete("/apagar/:id",verificarToken,(req,res)=>{
    conexao.query(
      "DELETE FROM itenspedido WHERE idpedido=?",
      [req.params.id],
      (erro, resultado) => {
        if (erro)
          return res.status(500).send({ retorno: `Erro interno -> ${erro}` });
        res.status(204).send({ retorno: resultado });
      }
    );
  })

  module.exports = router;