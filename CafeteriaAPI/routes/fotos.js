//Importação do módulo express
const express = require("express");

const conexao = require("../data/conexao");


const router = express.Router();

/*
Rota para o itenspedido
- /pedido/:id -> Listar todos os produtos de um pedido                 Verbo GET
- /cadastrar -> Cadastrar os itens de pedido                           Verbo POST
- /atualizar/quantidade/:2 -> Atualizar a quantidade de um produto     Verbo PUT
- /apagar/:id -> Apagar itenspedido                                    Verbo DELETE
*/
router.get("/cafes",(req, res) => {
    
        res.status(200).send({ retorno: "../assets/img/bebida2.jpg" });
      
  });
  module.exports = router;  