//Importação do módulo express
const express = require("express");

const conexao = require("../data/conexao");

const verificarToken = require("../middleware/verificarToken");

const router = express.Router();

/*
Rotas para o pagamento
  - /usuario/:id -> Listar os pagamentos relacionados e um usuário              Verbo GET
  - /pedido/:id -> Listar os pagamentos relacionados a um pedido                Verbo GET
  - /cadastrar -> Cadastrar do pagamento de um pedido                           Verbo POST
*/

router.get("/usuario/:id" ,verificarToken,(req,res)=>{
    conexao.query("SELECT * FROM pagamento WHERE idusuario=?",
    [req.params.id],
    (erro,resultado)=>{
      if(erro)
        return res.status(500).send({retorno:`Erro interno -> ${erro}`});
        res.status(200).send({retorno:resultado});
    });
  });
  
  router.get("/pedido/:id" ,verificarToken,(req,res)=>{
    conexao.query("SELECT * FROM pagamento WHERE idpedido=?",
    [req.params.id],
    (erro,resultado)=>{
      if(erro)
        return res.status(500).send({retorno:`Erro interno -> ${erro}`});
        res.status(200).send({retorno:resultado});
    });
  });
  
  router.post("/cadastrar" ,(req,res)=>{
    conexao.query("INSERT INTO pedido SET idusuario=?",
    [req.body.idusuario],
    (erro,resultado)=>{
      if(erro)
        return res.status(500).send({retorno:`Erro interno -> ${erro}`});
       conexao.query(
         `INSERT INTO pagamento SET idusuario=?,
         idpedido=?,formapagamento=?,detalhespagamento=?,
         valortotal=?,numeroparcelas=?,valorparcelas=?`,
         [req.body.idusuario,
          resultado.insertId,
          req.body.tipo,
          req.body.detalhe,
          req.body.total,
          req.body.nparcela,
          req.body.vparcela
         ],(erro,dado)=>{
           if(erro) return res.status(500).send({retorno: `Erro interno ->${erro}`})
         }
       )
    });
    res.status(201).send({retorno:"Pagamento Efetuado"});
  });

  module.exports = router;